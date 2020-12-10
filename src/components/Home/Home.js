import React from 'react';
import styles from './Home.module.css';
import Postlist from '../Postlist/Postlist';
import axios from 'axios';

function Home() {
  
  const [ Posts, setPosts ] = React.useState(null)
    React.useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts').then(res => {
            setPosts(res.data)
        }).catch(err => {
          console.log(err)
        })
    }, [])

  return (
    <div>
        <div style={{textAlign: 'center', marginTop: '40px', marginBottom: '70px', fontFamily: 'robot', fontSize: '20px'}}>
        <h1>WELCOME TO THE BLOG POST</h1>
        </div>
        <ul id="autoWidth" className={styles.cshidden}>
        <div>
          {
            Posts && (
              <div className={styles.gridContainer}>
                {Posts.map((post) => {
                  return (
                    <Postlist post={post} key={post.id}/>
                    )
                })}
              </div> 
            )
          }
        </div>
      </ul>
    </div>
  );
}

export default Home;