//npm install axios
import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com";
axios.defaults.params = {
  client_id: "v4cJpPaSB54IXvHpABJQOFCzef8P-w1gIlaOpcybTko",
};
export const fetchImages = async (searchQuery, page) => {
  try {
    const response = await axios.get("/search/photos", {
      params: {
        query: searchQuery,
        per_page: 10,
        page,
      },
    });

    return response.data.results;
  } catch (error) {
    throw new Error("Failed to fetch images");
  }
};
