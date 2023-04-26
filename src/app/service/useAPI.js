import { useState } from 'react'

const SERVICE_KEY_STUDENTS_ADD = 'SERVICE_STUDENTS_ADD';
const SERVICE_KEY_STUDENTS_LIST = 'SERVICE_STUDENTS_LIST';

const api_port = 8080;
const api_url = 'http://localhost';
const api_access_data = [
    { key: SERVICE_KEY_STUDENTS_ADD, path:'/api/students'},
    { key: SERVICE_KEY_STUDENTS_LIST, path:'/api/students/all'}
]

const useSubmitForm = (serviceKey, form) => {
    
    const [responseStatus, setResponseStatus] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (event) => {

        try {

            if (form) {
                e.preventDefault();
                setResponseStatus("loading_form");
                setMessage("");

                const [path] = api_access_data.find(service => key === serviceKey);

                const uri = api_url + api_port + path;

                const data = Array.from(form.elements).filter((input) => input.name)
                .reduce((obj, input) => Object.assign(obj, { [input.name]: input.value }),{});

                fetch(uri, {
                    
                    method: "POST",
                    headers: {
                        'Content-type': 'application/json; charset=UTF-8'
                    },
                    body: JSON.stringify(data),
                }).then((response) => {
                    if (response.status === 400) {
                        setResponseStatus("user_error");
                        setMessage(response.message);

                    } else if (response.status === 200) {
                        setResponseStatus("success");
                        setMessage("");
                    } else {
                        throw new Error(response.statusText);
                    }
                }).catch((err) => {
                    setMessage(err.toString());
                    setResponseStatus("error");
                });
            }
        }
    }
}

export {SERVICE_KEY_STUDENTS_ADD, SERVICE_KEY_STUDENTS_LIST, useSubmitForm }