import {
ARTICLE_LOADING,
GET_ARTICLES
} from '../actions/types';

const initialState ={
    articles: [],
    loading:false
};

export default function(state = initialState, action ){
    switch (action.type) {
        case ARTICLE_LOADING:
            return{
                ...state,
                loading:true
            }
        case GET_ARTICLES:
            return{
                ...state,
                loading:false,
                articles:action.payload
            }
    
        default:
            return state;
    }
}