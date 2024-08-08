const fileInput = document.getElementById('file');
const imgArea = document.querySelector('.img-area');
const selectImageBtn = document.querySelector('.select-image');
let imageDataURL = '';


selectImageBtn.addEventListener('click', () => {
    fileInput.click();
});

fileInput.addEventListener('change', function() {
    const file = this.files[0];
    if (file.size > 2 * 1024 * 1024) { 
        alert('Image size must be less than 2MB'); // Show alert if file is too big
        return;
    }
    const reader = new FileReader(); 
    reader.onload = function() { 
        imageDataURL = reader.result; 
        imgArea.innerHTML = `<img src="${reader.result}" alt="Uploaded Image">`; 
    }
    reader.readAsDataURL(file); 
});


document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault(); 

    // Collect form data
    function saveData() {
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const age = document.getElementById('age').value;
        const profile = document.getElementById('profile').value;
        const degree = document.getElementById('degree').value;
        const institution = document.getElementById('institution').value;
        const message = document.getElementById('message').value;
        const job = document.getElementById('job').value;
        const experience = document.getElementById('experience').value;

        // Store data in local storage
        localStorage.setItem('image', imageDataURL);
        localStorage.setItem('name', name);
        localStorage.setItem('age', age);
        localStorage.setItem('email', email);
        localStorage.setItem('phone', phone);
        localStorage.setItem('profile', profile);
        localStorage.setItem('degree', degree);
        localStorage.setItem('institution', institution);
        localStorage.setItem('message', message);
        localStorage.setItem('job', job);
        localStorage.setItem('experience', experience);
    }
    
    saveData(); // Call the saveData function to store information
    
    // Update the portfolio templates with user data
    document.getElementById('template1Image').src = imageDataURL;
    document.getElementById('template1Name').textContent = document.getElementById('name').value;
    document.getElementById('template1Age').textContent = document.getElementById('age').value;
    document.getElementById('template1Email').textContent = document.getElementById('email').value;
    document.getElementById('template1Number').textContent = document.getElementById('phone').value;
    document.getElementById('template1Profile').textContent = document.getElementById('profile').value;
    document.getElementById('template1Degree').textContent = document.getElementById('degree').value;
    document.getElementById('template1Institution').textContent = document.getElementById('institution').value;
    document.getElementById('template1Message').textContent = document.getElementById('message').value;
    document.getElementById('template1Job').textContent = document.getElementById('job').value;
    document.getElementById('template1Experience').textContent = document.getElementById('experience').value;

    document.getElementById('template2Image').src = imageDataURL;
    document.getElementById('template2Name').textContent = document.getElementById('name').value;
    document.getElementById('template2Age').textContent = document.getElementById('age').value;
    document.getElementById('template2Email').textContent = document.getElementById('email').value;
    document.getElementById('template2Number').textContent = document.getElementById('phone').value;
    document.getElementById('template2Profile').textContent = document.getElementById('profile').value;
    document.getElementById('template2Degree').textContent = document.getElementById('degree').value;
    document.getElementById('template2Institution').textContent = document.getElementById('institution').value;
    document.getElementById('template2Message').textContent = document.getElementById('message').value;
    document.getElementById('template2Job').textContent = document.getElementById('job').value;
    document.getElementById('template2Experience').textContent = document.getElementById('experience').value;

    // Display the templates
    document.getElementById('template1').style.display = 'block';
    document.getElementById('template2').style.display = 'block';
});

// Check if there is saved data in local storage and display it
document.addEventListener('DOMContentLoaded', () => {
    const image = localStorage.getItem('image');
    const name = localStorage.getItem('name');
    const age = localStorage.getItem('age');
    const email = localStorage.getItem('email');
    const phone = localStorage.getItem('phone');
    const profile = localStorage.getItem('profile');
    const degree = localStorage.getItem('degree');
    const institution = localStorage.getItem('institution');
    const message = localStorage.getItem('message');
    const job = localStorage.getItem('job');
    const experience = localStorage.getItem('experience');

    if (image) {
        document.getElementById('template1Image').src = image;
        document.getElementById('template2Image').src = image;
    }
    if (name) document.getElementById('template1Name').textContent = name;
    if (age) document.getElementById('template1Age').textContent = age;
    if (email) document.getElementById('template1Email').textContent = email;
    if (phone) document.getElementById('template1Number').textContent = phone;
    if (profile) document.getElementById('template1Profile').textContent = profile;
    if (degree) document.getElementById('template1Degree').textContent = degree;
    if (institution) document.getElementById('template1Institution').textContent = institution;
    if (message) document.getElementById('template1Message').textContent = message;
    if (job) document.getElementById('template1Job').textContent = job;
    if (experience) document.getElementById('template1Experience').textContent = experience;

    if (name) document.getElementById('template2Name').textContent = name;
    if (age) document.getElementById('template2Age').textContent = age;
    if (email) document.getElementById('template2Email').textContent = email;
    if (phone) document.getElementById('template2Number').textContent = phone;
    if (profile) document.getElementById('template2Profile').textContent = profile;
    if (degree) document.getElementById('template2Degree').textContent = degree;
    if (institution) document.getElementById('template2Institution').textContent = institution;
    if (message) document.getElementById('template2Message').textContent = message;
    if (job) document.getElementById('template2Job').textContent = job;
    if (experience) document.getElementById('template2Experience').textContent = experience;

    
    document.getElementById('template1').style.display = 'block';
    document.getElementById('template2').style.display = 'block';
});
