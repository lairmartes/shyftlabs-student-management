import { removeRecord, SERVICE_KEY_STUDENTS_DELETE } from "../../service/useAPI";

const StudentLine = (props) =>{

    const student = props.student;
    const refreshList = props.refreshList;

    const formattedBirthDate = student.birthDate.map(n => n > 9 ? n : '0' + n).reverse().join("/");

    return (
        <tr>
            <td> {student.firstName} {student.familyName} </td>
            <td> {formattedBirthDate} </td>
            <td> {student.email} </td>
            <td> 
                <button onClick={
                    () => { 
                            removeRecord({serviceKey: SERVICE_KEY_STUDENTS_DELETE, id:student.id});
                            refreshList();
                    }
                }>
                    Remove
                </button>
            </td>
        </tr>
    )
}

export default StudentLine;