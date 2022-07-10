import axios from 'axios'

const  REST_API_URL = 'http://localhost:8080/api/book'


class EmplyoeeService{

    getAllemployees(){
        return axios.get(`${REST_API_URL}/getBook`);
    }

    
    createEmployee(employee){
      
        return axios.post(REST_API_URL,employee);
    }

    updateEmployee(employeeId, employee){
        return axios.put(REST_API_URL + '/' +employeeId, employee);
    }

    deleteEmployee(employeeId){
        return axios.delete(REST_API_URL + '/' + employeeId);
    }

    getEmployeeById(employeeId){
        return axios.get(REST_API_URL + '/' + employeeId);
      
    }

    getEmployeeByName(employeeName){
        return axios.get(REST_API_URL + '/getbookbyId/' + employeeName);
      
    }
}

export default new EmplyoeeService();