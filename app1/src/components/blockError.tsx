import { Alert } from "@mui/material";
import { IPropsErrorLogin } from "interfaces/interfaces";
import { styles } from "styles/index";

const BlockError = ({ props }: IPropsErrorLogin) => {
  const { error } = props;

  return (
    <Alert severity="error" sx={styles.blockError}>
      {error === "server" ? "Ошибка сервера" : "Ввода"}
    </Alert>
  );
};

export default BlockError;