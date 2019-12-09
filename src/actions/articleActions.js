import axios from 'axios'
import {
GET_ARTICLES,
ARTICLE_LOADING
} from './types';

// Get Posts
export const getArticles = () => dispatch => {
    dispatch(setArticleLoading());
    axios
      .get('http://robust-restful-graphql-laravel.herokuapp.com/api/articles')
      .then(res =>
        dispatch({
          type: GET_ARTICLES,
          payload: res.data.data,
        })
      )
      .catch(err =>
        dispatch({
          type: GET_ARTICLES,
          payload: null
        })
      );
  };

  // Set loading state
export const setArticleLoading = () => {
    return {
      type: ARTICLE_LOADING
    };
  };