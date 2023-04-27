const StudentLine = (props) =>{

    const student = props.student;
    const birthDate =  new Date(student.birthDate);

    const formattedBirthDate = student.birthDate.map(n => n > 9 ? n : '0' + n).reverse().join("/");

    return (
        <tr>
            <td> {student.firstName} {student.familyName} </td>
            <td> {formattedBirthDate} </td>
            <td> {student.email} </td>
            <td> Remove {student.id} </td>
        </tr>
    )
}

export default StudentLine;