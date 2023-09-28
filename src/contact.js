function contact() {
    const content = document.getElementById('content');
    const form = document.createElement('form');
    form.classList.add('child');

    const firstNameDiv = document.createElement('div');
    const firstLabel = document.createElement('label');
    const firstInput = document.createElement('input');

    firstLabel.setAttribute('for', 'firstName');
    firstLabel.textContent = 'First Name:';

    firstInput.setAttribute('type', 'text');
    firstInput.setAttribute('id', 'firstName');
    firstInput.setAttribute('name', 'firstName');

    firstNameDiv.appendChild(firstLabel);
    firstNameDiv.appendChild(firstInput);

    const lastNameDiv = document.createElement('div');
    const lastLabel = document.createElement('label');
    const lastInput = document.createElement('input');

    lastLabel.setAttribute('for', 'lastName');
    lastLabel.textContent = 'Last Name:';

    lastInput.setAttribute('type', 'text');
    lastInput.setAttribute('id', 'lastName');
    lastInput.setAttribute('name', 'lastName');

    lastNameDiv.appendChild(lastLabel);
    lastNameDiv.appendChild(lastInput);

    const emailDiv = document.createElement('div');
    const emailLabel = document.createElement('label');
    const emailInput = document.createElement('input');

    emailLabel.setAttribute('for', 'email');
    emailLabel.textContent = 'Email:';

    emailInput.setAttribute('type', 'email');
    emailInput.setAttribute('id', 'email');
    emailInput.setAttribute('name', 'email');

    emailDiv.appendChild(emailLabel);
    emailDiv.appendChild(emailInput);

    const phoneDiv = document.createElement('div');
    const phoneLabel = document.createElement('label');
    const phoneInput = document.createElement('input');

    phoneLabel.setAttribute('for', 'phone');
    phoneLabel.textContent = 'Phone Number:';

    phoneInput.setAttribute('type', 'number');
    phoneInput.setAttribute('id', 'phone');
    phoneInput.setAttribute('name', 'phone');

    phoneDiv.appendChild(phoneLabel);
    phoneDiv.appendChild(phoneInput);

    const messageDiv = document.createElement('div');
    const messageLabel = document.createElement('label');
    const messageInput = document.createElement('input');
    messageInput.classList.add('message-input');

    messageLabel.setAttribute('for', 'message');
    messageLabel.textContent = 'Message:';

    messageInput.setAttribute('type', 'text');
    messageInput.setAttribute('id', 'message');
    messageInput.setAttribute('name', 'message');

    messageDiv.appendChild(messageLabel);
    messageDiv.appendChild(messageInput);

    const submitButton = document.createElement('button');
    submitButton.setAttribute('type', 'submit');
    submitButton.textContent = 'Submit';
    

    const formTop = document.createElement('div');
    formTop.classList.add('form-top');


    formTop.append(firstNameDiv);
    formTop.append(lastNameDiv);
    formTop.append(emailDiv);
    formTop.append(phoneDiv);
    form.append(formTop);
    form.append(messageDiv);
    form.append(submitButton);

    content.appendChild(form);

}

export {contact};