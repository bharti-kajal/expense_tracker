import {useState, useEffect} from "react";

// Complete the following hook
const useFetch = (url) => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  // Function to fetch the joke
  const getJoke = async () => {
    setLoading(true); // Start loading when fetching
    setError(null); // Reset error before a new request
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }
      const result = await response.json();
      setData(result); // Set data if fetch is successful
    } catch (err) {
      setError(err.message); // Catch and set error
    } finally {
      setLoading(false); // Stop loading once fetch is complete
    }
  };

  useEffect(() => {
    getJoke(); // Fetch joke on initial render
  }, [url]);

  return { data, loading, error, getJoke };
};

// export the useFetch hook as a default export
export default useFetch;