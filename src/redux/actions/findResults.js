import axios from 'axios';

export const type = 'findResults';

const findResults = () => {
    
    return (dispatch, getState) => {
        axios
            .get("https://mfwkweb-api.clarovideo.net/services/content/list?device_id=web&device_category=web&device_model=web&device_type=web&format=json&device_manufacturer=generic&authpn=webclient&authpt=tfg1h3j4k6fd7&api_version=v5.89&region=mexico&HKS=v6bnocqfi5vqipro0klfnh2ku1&quantity=65&order_way=DESC&order_id=200&level_id=GPS&from=40&node_id=43864")
            .then( response => {
                dispatch( { type: type, payload: response.data })
            })
            .catch( err => console.error(err) );
    }
    
};

export default findResults;