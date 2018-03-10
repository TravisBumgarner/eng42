import apiGet from '../../../request/actions/apiGet';

export const CREATE_NOTIFICATION_SUCCESS = 'CREATE_NOTIFICATION_SUCCESS';

export const clearNotificationSuccess = (text) => ({
  type: CREATE_NOTIFICATION_SUCCESS,
  detail: text,
});

export const createNotification = (text) => {
  return (dispatch) => {
    dispatch(clearNotificationSuccess(text));
  };
};

