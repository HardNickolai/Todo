import { Alert } from "@mui/material";
import { IPropsErrorLogin } from "interfaces/interfaces";
import { styles } from "styles/index";

const BlockErrorLogin = ({ props }: IPropsErrorLogin) => {
  const { error } = props;

  return (
    <Alert severity="error" sx={styles.blockError}>
      {error === "server" ? "Ошибка сервера" : "Неверный логин или пароль"}
    </Alert>
  );
};

export default BlockErrorLogin;
