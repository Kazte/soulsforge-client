import { configureStore } from "@reduxjs/toolkit";
import { UserInfo } from "../models/user.model";
import { PageState } from "./states/page";

import userSliceReducer from './states/user'
import pageSliceReducer from './states/page'



export interface AppStore {
	user: UserInfo;
	page: PageState
}

export default configureStore<AppStore>({
	reducer: {
		user: userSliceReducer,
		page: pageSliceReducer,
	}
})
