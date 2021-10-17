import {APPSETTING} from '../actionTypes';

const initialState = {
  config: [],
};

const appSettingReducer = (state = initialState, action) => {
  switch (action.type) {
    case APPSETTING.GET_CONFIG:
      return {
        ...state,
        config: action.payload,
      };
    default:
      return state;
  }
};

export default appSettingReducer;
