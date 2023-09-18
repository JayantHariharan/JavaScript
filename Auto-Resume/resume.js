const form1 = document.getElementById("form1");
const form2 = document.getElementById("form2");
const form3 = document.getElementById("form3");
const form4 = document.getElementById("form4");
const form5 = document.getElementById("form5");
const progress = document.getElementById("progress");

const wrapper = document.querySelector(".wrapper");
const fileName = document.querySelector(".file-name");
const defaultBtn = document.querySelector("#default-btn");
const customBtn = document.querySelector("#custom-btn");
const cancelBtn = document.querySelector("#cancel-btn i");
const img = document.querySelector("img");
let regExp = /[0-9a-zA-Z\^\&\'\@\{\}\[\]\,\$\=\!\-\#\(\)\.\%\+\~\_ ]+$/;
let currentImageSrc;

function defaultBtnActive() {
  defaultBtn.click();
}

customBtn.addEventListener("click", function (event) {
  event.preventDefault();
  defaultBtn.click();
});

let uploadedPhoto = false; // Add this variable to keep track of uploaded photo

// Function to handle file upload
defaultBtn.addEventListener("change", function () {
    const file = this.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function () {
            const result = reader.result;
            img.src = result;
            wrapper.classList.add("active");
            uploadedPhoto = true; // Set uploadedPhoto to true when a photo is uploaded
        };
        cancelBtn.addEventListener("click", function () {
            img.src = " ";
            wrapper.classList.remove("active");
            uploadedPhoto = false; // Set uploadedPhoto to false when the photo is canceled
        });
        reader.readAsDataURL(file);
    }
    if (this.value) {
        let valueStore = this.value.match(regExp);
        fileName.textContent = valueStore;
    }
});




document.querySelectorAll(".skill-item").forEach(function (skillItem) {
  skillItem.addEventListener("click", function () {
    this.classList.toggle("selected-skill");
  });
});






document.getElementById('next1').addEventListener('click', validateForm1);

function validateForm1() {
    const first = document.getElementById('first').value;
    const last = document.getElementById('last').value;
    const email = document.getElementById('email').value;
    const age = document.getElementById('age').value;
    const gender = document.getElementById('gender').value;
    const nationality = document.getElementById('nationality').value;
    const state = document.getElementById('state').value;
    const country = document.getElementById('country').value;

    if (first && last && email && age && gender !== 'GENDER' && nationality && state && country) {
        form1.style.left = '-510px';
        form2.style.left = '58px';
        progress.style.width = '190px'; // Increase the progress width
        document.getElementById('personal-error').textContent = 'Completed';
    } else {
        document.getElementById('personal-error').textContent = 'Please complete all personal details.';
    }
}




function goBackToForm1() {
    document.getElementById('personal-error').textContent = 'Completed';
    form1.style.left = '58px';
    form2.style.left = '510px';
    progress.style.width = '95px'; 
}

document.getElementById('back1').addEventListener('click', goBackToForm1);

// Function to validate Form 2
function validateForm2() {
    const collegename = document.getElementById('collegename').value;
    const collegelocation = document.getElementById('collegelocation').value;
    const fromcollege = document.getElementById('fromcollege').value;
    const tocollege = document.getElementById('tocollege').value;
    const highschoolname = document.getElementById('highschoolname').value;
    const highschoollocation = document.getElementById('highschoollocation').value;
    const from12school = document.getElementById('from12school').value;
    const to12school = document.getElementById('to12school').value;
    const schoolname = document.getElementById('schoolname').value;
    const schoollocation = document.getElementById('schoollocation').value;
    const from10school = document.getElementById('from10school').value;
    const to10school = document.getElementById('to10school').value;

    // Check if any required fields in Form 2 are empty
    if (
        !collegename ||
        !collegelocation ||
        !fromcollege ||
        !tocollege ||
        !highschoolname ||
        !highschoollocation ||
        !from12school ||
        !to12school ||
        !schoolname ||
        !schoollocation ||
        !from10school ||
        !to10school
    ) {
        document.getElementById('education-error').textContent =
            'Please complete all education details before proceeding.';
    } else {
        // Clear the error message (if displayed)
        document.getElementById('education-error').textContent = '';
        form2.style.left = '-510px';
        form3.style.left = '58px';
        progress.style.width = '285px'; 
    }
}

document.getElementById('next2').addEventListener('click', validateForm2);

function goBackToForm2() {
    form3.style.left = '510px';
    form2.style.left = '58px';
    progress.style.width = '190px';
    document.getElementById('education-error').textContent = 'Completed';
}

// Function to validate and move to Form 4
function validateForm3() {
    const about = document.getElementById('about').value;
    const selectedSkills = document.querySelectorAll('.selected-skill').length;
    const cert1 = document.getElementById('cert1').value;
    
    const errorElement = document.getElementById('skill-error');
    
    // Validate "ABOUT YOURSELF" character limit
    if (about.length >= 200 && about.length <= 500) {
        // Validate selected skills
        if (selectedSkills >= 1 && selectedSkills <= 6) {
            // Validate at least one certificate
            if (cert1) {
                form3.style.left = '-510px';
                form4.style.left = '58px';
                progress.style.width = '380px';
                errorElement.textContent = 'Completed'; // Clear any existing error message
            } else {
                errorElement.textContent = 'Please select at least one certificate.';
            }
        } else {
            errorElement.textContent = 'Please select between 1 to 6 skills.';
        }
    } else {
        errorElement.textContent = 'About Yourself must be between 200 to 500 characters.';
    }
}
document.getElementById('about').addEventListener('input', function () {
    const about = this.value;
    const charCountElement = document.getElementById('char-count');
    
    charCountElement.textContent = `${about.length}/500`;

    if (about.length >= 150 && about.length <= 200) {
        document.getElementById('about-error').textContent = '';
    }
});


