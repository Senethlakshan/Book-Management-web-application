import React, { useState } from "react";
import EmployeeService from "../services/EmployeeService";

const RegisterEmployee = () => {
  const [sid, setSid] = useState('')
  const [sname, setName] = useState('')
  const [age, setAge] = useState('')

  const saveEmployee = (e) => {

    const employeeData = {sid,sname,age}
   
    EmployeeService.createEmployee(employeeData).then((Response) =>{
        console.log(Response.data);
    }).catch(error => {
        console.log(error);
    })


  }
  

   return (
    <div>
      <h1>add employee </h1>
      <div className="container">
        <div className="card-body">
            <form>
                <div className="form-group mb-2">
                    <label className="form-label">frist name</label>
                    <input 
                     className="form-control"
                     name="fristName"
                     value={sid}
                     onChange = {(e)=>setSid(e.target.value)}
                    ></input>
                </div>
                <div className="form-group mb-2">
                    <label className="form-label">last name</label>
                    <input 
                     className="form-control"
                     name="lastname"
                     value={sname}
                     onChange = {(e)=>setName(e.target.value)}
                    ></input>
                </div>
                <div className="form-group mb-2">
                    <label className="form-label">age</label>
                    <input 
                     className="form-control"
                     name="age"
                     value={age}
                     onChange = {(e)=>setAge(e.target.value)}
                    ></input>
                </div>
                <button type="button" className="btn btn-primary" onClick={(e) => saveEmployee(e)}>submit</button>
            </form>
        </div>
      </div>
      
     
    </div>
  );
};

export default RegisterEmployee;
