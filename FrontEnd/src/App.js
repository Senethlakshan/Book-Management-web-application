import "./App.css";

import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//import RegisterEmployee from "./components/RegisterEmployee";
import NavigationBar from "./components/pages/NavigationBar";
import Homepage from "./components/pages/Homepage";
import AddEmployee from "./components/AddEmployee";
//import AdminHome from "./components/pages/AdminHome";
//import LoginPage from  "./components/pages/Login/pages/LoginPage";
import CreateEmployee from "./components/pages/CreateEmployee"
import BookList from "./components/pages/Booksinfo/BookList";
//import ListCourses from "./components/pages/Booksinfo/ListCourses";
//import UpdateBooks from "./components/pages/Booksinfo/UpdateBooks";
//import BookComponents from "./components/pages/Booksinfo/BookComponents";
//import  AdminHandle  from "./components/pages/Booksinfo/AdminHandle";

function App() {
  return (
    <div>
      <Router>
       <NavigationBar/>
        <div className= "container">
          <Switch>
              <Route exact path = "/" component = {Homepage}></Route>
              <Route path = "/employees" component = {AddEmployee}></Route>
              <Route path = "/add-employee" component = {CreateEmployee} ></Route>
              <Route path = "/update-employee/:id" component = {CreateEmployee}></Route>
              <Route exact path = "/book-all" component = {BookList}></Route>
            </Switch>

        </div>
      
        </Router>
    </div>
  );
}

export default App;
