// You are assigned to perform a content analysis on a news website. Your task is to determine 
// how many articles, images, and external links are present on the homepage. 
// Consider the website URL: https://www.indiatoday.in/india

////////////////////////////////
////Without forEach/////////////
////////////////////////////////

(function() {
    // Count articles
    let articles = document.querySelectorAll('article, .article, .news-item');
    let articleCount = articles.length;

    // Count images
    let images = document.querySelectorAll('img');
    let imageCount = images.length;

    // Count external links
    let links = document.querySelectorAll('a');
    let externalLinkCount = Array.from(links).filter(link => {
        let href = link.getAttribute('href');
        return href && !href.startsWith(window.location.hostname);
    }).length;

    // Output results
    console.log('Number of articles:', articleCount);
    console.log('Number of images:', imageCount);
    console.log('Number of external links:', externalLinkCount);
})();

////////////////////////////////
/////With forEach///////////////
////////////////////////////////

(function() {
    // Count articles
    let articles = document.querySelectorAll('article, .article, .news-item');
    let articleCount = articles.length;

    // Count images
    let images = document.querySelectorAll('img');
    let imageCount = images.length;

    // Count external links
    let links = document.querySelectorAll('a');
    let externalLinks = []

    links.forEach((link)=>{
        let href = link.getAttribute("href");
        if(href && !href.startsWith(window.location.hostname)){
            externalLinks.push(link);
        }
    })
    
    const externalLinkCount = externalLinks.length;

    // Output results
    console.log('Number of articles:', articleCount);
    console.log('Number of images:', imageCount);
    console.log('Number of external links:', externalLinkCount);
})();


/////////////////////////////////////////////////////////////////////





// You are enhancing the user experience on a blogging platform. You want to ensure that every 
// time a user clicks on a link, they receive an alert with the link's name without manually 
// specifying each link. 

(function() {
    // Function to show alert with link text
    function showAlert(event) {
        event.preventDefault(); // Optional: Prevents the default link action (navigation)
        alert('Link clicked: ' + this.textContent.trim());
    }

    // Get all link elements
    const links = document.querySelectorAll('a');

    // Add click event listener to each link
    links.forEach(link => {
        link.addEventListener('click', showAlert);
    });
})();





//////////////////////////////////////////////////////////////////////////////////////



// You are customizing the behaviour of a Wikipedia page for an educational tool. When users 
// click on any link, you want the link to open in a popup window instead of the same tab or a new 
// tab. 
// Consider the website URL: https://en.wikipedia.org/wiki/PHP
// 7.Write a JavaScript function that prevents the default behaviour of opening links in the 
// same tab and instead opens them in a popup window.

(function() {
    // Function to open link in a popup window
    function openInPopup(event) {
        event.preventDefault(); // Prevent the default link action (navigation)
        
        // Get the URL from the link
        const url = this.href;

        // Define the parameters for the popup window
        const popupFeatures = 'width=800,height=600,scrollbars=yes,resizable=yes';

        // Open the URL in a popup window
        window.open(url, 'popupWindow', popupFeatures);
    }

    // Get all link elements
    const links = document.querySelectorAll('a');

    // Add click event listener to each link
    links.forEach(link => {
        link.addEventListener('click', openInPopup);
    });
})();




/////////////////////////////////////////////////////////////////////////////////////





// Click & Glow
// You are working on a web application that needs to handle a unique action whenever a user 
// interacts with a button. This interaction should trigger a specific function that changes the 
// background colour of the button. You need to implement this functionality using JavaScript and 
// test it in the browser console. Ensure that the colour change logic is not directly included in the 
// click event handler but is instead triggered through a custom event.
// Consider the website URL: https://example.com/
// 8.Questions:
// • Create a button element with the text "Click Me" and add it to the DOM.
// • Implement a mechanism to handle a custom user interaction on the button.
// • Define a function that changes the background colour of the button whenever the 
// custom interaction occurs.
// • Ensure that the click event handler only dispatches the custom event, and does not 
// directly include the colour change code.



(function() {
    // Create a button element
    const button = document.createElement('button');
    button.textContent = 'Click Me';
    button.id = 'clickMeButton';

    // Add the button to the body of the document
    document.body.appendChild(button);

    // Define the custom event
    const colorChangeEvent = new Event('colorChange');

    // Function to change the background color of the button
    function changeButtonColor(event) {
        event.target.style.backgroundColor = 'lightblue';
    }

    // Add event listener for the custom event
    button.addEventListener('colorChange', changeButtonColor);

    // Add click event listener to dispatch the custom event
    button.addEventListener('click', function() {
        button.dispatchEvent(colorChangeEvent);
    });
})();



/////////////////////////////////////////////////////////////////////////////////////



// Rainbow Clock
// You are working on a web application that needs to display the current time in a paragraph and 
// perform an additional task where the text colour changes through a sequence of rainbow 
// colours. Specifically, you need to display the time in the paragraph, update it every second, and 
// change the text colour through an array of rainbow colours, updating the colour every 3 
// seconds. You need to implement this functionality using JavaScript and test it in the browser 
// console.
// Consider the website URL: https://example.com/
// 9.Questions:
// • Create a paragraph element with the initial text "Current Time: " and add it to the DOM.
// • Create a function that updates the paragraph with the current time every second.
// • Implement a mechanism to cycle through an array of rainbow colours and change the 
// text colour of the paragraph every 3 seconds.
// • Ensure that setInterval and setTimeout is used



(function() {
    // Create and add a paragraph element to the DOM
    const paragraph = document.createElement('p');
    paragraph.id = 'clock';
    paragraph.textContent = 'Current Time: ';
    document.body.appendChild(paragraph);

    // Array of rainbow colors
    const rainbowColors = [
        'red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'
    ];

    let colorIndex = 0;

    // Function to update the current time
    function updateTime() {
        const now = new Date();
        const hours = now.getHours().toString().padStart(2, '0');
        const minutes = now.getMinutes().toString().padStart(2, '0');
        const seconds = now.getSeconds().toString().padStart(2, '0');
        paragraph.textContent = `Current Time: ${hours}:${minutes}:${seconds}`;
    }

    // Function to cycle through rainbow colors
    function changeColor() {
        paragraph.style.color = rainbowColors[colorIndex];
        colorIndex = (colorIndex + 1) % rainbowColors.length;
    }

    // Update time every second
    setInterval(updateTime, 1000);

    // Change color every 3 seconds
    setInterval(changeColor, 3000);

    // Initial call to set the time immediately on page load
    updateTime();
})();
