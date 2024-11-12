var form = document.getElementById('all-form');
var resumeDisplay = document.getElementById('display');
if (form && resumeDisplay) {
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        var name = document.getElementById('name').value;
        var title = document.getElementById('title').value;
        var email = document.getElementById('email').value;
        var phone = document.getElementById('phone').value;
        var address = document.getElementById('address').value;
        var education = document.getElementById('education').value;
        var experience = document.getElementById('experience').value;
        var skill = document.getElementById('skill').value;
        resumeDisplay.innerHTML = '';
        var header = "\n        \n       \n            <header >\n                <h1>".concat(name, "</h1>\n                <p class=\"main\"></p>\n                <h3>").concat(title, "</h3>\n                <p>Email: ").concat(email, "  |   Phone: ").concat(phone, "</p>\n            </header>\n        ");
        var addressSection = "\n        \n            <section class=\"address\">\n                <h2>Address</h2>\n                <p>".concat(address, "</p>\n            </section>\n            <section class=\"address\">\n                <h2>Education</h2>\n                <p>").concat(education, "</p>\n            </section>\n             <section class=\"address\">\n                <h2>Experience</h2>\n                <p>").concat(experience, "</p>\n            </section>\n            <section class=\"address\">\n                <h2>Skill</h2>\n                <p>").concat(skill, "</p>\n            </section>\n           \n            \n        ");
        resumeDisplay.innerHTML = header + addressSection;
    });
}
else {
    console.error('Form or resume display element not found');
}
