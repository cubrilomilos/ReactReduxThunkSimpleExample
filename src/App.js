import React from 'react';
import logo from './logo.svg';
import './App.css';
import MainTable from './Components/Table';
import Sidebar from './Components/Sidebar';
import Footer from './Components/Footer';



function App() {
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.js</code> and save to reload.
        		</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
        		</a>
			</header>
			<div style={{ display: 'flex' }}>
				<div id="table" style={{ backgroundColor: 'yellow' }}>
					<MainTable />
				</div>
				<div id="sidebar" style={{ marginLeft: 'auto', backgroundColor: 'red' }}>
					<Sidebar />
				</div>
			</div>
			<div id="footer" style={{ backgroundColor: 'green', color: 'white' }}>
				<Footer />
			</div>
		</div>
	);
}

export default App;
