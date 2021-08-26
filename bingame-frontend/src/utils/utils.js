export const setCurrentUser = (user) => {
  if (user) {
    localStorage.setItem("bingameUser", JSON.stringify(user));
  } else {
    localStorage.removeItem("bingameUser");
  }
};

export const getCurrentUser = () => {
  if (localStorage.getItem("bingameUser")) {
    return JSON.parse(localStorage.getItem("bingameUser"));
  } else {
    return null;
  }
};

export const isAuth = () => {
  if (
    localStorage.getItem("authToken") ||
    sessionStorage.getItem("authToken")
  ) {
    return true;
  } else {
    return false;
  }
};
