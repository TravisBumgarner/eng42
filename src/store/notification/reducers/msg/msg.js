import apiRequestActions from '../../../request/actions'
import notificationActions from '../../actions'

const msg = (state = '', action) => {
    switch (action.type) {
    case apiRequestActions.API_POST_SUCCESS:
    case apiRequestActions.API_POST_FAILURE:
    case notificationActions.CREATE_NOTIFICATION_SUCCESS:
        return action.detail
    case notificationActions.CLEAR_NOTIFICATION_SUCCESS:
        return ''
    default:
        return state
    }
}

export default msg
