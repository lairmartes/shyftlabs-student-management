import { useState, useRef } from "react";
import { SERVICE_KEY_STUDENTS_ADD, useSubmitForm } from "../../service/useAPI";

const StudentForm = () => {

    const [inputs, setInputs] = useState({});

    const formElement = useRef(null);

    const { handleSubmit } = useSubmitForm({serviceKey:SERVICE_KEY_STUDENTS_ADD, form: formElement.current, setFormData: setInputs});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        setInputs(values => ({...values, [name]: value}));
    }

    return (
        <form onSubmit={handleSubmit} ref={formElement}>
            <div>
                <label>First Name</label>
            </div>
            <div>
                <input
                    type="text"
                    name="firstName"
                    value={inputs.firstName || ""}
                    onChange = {handleChange}
                />
            </div>
            <div>
                <label>Family Name</label>
            </div>
            <div>
                <input
                    type="text"
                    name="familyName"
                    value={inputs.familyName || ""}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label>Birth Date</label>
            </div>
            <div>
                <input
                    type="date"
                    name="birthDate"
                    value={inputs.birthDate || ""}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label>Email</label>
            </div>
            <div>
                <input
                    type="email"
                    name="email"
                    value={inputs.email || ""}
                    onChange={handleChange}
                />
            </div>
            <input type="submit"/>
        </form>
    )
}

export default StudentForm;