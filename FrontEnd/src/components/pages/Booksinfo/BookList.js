import React,{useState,useEffect} from 'react'
import "./BookComponent.css"
import EmployeeService from '../../../services/EmployeeService';
import { Card, Row, Col, Container } from "react-bootstrap";
import coverimg from '../../assests/empImg/mbookcover5.png'
import Badge from 'react-bootstrap/Badge';

const BookList = () => {

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
  
  return (
    <div className='bcomponent-panel-2'>
     <div className='componet-view'>
      <div>
      <h2 className='search-title'>List any books <i class="fa fa-book"></i></h2>
      </div>
      <div className='Listbook-box'>
      <Container>
            <Row>
            {employees.map((employee) => (
                    <Col key={employee.book_id} xs={12} md={4} lg={3}>
                        <Card className="mb-2" >
                        <img src={coverimg} alt='banner'/>

                            <Card.Body>
                                <Card.Title>{employee.book_name}</Card.Title>
                                <Card.Text>Author : {employee.book_author}</Card.Text>
                                <Card.Text><Badge className='p-1' bg="warning" text="dark" > <h6> Price : Rs. {employee.price}.00</h6> </Badge></Card.Text>
                                <Card.Text>code : {employee.book_id}</Card.Text>
                            
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
        
       
      </div>
     </div>
    </div>
  )
}

export default BookList