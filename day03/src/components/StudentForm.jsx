import React, { useEffect, useRef, useState } from 'react'
import { Button, Form } from 'react-bootstrap'

export function StudentForm( { studentList, setStudentList } ) {

    // array -- push
    // const myRef = useRef();

    let [ formData, setFormData ] = useState( {
        studentName: "",
        age: "",
        isGraduated: false
    } )


    let inputHandler = ( e ) => {
        setFormData( {
            ...formData,
            [ e.target.name ]: e.target.name == "isGraduated" ? e.target.checked : e.target.value
        } )

    }

    const addNewStudent = ( e ) => {
        e.preventDefault();
        setStudentList( [ ...studentList, formData ] )
        setFormData( {
            studentName: "",
            age: "",
            isGraduated: false
        } )
    }
    return (
        <>
            <Form onSubmit={addNewStudent}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Student Name</Form.Label>
                    <Form.Control value={formData.studentName} onChange={inputHandler} name="studentName" type="text" placeholder="Enter Student Name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Student Age</Form.Label>
                    <Form.Control value={formData.age} onChange={inputHandler} name="age" type="text" placeholder="Enter Student Age" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check value={formData.isGraduated} onChange={inputHandler} name="isGraduated" checked={formData.isGraduated} type="checkbox" label="Graduated" />
                </Form.Group>
                <Button variant="dark" type="submit">
                    Add New Student
                </Button>
            </Form>
        </>
    )
}


