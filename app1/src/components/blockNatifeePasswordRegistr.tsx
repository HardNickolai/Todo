import { Alert } from "@mui/material";
import { IPropsNatifeeRegistr } from "interfaces/interfaces";
import { styles } from "styles/index";

const BlockNatifeePasswordRegistr = ({ props }: IPropsNatifeeRegistr) => {
  const { stateNatifee } = props;
  return (
    <Alert
      severity={stateNatifee ? "success" : "error"}
      sx={styles.blockCheckRegostr}
    >
      {stateNatifee ? "Пароль совпал" : "Пароль не совпал"}
    </Alert>
  );
};

export default BlockNatifeePasswordRegistr;
