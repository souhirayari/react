
import { useEffect, useState } from 'react'
import './App.css'
import Home from './component/Home'

function App() {

const [data,setdata]=useState([])

 async function jsondata(){
  try{
      let user= await fetch("https://jsonplaceholder.typicode.com/users")
      let userdata= await user.json()
      setdata(userdata)
  }
  catch (err){
      console.log("ma5demtech",err)
  }
}
  jsondata();
  return (
    <>
  <Home data={data}/>
    
     
    </>
  )
}

export default App
