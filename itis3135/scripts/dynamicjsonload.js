        // script.js
        document.addEventListener("DOMContentLoaded", function() {
            // Fetch JSON data
            fetch("components/mainmenu.json")
                .then(response => response.json())
                .then(data => {
                    // Process JSON data
                    const menuContainer = document.getElementById("menu-container");
                    data.forEach(item => {
                        // Create menu item link element
                        const menuItem = document.createElement("a");
                        menuItem.classList.add("menu-item");
                        menuItem.textContent = item.name;
                        menuItem.href = item.url; // Assuming each menu item has a 'url' property in JSON
        
                        // Append menu item to the container
                        menuContainer.appendChild(menuItem);
                        menuContainer.append(` 𓆝 `);
                    });
                })
                .catch(error => console.error("Error fetching menu:", error));
                fetch("components/secmenu.json")
                .then(response => response.json())
                .then(data => {
                    // Process JSON data
                    const menuContainer = document.getElementById("menu-container");
                    menuContainer.innerHTML +=`<br>`
                    data.forEach(item => {
                        // Create menu item link element
                        const menuItem = document.createElement("a");
                        menuItem.classList.add("menu-item");
                        menuItem.textContent = item.name;
                        menuItem.href = item.url; // Assuming each menu item has a 'url' property in JSON
                        menuItem.target="_blank"
                        // Append menu item to the container
                        menuContainer.appendChild(menuItem);
                        menuContainer.append(` 𓆝 `);
                    });
                })
                .catch(error => console.error("Error fetching menu:", error));
                fetch("components/footmenu.json")
                .then(response => response.json())
                .then(data => {
                    // Process JSON data
                    const menuContainer = document.getElementById("container-footer");
                    
                    data.forEach(item => {
                        // Create menu item link element
                        const menuItem = document.createElement("a");
                        menuItem.classList.add("menu-item");
                        menuItem.textContent = item.name;
                        menuItem.href = item.url; // Assuming each menu item has a 'url' property in JSON
                        menuItem.target="_blank"
        
                        // Append menu item to the container
                        menuContainer.appendChild(menuItem);
                        menuContainer.append(` 𓆝 `);
                    });
                    menuContainer.innerHTML +=`<br>`;
                })
                .catch(error => console.error("Error fetching menu:", error));
                fetch("components/otherfootmenu.json")
                .then(response => response.json())
                .then(data => {
                    // Process JSON data
                    const menuContainer = document.getElementById("design");
                        menuContainer.style.display="inline-block"
                        const descript = document.createElement("p");
                        descript.textContent="Page designed by ";
                        // Create menu item link element
                        const menuItem = document.createElement("a");
                        menuItem.classList.add("menu-item");
                        menuItem.textContent = data[0].name;
                        menuItem.href = data[0].url; // Assuming each menu item has a 'url' property in JSON
                        menuItem.target="_blank";
                        
                        // Append menu item to the container
                        // menuContainer.appendChild(descript);
                        menuContainer.textContent+="Page designed by "
                        menuContainer.appendChild(menuItem);
                        menuContainer.innerHTML+="<p style='display:inline'>  ©2024, </p>";
                        const menuItem2 = document.createElement("a");
                        menuItem2.textContent = data[1].name;
                        menuItem2.href = data[1].url;
                        menuItem2.target="_blank";
                        menuContainer.appendChild(menuItem2);
                        menuContainer.innerHTML+="<p style='display:inline'>, </p>";
                        const menuItem3 = document.createElement("a");
                        menuItem3.textContent = data[2].name;
                        menuItem3.href = data[2].url;
                        menuItem3.target="_blank";
                        menuContainer.appendChild(menuItem3);
                        menuContainer.innerHTML +=`<br>`;
                })
                .catch(error => console.error("Error fetching menu:", error));
        });
        
        // Function to validate HTML
        function validateHTML() {
            const currentURL = encodeURIComponent(window.location.href);
            window.open(`https://validator.w3.org/nu/?doc=${currentURL}`, "_blank");
        }
        
        // Function to validate CSS
        function validateCSS() {
            const currentURL = encodeURIComponent(window.location.href);
            window.open(`https://jigsaw.w3.org/css-validator/validator?uri=${currentURL}&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en`, "_blank");
        }
        
        // Function to validate AIM (Accessibility, SEO, and Mobile-friendliness)
        function validateAIM() {
            // Replace the URL with the tool you prefer for accessibility, SEO, and mobile-friendliness validation
            window.open("https://www.google.com/webmasters/tools/mobile-friendly/", "_blank");
        }