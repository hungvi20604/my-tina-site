document.addEventListener('DOMContentLoaded', () => {
    const commentForm = document.getElementById('comment-form');
    const nameInput = document.getElementById('name-input');
    const commentInput = document.getElementById('comment-input');
    const commentsContainer = document.getElementById('comments-container');
    const noComments = document.getElementById('no-comments');
    const commentCount = document.getElementById('comment-count');

    commentForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const nameText = nameInput.value.trim();
        const commentText = commentInput.value.trim();
        if (nameText && commentText) {
            addComment(nameText, commentText);
            nameInput.value = '';
            commentInput.value = '';
        }
    });

    function addComment(name, text) {
        const commentElement = document.createElement('div');
        commentElement.className = 'comment';
        commentElement.innerHTML = `
            <div class="comment-header">
                <img src="https://motchilltv.ac/_ipx/f_webp&s_40x40/cast-image.png" alt="User Avatar">
                <span class="comment-name">${name}</span>
                <span class="comment-time">bây giờ</span>
            </div>
            <div class="comment-body">
                <p>${text}</p>
            </div>
        `;
        commentsContainer.appendChild(commentElement);

        updateCommentCount();
        checkNoComments();
    }

    function updateCommentCount() {
        const comments = commentsContainer.getElementsByClassName('comment').length;
        commentCount.textContent = comments;
    }

    function checkNoComments() {
        const comments = commentsContainer.getElementsByClassName('comment').length;
        if (comments > 0) {
            noComments.style.display = 'none';
        } else {
            noComments.style.display = 'block';
        }
    }

    checkNoComments();
});
