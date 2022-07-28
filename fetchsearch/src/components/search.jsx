import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

export const Search = () => {
const [text,setText]=useState("")
const [Data,setData]=useState([])
const [filter,setFilter]=useState("")
const handleChange=(e)=>{
    setText(e.target.value)
}

const filterSearch=()=>{
    Data && console.log(Data)
setFilter(text)
}

useEffect(()=>{
    getData()
},[])
const getData=async()=>{
    try {
        let res=await fetch(`https://jsonplaceholder.typicode.com/posts`)
let data=await res.json()
// console.log(data)
setData(data)
setData
    } catch (error) {
        console.log(error)
    }
}
// console.log(text)


  return (
    <div>
      <input type="text"  onChange={handleChange}/>
     <div> <button onClick={filterSearch}>search</button></div>
     <div>
        {Data.filter(e => e.title.includes(`${filter}`)).map((el,k) =>
            // Data.map((e)=>
            <div key={k}>
                <h4>Title: {el.title}</h4>
                <p>Body:{el.body}</p>
            </div>
            )
        }
     </div>
    </div>
  )
}


