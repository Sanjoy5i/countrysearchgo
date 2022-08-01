import React,{useState,useRef} from 'react'

export default function App3() {
    const userNameRef=useRef();
    const userAgeRef=useRef();

    const [data, setData] = useState([]);

    const handleSubmit=(event)=>{
        event.preventDefault();
        const userName=userNameRef.current.value;
        const userAge=userAgeRef.current.value;
        userNameRef.current.style.color="red"
        setData([userName,userAge]);
    }
  return (
    <div style={{margin:"10px"}}>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder='name' ref={userNameRef}/>
            <input type="text" placeholder='age' ref={userAgeRef}/>
            <input type="submit" value={"click"}/>
        </form>
        <br/>
        <h2>{data}</h2>
        <br/>
        <button>click</button>
    </div>
  )
}
