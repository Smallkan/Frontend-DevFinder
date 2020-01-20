import React from 'react';

function App() {
	const counter = 0;

	function incrementCounter() {
		alert('Hello')
	}

	return (
		<>
			<h1>Contator: 0</h1>
			<button onClick={incrementCounter}>Incrementar</button>
		</>
	);
}

export default App;
