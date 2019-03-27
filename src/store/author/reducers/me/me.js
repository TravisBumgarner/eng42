import authorsActions from '../../actions'

const me = (state = {}, action) => {
    switch (action.type) {
        case authorsActions.GET_AUTHORS_SUCCESS:
            return {
                ...state,
                ...action.data[0]
            }
        default:
            return state
    }
}

export default me
