const coursesInput = document.getElementById("coursesInput");
const coursesButton = document.getElementById("coursesButtons");
const coursesTaking = document.getElementById("coursesTaking");
var count = 0;

coursesTaking.addEventListener("click", addCourseInput); 

function addCourseInput() {
    instantiateDelete();
    var newInput = document.createElement('input');
    newInput.type = 'text';
    newInput.id = 'coursesUserTaken';
    newInput.className = 'coursesUserTaken';
    coursesInput.appendChild(newInput);
    var lineBreak = document.createElement('br');
    coursesInput.appendChild(lineBreak);
    count++;
}
function displayCourses() {
    let coursesListHTML = ''; 
    for(let x = 0; x < coursesInput.children.length; x++) {
        if(coursesInput.children[x].value){
            coursesListHTML += `<li>${coursesInput.children[x].value}</li>`;
        }
    }
    return coursesListHTML;
}
function instantiateDelete() {
    if (!document.getElementById('deleteButton') && count >= 1) {
        var deleteButton = document.createElement('input');
        deleteButton.type = 'button';
        deleteButton.id = 'deleteButton';
        deleteButton.className = 'deleteButton';
        deleteButton.value = 'Delete';
        coursesButton.appendChild(deleteButton);
        var spacing = document.createElement('br');
        coursesButton.appendChild(spacing);

        deleteButton.addEventListener("click", () => {
            if (coursesInput.lastElementChild) {
                coursesInput.removeChild(coursesInput.lastElementChild);
                coursesInput.removeChild(coursesInput.lastElementChild);
                count--; 
                if (count === 0) {
                    deleteButton.remove();
                }
            }
        });
    }    
}

const username = document.getElementById("username");
const mascot = document.getElementById("mascot");
const image = document.getElementById("intro-img");
const imageCaption = document.getElementById("img-cap");
const personalBackground = document.getElementById("personal");
const professionalBackground = document.getElementById("professional");
const academicBackground = document.getElementById("academic");
const backgroundDevelopment = document.getElementById("background");
const platform = document.getElementById("platform");
const funnyThing = document.getElementById("funny");
const anythingElse = document.getElementById("else");
const introBox = document.getElementById("introduction");
const form = document.getElementById("form");

    form.addEventListener("submit", function(event) {
        event.preventDefault();
        const courseListHTML = displayCourses();

        var imageLoad = image.files[0];
        const imageURL = URL.createObjectURL(imageLoad);
        var text = "<img src=\"" + imageURL + "\" >";
        
        introBox.innerHTML = '';
        introBox.innerHTML = `
        <h2>Introduction</h2>
        <h2> ${username.value} || ${mascot.value}</h2>
        <figure>
            ${text}
            <figcaption>${imageCaption.value}</figcaption>
        </figure>
            <ul>
                <li><strong>Personal Background:</strong> ${personalBackground.value}</li>
                <li><strong>Professional Background:</strong>  ${professionalBackground.value}</li>
                <li><strong>Academic Background:</strong> ${academicBackground.value}</li>
                <li><strong>Background in this Subject:</strong> ${backgroundDevelopment.value}</li>
                <li><strong>Primary Computer Platform:</strong>  ${platform.value}</li>
                <li><strong>Courses I'm Taking & Why:</strong>
                    <ul>
                        ${courseListHTML}
                    </ul>
                </li>
                <li><strong>Funny/Interesting Item to Remember me by:</strong> ${funnyThing.value}</li> 
                <li><strong>I'd also like to Share:</strong> ${anythingElse.value}</li>
            </ul>
           
        `;
    });

    

    
    