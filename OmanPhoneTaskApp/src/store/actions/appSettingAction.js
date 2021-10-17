import {APPSETTING} from '../actionTypes';

const getAppConfig = payload => {
  return {
    type: APPSETTING.GET_CONFIG,
    payload: payload,
  };
};

export {getAppConfig};
