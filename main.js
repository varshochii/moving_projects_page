

// Get elemnts from the DOM 
const container = document.querySelector('main');
const projects = document.querySelector('.projects');
const sensivity = 2; //Adjust the sensivity value as needed 

/// Add mouse move event to the container 
container.addEventListener('mousemove', e => {

     // Get the x, y mouse coordinates 
     const clientX = e.clientX;
     const clientY = e.clientY;

     /// set the project position to the mouse coordinates
       projects.style.top = `-${clientY - sensivity}px`;
       projects.style.left = `-${clientX - sensivity}px`; 
})