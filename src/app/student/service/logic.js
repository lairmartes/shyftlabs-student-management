
const studentAddServiceURI = 'http://localhost:8000/student/'

async function submiStudent(data) {
    console.log("FDP => ");
    console.log(data);
    console.log("VTNC FDP!!!")
    try {
        let request = await fetch(studentAddServiceURI, {
            method: "POST",
            body: data,
        });

        let response = await request.json();

        if (response.status === 200) {
            return ["Success"];
        } else if (response.status === 400) {
            return ["UserError", response];
        } else {
            return ["SystemError", response];
        }
    } catch (err) {
        console.log(err);
    }
}

export {submiStudent};