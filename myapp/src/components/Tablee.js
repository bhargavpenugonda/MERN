import React, { useContext ,useState} from 'react'
import ReactDOM from 'react-dom/client'
import {store} from './Register'
export default function Tablee() {
    const [Table,SubmitTable]=useContext(store)

  return (
    <div>
       <table>
      <thead>
        <tr>
            
            <th>Name</th>
            <th>Roll No</th>
            <th>Feedback</th>
        </tr>
        </thead>
    
      <tbody>
        {Table.map((key,index)=>(
        <tr>
            <td>{key.name}</td>
            <td>{key.age}</td>
            <td>{key.uname}</td>
            <td>{key.pass}</td>

        </tr>
        ))}
      </tbody></table>
    </div>
  )
}