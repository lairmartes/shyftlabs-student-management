import { useState, useEffect  } from "react";
import { fetchAllData, SERVICE_KEY_STUDENTS_LIST } from "../../service/useAPI";

import StudentLine from "./StudentLine";

const StudentList = () => {

    const [students, setStudents] = useState([]);

    const refreshList = () => fetchAllData({serviceKey: SERVICE_KEY_STUDENTS_LIST, setList: setStudents});

    useEffect(() => {
        refreshList();
    }, [])

    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>Name & Family Name</th>
                        <th>DOB</th>
                        <th>Email</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {students.length > 0 && (
                            <>{students.map(student => <StudentLine key = {student.id} student={ student } refreshList = {refreshList} />)}</>
                    )}
                </tbody>
            </table>
        </>
    )
}

export default StudentList;