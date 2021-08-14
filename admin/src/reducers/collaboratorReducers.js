import {
  COLLABORATOR_LIST_REQUEST,
  COLLABORATOR_LIST_SUCCESS,
  COLLABORATOR_LIST_FAIL,
  COLLABORATOR_DETAILS_REQUEST,
  COLLABORATOR_DETAILS_SUCCESS,
  COLLABORATOR_DETAILS_FAIL,
  COLLABORATOR_DELETE_SUCCESS,
  COLLABORATOR_DELETE_REQUEST,
  COLLABORATOR_DELETE_FAIL,
  COLLABORATOR_CREATE_REQUEST,
  COLLABORATOR_CREATE_SUCCESS,
  COLLABORATOR_CREATE_FAIL,
  COLLABORATOR_CREATE_RESET,
} from "../constants/collaboratorConstants";

export const collaboratorListReducer = (
  state = { collaborator: [] },
  action
) => {
  switch (action.type) {
    case COLLABORATOR_LIST_REQUEST:
      return { loading: true, collaborator: [] };
    case COLLABORATOR_LIST_SUCCESS:
      return {
        loading: false,
        collaborator: action.payload,
      };
    case COLLABORATOR_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const collaboratorDetailsReducer = (
  state = { collaborator: {} },
  action
) => {
  switch (action.type) {
    case COLLABORATOR_DETAILS_REQUEST:
      return { ...state, loading: true };
    case COLLABORATOR_DETAILS_SUCCESS:
      return { loading: false, collaborator: action.payload };
    case COLLABORATOR_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const collaboratorDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case COLLABORATOR_DELETE_REQUEST:
      return { loading: true };
    case COLLABORATOR_DELETE_SUCCESS:
      return { loading: false, success: true };
    case COLLABORATOR_DELETE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const collaboratorCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case COLLABORATOR_CREATE_REQUEST:
      return { loading: true };
    case COLLABORATOR_CREATE_SUCCESS:
      return { loading: false, success: true, collaborator: action.payload };
    case COLLABORATOR_CREATE_FAIL:
      return { loading: false, error: action.payload };
    case COLLABORATOR_CREATE_RESET:
      return {};
    default:
      return state;
  }
};
