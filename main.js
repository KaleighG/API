document.addEventListener("DOMContentLoaded", () => {
  const foxImage = document.getElementById("foxImage");
  const fetchFoxButton = document.getElementById("fetchFoxButton");
  const foxApiUrl = "https://randomfox.ca/floof/";

  async function fetchRandomFox() {
    try {
      const response = await fetch(foxApiUrl);
      const data = await response.json();
      const imageUrl = data.image;
      foxImage.src = imageUrl;
    } catch (error) {
      console.error("Error fetching random fox:", error);
      foxImage.alt = "Failed to fetch a fox image.";
    }
  }

  fetchFoxButton.addEventListener("click", fetchRandomFox);

  fetchRandomFox();
});
