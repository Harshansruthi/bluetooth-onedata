

const API_URL = 'https://example.com/api/data'; // Replace this with your actual API endpoint

export const fetchDataFromApi = async () => {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error('Failed to fetch data from the API');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error('Error fetching data from the API: ' + error.message);
  }
};
