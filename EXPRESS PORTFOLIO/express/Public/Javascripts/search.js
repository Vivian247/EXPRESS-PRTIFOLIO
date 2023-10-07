// File: Searchingboot.js
// Student’s Name: ANIEBONAM VIVIAN OLUOMACHUKWU
// StudentID: 301308143
// Date: 01-10-2023

// Perform search functionality
function searchFunction() {
    // Get the search term
    var searchTerm = document.getElementById("search-input").value.toLowerCase();
  
    // Filter the pages based on the search term
    var filteredPages = pages.filter(function(page) {
      var pageTitle = page.title.toLowerCase();
      return pageTitle.includes(searchTerm);
    });
  
    // Display the search results
    displaySearchResults(filteredPages);
  }
  
  // Display the search results on the page
  function displaySearchResults(results) {
    var searchResultsContainer = document.getElementById("search-results");
    searchResultsContainer.innerHTML = ""; // Clear previous search results
  
    if (results.length === 0) {
      searchResultsContainer.innerHTML = '<p>No results found.</p>';
      return;
    }
  
    // Create a list of search result items
    var resultList = document.createElement('ul');
    results.forEach(function(result) {
      var listItem = document.createElement('li');
      var link = document.createElement('a');
      link.href = result.url;
      link.textContent = result.title;
      listItem.appendChild(link);
      resultList.appendChild(listItem);
    });
  
    // Append the list to the search results container
    searchResultsContainer.appendChild(resultList);
  }
  
  // Handle form submission on Enter key press
  document.getElementById("search-input").addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
      document.getElementById('search-form').submit();
    }
  });
  
  // Clear previous search results on form submission
  document.getElementById('search-form').addEventListener('submit', function() {
    document.getElementById('search-results').innerHTML = '';
  });