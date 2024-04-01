// Create a new XMLHttpRequest object
var xhr = new XMLHttpRequest();

// Define the request details
xhr.open('GET', 'https://jsonplaceholder.typicode.com/users', true);

// Set up event handler to handle response
xhr.onreadystatechange = function() {
    if (xhr.readyState === XMLHttpRequest.DONE) {
        if (xhr.status === 200) {
            // Parse the JSON response
            var users = JSON.parse(xhr.responseText);

            // Log list of user names to the browser console
            console.log('List of user names:');
            console.log(users)
            

            // Output list of user names to the HTML document
            var userList = document.getElementById('userList');
            userList.innerHTML = '<h2>List of user names:</h2>';
            users.forEach(function(user) {
                var listItem = document.createElement('li');
                listItem.textContent = user.name;
                userList.appendChild(listItem);
            });
        } else {
            // Error handling if request fails
            console.error('Request failed: ' + xhr.status);
        }
    }
};

// Send the request
xhr.send();
