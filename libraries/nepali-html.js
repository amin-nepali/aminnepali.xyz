document.addEventListener("DOMContentLoaded", function() {
    const nepaliToHTML = {
        'शिर्षक': 'title',
        'अनुच्छेद': 'p',
        'तस्वीर': 'img',
        'स्रोत': 'src',
        'विकल्प': 'alt'
    };

    function translate(element) {
        Object.keys(nepaliToHTML).forEach(nepali => {
            const htmlTag = nepaliToHTML[nepali];
            const elements = document.getElementsByTagName(nepali);
            Array.from(elements).forEach(el => {
                const newElement = document.createElement(htmlTag);
                while (el.firstChild) {
                    newElement.appendChild(el.firstChild);
                }
                for (let i = 0; i < el.attributes.length; i++) {
                    const attr = el.attributes[i];
                    newElement.setAttribute(nepaliToHTML[attr.name] || attr.name, attr.value);
                }
                el.parentNode.replaceChild(newElement, el);
            });
        });
    }

    translate(document);
});
