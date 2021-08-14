import {
  SUPERSTARDONAR_LIST_REQUEST,
  SUPERSTARDONAR_LIST_SUCCESS,
  SUPERSTARDONAR_LIST_FAIL,
  SUPERSTARDONAR_DETAILS_REQUEST,
  SUPERSTARDONAR_DETAILS_SUCCESS,
  SUPERSTARDONAR_DETAILS_FAIL,
  SUPERSTARDONAR_DELETE_SUCCESS,
  SUPERSTARDONAR_DELETE_REQUEST,
  SUPERSTARDONAR_DELETE_FAIL,
  SUPERSTARDONAR_CREATE_REQUEST,
  SUPERSTARDONAR_CREATE_SUCCESS,
  SUPERSTARDONAR_CREATE_FAIL,
  SUPERSTARDONAR_CREATE_RESET,
  SUPERSTARDONAR_UPDATE_REQUEST,
  SUPERSTARDONAR_UPDATE_SUCCESS,
  SUPERSTARDONAR_UPDATE_FAIL,
  SUPERSTARDONAR_UPDATE_RESET,
} from "../constants/superstarDonarConstants";
export const superstarDonarListReducer = (
  state = { superstarDonars: [] },
  action
) => {
  switch (action.type) {
    case SUPERSTARDONAR_LIST_REQUEST:
      return { loading: true, superstarDonars: [] };
    case SUPERSTARDONAR_LIST_SUCCESS:
      return {
        loading: false,
        superstarDonars: action.payload,
      };
    case SUPERSTARDONAR_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const superstarDonarDetailsReducer = (
  state = { superstarDonar: {} },
  action
) => {
  switch (action.type) {
    case SUPERSTARDONAR_DETAILS_REQUEST:
      return { ...state, loading: true };
    case SUPERSTARDONAR_DETAILS_SUCCESS:
      return { loading: false, superstarDonar: action.payload };
    case SUPERSTARDONAR_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const superstarDonarDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case SUPERSTARDONAR_DELETE_REQUEST:
      return { loading: true };
    case SUPERSTARDONAR_DELETE_SUCCESS:
      return { loading: false, success: true };
    case SUPERSTARDONAR_DELETE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const superstarDonarCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case SUPERSTARDONAR_CREATE_REQUEST:
      return { loading: true };
    case SUPERSTARDONAR_CREATE_SUCCESS:
      return { loading: false, success: true, superstarDonar: action.payload };
    case SUPERSTARDONAR_CREATE_FAIL:
      return { loading: false, error: action.payload };
    case SUPERSTARDONAR_CREATE_RESET:
      return {};
    default:
      return state;
  }
};

export const superstarDonarUpdateReducer = (
  state = { superstarDonar: {} },
  action
) => {
  switch (action.type) {
    case SUPERSTARDONAR_UPDATE_REQUEST:
      return { loading: true };
    case SUPERSTARDONAR_UPDATE_SUCCESS:
      return { loading: false, success: true, superstarDonar: action.payload };
    case SUPERSTARDONAR_UPDATE_FAIL:
      return { loading: false, error: action.payload };
    case SUPERSTARDONAR_UPDATE_RESET:
      return { superstarDonar: {} };
    default:
      return state;
  }
};
