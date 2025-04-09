import { useState } from "react";
import "./App.css";
import { jsonquery } from "@jsonquerylang/jsonquery";

function App() {
	const data = {
		friends: [
			{ name: "Chris", age: 23, city: "New York" },
			{ name: "Emily", age: 19, city: "Atlanta" },
			{ name: "Joe", age: 32, city: "New York" },
			{ name: "Kevin", age: 19, city: "Atlanta" },
			{ name: "Michelle", age: 27, city: "Los Angeles" },
			{ name: "Robert", age: 45, city: "Manhattan" },
			{ name: "Sarah", age: 31, city: "New York" },
		],
	}

	// Form
	const [city, setCity] = useState("");
	const [result, setResult] = useState([]);
	const [result1, setResult1] = useState([]);


	let test = [];
	let test1 = [];

	const handleSubmit = (event) => {
		event.preventDefault();
		console.log(`The name you entered was: ${city}`);

		// Get the array containing the friends from the object, filter the friends based on the input of user,
		// sort them by age, and pick just the name and age out of the objects.
		test = jsonquery(data,`
			.friends
			| filter(.city == "${city}")
			| sort(.age)
			| pick(.name, .age, .city)
		`)

		test1 = jsonquery(data['friends'], `filter(.city == "${city}") | sort(.age) | pick(.name, .age, .city)`)
		setResult(test);
		setResult1(test1);
		console.log(test)
		console.log(result);
	};
	return (
		<>
			<form onSubmit={handleSubmit}>
				<label>Input a city:</label> <br />
				<input
					type="text"
					placeholder="City"
					value={city}
					onChange={(e) => setCity(e.target.value)}
				/>
				<br />
				<button type="submit">Submit</button>
			</form>
			<ul>
				<h3>First Syntax</h3>
				{result.map((key, index) => (
					<li key={index}>
						Name: {key.name} <br /> Age: {key.age} <br /> City: {key.city}
					</li>
				))}
			</ul>
			<br></br>
			<ul>
				<h3>Second Syntax</h3>
				{result1.map((key, index) => (
					<li key={index}>
						Name: {key.name} <br /> Age: {key.age} <br /> City: {key.city}
					</li>
				))}
			</ul>
		</>
	);
}

export default App;