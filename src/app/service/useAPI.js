const SERVICE_KEY_STUDENTS_ADD = 'SERVICE_STUDENTS_ADD';
const SERVICE_KEY_STUDENTS_LIST = 'SERVICE_STUDENTS_LIST';
const SERVICE_KEY_STUDENTS_DELETE = 'SERVICE_STUDENTS_DELETE';

const api_port = 8080;
const api_url = 'http://localhost';
const api_access_data = [
    { key: SERVICE_KEY_STUDENTS_ADD, path: '/api/students/', successMessage: 'Student Included Successfully' },
    { key: SERVICE_KEY_STUDENTS_LIST, path: '/api/students/all' },
    { key: SERVICE_KEY_STUDENTS_DELETE, path: '/api/students/'}
]

const useSubmitForm = ({ serviceKey, form, setFormData }) => {

    const handleSubmit = (event) => {

        if (form) {
            event.preventDefault();

            const {uri, successMessage } = getConnectionData(serviceKey);

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

                    alert(successMessage);

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


const fetchAllData = ({serviceKey, setList}) => {

    const {uri} = getConnectionData(serviceKey);

    fetch(uri)
        .then(response => {
            return response.json()
        })
        .then(data => {
            setList(data)
    });
}

const removeRecord = ({serviceKey, id}) => {
    const {uri} = getConnectionData(serviceKey);

    fetch(uri + id, { method: 'DELETE'}).catch(error => alert("System Error : " + error));
}

function getConnectionData(serviceKey) {

    console.log("[USE API] Getting data to access service " + serviceKey);

    const serviceAccessData = api_access_data.find(service => service.key === serviceKey);

    console.log("[USE_API] PATH to be accessed in service " + serviceKey + " is " + serviceAccessData.path);

    const uri = api_url + ":" + api_port + serviceAccessData.path;

    console.log("[USE_API] URI to be accessed in service " + serviceKey + " is " + uri);

    return { uri: uri, successMessage: serviceAccessData.successMessage };
}


export { SERVICE_KEY_STUDENTS_ADD, SERVICE_KEY_STUDENTS_LIST, SERVICE_KEY_STUDENTS_DELETE, useSubmitForm, fetchAllData, removeRecord }
