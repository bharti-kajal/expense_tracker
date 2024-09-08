import "./styles.css";
// import the custom hook to use in this document
import useFetch from "./useFetch";

export default function App() {
  const url = "https://v2.jokeapi.dev/joke/Programming?type=single";

  // Use the custom hook here
  const { data, loading, error, getJoke } = useFetch(url);

  // Display loading text here
  if (loading) {
    return <p>Loading...</p>;
  }

  // Display something went wrong here
  if (error) {
    return <p>Something went wrong: {error}</p>;
  }

  return (
    <div className="App">
      <h1>Joke Generator</h1>
      {/* Do not modify the below code */}
      <h2>{!loading && !error && data ? data.joke : ""}</h2>
      <button className="btn" onClick={getJoke}>New Joke</button>
    </div>
  );
}
