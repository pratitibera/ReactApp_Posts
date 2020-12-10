import React from 'react';
import axios from 'axios';
import bg from './bg.png';
//import styles from './Navbar.module.css';

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


  return (
    <div style={{backgroundImage: "url(" + { bg } + ")"}}>
        <h2>{props.location.data.title}</h2>
        <h3 style={{marginTop: "30px"}}>{props.location.data.body}</h3>
        
  <h4 style={{marginTop: "60px"}}>AUTHOR: {Postauthor}</h4>
  <h3 style={{marginTop: "50px"}}>COMMENTS</h3>

  <div>
          {
            Postcomment && (
              <div>
                {Postcomment.map((postcomment) => {
                  console.log(postcomment)
                  return (
                  <h5>{postcomment.body}</h5>
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
