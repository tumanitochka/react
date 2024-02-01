import { combineReducers } from 'redux';
import counterReducer from './counterReducer';
import usersReducer from './usersReducer';
// Добавьте здесь другие редьюсеры, если они есть

const rootReducer = combineReducers({
  counter: counterReducer,
  users: usersReducer
});

export default rootReducer;