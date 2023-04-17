// Define the array of images
const images = [
    "../imgs/Mehis-Kahu.webp",
    "../imgs/Mehis-Kahu.webp",
    "../imgs/Mehis-Kahu.webp",
    "../imgs/Mehis-Kahu.webp",
    "../imgs/Mehis-Kahu.webp",
    "../imgs/Mehis-Kahu.webp",
    "../imgs/Mehis-Kahu.webp",
    "../imgs/Mehis-Kahu.webp",
    "../imgs/Mehis-Kahu.webp",
  ];
  
  // Define the number of images to display per page
  const imagesPerPage = 3;
  
  // Get the DOM elements
  const imageGallery = document.getElementById("image-gallery");
  const showMoreBtn = document.getElementById("show-more-btn");
  
  // Initialize the index of the last displayed image
  let lastDisplayedIndex = 0;
  
  // Display the first page of images
  displayImages();
  
  // Add a click event listener to the "Show more" button
  showMoreBtn.addEventListener("click", displayImages);
  
  // Function to display the next page of images
  function displayImages() {
    // Calculate the index of the first image to display
    const firstIndex = lastDisplayedIndex;
    // Calculate the index of the last image to display
    const lastIndex = Math.min(lastDisplayedIndex + imagesPerPage, images.length);
    // Loop through the images to display and create an <img> element for each
    // Loop through the images to display and create a container for each
for (let i = firstIndex; i < lastIndex; i++) {
    const container = document.createElement("div");
    container.classList.add("image-container");
    const img = document.createElement("img");
    img.src = images[i];
    container.appendChild(img);
    const text = document.createElement("div");
    text.classList.add("image-text");
    text.innerText = "Image " + (i + 1);
    container.appendChild(text);
    imageGallery.appendChild(container);
  }
  
    // Update the last displayed index
    lastDisplayedIndex = lastIndex;
    // Hide the "Show more" button if all images have been displayed
    if (lastDisplayedIndex >= images.length) {
      showMoreBtn.style.display = "none";
    }
  }