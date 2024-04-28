 function previewForm() {
            // Get form values
            var name = document.getElementById('name').value;
            var email = document.getElementById('email').value;
            var message = document.getElementById('message').value;
            var image = document.getElementById('image').files[0];

            // Create preview HTML
            var previewDiv = document.getElementById('preview');
            var previewHTML = '<h3>Preview:</h3>' +
                              '<p><strong>Name:</strong> ' + name + '</p>' +
                              '<p><strong>Email:</strong> ' + email + '</p>' +
                              '<p><strong>Message:</strong> ' + message + '</p>';
            // Check if an image was selected
            if (image) {
                // Create a preview image element
                var img = document.createElement('img');
                img.src = URL.createObjectURL(image);
                img.height ='200px';
                img.width ='auto';
                img.onload = function() {
                    URL.revokeObjectURL(this.src);
                };
                // Append image to preview HTML
                previewHTML += '<p><strong>Image:</strong></p>';
                previewHTML += '<div>';
                previewHTML += img.outerHTML;
                previewHTML += '</div>';
            }
            // Display preview
            previewDiv.innerHTML = previewHTML;
        }