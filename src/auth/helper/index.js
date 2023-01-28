//All auth related stuff will be done here
import { API } from "../../backend";

// Call API function

export const signup = (user) => {
  return (
    fetch(`${API}/signup`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      //need to enhance to handle array of error [ {"error":"error","field:"error"},{"error":"error","field:"error"}]
      .then((response) => {
        return response.json();
      })
      .catch((err) => console.log(err))
  );
};

export const signin = (user) => {
  return fetch(`${API}/signin`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

//NOTE: Accept doesn't have double quotes it is
//written like that

//we have to do some logic so user stay signed in
export const authenticate = (data, next) => {
  if (typeof window !== "undefined") {
    //if user successfully signed in we store this token
    localStorage.setItem("jwt", JSON.stringify(data));
    next();
  }
};

export const signout = (next) => {
  if (typeof window !== "undefined") {
    //we will remove the jwt from storage
    localStorage.removeItem("jwt");
    next();

    return fetch(`${API}/signout`, {
      method: "GET",
    })
      .then((response) => {
        console.log("Signed out successfully", response);
      })
      .catch((err) => {
        console.log(err);
      });
  }
};

//verify whether signed in or not
export const isAuthenticated = () => {
  // in window object we are saving jwt
  //if we don't get access then not authenticated
  if (typeof window == "undefined") {
    return false;
  }

  if (localStorage.getItem("jwt")) {
    //here we get token and will check at frontend if token is same
    //TODO: front-end check functinality
    return JSON.parse(localStorage.getItem("jwt"));
  } else {
    return false;
  }
};
