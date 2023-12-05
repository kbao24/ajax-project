// Get references to HTML elements
const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');
const resultContainer = document.getElementById('resultContainer');

// Add event listener for the search button click
searchButton.addEventListener('click', () => {
  const searchTerm = searchInput.value.trim().toLowerCase(); // Get the trimmed and lowercased search term entered by the user

  if (searchTerm !== '') {
    const apiUrl = 'https://valorant-api.com/v1/weapons/skins';

    // Grab data from API
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        // Filter
        const matchingSkins = data.data.filter((skin) => {
          return skin.displayName.toLowerCase().includes(searchTerm);
        });

        if (matchingSkins.length > 0) {
          resultContainer.innerHTML = '';

          // Iterate through skins
          matchingSkins.forEach((skin) => {
            const skinElement = document.createElement('div');
            skinElement.classList.add('skin'); //

            const skinName = document.createElement('h3');
            skinName.textContent = skin.displayName;

            const skinImage = document.createElement('img');
            skinImage.src = skin.displayIcon;

            skinElement.appendChild(skinName);
            skinElement.appendChild(skinImage);

            resultContainer.appendChild(skinElement);
          });
        } else {
          resultContainer.innerHTML = 'No matching skins found';
        }
      });
  } else {
    alert('Please enter a search term');
  }
});
