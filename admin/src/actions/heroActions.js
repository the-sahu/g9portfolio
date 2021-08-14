import axios from "axios";
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
  HERO_UPDATE_REQUEST,
  HERO_UPDATE_SUCCESS,
  HERO_UPDATE_FAIL,
  HERO_UPDATE_RESET,
} from "../constants/heroConstants";
import { logout } from "./userActions";

export const listHero = () => async (dispatch) => {
  try {
    dispatch({ type: HERO_LIST_REQUEST });

    const { data } = await axios.get(`/api/hero`);
    // console.log(data);
    // return;

    dispatch({
      type: HERO_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: HERO_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const listHeroDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: HERO_DETAILS_REQUEST });

    const { data } = await axios.get(`/api/hero/${id}`);

    dispatch({
      type: HERO_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: HERO_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const deleteHero = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: HERO_DELETE_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    await axios.delete(`/api/hero/${id}`, config);

    dispatch({
      type: HERO_DELETE_SUCCESS,
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
      type: HERO_DELETE_FAIL,
      payload: message,
    });
  }
};

export const createHero = (hero) => async (dispatch, getState) => {
  try {
    dispatch({
      type: HERO_CREATE_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.post(`/api/hero`, hero, config);

    dispatch({
      type: HERO_CREATE_SUCCESS,
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
      type: HERO_CREATE_FAIL,
      payload: message,
    });
  }
};

export const updateHero = (hero) => async (dispatch, getState) => {
  try {
    dispatch({
      type: HERO_UPDATE_REQUEST,
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

    const { data } = await axios.put(`/api/hero/${hero._id}`, hero, config);

    dispatch({
      type: HERO_UPDATE_SUCCESS,
      payload: data,
    });
    dispatch({ type: HERO_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    if (message === "Not authorized, token failed") {
      dispatch(logout());
    }
    dispatch({
      type: HERO_UPDATE_FAIL,
      payload: message,
    });
  }
};
