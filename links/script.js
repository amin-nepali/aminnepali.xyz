document.addEventListener('DOMContentLoaded', () => {
    const linkList = document.getElementById('linkList');
    const addLinkButton = document.getElementById('addLinkButton');
    const removeSelectedButton = document.getElementById('removeSelectedButton');
    const modal = document.getElementById('modal');
    const closeModal = document.querySelector('.close');
    const saveLinkButton = document.getElementById('saveLinkButton');
    const newLinkText = document.getElementById('newLinkText');
    const newLinkURL = document.getElementById('newLinkURL');

    // Load links from the server
    function loadLinks() {
        fetch('links.txt')
            .then(response => response.text())
            .then(data => {
                const links = JSON.parse(data);
                links.forEach(link => {
                    const linkItem = createLinkItem(link.text, link.url);
                    linkList.appendChild(linkItem);
                });
            })
            .catch(error => console.error('Error loading links:', error));
    }

    // Save links to the server
    function saveLinks() {
        const links = [];
        linkList.querySelectorAll('li').forEach(li => {
            const link = li.querySelector('a');
            links.push({
                text: link.textContent,
                url: link.href
            });
        });

        fetch('links.txt', {
            method: 'POST',  // This would only work if your server accepts POST requests to save the file
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(links)
        })
        .then(response => response.text())
        .then(data => console.log('Links saved successfully.'))
        .catch(error => console.error('Error saving links:', error));
    }

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
            saveLinks();  // Save links to the server
            modal.style.display = 'none';
        }
    });

    // Remove selected links
    removeSelectedButton.addEventListener('click', () => {
        const checkboxes = linkList.querySelectorAll('input[type="checkbox"]:checked');
        checkboxes.forEach(checkbox => {
            linkList.removeChild(checkbox.parentElement);
        });
        saveLinks();  // Update links on the server
    });

    // Initial load
    loadLinks();
});
