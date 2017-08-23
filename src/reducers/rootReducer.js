import { combineReducers } from 'redux';
import authentications from '../components/login.reducer';
import app from '../components/_global/app.reducer';

const rootReducer = combineReducers({
	authentications,
	app,
});

export default rootReducer;
