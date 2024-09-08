// Define interfaces for the resume data
interface ResumeData {
    name: string;
    email: string;
    education: string;
    workExperience: string;
    skills: string;
}

// Function to generate resume HTML
function generateResumeHTML(data: ResumeData): string {
    return `
      <h2>${data.name}</h2>
      <p><strong>Email:</strong> ${data.email}</p>
      <h3>Education</h3>
      <p>${data.education}</p>
      <h3>Work Experience</h3>
      <p>${data.workExperience}</p>
      <h3>Skills</h3>
      <p>${data.skills}</p>
    `;
}

// Function to handle form submission
function handleFormSubmit(event: Event): void {
    event.preventDefault();

    const form = document.getElementById('resumeForm') as HTMLFormElement;
    const formData = new FormData(form);

    const data: ResumeData = {
        name: formData.get('name') as string,
        email: formData.get('email') as string,
        education: formData.get('education') as string,
        workExperience: formData.get('workExperience') as string,
        skills: formData.get('skills') as string,
    };

    const resumeOutput = document.getElementById('resumeOutput') as HTMLElement;
    resumeOutput.innerHTML = generateResumeHTML(data);
}

// Attach event listener
document.getElementById('resumeForm')?.addEventListener('submit', handleFormSubmit);
