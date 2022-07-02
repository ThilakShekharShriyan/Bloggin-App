import React ,{ useState,useEffect}from 'react'
import moment from 'moment'
import Link from 'next/link'
import { getRecentPosts } from '../services'

const PostWidget = ({categories , slug}) => {
  const [relatedPosts , setRelatedPosts] = useState([]);

  useEffect(() => {
    if(slug){
      getSimiliarPosts(categories,slug).then((result)=>setRelatedPosts(result))
    }else{
      getRecentPosts(categories,slug).then((result)=>setRelatedPosts(result))

    }
    
  }, [])
  
  return (
    <div className='bg-white shadow-lg rounded-lg p-8 mb-8'>
      <h3 className='text-xl mb-8 font-semibold border-b pb-4'>
        {slug ? 'Related Posts ': 'Recent Posts'}
      </h3>
      {
        relatedPosts.map((posts) =>(
          <div key={posts.title} className="flex items-center w-full mb-4">
            <div className='w-16 flex-none'>
              <img  alt={posts.title}
              height="60px"
              width="60px"
              className='align-middle rounded-full'
              src={posts.featuredImage.url}
              >
              </img>

              </div>
              <div className='flex-grow  ml-4'>
                <p className='text-gray-400 font-xl'>
                  {moment(posts.createdAt).format('MMM DD,YYYY')}

                </p>
                <Link href={`/post/${posts.slug}`} key={posts.title} className='text-md'>
                  <p1>{posts.title}</p1>
                </Link>
                </div>

          </div>
        ))
      }
    </div>
  )
}

export default PostWidget