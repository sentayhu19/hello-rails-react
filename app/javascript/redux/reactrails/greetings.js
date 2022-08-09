import { FETCHDATA, fetchdata} from './actions';
const axios = require('axios');

const getDataAPI = () => async (dispatch) => {
    await axios.get('/v1/greetings').then((res) => {
      dispatch(fetchdata(res.data));
    }).catch(() => {
      dispatch(fetchdataerror());
    });
  };
  const initState = {
    greetings: {},
    loading: true,
  };
  export const greetingReducer = (state = {}, action) => {
    
    switch (action.type) {
        case FETCHDATA:
          console.log("action.type",action);
            return {
                ...state,
                greetings: action.payload,
                loading: false,
            }
            default:
                return state;
    }
  }
  
  export default getDataAPI;