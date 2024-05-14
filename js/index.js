document.addEventListener('DOMContentLoaded', function () {
    const footer = document.createElement('footer');
    document.body.appendChild(footer);

    let today = new Date();
    let thisYear = today.getFullYear();

    let copyright = document.createElement('p');
    copyright.innerHTML = `&copy; ${thisYear} Corcione Consulting`;
    footer.appendChild(copyright);

    const skills = ["JavaScript", "HTML", "CSS", "GitHub"];
    const skillsSection = document.getElementById('skills');
    const skillsList = skillsSection.querySelector('ul');

    for (let i = 0; i < skills.length; i++) {
        let skill = document.createElement('li');
        skill.innerText = skills[i];
        skillsList.appendChild(skill);
    }

    const messageForm = document.forms.leave_message;

    const messageSection = document.getElementById('messages');
    const messageList = messageSection.querySelector('ul');

    function toggleMessagesSection() {
        if (messageList.children.length === 0) {
            messageSection.style.display = 'none';
        } else {
            messageSection.style.display = 'block';
        }
    }

    toggleMessagesSection();

    messageForm.addEventListener('submit', function(event) {

    event.preventDefault();

    const userName = event.target.usersName.value;
    const userEmail = event.target.usersEmail.value;
    const userMessage = event.target.usersMessage.value;

    console.log('Name:', userName);
    console.log('Email:', userEmail);
    console.log('Message:', userMessage);

    messageForm.reset();

    const newMessage = document.createElement('li');
    newMessage.innerHTML = `
        <a href="mailto:${userEmail}">${userName}</a>
        <span>${userMessage}</span>
        `;

    const editButton = document.createElement('button');
    editButton.className = 'button';
    editButton.innerText = 'edit';
    editButton.type = 'button';
    editButton.addEventListener('click', function() {
    const messageText = prompt('Enter new message:');
        if (messageText !== null) {
        newMessage.querySelector('span').textContent = messageText;
        }
 });

    const removeButton = document.createElement('button');
    removeButton.className = 'button';
    removeButton.innerText = 'remove';
    removeButton.type = 'button';
    removeButton.addEventListener('click', function() {
    const entry = this.parentNode;
    entry.remove();
    toggleMessagesSection(); 
});

    newMessage.appendChild(editButton);
    newMessage.appendChild(removeButton);
    messageList.appendChild(newMessage);
    toggleMessagesSection(); 
    });
});

const projectSection = document.querySelector("#projects");
const projectsList = projectSection.querySelector("ul");

fetch ("https://api.github.com/users/adryancore/repos")
    .then((res) => {
        return res.json();
})
.then((data) => {
    for (let i = 0; i < data.length; i++) {
        const project = document.createElement("li");
        project.innerText = data[i].name;
        projectsList.appendChild(project);
    }
})
.catch((error) => {
    const errorElement = document.createElement("p");
    errorElement.innerText = error.message;
    projectsSection.appendChild(errorElement);
});