document.getElementById('next3').addEventListener('click', validateForm3);

function goBackToForm2() {
    form3.style.left = '510px'; // Hide Form 3
    form2.style.left = '58px';  // Show Form 2
    progress.style.width = '190px'; // Update progress width for Form 2
    document.getElementById('education-error').textContent = 'Completed'; // Clear any existing error message
}

// Add event listener for the "BACK" button in Form 3
document.getElementById('back2').addEventListener('click', goBackToForm2);

// Function to go back to Form 3 from Form 4
function goBackToForm3() {
    form4.style.left = '510px'; // Hide Form 4
    form3.style.left = '58px';  // Show Form 3
    progress.style.width = '285px'; // Update progress width for Form 3
    document.getElementById('cert-error').textContent = 'Completed'; // Clear any existing error message
}

// Function to validate and move to Form 5
function validateForm4() {
    const github = document.getElementById('github').value;
    const linkedin = document.getElementById('linkedin').value;

    if (github && linkedin) {
        form4.style.left = '510px';
        form5.style.left = '58px';
        progress.style.width = '480px'; 
        document.getElementById('social-error').textContent = 'Completed';

    } else {
        document.getElementById('social-error').textContent = 'Please provide both GitHub and LinkedIn profiles.';
    }
}


    document.getElementById('back3').addEventListener('click', goBackToForm3);
    document.getElementById('next4').addEventListener('click', validateForm4);




    let slideIndex = 1;
    showSlides(slideIndex);
    
    function plusSlides(n) {
      showSlides(slideIndex += n);
    }
    
    function currentSlide(n) {
      showSlides(slideIndex = n);
    }
    
    function showSlides(n) {
      let i;
      let slides = document.getElementsByClassName("mySlides");
      let dots = document.getElementsByClassName("dot");
      if (n > slides.length) {slideIndex = 1}
      if (n < 1) {slideIndex = slides.length}
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
      for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
      }
      slides[slideIndex-1].style.display = "block";
      dots[slideIndex-1].className += " active";
    
      // Update the selectedLayoutName based on the current slide
      switch (slideIndex) {
        case 1:
          currentImageSrc = "Resume1.jpg";
          break;
        case 2:
          currentImageSrc = "Resume2.jpg";
          break;
        case 3:currentImageSrc="Resume3.jpg"
        break;
        // Add more cases for other layouts if needed
        default:
          currentImageSrc = "Resume1.jpg"; // Default layout
      }
    
    }
    

const download = document.getElementById("downloadbtn");

download.addEventListener("click", function (event) {
    event.preventDefault();
    if (uploadedPhoto) {
        document.getElementById('photo-error').textContent = '';
        download.classList.add("active");

        // Save all form values in localStorage
        localStorage.setItem('first', document.getElementById('first').value);
        localStorage.setItem('last', document.getElementById('last').value);
        localStorage.setItem('email', document.getElementById('email').value);
        localStorage.setItem('phone', document.getElementById('phone').value);
        localStorage.setItem('age', document.getElementById('age').value);
        localStorage.setItem('gender', document.getElementById('gender').value);
        localStorage.setItem('nationality', document.getElementById('nationality').value);
        localStorage.setItem('state', document.getElementById('state').value);
        localStorage.setItem('country', document.getElementById('country').value);
        localStorage.setItem('collegename', document.getElementById('collegename').value);
        localStorage.setItem('collegelocation', document.getElementById('collegelocation').value);
        localStorage.setItem('fromcollege', document.getElementById('fromcollege').value);
        localStorage.setItem('tocollege', document.getElementById('tocollege').value);
        localStorage.setItem('highschoolname', document.getElementById('highschoolname').value);
        localStorage.setItem('highschoollocation', document.getElementById('highschoollocation').value);
        localStorage.setItem('from12school', document.getElementById('from12school').value);
        localStorage.setItem('to12school', document.getElementById('to12school').value);
        localStorage.setItem('schoolname', document.getElementById('schoolname').value);
        localStorage.setItem('schoollocation', document.getElementById('schoollocation').value);
        localStorage.setItem('from10school', document.getElementById('from10school').value);
        localStorage.setItem('to10school', document.getElementById('to10school').value);
        localStorage.setItem('about', document.getElementById('about').value);
        const selectedSkills = Array.from(document.querySelectorAll('.selected-skill')).map(skill => skill.textContent).join(',');
        localStorage.setItem('selectedSkills', selectedSkills);
        localStorage.setItem('cert1', document.getElementById('cert1').value);
        localStorage.setItem('cert2', document.getElementById('cert2').value);
        localStorage.setItem('cert3', document.getElementById('cert3').value);
        localStorage.setItem('github', document.getElementById('github').value);
        localStorage.setItem('linkedin', document.getElementById('linkedin').value);
        localStorage.setItem('imgSrc', img.src);

  // Store the src name in localStorage
        localStorage.setItem('currentImageSrc', currentImageSrc);
        const delayInMilliseconds = 6000; // 2 seconds
        setTimeout(delayedTask, delayInMilliseconds);
    } else {
        // Display an error message and prevent the download
        document.getElementById('photo-error').textContent = 'Please upload a photo before downloading.';
    }
});

function delayedTask(){
    window.location.href = 'resume copy.html';
}





