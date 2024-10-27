const container = document.getElementById("container");
const resizeButton = document.getElementById("resizeButton");

function createGrid(size) {
  container.innerHTML = ""; // Clear existing squares
  const squareSize = 960 / size - 2; // Calculate individual square size

  // Loop to create grid squares
  for (let i = 0; i < size * size; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    square.style.width = `${squareSize}px`;
    square.style.height = `${squareSize}px`;

    // Set initial hover effect
    square.addEventListener("mouseover", () => {
      square.style.backgroundColor = generateRandomColor();
      darkenSquare(square); // Initialize darkening effect
    });

    container.appendChild(square);
  }
}

// Function to generate random RGB color
function generateRandomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r},${g},${b})`;
}

// Function to progressively darken a square
function darkenSquare(square) {
  let opacity = parseFloat(square.style.opacity) || 0.1; // Start from 10% opacity
  if (opacity < 1) {
    opacity += 0.1; // Increase opacity by 10%
    square.style.opacity = opacity;
  }
}

// Resize grid with user input
resizeButton.addEventListener("click", () => {
  let newSize = parseInt(prompt("Enter new grid size (1-100):"));
  if (newSize && newSize > 0 && newSize <= 100) {
    createGrid(newSize);
  } else {
    alert("Please enter a valid number between 1 and 100.");
  }
});

// Initial 16x16 grid setup
createGrid(16);
