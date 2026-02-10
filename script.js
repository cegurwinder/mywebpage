document.getElementById('quoteForm').addEventListener('submit', function(e) {
    e.preventDefault();
    document.getElementById('formMessage').innerText = 
        "Thank you! Your request has been submitted.";
    this.reset();
});
