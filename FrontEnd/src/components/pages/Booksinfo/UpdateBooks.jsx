import React from 'react'
//import { Formik, Form, Field, ErrorMessage } from 'formik';
import ListCoursesServices from '../../../ServicesByApp/ListCoursesServices';



class UpdateBooks extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            description: ''
        }

    }

    componentDidMount() {

        console.log(this.state.id)

        // eslint-disable-next-line
        if (this.state.id == -1) {
            return
        }

        ListCoursesServices.retrieveBooks(this.state.id)
            .then(response => this.setState({
                description: response.data.description
            }))
    }

    render() {

        let {id } = this.state

        return (
            <div>
                <h3>Course</h3>
                <div>{id}</div>
               
            </div>
        )
    }
}

export default UpdateBooks