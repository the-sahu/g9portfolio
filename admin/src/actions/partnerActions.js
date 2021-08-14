import axios from "axios";
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
} from "../constants/partnerConstants";
import { logout } from "./userActions";

export const listPartner = () => async (dispatch) => {
  try {
    dispatch({ type: PARTNER_LIST_REQUEST });

    const { data } = await axios.get(`/api/partner`);
    // console.log(data);
    // return;

    dispatch({
      type: PARTNER_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: PARTNER_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const listPartnerDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: PARTNER_DETAILS_REQUEST });

    const { data } = await axios.get(`/api/partner/${id}`);

    dispatch({
      type: PARTNER_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: PARTNER_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const deletePartner = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: PARTNER_DELETE_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    await axios.delete(`/api/partner/${id}`, config);

    dispatch({
      type: PARTNER_DELETE_SUCCESS,
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
      type: PARTNER_DELETE_FAIL,
      payload: message,
    });
  }
};

export const createPartner = (partner) => async (dispatch, getState) => {
  try {
    dispatch({
      type: PARTNER_CREATE_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.post(`/api/partner`, partner, config);

    dispatch({
      type: PARTNER_CREATE_SUCCESS,
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
      type: PARTNER_CREATE_FAIL,
      payload: message,
    });
  }
};
