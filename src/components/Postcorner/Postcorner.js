import React from 'react';
import axios from 'axios';
import logo from './bg.png';
import styles from './Postcorner.module.css';
function Postcorner(props) {
  console.log(props.location.data.userId)
  console.log(props.location.data.title)
  console.log(props.location.data.body)
  const [ title, settitle ] = React.useState(null)
  const [ Postcomment, setPostcomment ] = React.useState(null)
  const [ Postauthor, setPostauthor ] = React.useState(null)
    React.useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts/' + props.match.params.id + '/comments').then(res => {
            console.log(res.data)
            setPostcomment(res.data)
        }).catch(err => {
          console.log(err)
        })
    }, [])

    React.useEffect(() => {
      axios.get('https://jsonplaceholder.typicode.com/users/' + props.location.data.userId).then(res => {
          console.log(res.data.name)
          setPostauthor(res.data.name)
      }).catch(err => {
        console.log(err)
      })
  }, [])

  var sectionStyle = {
    // width: "100%",
    height: "100vh",
    marginTop: "-80px",
    backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
    backgroundImage: `url(${logo})`,
    padding: '20px'
  };


  return (
    <div style={ sectionStyle }>
        <h2 className={styles.title}>{props.location.data.title}</h2>
        <h3 className={styles.body}>{props.location.data.body}</h3>
        <h4 className={styles.author}>AUTHOR: {Postauthor}</h4>
        <h3 className={styles.comments}>COMMENTS</h3>
        <div>
          {
            Postcomment && (
              <div>
                {Postcomment.map((postcomment) => {
                  console.log(postcomment)
                  return (
                  <h4 className={styles.comment}>{postcomment.body}</h4>
                    )
                })}
              </div> 
            )
          }
        </div> 
    </div>
  );
}
export default Postcorner;
