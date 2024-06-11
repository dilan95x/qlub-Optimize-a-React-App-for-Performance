import "./App.css";
import Container from "./components/Container";

function App() {

  if (process.env.REACT_APP_PIXELS_API_KEY === undefined) {
    alert("Please set the PIXELS_API_KEY environment variable.");
  } 

  return (
    <>
      
      <Container />
    </>
  );
}

export default App;
