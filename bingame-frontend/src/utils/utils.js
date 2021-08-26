export const setCurrentUser = (user) => {
  if (user) {
    localStorage.setItem("bingameUser", JSON.stringify(user));
  } else {
    localStorage.removeItem("bingameUser");
  }
};

export const getCurrentUser = () => {
  let user = null;
  user =
    localStorage.getItem("bingameUser") != null
      ? JSON.parse(localStorage.getItem("bingameUser"))
      : null;
  return user;
};
