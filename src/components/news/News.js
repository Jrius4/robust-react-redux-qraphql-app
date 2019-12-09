import React from 'react'
import {Query} from 'react-apollo';
import gql from 'graphql-tag'


const News = () => (
    <Query query={gql`
    {
  articles(first:5){
    paginatorInfo{
      count
      perPage
    }
   data{
    title
    slug
    body
    author{
      email
      name
    }
  }  
  }
}
    `}>
        {({loading,error,data})=>{
            if(loading) return <p>Loading...</p>;
            if(error) return <p>Error :( {error}</p>;
            return (
                <>
                <h2 className="text-center">Data coming</h2>
                <div className="container row d-flex justify-content-start">
                    {
                        data.articles.data.map((data,index)=>(
                            <div key={index} className="card col-md-6">
                                <p>{data.body}</p>
                                <h3 className="card-title">{data.title}</h3>
                                <h6 className="card-subtile mb-3">{`by ${data.author.name}`}</h6>
                            </div>
                        ))
                    }
                </div>
                <div>
                    <p>
                    {data.articles.paginatorInfo.count}
                    </p>
                    <p>
                    {data.articles.paginatorInfo.perPage}
                    </p>
                </div>
                </>
            );
        }}
    </Query>
)

export default News
