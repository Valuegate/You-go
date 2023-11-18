import { AxiosInstance, AxiosResponse } from "axios";
import { AUTH_ROUTES, PRODUCT_ROUTES, USERUPDATE_ROUTES, USERREGISTER_ROUTES, USERSPROFILE_ROUTES, USER_ROUTES, USERSELLERREGISTER_ROUTES, USERORDERADD_ROUTES, ORDERCART_ROUTES, USERCREATEPRODUCT_ROUTES, USERSELLERPROFILE_ROUTES } from "./routes";

const createAuth = (client: AxiosInstance) => {
  const login = (body: any) => {
    return client.post(AUTH_ROUTES.LOGIN, body);
  };

  const getCurrentUser = () => {
    return client.get(USER_ROUTES.USER);
  };

  const getProduct = () => {
    return client.get(PRODUCT_ROUTES.PRODUCT);
  };

  const getUsersProfile = () => {
    return client.get(USERSPROFILE_ROUTES.USERS);
  };

  const getUserSellerProfile = () => {
    return client.get(USERSELLERPROFILE_ROUTES.USERSELLER);
  };

  const userRegister = (body: any) => {
    return client.post(USERREGISTER_ROUTES.SIGNUP, body);
  };

  const userUserUpdate = (body: any) => {
    return client.post(USERUPDATE_ROUTES.UPDATE, body);
  };

  const userSellerRegister = (body: any) => {
    return client.post(USERSELLERREGISTER_ROUTES.SIGNUP, body);
  };

  const userOrderAdd = (body: any) => {
    return client.post(USERORDERADD_ROUTES.ADD, body);
  };

  const getOrderCart = () => {
    return client.post(ORDERCART_ROUTES.CART);
  };

  const userCreateProduct = (body: any) => {
    return client.post(USERCREATEPRODUCT_ROUTES.CREATE, body);
  };

  return {
    login,
    getCurrentUser,
    getProduct,
    getUsersProfile,
    getUserSellerProfile,
    userRegister,
    userUserUpdate,
    userSellerRegister,
    userOrderAdd,
    getOrderCart,
    userCreateProduct,
  };
};

export default createAuth;
