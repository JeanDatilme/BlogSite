import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios';

function Users() {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    
    const fetchData = async () => {
      const response = await axios.get('https://657112d309586eff66423590.mockapi.io/users/');
      console.log(response.data);
      setUsers(response.data);
    };
    fetchData();
  }, []);


 
  // console.log(data)
  
  // const name = data.map((user) => <div className='Username'>{user.name}</div>);
  // const image = data.map((user) => user.image);
  // const ID = data.map((user) => user.id);
  

  // console.log(name)
  // console.log(ID)

  const showUsers = users.map(user => {
    const showPostSnippet = user.posts.map(p => <p>{p.title}</p> )                                

    return (
      <div className='Username'>
        <img src={user.avatar} />
        <h2>{user.name} {user.id}</h2>
        {showPostSnippet}
      </div>
    )
  })

  return (
    <div className='User'>
      {showUsers}
    </div>
  )
}

export default Users



//https://657112d309586eff66423590.mockapi.io/users/2/posts