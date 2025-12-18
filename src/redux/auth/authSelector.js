export const selectIsLogin = state => state.auth.isLogin;
export const selectIsRefreshUser = state => state.auth.IsRefreshUser;
export const selectUser = state => state.auth.user;
export const selectToken = state => state.auth.token;
export const selectRole = state => state.auth.user.role;
export const selectIsOTP = state => state.auth.isOTP;