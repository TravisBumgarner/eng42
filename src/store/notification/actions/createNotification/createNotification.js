export const CREATE_NOTIFICATION_SUCCESS = 'CREATE_NOTIFICATION_SUCCESS'
export const CLEAR_NOTIFICATION_SUCCESS = 'CLEAR_NOTIFICATION_SUCCESS'

export const createNotificationSuccess = text => ({
    type: CREATE_NOTIFICATION_SUCCESS,
    detail: text
})

export const clearNotificationSuccess = () => ({
    type: CLEAR_NOTIFICATION_SUCCESS
})

export const createNotification = text => {
    return dispatch => {
        dispatch(createNotificationSuccess(text))
        setTimeout(() => {
            dispatch(clearNotificationSuccess())
        }, 5000)
    }
}
