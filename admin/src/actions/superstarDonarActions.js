import axios from "axios";
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
  SUPERSTARDONAR_UPDATE_REQUEST,
  SUPERSTARDONAR_UPDATE_SUCCESS,
  SUPERSTARDONAR_UPDATE_FAIL,
  SUPERSTARDONAR_UPDATE_RESET,
} from "../constants/superstarDonarConstants";
import { logout } from "./userActions";

export const listSuperstarDonar = () => async (dispatch) => {
  try {
    dispatch({ type: SUPERSTARDONAR_LIST_REQUEST });

    const { data } = await axios.get(`/api/superstarDonar`);
    // console.log(data);
    // return;

    dispatch({
      type: SUPERSTARDONAR_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: SUPERSTARDONAR_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const listSuperstarDonarDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: SUPERSTARDONAR_DETAILS_REQUEST });

    const { data } = await axios.get(`/api/superstarDonar/${id}`);

    dispatch({
      type: SUPERSTARDONAR_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: SUPERSTARDONAR_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const deleteSuperstarDonar = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: SUPERSTARDONAR_DELETE_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    await axios.delete(`/api/superstarDonar/${id}`, config);

    dispatch({
      type: SUPERSTARDONAR_DELETE_SUCCESS,
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
      type: SUPERSTARDONAR_DELETE_FAIL,
      payload: message,
    });
  }
};

export const createSuperstarDonar =
  (superstarDonar) => async (dispatch, getState) => {
    try {
      dispatch({
        type: SUPERSTARDONAR_CREATE_REQUEST,
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
        `/api/superstarDonar`,
        superstarDonar,
        config
      );

      dispatch({
        type: SUPERSTARDONAR_CREATE_SUCCESS,
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
        type: SUPERSTARDONAR_CREATE_FAIL,
        payload: message,
      });
    }
  };

export const updateSuperstarDonar =
  (superstarDonar) => async (dispatch, getState) => {
    try {
      dispatch({
        type: SUPERSTARDONAR_UPDATE_REQUEST,
      });

      const {
        userLogin: { userInfo },
      } = getState();

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userInfo.token}`,
        },
      };

      const { data } = await axios.put(
        `/api/superstarDonar/${superstarDonar._id}`,
        superstarDonar,
        config
      );

      dispatch({
        type: SUPERSTARDONAR_UPDATE_SUCCESS,
        payload: data,
      });
      dispatch({ type: SUPERSTARDONAR_DETAILS_SUCCESS, payload: data });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      if (message === "Not authorized, token failed") {
        dispatch(logout());
      }
      dispatch({
        type: SUPERSTARDONAR_UPDATE_FAIL,
        payload: message,
      });
    }
  };
