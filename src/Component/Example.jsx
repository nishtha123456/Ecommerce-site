import { useState } from "react"
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
export default function Example(){
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  let [msg,setMsg]=useState('')
  const Navigate=useNavigate();
    const handlesubmit=()=>{
axios.post('https://www.test.halobolo.com/users/login',{
    "username": email,
    "password": password
}).then(res=>{console.log('Data posted :',res.data.message);setMsg(res.data.message)})
        console.log("function submitted")
        if (email==="admin" && password==="admin")
         { Navigate('./Example1')}
    }


return(
<>
<form className='login'>

<input type='text' value={email} onChange={(e)=>{setEmail(e.target.value)}} placeholder="Enter  email"/> <br/>
<input type='password' value={password} onChange={(e)=>{setPassword(e.target.value)}}  placeholder="Enter password" /><br/>

<input type='submit'onClick={handlesubmit()}/> 


</form>
</>

)

}