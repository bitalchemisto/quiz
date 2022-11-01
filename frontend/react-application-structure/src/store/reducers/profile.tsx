import { actionTypes } from '../actionTypes';

interface profile {
  isLoggedIn: boolean;
}
const initialState: profile = {
  isLoggedIn: false
};

const reducers = (state = { ...initialState }, action) => {
  switch (action.type) {
    case actionTypes.LOGIN:
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
};

export default reducers;
