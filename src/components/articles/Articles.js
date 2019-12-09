import React, { Component } from "react";
import PropTypes from 'prop-types';
import {getArticles} from '../../actions/articleActions';
import Spinner from '../../common/Spinner';
import {connect} from 'react-redux';

class Articles extends Component {
    constructor(props)
    {
        super(props);
        this.state = {
            articles:[],
            article:[],
            loading:null,
        };
    }
    componentDidMount()
    {
        this.props.getArticles();
    }

  render() {
      let articleContent;

      const { articles,loading } = this.props.article;
      if(articles===null||loading===null)
      {
        articleContent =(<Spinner/>);
      }
      else
      {
          articleContent =(
              <>
              <div className="row justify-content-center">
                  <h3 className="text-center">Cards</h3>
              </div>
              <div className="row d-flex justify-content-center py-2 my-1">
                {articles.map((article,index)=>(
                    <div key={index} className="col-md-3 card p-2 m-2">
                        <h3>{article.title}</h3>
                        <p className="lead">{article.overview}</p>
                    </div>
                ))}

              </div>
              </>
          )
      }
    return (
     <div className="container">
         {articleContent}
     </div>
    );
  }
}

Articles.propTypes = {
    getArticles:PropTypes.func.isRequired,
    article:PropTypes.object.isRequired,
}

const mapStateToProps = state =>({
    article:state.article,
});

export default connect(mapStateToProps,{getArticles})(Articles);
