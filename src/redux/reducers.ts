import { combineReducers } from "redux";

import User, { IUsersState } from "../modules/users/users.reducer";

export interface IRootState {
    users: IUsersState
}

export default combineReducers<IRootState>({
    users: User
})
