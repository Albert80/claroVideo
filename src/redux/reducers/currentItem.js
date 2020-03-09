const defaultState = {};

function reducer(state = defaultState, { type, payload, id }) {
    switch(type) {
        case 'findCurrentItem': {
            return payload.response.groups.find(n => n.id === id);
        }
        default:
            return state;
    }
}

export default reducer;