import {
  PARTNER_LIST_REQUEST,
  PARTNER_LIST_SUCCESS,
  PARTNER_LIST_FAIL,
  PARTNER_DETAILS_REQUEST,
  PARTNER_DETAILS_SUCCESS,
  PARTNER_DETAILS_FAIL,
  PARTNER_DELETE_SUCCESS,
  PARTNER_DELETE_REQUEST,
  PARTNER_DELETE_FAIL,
  PARTNER_CREATE_REQUEST,
  PARTNER_CREATE_SUCCESS,
  PARTNER_CREATE_FAIL,
  PARTNER_CREATE_RESET,
} from "../constants/partnerConstants";

export const partnerListReducer = (state = { partner: [] }, action) => {
  switch (action.type) {
    case PARTNER_LIST_REQUEST:
      return { loading: true, partner: [] };
    case PARTNER_LIST_SUCCESS:
      return {
        loading: false,
        partner: action.payload,
      };
    case PARTNER_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const partnerDetailsReducer = (state = { partner: {} }, action) => {
  switch (action.type) {
    case PARTNER_DETAILS_REQUEST:
      return { ...state, loading: true };
    case PARTNER_DETAILS_SUCCESS:
      return { loading: false, partner: action.payload };
    case PARTNER_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const partnerDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case PARTNER_DELETE_REQUEST:
      return { loading: true };
    case PARTNER_DELETE_SUCCESS:
      return { loading: false, success: true };
    case PARTNER_DELETE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const partnerCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case PARTNER_CREATE_REQUEST:
      return { loading: true };
    case PARTNER_CREATE_SUCCESS:
      return { loading: false, success: true, partner: action.payload };
    case PARTNER_CREATE_FAIL:
      return { loading: false, error: action.payload };
    case PARTNER_CREATE_RESET:
      return {};
    default:
      return state;
  }
};
