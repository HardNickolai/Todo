import createTheme from "@mui/material/styles/createTheme";

export const styles = {
  blockError: {
    marginTop: 3,
  },
  blockCheckRegostr: {
    alignItems: "center",
  },
  blockInput: {
    backgroundColor: "white",
    width: "700px",
    borderRadius: "10px",
    padding: 0,
    margin: 0,
    height: "33px",
    paddingLeft: "10px"
  },
  buttonAddTask: {
    width: "50px",
    height: "50px",
    color: "white",
    backgroundColor: "green",
    borderRadius: "10px",
  },
};

export const theme = createTheme({
  palette: {
    primary: {
      main: "#000",
    },
    info: {
      main: "#ffffff",
    },
  },
});
