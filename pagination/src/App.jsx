import React, {useState, useEffect} from 'react';
import './App.css';
import Posts from './components/Posts';
import Pagination from './components/Pagination';
import axios from 'axios';

function App() {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage, setPostsPerPage] = useState(6)

  useEffect(()=>{
    const fetchPosts = async () =>{
      setLoading(true)
      const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
      setPosts(res.data)
      setLoading(false)
    }
    fetchPosts()
  },[])

const indexOfLastPost = currentPage * postsPerPage;
const indexOfTheFirstPost = indexOfLastPost - postsPerPage;
const currentPosts = posts.slice(indexOfTheFirstPost, indexOfLastPost)

const paginate = (pageNumber) =>  setCurrentPage(pageNumber)

  return (
    <div className="Container mt-5">
      <h1 className='text-primary mb-3'>My Blog</h1>
      <Posts posts = {currentPosts} loading={loading}/>
      <Pagination postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate}/>
    </div>
  );
}

export default App;
