export const type = 'searchItems';

const searchItems = (results, text) => {
    return {
        type,
        payload: text,
        source: results,
    }
};

export default searchItems;