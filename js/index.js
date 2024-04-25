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
}); 