import projectActions from '../../actions'

const selected = (state = 1, action) => {
    switch (action.type) {
        case projectActions.SET_SELECTED_PROJECT_SUCCESS:
            return action.projectId
        default:
            return state
    }
}

export default selected
