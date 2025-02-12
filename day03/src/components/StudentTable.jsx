import React from 'react'
import { Badge, Table } from 'react-bootstrap'

export function StudentTable( props ) {
    const { studentList } = props
    console.log( studentList )
    return (
        <div className='mt-5'>
            <h2 className='text-center mb-4 text-decoration-underline'>Student Data</h2>
            {
                ( studentList.length > 0 ) &&
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Student Name</th>
                            <th>Student Age</th>
                            <th>Is Graduated</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            studentList.map(
                                ( student, index ) =>
                                    <tr key={index}>

                                        <td>{index + 1}</td>
                                        <td>{student.studentName}</td>
                                        <td>{student.age}</td>
                                        <td>
                                            {
                                                student.isGraduated ?

                                                    <Badge bg="success">Graduated</Badge> :
                                                    <Badge bg="danger">Student</Badge>

                                            }
                                        </td>
                                        <td>
                                            <button className='btn btn-outline-danger'>Remove</button>
                                        </td>
                                    </tr>

                            )

                        }
                    </tbody>
                </Table>
            }

        </div>
    )
}
