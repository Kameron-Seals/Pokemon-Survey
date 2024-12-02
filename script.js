document.addEventListener('DOMContentLoaded', function () {
    const otherCheckbox = document.getElementById('other');
    const otherTextArea = document.getElementById('other-text');
    
    // Initially disable the textarea
    otherTextArea.disabled = true;
    otherTextArea.style.backgroundColor = '#f0f0f0'; // Gray out the textarea
    
    // Enable/disable the textarea based on checkbox status
    otherCheckbox.addEventListener('change', function () {
        if (otherCheckbox.checked) {
            otherTextArea.disabled = false;
            otherTextArea.style.backgroundColor = 'white'; // Enable textarea
        } else {
            otherTextArea.disabled = true;
            otherTextArea.style.backgroundColor = '#f0f0f0'; // Gray out the textarea
        }
    });
});
