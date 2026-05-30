let travelData = [];

// FETCH JSON DATA
fetch("travel_recommendation.json")
  .then(res => res.json())
  .then(data => {
    travelData = data;
    console.log("Data loaded:", travelData);
  });

// SEARCH FUNCTION
function search() {
  const input = document.getElementById("searchInput").value.toLowerCase();

  let results = [];

  // TASK 7: keyword matching
  if (input.includes("beach")) {
    results = travelData.beaches;
  }
  else if (input.includes("temple")) {
    results = travelData.temples;
  }
  else if (input.includes("country")) {
    results = travelData.countries;
  }

  displayResults(results);
}

// DISPLAY FUNCTION (TASK 8)
function displayResults(items) {
  const container = document.getElementById("results");
  container.innerHTML = "";

  if (!items || items.length === 0) {
    container.innerHTML = "No results found";
    return;
  }

  items.forEach(item => {
    container.innerHTML += `
      <div class="card">
        <img src="${item.imageUrl}" />
        <h3>${item.name}</h3>
        <p>${item.description}</p>
      </div>
    `;
  });
}

// TASK 9: CLEAR BUTTON
function clearResults() {
  document.getElementById("results").innerHTML = "";
  document.getElementById("searchInput").value = "";
}
const but = document.getElementById('searchBtn');
but.addEventListener('click',search)