
import React from 'react'
import Layout from '../pages/Layout'

function Resume() {
  return (
    <Layout>
    <div className='w-full h-full flex items-center justify-center'>
      <object data='../assets/resume.pdf' type='application/pdf' width='100%' height='100%' className='h-full w-full'>Resume</object>
    </div>
    </Layout>
  )
}

export default Resume
