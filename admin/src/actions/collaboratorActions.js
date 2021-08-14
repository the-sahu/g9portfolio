import axios from "axios";
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
} from "../constants/collaboratorConstants";
import { logout } from "./userActions";

export const listCollaborator = () => async (dispatch) => {
  try {
    dispatch({ type: COLLABORATOR_LIST_REQUEST });

    const { data } = await axios.get(`/api/collaborator`);
    // console.log(data);
    // return;

    dispatch({
      type: COLLABORATOR_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: COLLABORATOR_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const listCollaboratorDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: COLLABORATOR_DETAILS_REQUEST });

    const { data } = await axios.get(`/api/collaborator/${id}`);

    dispatch({
      type: COLLABORATOR_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: COLLABORATOR_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const deleteCollaborator = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: COLLABORATOR_DELETE_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    await axios.delete(`/api/collaborator/${id}`, config);

    dispatch({
      type: COLLABORATOR_DELETE_SUCCESS,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    if (message === "Not authorized, token failed") {
      dispatch(logout());
    }
    dispatch({
      type: COLLABORATOR_DELETE_FAIL,
      payload: message,
    });
  }
};

export const createCollaborator =
  (collaborator) => async (dispatch, getState) => {
    try {
      dispatch({
        type: COLLABORATOR_CREATE_REQUEST,
      });

      const {
        userLogin: { userInfo },
      } = getState();

      const config = {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      };

      const { data } = await axios.post(
        `/api/collaborator`,
        collaborator,
        config
      );

      dispatch({
        type: COLLABORATOR_CREATE_SUCCESS,
        payload: data,
      });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      if (message === "Not authorized, token failed") {
        dispatch(logout());
      }
      dispatch({
        type: COLLABORATOR_CREATE_FAIL,
        payload: message,
      });
    }
  };
