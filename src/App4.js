import React,{useState} from 'react'

export default function App4() {
    const [btnData, setBtnData] = useState(true);
  return (
    <div>
        {(btnData&& (<p>you are so beautiful.</p>))}
        <button onClick={()=>{setBtnData(!btnData)}}>{btnData?"Hide":"Show"}</button>
    </div>
  )
}
