import { Alert } from "@mui/material";
import { IPropsNatifeeRegistr } from "interfaces/interfaces";
import { styles } from "styles/index";

const BlockNatifeeLoginRegistr = ({ props }: IPropsNatifeeRegistr) => {
  const { stateNatifee } = props;
  return (
    <Alert
      severity={stateNatifee ? "error" : "success"}
      sx={styles.blockCheckRegostr}
    >
      {stateNatifee ? "Логин занят" : "Логин свободен"}
    </Alert>
  );
};

export default BlockNatifeeLoginRegistr;
