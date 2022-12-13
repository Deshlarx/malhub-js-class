const myUser = JSON.parse(localStorage.getItem("userData"));

export const user = {
  token: myUser.token,
  name: myUser.result.name,
  email: myUser.result.email,
};

export const logout = () => {
    localStorage.removeItem("userData");
    window.location.replace('sign-in.html');
}