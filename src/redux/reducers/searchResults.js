const defaultState = [];

function reducer( state = defaultState , { type, payload, source }) {
    switch(type) {
        case 'searchItems': {
            const regex = new RegExp(`^${payload}`, 'i');
            console.log(source);
            return source.filter(n => regex.test(n.title));
        }
        default:
            return state;
    }
}

export default reducer;