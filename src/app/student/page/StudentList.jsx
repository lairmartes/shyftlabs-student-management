import { useState, useEffect  } from "react";
import { fetchAllData, SERVICE_KEY_STUDENTS_LIST } from "../../service/useAPI";

const StudentList = () => {

    const [students, setStudents] = useState([]);

    useEffect(() => {
        fetchAllData({serviceKey: SERVICE_KEY_STUDENTS_LIST, setList: setStudents})
    }, [])

    return (
        <>
            {students.length > 0 && (
                <ul>
                    {students.map(student => (<li key={student.id}>{student.firstName} + {student.familyName}</li>))}
                </ul>
            )}
        </>
    )
}
export default StudentList;