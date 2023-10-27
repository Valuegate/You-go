import { AxiosInstance, AxiosResponse } from 'axios';
import { AUTH_ROUTES } from './routes';

const createAuth = (client: AxiosInstance) => {
  const login = (body: any) => {
    return client.post(AUTH_ROUTES.LOGIN, body);
  };

  // const getCurrentUser = () => {
  //   return client.get(AUTH_ROUTES.CURRENT_USER);
  // };

  // const confirmEmailOtp = (body) => {
  //   return client.post(AUTH_ROUTES.CONFIRM_EMAIL_OTP, body);
  // };

  // const resetPassword = (body) => {
  //   return client.post(AUTH_ROUTES.FORGOT_PASSWORD, body);
  // };

  // const setNewPassword = (body, token) => {
  //   return client.put(`${AUTH_ROUTES.RESET_PASSWORD}/${token}`, body);
  // };

  // const confirmResetPassword = (body) => {
  //   return client.post(AUTH_ROUTES.CONFIRM_PASSWORD_RESET_OTP, body);
  // };

  // const resendOtp = (email) => {
  //   return client.put(AUTH_ROUTES.RESEND_OTP, email);
  // };

  return {
    login,
    // getCurrentUser,
    // confirmEmailOtp,
    // resetPassword,
    // setNewPassword,
    // confirmResetPassword,
    // resendOtp,
  };
};

export default createAuth;