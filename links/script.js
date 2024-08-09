document.addEventListener('DOMContentLoaded', () => {
    const linkList = document.getElementById('linkList');
    const addLinkButton = document.getElementById('addLinkButton');
    const removeSelectedButton = document.getElementById('removeSelectedButton');
    const modal = document.getElementById('modal');
    const closeModal = document.querySelector('.close');
    const saveLinkButton = document.getElementById('saveLinkButton');
    const newLinkText = document.getElementById('newLinkText');
    const newLinkURL = document.getElementById('newLinkURL');

    // Function to create a new link item
    function createLinkItem(text, url) {
        const li = document.createElement('li');
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        const link = document.createElement('a');
        link.href = url;
        link.target = '_blank';
        link.textContent = text;
        li.appendChild(checkbox);
        li.appendChild(link);
        return li;
    }

    // Add Link button click event
    addLinkButton.addEventListener('click', () => {
        modal.style.display = 'block';
    });

    // Close modal
    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    // Save Link button click event
    saveLinkButton.addEventListener('click', () => {
        const text = newLinkText.value.trim();
        const url = newLinkURL.value.trim();
        if (text && url) {
            const linkItem = createLinkItem(text, url);
            linkList.appendChild(linkItem);
            newLinkText.value = '';
            newLinkURL.value = '';
            modal.style.display = 'none';
        }
    });

    // Remove selected links
    removeSelectedButton.addEventListener('click', () => {
        const checkboxes = linkList.querySelectorAll('input[type="checkbox"]:checked');
        checkboxes.forEach(checkbox => {
            linkList.removeChild(checkbox.parentElement);
        });
    });
});
