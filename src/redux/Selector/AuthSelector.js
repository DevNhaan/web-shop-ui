export const currentUserSelector = (state) => state.auth.login?.currentUser?.userDetail;
export const isLogin = (state) => state.auth.login?.isLogin;

export const getToken = (state) => state.auth.login?.currentUser?.token;
export const getUserId = (state) => state.auth.login?.currentUser?.userDetail?.id;
