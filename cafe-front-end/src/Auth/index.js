export const isLoggedIn = () => {
  let data = localStorage.getItem("data");
  if (data != null) {
    return true;
  } else {
    return false;
  }
};

export const doLogin = (data, next) => {
  localStorage.setItem("data", JSON.stringify(data));
  next();
};

export const doLogout = (next) => {
  localStorage.removeItem("data");
  next();
};

export const getCurrentUserDetails = () => {
  const storedData = JSON.parse(localStorage.getItem("data"));

  if (isLoggedIn()) {
    return storedData?.user || null;
  }

  return null;
};

// Get Token
export const getToken = () => {
  if (isLoggedIn()) {
    const token = JSON.parse(localStorage.getItem("data")).token;
    console.log(token);
    return token;
  } else return null;
};
