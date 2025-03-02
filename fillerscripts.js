// List of One Piece filler episodes
const fillerEpisodes = [
    50, 99, 102, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 220, 221, 222, 
    223, 224, 225, 226, 227, 228, 229, 326, 327, 328, 329, 330, 331, 332, 333, 334, 
    382, 383, 384, 385, 386, 387, 388, 389, 390, 426, 427, 428, 429, 430, 431, 432, 
    492, 542, 575, 576, 590, 626, 747, 748, 749, 750, 780, 781, 782, 783, 807, 881, 
    895, 896, 907, 1029, 1030, 1057 // Add new fillers here
];

// Function to check if an episode is filler
function checkFiller() {
    const episodeNumber = document.getElementById("episodeInput").value;
    const result = document.getElementById("result");

    // Validate input
    if (episodeNumber < 1 || episodeNumber > 1183) {
        result.textContent = "Please enter a valid episode number (1-1183).";
        result.style.color = "red";
        return;
    }

    // Check if the episode is a filler
    if (fillerEpisodes.includes(parseInt(episodeNumber))) {
        result.textContent = `Episode ${episodeNumber} is a FILLER episode.`;
        result.style.color = "red";
    } else {
        result.textContent = `Episode ${episodeNumber} is CANON.`;
        result.style.color = "green";
    }
}
