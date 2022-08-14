import React, { useState } from 'react';
import { Col, Container, Row, Button } from 'reactstrap';
import Header from '../header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CharactersPage, HousePage } from '../pages';

const App = () => {
	return (
		<BrowserRouter>
			<div className="App">
				<Container>
					<Header />
				</Container>
				<main>
					<Routes>
						<Route exact path="/characters" element={<CharactersPage/>} />
						<Route 
							exact path="/houses/:house"
							element={<HousePage />}
						/>
					</Routes>
				</main>
			</div>
		</BrowserRouter>
	);
}

export default App;