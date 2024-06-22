import Cookie from "js-cookie";

export const getAccessToken = () => {
  return Cookie.get("access_token");
};

export const setAccessToken = (access_token: string) => {
  Cookie.set("access_token", access_token);
};
