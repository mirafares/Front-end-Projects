document.getElementById('coverImage').addEventListener('change', function () {
    displayImagePreview(this);
});   



function displayImagePreview(input) {
    const imagePreview = document.getElementById('imagePreview');
    const imagePreviewContainer = document.getElementById('imagePreviewContainer');

    if (input.files && input.files[0]) {
        const reader = new FileReader();

        reader.onload = function (e) {
            imagePreview.src = e.target.result;
            imagePreviewContainer.style.display = 'block';
        };

        reader.readAsDataURL(input.files[0]);
    } else {
        imagePreview.src = '';
        imagePreviewContainer.style.display = 'none';
    }
}

function submitProject() {
    // Add logic to handle form submission (e.g., using AJAX or fetch)
    // For simplicity, let's assume the form data is stored in an object
    var projectName = document.getElementById('projectName').value;
  
    if (projectName === '' ) {
        alert('Please enter project name');
        return; // Prevent further execution of the function
    }
        // Simulate registration logic (replace with actual registration logic)
    alert(`project created successfullly!\nProject Name: ${projectName}`);

        // Redirect to success page after registration
    localStorage.setItem('userData', `Project Name: ${projectName}`);
    window.location.href = 'success.html';
    }

