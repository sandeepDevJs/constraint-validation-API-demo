// Grab the elements
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const usernameInput = document.querySelector("#username");
const phoneInput = document.querySelector("#phone");
const ageInput = document.querySelector("#age");
const graduationInput = document.querySelector("#graduation");
const form = document.querySelector("form");

//vars
const elementsArr = [nameInput, emailInput, usernameInput, phoneInput, ageInput, graduationInput];
const getErrElement = (id) => document.querySelector(`#p-${id}`);

//attaching events
elementsArr.forEach(e => {
    e.addEventListener('input', validateInputs);
    e.addEventListener('blur', validateInputs)
});

form.addEventListener('submit', handleSubmit);

//handling events
function validateInputs(e) {
    const validityState = this.validity;
    const errElement = getErrElement(this.id);

    const getMsg = () => {
        let message = "";
        if (validityState.typeMismatch) {
            message = "Invalid " + this.name + "!";
        }

        if (validityState.valueMissing) {
            message = this.name + " is required!"
        }

        if (!validityState.valid) {
            message = "Invalid " + this.name + "!";
        }

        if (validateInputs.tooShort) {
            message = "This is too short!";
        }

        if (validateInputs.tooLong) {
            message = "This is too long!";
        }

        return message;
    }

    const message = getMsg();

    errElement.textContent = message;

}

function handleSubmit(e) {
    e.preventDefault();

    const isMarriedInput = document.querySelector("[name=is_married]:checked");
    const errElement = getErrElement("is_married");

    if(!isMarriedInput){
        errElement.textContent = "Required!";
    }else{
        errElement.textContent="";
    }
}