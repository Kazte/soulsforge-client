import { configureStore } from '@reduxjs/toolkit'
import userSliceReducer from './states/user'
import { UserInfo } from '../models/user.model';

export interface AppStore {
	user: UserInfo;
}

export default configureStore<AppStore>({
	reducer: {
		user: userSliceReducer
	}
})
