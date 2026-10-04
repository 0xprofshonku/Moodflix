// Hardcoded database of movies containing multi-lingual options
const movieDatabase = {
    happy: [
        { title: "3 Idiots", lang: "Hindi", year: "2009", genre: "Comedy/Drama" },
        { title: "Zindagi Na Milegi Dobara", lang: "Hindi", year: "2011", genre: "Adventure/Comedy" },
        { title: "The Hangover", lang: "English", year: "2009", genre: "Comedy" },
        { title: "J值i (J जाति)", lang: "Bengali", year: "2023", genre: "Comedy/Drama" },
        { title: "F2: Fun and Frustration", lang: "Telugu", year: "2019", genre: "Comedy" }
    ],
    sad: [
        { title: "Taare Zameen Par", lang: "Hindi", year: "2007", genre: "Drama" },
        { title: "The Pursuit of Happyness", lang: "English", year: "2006", genre: "Biography/Drama" },
        { title: "Schindler's List", lang: "English", year: "1993", genre: "War/Drama" },
        { title: "Pather Panchali", lang: "Bengali", year: "1955", genre: "Classic Drama" },
        { title: "Mahanati", lang: "Telugu", year: "2018", genre: "Biopic/Drama" }
    ],
    romantic: [
        { title: "Dilwale Dulhania Le Jayenge", lang: "Hindi", year: "1995", genre: "Romance" },
        { title: "About Time", lang: "English", year: "2013", genre: "Rom-Com/Sci-Fi" },
        { title: "La La Land", lang: "English", year: "2016", genre: "Musical/Romance" },
        { title: "Praktan", lang: "Bengali", year: "2016", genre: "Romance/Drama" },
        { title: "Geetha Govindam", lang: "Telugu", year: "2018", genre: "Rom-Com" }
    ],
    thrilled: [
        { title: "Drishyam", lang: "Hindi", year: "2015", genre: "Mystery/Thriller" },
        { title: "Inception", lang: "English", year: "2010", genre: "Sci-Fi/Action" },
        { title: "Interstellar", lang: "English", year: "2014", genre: "Sci-Fi/Sci-Fi" },
        { title: "Chotushkone", lang: "Bengali", year: "2014", genre: "Thriller/Mystery" },
        { title: "Eega", lang: "Telugu", year: "2012", genre: "Fantasy/Action" }
    ]
};

// Function called when a user clicks a mood button
function getRecommendations(mood) {
    const movieGrid = document.getElementById('movie-grid');
    const resultHeading = document.getElementById('result-heading');
    
    // Clear any previous results
    movieGrid.innerHTML = "";
    
    // Make the heading visible
    resultHeading.classList.remove('hidden');

    // Retrieve movies matching the clicked mood
    const recommendedMovies = movieDatabase[mood];

    // Map through movies and create HTML structure inside the grid
    recommendedMovies.forEach(movie => {
        // Create card wrapper element
        const movieCard = document.createElement('div');
        
        // Add Tailwind CSS styling classes to the card dynamically
        movieCard.className = "bg-slate-800 p-5 rounded-xl border border-slate-700 shadow-md hover:border-indigo-500 transition-all duration-300";

        // Inject the internal card structure
        movieCard.innerHTML = `
            <span class="inline-block text-xs font-bold tracking-wide uppercase px-2 py-1 bg-indigo-900 text-indigo-300 rounded mb-3">
                ${movie.lang}
            </span>
            <h4 class="text-lg font-bold text-white mb-1">${movie.title}</h4>
            <p class="text-xs text-slate-400 mb-2">Released: ${movie.year}</p>
            <p class="text-sm text-slate-300 italic">🎭 ${movie.genre}</p>
        `;
        
        // Append card to grid container
        movieGrid.appendChild(movieCard);
    });
}
