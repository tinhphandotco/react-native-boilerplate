import { IRootState } from "../../redux/reducers";

export const getUser = (state: IRootState) => state.users.userInfo;
export const getToken = (state: IRootState) => state.users.token;