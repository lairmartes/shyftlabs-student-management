const SERVICE_KEY_STUDENTS_ADD = 'SERVICE_STUDENTS_ADD';
const SERVICE_KEY_STUDENTS_LIST = 'SERVICE_STUDENTS_LIST';

const api_port = 8080;
const api_url = 'http://localhost';
const api_access_data = [
    { key: SERVICE_KEY_STUDENTS_ADD, path:'/api/students'},
    { key: SERVICE_KEY_STUDENTS_LIST, path:'/api/students/all'}
]

const useSubmitForm = async (serviceKey, dataSubmitted) => {
    
    try {

        let [path] = api_access_data.find(service => key === serviceKey);

        let uri = api_url + api_port + path;


        let res = await fetch(uri, {
            
            method: "POST",
            headers: {
                'Content-type': 'application/json; charset=UTF-8'
            },
            body: dataSubmitted
        });

        console.log("I can't believe it's working now... " + res);

        if (res.status === 200) {
            return [200];
        } else if (res.status == 400) {
            return [ 400, res.response ];
        } else {
            return [res.status, res.response]
        }
    } catch (err) {
        console.log("Other errors: " + err);
    }
}

export {SERVICE_KEY_STUDENTS_ADD, SERVICE_KEY_STUDENTS_LIST, useSubmitForm }