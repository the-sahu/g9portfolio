import {
  NEWS_LIST_REQUEST,
  NEWS_LIST_SUCCESS,
  NEWS_LIST_FAIL,
  NEWS_DETAILS_REQUEST,
  NEWS_DETAILS_SUCCESS,
  NEWS_DETAILS_FAIL,
  NEWS_DELETE_SUCCESS,
  NEWS_DELETE_REQUEST,
  NEWS_DELETE_FAIL,
  NEWS_CREATE_REQUEST,
  NEWS_CREATE_SUCCESS,
  NEWS_CREATE_FAIL,
  NEWS_CREATE_RESET,
} from "../constants/newsConstants";

export const newsListReducer = (state = { news: [] }, action) => {
  switch (action.type) {
    case NEWS_LIST_REQUEST:
      return { loading: true, news: [] };
    case NEWS_LIST_SUCCESS:
      return {
        loading: false,
        news: action.payload,
      };
    case NEWS_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const newsDetailsReducer = (state = { news: {} }, action) => {
  switch (action.type) {
    case NEWS_DETAILS_REQUEST:
      return { ...state, loading: true };
    case NEWS_DETAILS_SUCCESS:
      return { loading: false, news: action.payload };
    case NEWS_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const newsDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case NEWS_DELETE_REQUEST:
      return { loading: true };
    case NEWS_DELETE_SUCCESS:
      return { loading: false, success: true };
    case NEWS_DELETE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const newsCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case NEWS_CREATE_REQUEST:
      return { loading: true };
    case NEWS_CREATE_SUCCESS:
      return { loading: false, success: true, news: action.payload };
    case NEWS_CREATE_FAIL:
      return { loading: false, error: action.payload };
    case NEWS_CREATE_RESET:
      return {};
    default:
      return state;
  }
};
