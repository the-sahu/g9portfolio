import {
  HERO_LIST_REQUEST,
  HERO_LIST_SUCCESS,
  HERO_LIST_FAIL,
  HERO_DETAILS_REQUEST,
  HERO_DETAILS_SUCCESS,
  HERO_DETAILS_FAIL,
  HERO_DELETE_SUCCESS,
  HERO_DELETE_REQUEST,
  HERO_DELETE_FAIL,
  HERO_CREATE_REQUEST,
  HERO_CREATE_SUCCESS,
  HERO_CREATE_FAIL,
  HERO_CREATE_RESET,
  HERO_UPDATE_REQUEST,
  HERO_UPDATE_SUCCESS,
  HERO_UPDATE_FAIL,
  HERO_UPDATE_RESET,
} from "../constants/heroConstants";
export const heroListReducer = (state = { heros: [] }, action) => {
  switch (action.type) {
    case HERO_LIST_REQUEST:
      return { loading: true, heros: [] };
    case HERO_LIST_SUCCESS:
      return {
        loading: false,
        heros: action.payload,
      };
    case HERO_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const heroDetailsReducer = (state = { hero: {} }, action) => {
  switch (action.type) {
    case HERO_DETAILS_REQUEST:
      return { ...state, loading: true };
    case HERO_DETAILS_SUCCESS:
      return { loading: false, hero: action.payload };
    case HERO_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const heroDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case HERO_DELETE_REQUEST:
      return { loading: true };
    case HERO_DELETE_SUCCESS:
      return { loading: false, success: true };
    case HERO_DELETE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const heroCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case HERO_CREATE_REQUEST:
      return { loading: true };
    case HERO_CREATE_SUCCESS:
      return { loading: false, success: true, hero: action.payload };
    case HERO_CREATE_FAIL:
      return { loading: false, error: action.payload };
    case HERO_CREATE_RESET:
      return {};
    default:
      return state;
  }
};

export const heroUpdateReducer = (state = { hero: {} }, action) => {
  switch (action.type) {
    case HERO_UPDATE_REQUEST:
      return { loading: true };
    case HERO_UPDATE_SUCCESS:
      return { loading: false, success: true, hero: action.payload };
    case HERO_UPDATE_FAIL:
      return { loading: false, error: action.payload };
    case HERO_UPDATE_RESET:
      return { hero: {} };
    default:
      return state;
  }
};
