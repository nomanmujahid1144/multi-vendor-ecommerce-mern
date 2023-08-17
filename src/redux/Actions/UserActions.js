import { axiosInstance } from "../../constants/axiosInstance";
// import { ACTION_TYPES } from "../ActionTypes/ActionTypes";
import { userLogin } from "./ProfileActions";
import { selectProgressBarState } from "./ProgressBarActions";

export const userSignUp = (name, email, password, navigate, alert) => {
  return async (dispatch) => {
    dispatch(selectProgressBarState(true));
    const res = await axiosInstance.post("/api/v1/user/signup", {
        fullName :  name,
        email,
        password,
    });
    if (res.data.success) {
        setTimeout(() => {
            dispatch(selectProgressBarState(false));
            alert.show(res.data.message.toString());
            navigate("/login");
        },500)
    } else {
      dispatch(selectProgressBarState(false));
      alert.show("Something Went Wrong");
    }
  };
};

export const userLoginFun = (email, password, navigate, alert) => {
  return async (dispatch) => {
    dispatch(selectProgressBarState(true));
    const res = await axiosInstance.post("/api/v1/user/login", {
        email,
        password,
    });
    if (res.data.success) {
        setTimeout(() => {
            dispatch(userLogin(res.data.data?.token));
            localStorage.setItem("token", res.data.data?.token);
            alert.show(res.data.message.toString());
            dispatch(selectProgressBarState(false));
            navigate("/");
        },500)
    } else {
        dispatch(selectProgressBarState(false));
        alert.show(res.data.message.toString());
    }
  };
};

export const resetPassword = (email,  navigate, alert) => {
  return async (dispatch) => {
    dispatch(selectProgressBarState(true));
    const res = await axiosInstance.patch("/api/v1/user/forgetpassword", {
        email,
    });
    if (res.data.success) {
        setTimeout(() => {
            alert.show("Email Successfully Send");
            dispatch(selectProgressBarState(false));
            navigate("/reset-password");
        },500)
    } else {
        dispatch(selectProgressBarState(false));
        alert.show("Something Went Wrong");
    }
  };
};

export const verifyJWTToken = (token,  navigate, alert) => {
  return async (dispatch) => {
    dispatch(selectProgressBarState(true));
    const res = await axiosInstance.patch("/api/v1/user/verifyjwttoken", {
        token,
    });
      if (res.data.success) {
          dispatch(selectProgressBarState(false));
          const userId = res.data.data;
          global.userId = userId;
    } else {
        dispatch(selectProgressBarState(false));
        global.verify = false;
        alert.show("Something Went Wrong");
    }
  };
};

export const updatePassword = (password, id,  navigate, alert) => {
  return async (dispatch) => {
    dispatch(selectProgressBarState(true));
    const res = await axiosInstance.patch("/api/v1/user/updatepassword", {
        password,
        id
    });
      if (res.data.success) {
          setTimeout(() => {
              alert.show(res.data.message.toString());
                dispatch(selectProgressBarState(false));
                navigate("/login");
        },500)
    } else {
        dispatch(selectProgressBarState(false));
        alert.show("Something Went Wrong");
    }
  };
};
