// Get references to HTML elements
const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');
const resultContainer = document.getElementById('resultContainer');

// Add event listener for the search button click
searchButton.addEventListener('click', () => {
  const searchTerm = searchInput.value.trim().toLowerCase(); // Get the trimmed and lowercased search term entered by the user

  if (searchTerm !== '') {
    const apiUrl = 'https://valorant-api.com/v1/weapons/skins';
  }
});
