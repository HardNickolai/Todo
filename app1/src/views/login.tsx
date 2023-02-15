import { useState } from "react";
import "styles/login.scss";
import {
  TextField,
  Button,
  Typography,
  ThemeProvider,
  OutlinedInput,
  InputAdornment,
  IconButton,
  InputLabel,
} from "@mui/material";
import BlockErrorLogin from "components/blockErrorLogin";
import { theme } from "styles/index";
import { useNavigate } from "react-router-dom";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { apiRequestUsers } from "api/requestDataUsers";
import { IDataUser } from "interfaces/interfaces";

const Login = () => {
  const [textLogin, setTextLogin] = useState("");
  const [textPassword, setTextPassword] = useState("");
  const [stateError, setStateError] = useState(false);
  const [textError, setTextError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const isText = textLogin.length > 0 && textPassword.length > 0;
  const navigate = useNavigate();

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const onError = (text: string) => {
    setTextError(text);
    setStateError(true);
    setTimeout(() => {
      setStateError(false);
    }, 2000);
  };

  const move = () => {
    navigate("/index");
    localStorage.setItem("userLogin", textLogin);
  };

  const login = async () => {
    const dataUsers: Array<IDataUser> = await apiRequestUsers("GET");
    if (!dataUsers) {
      onError("server");
      return false;
    } else if (dataUsers.length === 0) {
      return onError("input");
    } else {
      dataUsers.map((item) => {
        return item.login === textLogin && item.password === textPassword
          ? move()
          : onError("input");
      });
    }
    return dataUsers;
  };

  return (
    <ThemeProvider theme={theme}>
      <div className="main">
        <div className="container-login">
          <div className="block-label">
            <Typography variant="h4">Вход в аккаунт</Typography>
            {stateError && <BlockErrorLogin props={{ error: textError }} />}
          </div>
          <div className="block-input">
            <div>
              <TextField
                label="Введите логин"
                variant="filled"
                onChange={(e) => setTextLogin(e.target.value)}
              />
            </div>
            <div>
              <InputLabel htmlFor="outlined-adornment-password">
                Пароль
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                type={showPassword ? "text" : "password"}
                onChange={(e) => setTextPassword(e.target.value)}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      edge="end"
                      onClick={handleClickShowPassword}
                    >
                      {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </div>
            <div className="block-buttons-login">
              <div className="block-button-login">
                {isText && (
                  <Button variant="contained" color="success" onClick={login}>
                    Войти
                  </Button>
                )}
              </div>
              <div className="block-button-login">
                <Button
                  variant="contained"
                  color="info"
                  onClick={() => navigate("/registr")}
                >
                  Регистрация
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default Login;
