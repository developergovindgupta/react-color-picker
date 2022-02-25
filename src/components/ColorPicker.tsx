import React, { useCallback, useEffect, useState } from 'react';
import ColorConverter, { hsl2hsv, hsv2hsl, colorObject } from './ColorConverter';
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
	onChange?: Function;
};
export type colorPickerChangeResult = {
	color: colorObject;
	type: string;
};
export const ColorPickerButton = (props: btnPropsType) => {
	return <div className='color-picker-btn' style={{ backgroundColor: props.color }}></div>;
};
export const ColorPalette = (props: colorPaletteType) => {
	const width = props.width || 300;
	const height = props.height || 200;
	const [selectedColor, setSelectedColor] = useState(ColorConverter('red'));
	const [SaturationPointer, setSaturationPointer] = useState({ x: 100, y: 0 });
	const [hueValue, setHueValue] = useState(0);
	let type = 'change';

	const computeColor = (e: React.MouseEvent) => {
		let x = e.nativeEvent.offsetX;
		let y = e.nativeEvent.offsetY;
		if (x >= 0 && x <= width && y >= 0 && y <= height) {
			let h = hueValue;
			let s = (x / width) * 100;
			let v = 100 - (y / height) * 100;
			let hsl = hsv2hsl(h, s, v);
			let hsla = `hsla(${hsl.h},${hsl.s}%,${hsl.l}%,${selectedColor.a})`;
			let color = ColorConverter(hsla);
			updateSelectedColor(color, type);
			setSaturationPointer({ x: s, y: 100 - v });
		}
	};
	const handleMouseDown = (e: React.MouseEvent) => {
		if (e.buttons === 1) {
			e.stopPropagation();
			e.preventDefault();
			type = 'mousedown';
			computeColor(e);
		}
	};
	const handleMouseUp = (e: React.MouseEvent) => {
		if (e.buttons === 0) {
			e.stopPropagation();
			e.preventDefault();
			type = 'mouseup';
			computeColor(e);
		}
	};
	const handleMouseMove = (e: React.MouseEvent) => {
		if (e.buttons === 1) {
			e.stopPropagation();
			e.preventDefault();
			type = 'mousemove';
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
	const updateSelectedColor = (val: object, type: string) => {
		let color = { ...selectedColor, ...val };
		let rgba = `rgba(${color.r},${color.g},${color.b},${color.a})`;
		color = ColorConverter(rgba);
		setSelectedColor(color);
		let hsv = hsl2hsv(color.h, color.s, color.l);
		updateSaturationPointer(hsv.s, hsv.v);
		setHueValue(color.h);

		if (props.onChange) {
			props.onChange({ color, type });
		}
	};
	const updateSaturationPointer = (s: number, v: number) => {
		let x = s;
		let y = 100 - v;
		setSaturationPointer({ x, y });
	};

	const updateHueValue = (e: React.MouseEvent) => {
		let x = e.nativeEvent.offsetX;
		let hue = Math.round((x / width) * 360);
		if (hue < 0) {
			hue = 0;
		} else if (hue > 360) {
			hue = 360;
		}

		let hsla = `hsla(${hue},${selectedColor.s}%,${selectedColor.l}%,${selectedColor.a})`;
		let color = ColorConverter(hsla);
		updateSelectedColor(color, type);
	};
	const handleHueMouseDown = (e: React.MouseEvent) => {
		if (e.buttons === 1) {
			e.stopPropagation();
			e.preventDefault();
			type = 'mousedown';
			updateHueValue(e);
		}
	};
	const handleHueMouseMove = (e: React.MouseEvent) => {
		if (e.buttons === 1) {
			e.stopPropagation();
			e.preventDefault();
			type = 'mousemove';
			updateHueValue(e);
		}
	};
	const handleHueMouseUp = (e: React.MouseEvent) => {
		if (e.buttons === 0) {
			e.stopPropagation();
			e.preventDefault();
			type = 'mouseup';
			updateHueValue(e);
		}
	};
	const updateAlphaValue = (e: React.MouseEvent) => {
		let x = e.nativeEvent.offsetX;
		let alpha = Math.round((x / width) * 100);
		if (alpha < 0) {
			alpha = 0;
		} else if (alpha > 100) {
			alpha = 100;
		}
		updateSelectedColor({ a: alpha / 100 }, type);
	};
	const handleAlphaMouseDown = (e: React.MouseEvent) => {
		if (e.buttons === 1) {
			e.stopPropagation();
			e.preventDefault();
			type = 'mousedown';
			updateAlphaValue(e);
		}
	};
	const handleAlphaMouseMove = (e: React.MouseEvent) => {
		if (e.buttons === 1) {
			e.stopPropagation();
			e.preventDefault();
			type = 'mousemove';
			updateAlphaValue(e);
		}
	};
	const handleAlphaMouseUp = (e: React.MouseEvent) => {
		if (e.buttons === 0) {
			e.stopPropagation();
			e.preventDefault();
			type = 'mouseup';
			updateAlphaValue(e);
		}
	};
	const [fn_updateSelectedColor] = useState(() => {
		return updateSelectedColor;
	});

	useEffect(() => {
		const propsColor = ColorConverter(props.color || '');
		fn_updateSelectedColor(propsColor, 'init');
	}, [props, fn_updateSelectedColor]);

	return (
		<div className='color-picker-color-palette'>
			<div className='color-picker-selected-color' style={{ width: width + 'px' }}>
				<span>{selectedColor.a !== 1 ? selectedColor.hexa : selectedColor.hex}</span>
			</div>
			<div className='color-picker-saturation-palette' style={{ width: width + 'px', height: height + 'px', backgroundColor: `hsl(${hueValue},100%,50%)` }} onMouseDown={handleMouseDown} onMouseMove={handleMouseMove} onMouseUp={handleMouseUp}>
				<div className='color-picker-saturation-cursor' style={{ left: `calc(${SaturationPointer.x}% - 7px)`, top: `calc(${SaturationPointer.y}% - 7px)` }}></div>
			</div>
			<div className='color-picker-hue-slider' style={{ width: width + 'px' }} onMouseDown={handleHueMouseDown} onMouseMove={handleHueMouseMove} onMouseUp={handleHueMouseUp}>
				<div className='color-picker-hue-slider-thumb' style={{ left: `${(hueValue / 360) * width}px` }}></div>
			</div>
			<div className='color-picker-alpha-slider' style={{ width: width + 'px' }} onMouseDown={handleAlphaMouseDown} onMouseMove={handleAlphaMouseMove} onMouseUp={handleAlphaMouseUp}>
				<div className='color-picker-alpha-slider-thumb' style={{ left: `${selectedColor.a * width}px` }}></div>
			</div>
			<div className='color-picker-rgb-inputs' style={{ width: width + 'px', flexWrap: width < 280 ? 'wrap' : 'nowrap' }}>
				<div className='color-picker-rgb-input'>
					<span>R</span>
					<input
						type='number'
						className='color-picker-rgb-input-red'
						min='0'
						max='255'
						value={selectedColor.r}
						onChange={(e) => {
							let val = getValidNumber(e, 0, 255);
							val !== null && updateSelectedColor({ r: val }, 'change');
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
							val !== null && updateSelectedColor({ g: val }, 'change');
						}}
					/>
				</div>
				<div className='color-picker-rgb-input'>
					<span>B</span>
					<input
						type='number'
						className='color-picker-rgb-input-blue'
						min='0'
						max='255'
						value={selectedColor.b}
						onChange={(e) => {
							let val = getValidNumber(e, 0, 255);
							val !== null && updateSelectedColor({ b: val }, 'change');
						}}
					/>

					<span>A</span>
					<input
						type='number'
						className='color-picker-rgb-input-alpha'
						min='0'
						max='100'
						value={Math.round(selectedColor.a * 100)}
						onChange={(e) => {
							let val = getValidNumber(e, 0, 100);
							val !== null && updateSelectedColor({ a: val / 100 }, 'change');
						}}
					/>
				</div>
			</div>
		</div>
	);
};

export const ColorPickerControl = () => {
	return (
		<div className='color-picker-control'>
			<ColorPalette color='red' />
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
