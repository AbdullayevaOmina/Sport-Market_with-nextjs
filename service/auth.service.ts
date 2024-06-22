import http from "@/api/interceptors";
import { setAccessToken } from "@/helpers/auth-helpers";
import { SignIn, SignUp } from "@/types/auth-types";

export const login = async (data: SignIn) => {
  try {
    const response = await http.post("/login", data);
    if (response.status === 200) {
      setAccessToken(response?.data?.access_token);
    }
    return response.status;
  } catch (error) {
    console.error("Login error:", error);
    throw error;
  }
};

export const register = async (data: SignUp) => {
  try {
    const response = await http.post("/user", data);
    console.log(response);

    // if (response.status === 200) {
    //   setAccessToken(response?.data?.access_token);
    // }
    return response.status;
  } catch (error) {
    console.error("Register error:", error);
    throw error;
  }
};
