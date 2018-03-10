import apiGet from '../../../request/actions/apiGet';

export const CLEAR_NOTIFICATION_SUCCESS = 'CLEAR_NOTIFICATION_SUCCESS';

export const clearNotificationSuccess = () => ({
  type: CLEAR_NOTIFICATION_SUCCESS,
});

export const clearNotification = () => {
  return (dispatch) => {
    dispatch(clearNotificationSuccess());
  };
};

