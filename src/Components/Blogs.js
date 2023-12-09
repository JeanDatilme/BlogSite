import React from 'react'
import { useParams } from 'react-router-dom'



function Blogs() {

  const {blogID} = useParams();

  console.log(blogID)

  return (
    <div>Blogs</div>
  )
}

export default Blogs