import { useContext, useEffect, useState } from 'react';
import './App.css';
import Grid from './components/Grid';
import axios from 'axios';
import { LoadingContext, LoadingProvider } from './assets/context/loadingContext';

function App() {
  const [posts, setPosts] = useState([]);
  const {setLoading} = useContext(LoadingContext);

  async function fetchPosts() {
    try {
      const { data } = await axios.get("https://dummyjson.com/products?limit=100");
      const postData = data.products;
      setPosts(postData);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchPosts();
  }, [])


  return (
    <div className="App">
      <LoadingProvider >
        <Grid data={posts}/>
      </LoadingProvider>
    </div>
  )
}

export default App
