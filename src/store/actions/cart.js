import { constants as c } from '../../constants';

export const addCart = (data) => (dispatch) => {
  dispatch({
    type: c.ADD_CART,
    data,
  });
};

export const changeItemNumber = (orderMethod, _id, value) => (dispatch) => {
  dispatch({
    type: c.CHANGE_ITEM_NUMBER_IN_CART,
    orderMethod,
    _id,
    value,
  });
};

export const changePickupTime = (time, date) => (dispatch) => {
  dispatch({
    type: c.CHANGE_TIME_PICKUP,
    date,
    time,
  });
};

export const resetCart = (orderMethod) => (dispatch) => {
  dispatch({
    type: c.RESET_CART,
    orderMethod,
  });
};
