import { userTypes } from "../types/userTypes";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../../firebase/firebaseConfig";
import { toggleLoading } from "./loadingActions";

const userRegister = ({ name, email, error }) => {
  return {
    type: userTypes.CREATE_USER,
    payload: { name, email, error },
  };
};

export const userRegisterAsync = ({ email, password, name }) => {
  return async (dispatch) => {
    try {
      dispatch(toggleLoading());

      await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(auth.currentUser, { displayName: name });
      dispatch(userRegister({ name, email, error: false }));

      dispatch(toggleLoading());
    } catch (error) {
      console.log(error);
      dispatch(userRegister({ name, email, error: true }));
    }
  };
};
