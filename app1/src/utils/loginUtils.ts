export const checkIsUser = () => {
  const userLogin = localStorage.getItem("userLogin");
  if (userLogin === null) {
    return false;
  } else if (userLogin && userLogin.length === 0) {
    return false;
  } else if (userLogin && userLogin.length > 0) {
    return true;
  }
  return false;
};
