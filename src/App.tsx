import React from 'react';
import logo from './logo.svg';
import './App.css';
import ColorPicker, { ColorPalette, ColorPickerButton, ColorPickerControl } from './components/ColorPicker';

function App() {
	return (
		<div className='App'>
			<header className='App-header'>
				<img src={logo} className='App-logo' alt='logo' />
				<h3>react-color-picker</h3>
				<a className='App-link' href='https://github.com/developergovindgupta/react-color-picker' target='_blank' rel='noopener noreferrer'>
					view source
				</a>
			</header>
			<div style={{ display: 'flex', justifyContent: 'center', padding: '5px' }}>
				<ColorPicker />
				<ColorPickerButton color='green' />
			</div>
			<ColorPalette />
		</div>
	);
}

export default App;
