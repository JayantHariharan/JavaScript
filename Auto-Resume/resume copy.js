
document.addEventListener("DOMContentLoaded", function () {
    // Populate the values in your HTML elements from localStorage
    document.getElementById("profilephoto").src = localStorage.getItem('imgSrc') || "Resume1.jpg";
    document.getElementById("name").textContent = localStorage.getItem('first') + " " + localStorage.getItem('last');
    document.getElementById("github").textContent = localStorage.getItem('github');
    document.getElementById("linkedin").textContent = localStorage.getItem('linkedin');
    document.getElementById("age").textContent = localStorage.getItem('age');
    document.getElementById("gender").textContent = localStorage.getItem('gender');
    document.getElementById("nationality").textContent = localStorage.getItem('nationality');
    document.getElementById("collegename").textContent = localStorage.getItem('collegename');
    document.getElementById("collegelocation").textContent = localStorage.getItem('collegelocation');
    document.getElementById("collegestart").textContent = localStorage.getItem('fromcollege');
    document.getElementById("collegeend").textContent = localStorage.getItem('tocollege');
    document.getElementById("highname").textContent = localStorage.getItem('highschoolname');
    document.getElementById("highlocation").textContent = localStorage.getItem('highschoollocation');
    document.getElementById("highstart").textContent = localStorage.getItem('from12school');
    document.getElementById("highend").textContent = localStorage.getItem('to12school');
    document.getElementById("schoolname").textContent = localStorage.getItem('schoolname');
    document.getElementById("schoollocation").textContent = localStorage.getItem('schoollocation');
    document.getElementById("schoolstart").textContent = localStorage.getItem('from10school');
    document.getElementById("schoolend").textContent = localStorage.getItem('to10school');
    document.getElementById("location").textContent = localStorage.getItem('state') + ", " + localStorage.getItem('country');
    document.getElementById("phone").textContent = localStorage.getItem('phone');
    document.getElementById("email").textContent = localStorage.getItem('email');
    
    // Split and populate skills
    const skillsContainer = document.querySelector(".skills-container");
    const skills = localStorage.getItem('selectedSkills').split(',');
    skillsContainer.innerHTML = '';
    skills.forEach((skill) => {
        const skillElement = document.createElement("div");
        skillElement.className = "skill";
        skillElement.textContent = skill;
        skillsContainer.appendChild(skillElement);
    });

    // Populate about, certificates, and achievements
    document.getElementById("aboutpara").textContent = localStorage.getItem('about');

    // Populate certificates one by one
    const certificateContainer = document.querySelector(".certificate-container");
    certificateContainer.innerHTML = ''; // Clear existing content
    if (localStorage.getItem('cert1')) {
        const cert1Element = document.createElement("div");
        cert1Element.textContent = localStorage.getItem('cert1');
        certificateContainer.appendChild(cert1Element);
    }
    if (localStorage.getItem('cert2')) {
        const cert2Element = document.createElement("div");
        cert2Element.textContent = localStorage.getItem('cert2');
        certificateContainer.appendChild(cert2Element);
    }
    if (localStorage.getItem('cert3')) {
        const cert3Element = document.createElement("div");
        cert3Element.textContent = localStorage.getItem('cert3');
        certificateContainer.appendChild(cert3Element);
    }  


    // Set the background image for the "resume-container" element
    const resumeContainer = document.getElementById("resume-container");
    resumeContainer.style.backgroundImage = `url('${localStorage.getItem('currentImageSrc')}')`;
    // Call the function to generate and download the PDF
    downloadResumeAsPDF()

});
function downloadResumeAsPDF() {
   let div=document.getElementById("resume-container")
   let opt={
    fileName:"resume.pdf",
    html2canvas:{scale:1,scrollY:0}
   }
   html2pdf().set(opt).from(div).save("resume")
} 





