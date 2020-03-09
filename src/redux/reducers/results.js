const defaultState = [];

function reducer(state = defaultState, { type, payload }) {
    switch(type) {
        case 'findResults': {
            // const regex = new RegExp(`^${payload}`, 'i');
            // return state.filter(n => regex.test(n.title));
            return payload.response.groups;
        }
        default:
            return state;
    }
}

export default reducer;