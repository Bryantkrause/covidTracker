import axios from "axios";

function App() {
  state = "CA"
  apiKey = "d2a54c432cd94b0390f85712f4a18e8a";
  axios.get(`https://api.covidactnow.org/v2/state/${state}.json?apiKey=${apiKey}`
	);
  return (
		<div className="App">
      

		</div>
	);
}

export default App;
