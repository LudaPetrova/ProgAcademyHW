import React from "react";
import './app.css';
import { HeroCard } from "../hero-card/heroCard";
import { heroes } from '../../data/data';

function App() {
	return (
		<>
			<HeroCard data={heroes}></HeroCard>
		</>
	)
}

export default App;