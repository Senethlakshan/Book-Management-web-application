import React, { useState, useEffect } from "react";
import EmployeeService from "../services/EmployeeService";
import { Link } from 'react-router-dom'
//import img from '../components/assests/Home.png'

const AddEmployee = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    EmployeeService.getAllemployees()
      .then((Response) => {
        setEmployees(Response.data);
        console.log(Response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const deleteEmployee = (employeeId) => {
    EmployeeService.deleteEmployee(employeeId).then((response) =>{
      console.log(response.data);
     
   

    }).catch(error =>{
        console.log(error);
    })
     
 }
  

  return (
    <div className="align-self-start">
    
      <div className="container">
        <h2 className="text-center">Book management system panel</h2>
        <Link to = "/add-employee" className = "btn btn-primary mb-2" > Add Book </Link>
        <table className  ="table table-dark table-hover">
          <thead>
            <tr>
                      <th>Id</th>
                      <th>Name</th>
                      <th>Author</th>
                      <th>Price</th>
                      <th>Quntity</th>
                      <th>Description</th>
                      <th>Update</th>
                      <th>Delete</th>
                     
            </tr>
          </thead>
          <tbody>
            {employees.map((employee) => (
              <tr key={employee.book_id}>
                <td>{employee.book_id}</td>
                <td>{employee.book_name}</td>
                <td>{employee.book_author}</td>
                <td>{employee.price}</td>
                <td>{employee.quntity}</td>
                <td>{employee.description}</td>
                <td><Link className="btn btn-info" to={`/update-employee/${employee.book_id}`} >Update</Link></td>
                <td> <button className = "btn btn-danger" onClick = {() => deleteEmployee(employee.book_id)}> Delete</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AddEmployee;
