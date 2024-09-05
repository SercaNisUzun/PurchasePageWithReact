import { useState } from 'react'
import './App.css'
import Head from './Head'
import { data } from './data'
import InfoCards from './InfoCards'



function App() {


  return (
    <>
      <Head />
      <div className='container'>
        {data?.map((info) => (
          <InfoCards key={info.id} info={info} />))
        }
      </div>
    </>
  )
}

export default App
