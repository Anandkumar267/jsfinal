let travelData = {};

fetch("travel_recommendation_api.json")
    .then(response => response.json())
    .then(data => {
        travelData = data;
        console.log(data);
    })
    .catch(error => {
        console.error("Error loading JSON:", error);
    });

const searchBtn = document.getElementById("searchBtn");
const resetBtn = document.getElementById("resetBtn");

searchBtn.addEventListener("click", searchRecommendations);
resetBtn.addEventListener("click", clearResults);

function searchRecommendations() {

    const keyword =
        document.getElementById("searchInput")
        .value
        .trim()
        .toLowerCase();

    let results = [];

    if (keyword === "beach" || keyword === "beaches") {
        results = travelData.beaches;
    }
    else if (keyword === "temple" || keyword === "temples") {
        results = travelData.temples;
    }
    else if (keyword === "country" || keyword === "countries") {
        results = travelData.countries;
    }

    displayResults(results);
}

function displayResults(results) {

    const container =
        document.getElementById("results");

    container.innerHTML = "";

    results.forEach(item => {

        container.innerHTML += `
            <div class="card">
                <img src="${item.imageUrl}"
                     alt="${item.name}">

                <h3>${item.name}</h3>

                <p>${item.description}</p>
            </div>
        `;
    });
}

function clearResults() {
    document.getElementById("searchInput").value = "";
    document.getElementById("results").innerHTML = "";
}