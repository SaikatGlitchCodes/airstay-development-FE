import React, { useEffect, useState } from 'react'
import IconsList from '../components/Home/IconsList'
import Card from '../components/Card'
import useFetch from '../Hooks/useFetch'



export default function Home() {
  const [data, error, loading] = useFetch('http://localhost:2000/')
  console.log('[data]', data)
  
  if(loading) return <h1>Loading...</h1>
  
  return (
    <div >
        <IconsList/>
        <div className="flex flex-wrap justify-center p-12 gap-7 ">
          {
            data.map((card, index) => 
              <Card key={index} card={card} />
            )
          }
          <Card  card={{}} />
        </div>
        
    </div>
  )
}