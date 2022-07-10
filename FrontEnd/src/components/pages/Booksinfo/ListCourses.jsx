import React from "react";
import "./ListCourses.css";
import ListCoursesServices from "../../../ServicesByApp/ListCoursesServices";


class ListCourses extends React.Component {
 

   constructor(props) {
    super(props)
    this.state = {
        courses: [],
        message: null
    }
    this.deleteCourseClicked = this.deleteCourseClicked.bind(this)
    this.updateCourseClicked = this.updateCourseClicked.bind(this)
    this.addCourseClicked = this.addCourseClicked.bind(this)
    
}

componentDidMount() {
    this.refreshCourses();
}

refreshCourses() {
    ListCoursesServices.retrieveAllCourses()
        .then(
            response => {
                this.setState({ courses: response.data })
            }
        )
}

deleteCourseClicked(id) {
    ListCoursesServices.deleteCourse(id)
        .then(
            response => {
                this.setState({ message: `Delete of course ${id} Successful` })
                this.refreshCourses()
            }
        )

}



updateCourseClicked(id) {
  console.log('update ' + id)
  this.props.history.push(`/book-crud/${id}`)
}

addCourseClicked() {
  this.props.history.push(`/courses/-1`)
}

render(){

    return (
        <div className="book-panel-1">
          <div className="list-view">
            <div className="container">
              <h3>All Courses</h3>
              {this.state.message && <div class="alert alert-success">{this.state.message}</div>}
              <button className="btn btn-success" onClick={this.addCourseClicked}>Add</button>
              <div className="container">
                <table class="table table-dark table-hover">
                  <thead>
                    <tr>
                      <th>Id</th>
                      <th>Name</th>
                      <th>Author</th>
                      <th>Price</th>
                      <th>Quntity</th>
                      <th>Description</th>
                      <th>Delete</th>
                      <th>Update</th>
                    </tr>
                  </thead>
                  <tbody>
                   
                  {
                                this.state.courses.map(
                                    course =>
                                        <tr key={course.book_id}>
                                            <td>{course.book_id}</td>
                                            <td>{course.book_name}</td>
                                            <td>{course.book_author}</td>
                                            <td>{course.price}</td>
                                            <td>{course.quntity}</td>
                                            <td>{course.description}</td>
                                            <td><button className="btn btn-warning" onClick={() => this.deleteCourseClicked(course.book_id)}>Delete</button></td>
                                            <td><button className="btn btn-success" onClick={() => this.updateCourseClicked(course.book_id)}>Update</button></td>
                                           
                                        </tr>
                                )
                            }
                    
                  </tbody>
                </table>
                
              </div>
            
            </div>
          </div>
        </div>
      );

}
  
};

export default ListCourses;
