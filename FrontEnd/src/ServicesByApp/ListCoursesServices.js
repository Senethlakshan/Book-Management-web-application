import axios from 'axios'

//const INSTRUCTOR = 'in28minutes'
const COURSE_API_URL = 'http://localhost:8080/api/book'
//const INSTRUCTOR_API_URL = `${COURSE_API_URL}/instructors/${INSTRUCTOR}`

class ListCoursesServices {

    retrieveAllCourses() {
        return axios.get(`${COURSE_API_URL}/getBook`);
    }

    retrieveBooks(id) {
        return axios.get(`${COURSE_API_URL}/getBookByBookId/${id}`);
    }


    deleteCourse(id) {
        return axios.delete(`${COURSE_API_URL}/deleteBookById/${id}`);
    }

    editUser(user) {
        return axios.put(COURSE_API_URL + '/' + user.id, user);
    }

}

export default new ListCoursesServices()
