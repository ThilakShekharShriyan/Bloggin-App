import { graphql } from 'graphql';
import {request , gql} from 'graphql-request';



const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

export const getRecentPosts = async()=>{
  const query = gql`
  query MyQuery {
    posts(orderBy: createdAt_ASC, last: 3) {
      title
      slug
      featuredImage {
        url
      }
      createdAt
    }
  }`

  const result = await request(graphqlAPI,query);

  return result.posts;


}

export const getSimiliarPosts = async()=>{
  const query = gql`
  query GetPostDetails($slug : String! , $categories:[String!]){
    posts(
      where : { slug_not : $slug , AND :{categories_some:{slug_in:$categories}}}
      last : 3
    )
    {
      title
      slug
      featuredImage {
        url
      }
      createdAt
    }

  }
  `
  const result = await request(graphqlAPI,query);

  return result.posts;
}

export const getPosts = async()=>{

    const query = gql`
    query MyQuery {
      postsConnection {
        edges {
          node {
            author {
              bio
              name
              id
              profilePhoto {
                url
              }
            }
            createdAt
            slug
            title
            excerpt
            featuredImage {
              url
            }
          }
        }
      }
    }
    
    
    
    `

      const result = await request(graphqlAPI,query);

      return result.postsConnection.edges;
}