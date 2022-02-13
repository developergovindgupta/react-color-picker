import React, { useEffect, useState } from 'react';
import ColorConverter, { hsl2hsv, hsv2hsl } from './ColorConverter';
import './ColorPicker.css';
type btnPropsType = {
	color?: string;
	gradient?: string;
};
type colorPaletteType = {
	color?: string;
	width?: number;
	height?: number;
	favourites?: Array<string>;
};

export const ColorPickerButton = (props: btnPropsType) => {
	return <div className='color-picker-btn' style={{ backgroundColor: props.color }}></div>;
};
export const ColorPalette = (props: colorPaletteType) => {
	const propsColor = ColorConverter(props.color || '');
	const width = props.width || 300;
	const height = props.height || 200;

	const [selectedColor, setSelectedColor] = useState(propsColor);
	const [SaturationPointer, setSaturationPointer] = useState({ x: 100, y: 0 });

	const computeColor = (e: React.MouseEvent) => {
		let x = e.nativeEvent.offsetX;
		let y = e.nativeEvent.offsetY;
		if (x >= 0 && x <= width && y >= 0 && y <= height) {
			let h = 0;
			let s = (x / width) * 100;
			let v = 100 - (y / height) * 100;
			let hsl = hsv2hsl(h, s, v);
			let hsla = `hsla(${hsl.h},${hsl.s}%,${hsl.l}%,${selectedColor.a})`;
			let color = ColorConverter(hsla);
			document.body.style.backgroundColor = color.hsla;
			setSelectedColor(color);
			updateSaturationPointer(s, v);
		}
	};
	const handleMouseDown = (e: React.MouseEvent) => {
		if (e.buttons === 1) {
			e.stopPropagation();
			e.preventDefault();
			computeColor(e);
		}
	};
	const handleMouseMove = (e: React.MouseEvent) => {
		if (e.buttons === 1) {
			e.stopPropagation();
			e.preventDefault();
			computeColor(e);
		}
	};
	const getValidNumber = (e: React.FormEvent<HTMLInputElement>, min: number, max: number) => {
		let val = parseInt(e.currentTarget.value || '0');
		if (val >= min && val <= max) {
			e.currentTarget.value = val.toString();
			return val;
		} else {
			return null;
		}
	};
	const updateSelectedColor = (val: object) => {
		let color = { ...selectedColor, ...val };
		let rgba = `rgba(${color.r},${color.g},${color.b},${color.a})`;
		color = ColorConverter(rgba);
		setSelectedColor(color);
		let hsv = hsl2hsv(color.h, color.s, color.l);
		document.body.style.backgroundColor = color.hsla;
		updateSaturationPointer(hsv.s, hsv.v);
	};
	const updateSaturationPointer = (s: number, v: number) => {
		let x = s;
		let y = 100 - v;
		setSaturationPointer({ x, y });
	};
	useEffect(() => {
		let hsv = hsl2hsv(selectedColor.h, selectedColor.s, selectedColor.l);
		updateSaturationPointer(hsv.s, hsv.v);
	}, []);

	return (
		<div className='color-picker-color-palette'>
			<div className='color-picker-selected-color' style={{ width: width + 'px' }}>
				<span>{selectedColor.a !== 1 ? selectedColor.hexa : selectedColor.hex}</span>
			</div>
			<div className='color-picker-saturation-palette' style={{ width: width + 'px', height: height + 'px' }} onMouseDown={handleMouseDown} onMouseMove={handleMouseMove}>
				<div className='color-picker-saturation-cursor' style={{ left: `calc(${SaturationPointer.x}% - 7px)`, top: `calc(${SaturationPointer.y}% - 7px)` }}></div>
			</div>
			<div className='color-picker-hue-slider' style={{ width: width + 'px' }}>
				<div className='color-picker-hue-slider-thumb'></div>
			</div>
			<div className='color-picker-rgb-inputs' style={{ width: width + 'px' }}>
				<span>R</span>
				<input
					type='number'
					className='color-picker-rgb-input-red'
					min='0'
					max='255'
					value={selectedColor.r}
					onChange={(e) => {
						let val = getValidNumber(e, 0, 255);
						val !== null && updateSelectedColor({ r: val });
					}}
				/>
				<span>G</span>
				<input
					type='number'
					className='color-picker-rgb-input-green'
					min='0'
					max='255'
					value={selectedColor.g}
					onChange={(e) => {
						let val = getValidNumber(e, 0, 255);
						val !== null && updateSelectedColor({ g: val });
					}}
				/>
				<span>B</span>
				<input
					type='number'
					className='color-picker-rgb-input-blue'
					min='0'
					max='255'
					value={selectedColor.b}
					onChange={(e) => {
						let val = getValidNumber(e, 0, 255);
						val !== null && updateSelectedColor({ b: val });
					}}
				/>
				<span>A</span>
				<input
					type='number'
					className='color-picker-rgb-input-alpha'
					min='0'
					max='100'
					value={selectedColor.a * 100}
					onChange={(e) => {
						let val = getValidNumber(e, 0, 100);
						val !== null && updateSelectedColor({ a: val / 100 });
					}}
				/>
			</div>
		</div>
	);
};

export const ColorPickerControl = () => {
	return (
		<div className='color-picker-control'>
			<ColorPalette />
			<div className='color-picker-gradient-palette'></div>
		</div>
	);
};

const ColorPicker = () => {
	return (
		<div className='react-color-picker'>
			<ColorPickerButton color='red' />
		</div>
	);
};

export default ColorPicker;
