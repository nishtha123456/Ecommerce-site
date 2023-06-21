

import {useState,useEffect} from 'react'
import axios from 'axios'
export default function Example1() {

const [students,setStudent]=useState([{"id":1,"name":"abc","marks":0},{"id":2,"name":"xyz","marks":0}])
const[marks,setMarks]=useState([])
let [number,setNumber]=useState([])
const AddMarks=(student)=>{
  let result=[...marks]
  result.push({id:student.id,marks:number})
  setMarks(result)
}
console.log("result",marks)
useEffect(()=>{
  axios.get('http://localhost:5000/student').then(res=>{console.log("student fetched",res.data);setStudent(res.data)})
},[])

const SaveMarks=()=>{

  axios.post('http://localhost:5000/student',marks).then(res=>{console.log("marks saved to database");})
}

return(
<>
    <div>
    <table>
  <thead>
    <th>Id</th>
    <th>Name</th>
    <th>Marks</th>
  </thead>
  <tbody>
  {students.map(student=><tr key={student.id}><td>{student.id}</td>
                        <td>  {student.name}</td>  
                        <td> <input   onChange={(e)=>{setNumber(e.target.value);}}   /></td>
                         <td><button onClick={()=>{AddMarks(student)}}>Add-marks</button></td>
                          </tr>         )}

                        </tbody>
    </table>
    <button onClick={()=>{SaveMarks();}}> Save</button>
    </div>
    </>

)

}