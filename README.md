# fireFlies

Copy the .js file and paste into the editor playground at https://editor.p5js.org to interact with the code output in real time.
Or open the .html file for the experience in a web browser. 

Using the p5.js library, this JavaScript program simulates reactive flashing fireflies at night with an
interactive particle system displayed on a black canvas that responds to the functions "mouseMoved" and "mouseClicked".

Below, a brief explanation of the code:

let particles = [];: An array to store the Particle objects/fireflies.

function setup(): The p5.js setup function is called once when the program starts.
It creates the black canvas with the size of the window and initializes
50 Particle objects/fireflies with random positions, adding them to the particles array.

function draw(): The p5.js draw function continuously updates the canvas.
It sets the background color to black, to imitate night, and iterates through the particles array, updating and displaying each particle/firefly.

function mouseMoved(): Called when the mouse is moved. It iterates through the particles array
and checks if each particle is close to the mouse pointer, updating its hovering state accordingly.

function mouseClicked(): Called when the mouse is clicked.
It iterates through the particles array and checks if each particle is close to the mouse pointer,
updating its clicked state accordingly making the particles/fireflies glow brightly upon click and fly away upon hoover.

class Particle: A class that defines the properties and methods for each particle/firefly

constructor(x, y): Initializes the particle/firefly with position, velocity, acceleration,
size, alpha (transparency), hovering, clicked, color (green-yellow), and flashing/glowing properties.

update(): Updates the particle's/firefly's state, including position, velocity, and alpha based on its hovering, clicked, and flashing/glowing states.

display(): Draws the particle/firefly on the canvas with its current color and alpha.

hover(x, y): Checks if the particle/firefly is within a certain distance from the given coordinates (mouse) and updates its hovering state.

click(x, y): Checks if the particle/firefly is within a certain distance from the given coordinates (mouse) and updates its clicked state.

When you run this program, it will create an interactive particle system where particles/fireflies react to the mouse pointer.
They will move away/fly away from the pointer when hovering, and their transparency and behavior (flashing/glowing) will change when clicked.
Additionally, particles/fireflies simulate glowing with a flashing effect that is randomly timed.
