import React from 'react'

const Posts = ({posts, loading}) => {
    if(loading){
        return <h2>Loading...</h2>
    }
  return (
    <ul className="list-group mb-4">
        {posts.map(post =>(
            <li key={post.id} className='list-group-item'>
                <h3 className='text-decoration-underline fw-bold font-monospace text-uppercase'>{post.title} </h3>
                <br />
                {post.body}
            </li>
        ))}
    </ul>
  )
}

export default Posts