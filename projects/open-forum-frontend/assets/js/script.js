// This file contains JavaScript functions for handling user interactions, such as posting comments, managing user authentication, and fetching thread data from the backend API.

document.addEventListener('DOMContentLoaded', function() {
    const commentInput = document.getElementById('commentInput');
    const commentSection = document.querySelector('.comment-section');

    // Function to post a comment
    window.postComment = function() {
        const commentText = commentInput.value.trim();
        if (commentText) {
            const newComment = document.createElement('div');
            newComment.classList.add('comment');
            newComment.innerHTML = `
                <div class="meta">You | just now</div>
                <p>${commentText}</p>
            `;
            commentSection.appendChild(newComment);
            commentInput.value = ''; // Clear the input
        } else {
            alert('Please enter a comment before submitting.');
        }
    };

    // Function to handle user login
    window.login = function() {
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        // Simulate an API call for user authentication
        if (email && password) {
            // Here you would typically make an API call to authenticate the user
            alert('Login successful!');
            // Redirect to the homepage or dashboard
            window.location.href = 'index.html';
        } else {
            alert('Please enter both email and password.');
        }
    };

    // Function to fetch thread data (placeholder for actual API call)
    window.fetchThreadData = function(threadId) {
        // Simulate fetching thread data from an API
        console.log(`Fetching data for thread ID: ${threadId}`);
        // Here you would typically make an API call to get the thread details
    };
});