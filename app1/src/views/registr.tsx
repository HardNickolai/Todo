import { useState } from "react";
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
import "styles/registr.scss";
import { theme } from "styles/index";
import { useNavigate } from "react-router-dom";
import { checkLength } from "utils/registrUtils";
import BlockNatifeeLoginRegistr from "components/blockNatifeeLoginRegistr";
import BlockNatifeePasswordRegistr from "components/blockNatifeePasswordRegistr";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { apiRequestUsers } from "api/requestDataUsers";
import { IDataUser } from "interfaces/interfaces";

const Registr = () => {
  const [textLogin, setTextLogin] = useState("");
  const [textPasswordInput1, setTextPasswordInput1] = useState("");
  const [textPasswordInput2, setTextPasswordInput2] = useState("");
  const [stateNatifeeLogin, setStateNatifeeLogin] = useState(false);
  const [stateNatifeePassword, setStateNatifeePassword] = useState(false);
  const [showPassword1, setShowPassword1] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);

  const navigate = useNavigate();

  const handleClickShowPassword1 = () => setShowPassword1((show) => !show);
  const handleClickShowPassword2 = () => setShowPassword2((show) => !show);

  const checkLogin = async (text: string) => {
    setStateNatifeeLogin(false);
    setTextLogin(text);
    const data: Array<IDataUser> = await apiRequestUsers("GET");
    if (!data) {
      setStateNatifeeLogin(true);
      return false;
    } else {
      data.map((item) => item.login === text && setStateNatifeeLogin(true));
    }
  };

  const checkPassword = (pass1: string, pass2: string) => {
    if (pass1 === pass2) {
      setStateNatifeePassword(true);
      return true;
    } else {
      setStateNatifeePassword(false);
      return false;
    }
  };

  const toRegistr = async () => {
    if (!stateNatifeeLogin && stateNatifeePassword) {
      try {
        const res: Array<IDataUser> = await apiRequestUsers("POST", {
          login: textLogin,
          password: textPasswordInput2,
        });
        localStorage.setItem("userLogin", textLogin);
        navigate("/index");
        return res;
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <div className="main">
        <div className="container-registr">
          <div className="block-label">
            <Typography variant="h4">Регистрация</Typography>
          </div>
          <div className="block-input">
            <div className="block-input-registr">
              <TextField
                error={stateNatifeeLogin ? true : false}
                label="Введите логин"
                variant="filled"
                onChange={(e) => checkLogin(e.target.value)}
              />
              {checkLength(textLogin) && (
                <BlockNatifeeLoginRegistr
                  props={{ stateNatifee: stateNatifeeLogin }}
                />
              )}
            </div>
            <div>
              <InputLabel htmlFor="outlined-adornment-password1">
                Пароль
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-password1"
                type={showPassword1 ? "text" : "password"}
                onChange={(e) => {
                  setTextPasswordInput1(e.target.value);
                  checkPassword(e.target.value, textPasswordInput2);
                }}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      edge="end"
                      onClick={handleClickShowPassword1}
                    >
                      {showPassword1 ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </div>
            <div>
              <div>
                <InputLabel htmlFor="outlined-adornment-password2">
                  Повторите пароль
                </InputLabel>
              </div>
              <div className="block-input-registr">
                <OutlinedInput
                  id="outlined-adornment-password2"
                  type={showPassword2 ? "text" : "password"}
                  onChange={(e) => {
                    setTextPasswordInput2(e.target.value);
                    checkPassword(textPasswordInput1, e.target.value);
                  }}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        edge="end"
                        onClick={handleClickShowPassword2}
                      >
                        {showPassword2 ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  }
                />
                {checkLength(textPasswordInput2) && (
                  <BlockNatifeePasswordRegistr
                    props={{ stateNatifee: stateNatifeePassword }}
                  />
                )}
              </div>
            </div>
            <div className="block-buttons-registr">
              <div className="block-button-registr">
                <Button variant="contained" color="success" onClick={toRegistr}>
                  Зарегистрировать
                </Button>
              </div>
              <div className="block-button-registr">
                <Button
                  variant="contained"
                  color="error"
                  onClick={() => navigate("/")}
                >
                  Отмена
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default Registr;
