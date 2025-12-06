import React from 'react'
import { Container, PostForm } from '../components'

function AddPost() {
  return (
    <div className='py-8 min-h-[calc(100vh-200px)]'>
      <Container>
            <PostForm />
      </Container>
    </div>
  )
}

export default AddPost