const SERVICE_KEY_STUDENTS_ADD = 'SERVICE_STUDENTS_ADD';
const SERVICE_KEY_STUDENTS_LIST = 'SERVICE_STUDENTS_LIST';

const api_port = 8080;
const api_url = 'http://localhost';
const api_access_data = [
    { key: SERVICE_KEY_STUDENTS_ADD, path: '/api/students/', successMessage: 'Student Included Successfully' },
    { key: SERVICE_KEY_STUDENTS_LIST, path: '/api/students/all' }
]

const useSubmitForm = ({ serviceKey, form, setFormData }) => {

    const handleSubmit = (event) => {

        if (form) {
            event.preventDefault();

            const serviceData = api_access_data.find(service => service.key === serviceKey);

            const uri = api_url + ":" + api_port + serviceData.path;

            const data = Array.from(form.elements).filter((input) => input.name)
                .reduce((obj, input) => Object.assign(obj, { [input.name]: input.value }), {});

            fetch(uri, {
                method: "POST",
                headers: {
                    'Content-type': 'application/json; charset=UTF-8'
                },
                body: JSON.stringify(data),
            })
            .then((response) => {

                if (response.status === 400) {

                    response.text()
                        .then((text) => {
                            const alertMessage = text.split(",").map(t => "-" + t.split(":").pop()).join('\n');

                            alert("User Error(s) : \n\n" + alertMessage);
                        });
                } else if (response.status === 200) {

                    alert(serviceData.successMessage);

                    setFormData({});
                } else {
                    alert("System Error: " + response.status + " - " + response.err);}
            })
            .catch((err) => {
                    alert("System Error: " + err)
            });
        }
    }

    return { handleSubmit };
}

export { SERVICE_KEY_STUDENTS_ADD, SERVICE_KEY_STUDENTS_LIST, useSubmitForm }