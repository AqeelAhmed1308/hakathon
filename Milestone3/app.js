var _a;
// Function to generate resume HTML
function generateResumeHTML(data) {
    return "\n      <h2>".concat(data.name, "</h2>\n      <p><strong>Email:</strong> ").concat(data.email, "</p>\n      <h3>Education</h3>\n      <p>").concat(data.education, "</p>\n      <h3>Work Experience</h3>\n      <p>").concat(data.workExperience, "</p>\n      <h3>Skills</h3>\n      <p>").concat(data.skills, "</p>\n    ");
}
// Function to handle form submission
function handleFormSubmit(event) {
    event.preventDefault();
    var form = document.getElementById('resumeForm');
    var formData = new FormData(form);
    var data = {
        name: formData.get('name'),
        email: formData.get('email'),
        education: formData.get('education'),
        workExperience: formData.get('workExperience'),
        skills: formData.get('skills'),
    };
    var resumeOutput = document.getElementById('resumeOutput');
    resumeOutput.innerHTML = generateResumeHTML(data);
}
// Attach event listener
(_a = document.getElementById('resumeForm')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', handleFormSubmit);
