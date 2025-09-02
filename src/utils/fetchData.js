import axios from "axios";

export const fetchExerciseImage = async (title) => {
  try {
    const searchTerm = `${title
      .replace(/[^a-zA-Z0-9 ]/g, "")
      .toLowerCase()} exercise`;
    const API_KEY = process.env.PIXABAY_API_KEY;

    if (!API_KEY) {
      console.error("❌ Missing Pixabay API key in environment variables");
      return { imageUrl: "/placeholder.jpg" };
    }

    const url = `https://pixabay.com/api/?key=${API_KEY}&q=${encodeURIComponent(
      searchTerm
    )}&image_type=photo&per_page=1`;

    const { data } = await axios.get(url);

    if (data.hits && data.hits.length > 0) {
      return { imageUrl: data.hits[0].webformatURL };
    } else {
      console.warn(`⚠️ No image found for "${title}"`);
      return { imageUrl: "/placeholder.jpg" };
    }
  } catch (err) {
    console.error(`Error fetching image for "${title}":`, err.message);
    return { imageUrl: "/placeholder.jpg" };
  }
};
