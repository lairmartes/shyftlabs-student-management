import { useState } from "react";

const StudentForm = () => {

    const [inputs, setInputs] = useState({});    

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        setInputs(values => ({...values, [name]: value}));
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            let res = await fetch("http://localhost:8080/api/students/", {
                
                method: "POST",
                headers: {
                    'Content-type': 'application/json; charset=UTF-8'
                },
                body: JSON.stringify({
                    firstName: inputs.firstName,
                    familyName: inputs.familyName,
                    birthDate: inputs.birthDate,
                    email: inputs.email,
                }),
            });

            let resJson = await res.json();

            if (res.status === 200) {
                alert("Student included.");
                setInputs({});
            } else {
                alert("User Error: " + res);
            }
        } catch (err) {
            alert("System error: " + err)
            console.log(err);
        }
    }

    return (
        <form onSubmit={handleSubmit}>
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