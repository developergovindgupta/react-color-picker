interface IColorKey {
	[key: string]: string;
}
const colorsList = {
	'#000000': 'Black',
	'#000080': 'Navy',
	'#00008b': 'DarkBlue',
	'#0000cd': 'MediumBlue',
	'#0000ff': 'Blue',
	'#006400': 'DarkGreen',
	'#008000': 'Green',
	'#008080': 'Teal',
	'#008b8b': 'DarkCyan',
	'#00bfff': 'DeepSkyBlue',
	'#00ced1': 'DarkTurquoise',
	'#00fa9a': 'MediumSpringGreen',
	'#00ff00': 'Lime',
	'#00ff7f': 'SpringGreen',
	'#00ffff': 'Cyan',
	'#191970': 'MidnightBlue',
	'#1e90ff': 'DodgerBlue',
	'#20b2aa': 'LightSeaGreen',
	'#228b22': 'ForestGreen',
	'#2e8b57': 'SeaGreen',
	'#2f4f4f': 'DarkSlateGray',
	'#32cd32': 'LimeGreen',
	'#3cb371': 'MediumSeaGreen',
	'#40e0d0': 'Turquoise',
	'#4169e1': 'RoyalBlue',
	'#4682b4': 'SteelBlue',
	'#483d8b': 'DarkSlateBlue',
	'#48d1cc': 'MediumTurquoise',
	'#4b0082': 'Indigo',
	'#556b2f': 'DarkOliveGreen',
	'#5f9ea0': 'CadetBlue',
	'#6495ed': 'CornflowerBlue',
	'#663399': 'RebeccaPurple',
	'#66cdaa': 'MediumAquaMarine',
	'#696969': 'DimGray',
	'#6a5acd': 'SlateBlue',
	'#6b8e23': 'OliveDrab',
	'#708090': 'SlateGray',
	'#778899': 'LightSlateGray',
	'#7b68ee': 'MediumSlateBlue',
	'#7cfc00': 'LawnGreen',
	'#7fff00': 'Chartreuse',
	'#7fffd4': 'Aquamarine',
	'#800000': 'Maroon',
	'#800080': 'Purple',
	'#808000': 'Olive',
	'#808080': 'Gray',
	'#87ceeb': 'SkyBlue',
	'#87cefa': 'LightSkyBlue',
	'#8a2be2': 'BlueViolet',
	'#8b0000': 'DarkRed',
	'#8b008b': 'DarkMagenta',
	'#8b4513': 'SaddleBrown',
	'#8fbc8f': 'DarkSeaGreen',
	'#90ee90': 'LightGreen',
	'#9370db': 'MediumPurple',
	'#9400d3': 'DarkViolet',
	'#98fb98': 'PaleGreen',
	'#9932cc': 'DarkOrchid',
	'#9acd32': 'YellowGreen',
	'#a0522d': 'Sienna',
	'#a52a2a': 'Brown',
	'#a9a9a9': 'DarkGray',
	'#add8e6': 'LightBlue',
	'#adff2f': 'GreenYellow',
	'#afeeee': 'PaleTurquoise',
	'#b0c4de': 'LightSteelBlue',
	'#b0e0e6': 'PowderBlue',
	'#b22222': 'FireBrick',
	'#b8860b': 'DarkGoldenRod',
	'#ba55d3': 'MediumOrchid',
	'#bc8f8f': 'RosyBrown',
	'#bdb76b': 'DarkKhaki',
	'#c0c0c0': 'Silver',
	'#c71585': 'MediumVioletRed',
	'#cd5c5c': 'IndianRed',
	'#cd853f': 'Peru',
	'#d2691e': 'Chocolate',
	'#d2b48c': 'Tan',
	'#d3d3d3': 'LightGray',
	'#d8bfd8': 'Thistle',
	'#da70d6': 'Orchid',
	'#daa520': 'GoldenRod',
	'#db7093': 'PaleVioletRed',
	'#dc143c': 'Crimson',
	'#dcdcdc': 'Gainsboro',
	'#dda0dd': 'Plum',
	'#deb887': 'BurlyWood',
	'#e0ffff': 'LightCyan',
	'#e6e6fa': 'Lavender',
	'#e9967a': 'DarkSalmon',
	'#ee82ee': 'Violet',
	'#eee8aa': 'PaleGoldenRod',
	'#f08080': 'LightCoral',
	'#f0e68c': 'Khaki',
	'#f0f8ff': 'AliceBlue',
	'#f0fff0': 'HoneyDew',
	'#f0ffff': 'Azure',
	'#f4a460': 'SandyBrown',
	'#f5deb3': 'Wheat',
	'#f5f5dc': 'Beige',
	'#f5f5f5': 'WhiteSmoke',
	'#f5fffa': 'MintCream',
	'#f8f8ff': 'GhostWhite',
	'#fa8072': 'Salmon',
	'#faebd7': 'AntiqueWhite',
	'#faf0e6': 'Linen',
	'#fafad2': 'LightGoldenRodYellow',
	'#fdf5e6': 'OldLace',
	'#ff0000': 'Red',
	'#ff00ff': 'Magenta',
	'#ff1493': 'DeepPink',
	'#ff4500': 'OrangeRed',
	'#ff6347': 'Tomato',
	'#ff69b4': 'HotPink',
	'#ff7f50': 'Coral',
	'#ff8c00': 'DarkOrange',
	'#ffa07a': 'LightSalmon',
	'#ffa500': 'Orange',
	'#ffb6c1': 'LightPink',
	'#ffc0cb': 'Pink',
	'#ffd700': 'Gold',
	'#ffdab9': 'PeachPuff',
	'#ffdead': 'NavajoWhite',
	'#ffe4b5': 'Moccasin',
	'#ffe4c4': 'Bisque',
	'#ffe4e1': 'MistyRose',
	'#ffebcd': 'BlanchedAlmond',
	'#ffefd5': 'PapayaWhip',
	'#fff0f5': 'LavenderBlush',
	'#fff5ee': 'SeaShell',
	'#fff8dc': 'Cornsilk',
	'#fffacd': 'LemonChiffon',
	'#fffaf0': 'FloralWhite',
	'#fffafa': 'Snow',
	'#ffff00': 'Yellow',
	'#ffffe0': 'LightYellow',
	'#fffff0': 'Ivory',
	'#ffffff': 'White',
	black: '#000000',
	navy: '#000080',
	darkblue: '#00008B',
	mediumblue: '#0000CD',
	blue: '#0000FF',
	darkgreen: '#006400',
	green: '#008000',
	teal: '#008080',
	darkcyan: '#008B8B',
	deepskyblue: '#00BFFF',
	darkturquoise: '#00CED1',
	mediumspringgreen: '#00FA9A',
	lime: '#00FF00',
	springgreen: '#00FF7F',
	aqua: '#00FFFF',
	cyan: '#00FFFF',
	midnightblue: '#191970',
	dodgerblue: '#1E90FF',
	lightseagreen: '#20B2AA',
	forestgreen: '#228B22',
	seagreen: '#2E8B57',
	darkslategray: '#2F4F4F',
	limegreen: '#32CD32',
	mediumseagreen: '#3CB371',
	turquoise: '#40E0D0',
	royalblue: '#4169E1',
	steelblue: '#4682B4',
	darkslateblue: '#483D8B',
	mediumturquoise: '#48D1CC',
	indigo: '#4B0082',
	darkolivegreen: '#556B2F',
	cadetblue: '#5F9EA0',
	cornflowerblue: '#6495ED',
	rebeccapurple: '#663399',
	mediumaquamarine: '#66CDAA',
	dimgray: '#696969',
	slateblue: '#6A5ACD',
	olivedrab: '#6B8E23',
	slategray: '#708090',
	lightslategray: '#778899',
	mediumslateblue: '#7B68EE',
	lawngreen: '#7CFC00',
	chartreuse: '#7FFF00',
	aquamarine: '#7FFFD4',
	maroon: '#800000',
	purple: '#800080',
	olive: '#808000',
	gray: '#808080',
	skyblue: '#87CEEB',
	lightskyblue: '#87CEFA',
	blueviolet: '#8A2BE2',
	darkred: '#8B0000',
	darkmagenta: '#8B008B',
	saddlebrown: '#8B4513',
	darkseagreen: '#8FBC8F',
	lightgreen: '#90EE90',
	mediumpurple: '#9370DB',
	darkviolet: '#9400D3',
	palegreen: '#98FB98',
	darkorchid: '#9932CC',
	yellowgreen: '#9ACD32',
	sienna: '#A0522D',
	brown: '#A52A2A',
	darkgray: '#A9A9A9',
	lightblue: '#ADD8E6',
	greenyellow: '#ADFF2F',
	paleturquoise: '#AFEEEE',
	lightsteelblue: '#B0C4DE',
	powderblue: '#B0E0E6',
	firebrick: '#B22222',
	darkgoldenrod: '#B8860B',
	mediumorchid: '#BA55D3',
	rosybrown: '#BC8F8F',
	darkkhaki: '#BDB76B',
	silver: '#C0C0C0',
	mediumvioletred: '#C71585',
	indianred: '#CD5C5C',
	peru: '#CD853F',
	chocolate: '#D2691E',
	tan: '#D2B48C',
	lightgray: '#D3D3D3',
	thistle: '#D8BFD8',
	orchid: '#DA70D6',
	goldenrod: '#DAA520',
	palevioletred: '#DB7093',
	crimson: '#DC143C',
	gainsboro: '#DCDCDC',
	plum: '#DDA0DD',
	burlywood: '#DEB887',
	lightcyan: '#E0FFFF',
	lavender: '#E6E6FA',
	darksalmon: '#E9967A',
	violet: '#EE82EE',
	palegoldenrod: '#EEE8AA',
	lightcoral: '#F08080',
	khaki: '#F0E68C',
	aliceblue: '#F0F8FF',
	honeydew: '#F0FFF0',
	azure: '#F0FFFF',
	sandybrown: '#F4A460',
	wheat: '#F5DEB3',
	beige: '#F5F5DC',
	whitesmoke: '#F5F5F5',
	mintcream: '#F5FFFA',
	ghostwhite: '#F8F8FF',
	salmon: '#FA8072',
	antiquewhite: '#FAEBD7',
	linen: '#FAF0E6',
	lightgoldenrodyellow: '#FAFAD2',
	oldlace: '#FDF5E6',
	red: '#FF0000',
	fuchsia: '#FF00FF',
	magenta: '#FF00FF',
	deeppink: '#FF1493',
	orangered: '#FF4500',
	tomato: '#FF6347',
	hotpink: '#FF69B4',
	coral: '#FF7F50',
	darkorange: '#FF8C00',
	lightsalmon: '#FFA07A',
	orange: '#FFA500',
	lightpink: '#FFB6C1',
	pink: '#FFC0CB',
	gold: '#FFD700',
	peachpuff: '#FFDAB9',
	navajowhite: '#FFDEAD',
	moccasin: '#FFE4B5',
	bisque: '#FFE4C4',
	mistyrose: '#FFE4E1',
	blanchedalmond: '#FFEBCD',
	papayawhip: '#FFEFD5',
	lavenderblush: '#FFF0F5',
	seashell: '#FFF5EE',
	cornsilk: '#FFF8DC',
	lemonchiffon: '#FFFACD',
	floralwhite: '#FFFAF0',
	snow: '#FFFAFA',
	yellow: '#FFFF00',
	lightyellow: '#FFFFE0',
	ivory: '#FFFFF0',
	white: '#FFFFFF',
};
export type colorObject = {
	r: number;
	g: number;
	b: number;
	a: number;
	h: number;
	s: number;
	l: number;
	str: string;
	rgb: string;
	rgba: string;
	hsl: string;
	hsla: string;
	hex: string;
	hexa: string;
	name: string;
	isValid: boolean;
};

export const hsv2hsl = (h: number, s: number, v: number) => {
	const l = ((200 - s) * v) / 100;
	const [_s, _l] = [l === 0 || l === 200 ? 0 : ((s * v) / 100 / (l <= 100 ? l : 200 - l)) * 100, (l * 5) / 10];
	return { h, s: _s, l: _l };
};
export const hsl2hsv = (h: number, s: number, l: number) => {
	const _v = (s * (l < 50 ? l : 100 - l)) / 100;
	const _s = _v === 0 ? 0 : ((2 * _v) / (l + _v)) * 100;
	const v = l + _v;
	return { h, s: _s, v: v };
};
export const rgb2hsl = (r: number, g: number, b: number) => {
	let h = 0;
	let s = 0;
	let l = 0;
	let rr = r / 255;
	let gg = g / 255;
	let bb = b / 255;
	let cmin = Math.min(rr, gg, bb);
	let cmax = Math.max(rr, gg, bb);
	let delta = cmax - cmin;

	if (delta === 0) {
		h = 0;
	} else if (cmax === rr) {
		h = ((gg - bb) / delta) % 6;
	} else if (cmax === gg) {
		h = (bb - rr) / delta + 2;
	} else {
		h = (rr - gg) / delta + 4;
	}
	h = Math.round(h * 60);
	l = (cmax + cmin) / 2;
	s = delta === 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));
	s = +(s * 100).toFixed(1);
	l = +(l * 100).toFixed(1);

	// Make negative hues positive behind 360°
	if (h < 0) {
		h += 360;
	}
	return { h, s, l };
};
export const hsl2rgb = (h: number, s: number, l: number) => {
	let ss = s / 100;
	let ll = l / 100;
	let c = (1 - Math.abs(2 * ll - 1)) * ss,
		x = c * (1 - Math.abs(((h / 60) % 2) - 1)),
		m = ll - c / 2,
		r = 0,
		g = 0,
		b = 0;

	if (0 <= h && h < 60) {
		r = c;
		g = x;
		b = 0;
	} else if (60 <= h && h < 120) {
		r = x;
		g = c;
		b = 0;
	} else if (120 <= h && h < 180) {
		r = 0;
		g = c;
		b = x;
	} else if (180 <= h && h < 240) {
		r = 0;
		g = x;
		b = c;
	} else if (240 <= h && h < 300) {
		r = x;
		g = 0;
		b = c;
	} else if (300 <= h && h < 360) {
		r = c;
		g = 0;
		b = x;
	}
	r = Math.round((r + m) * 255);
	g = Math.round((g + m) * 255);
	b = Math.round((b + m) * 255);

	return { r, g, b };
};
export const hex2rgb = (str: string) => {
	let r = 0;
	let g = 0;
	let b = 0;
	let a = 1;
	if (str.length === 4) {
		r = parseInt('' + str[1] + str[1], 16);
		g = parseInt('' + str[2] + str[2], 16);
		b = parseInt('' + str[3] + str[3], 16);
	} else if (str.length === 7) {
		r = parseInt('' + str[1] + str[2], 16);
		g = parseInt('' + str[3] + str[4], 16);
		b = parseInt('' + str[5] + str[6], 16);
	} else if (str.length === 9) {
		r = parseInt('' + str[1] + str[2], 16);
		g = parseInt('' + str[3] + str[4], 16);
		b = parseInt('' + str[5] + str[6], 16);
		a = parseInt('' + str[7] + str[8], 16) / 255;
	}
	return { r, g, b, a };
};
export const str2rgb = (str: string) => {
	let r = 0;
	let g = 0;
	let b = 0;
	let a = 1;
	let rgb = str.match(/[\d.]+/g);
	if (rgb && rgb.length >= 3) {
		r = parseInt(rgb[0] || '0');
		g = parseInt(rgb[1] || '0');
		b = parseInt(rgb[2] || '0');
		rgb.length === 4 && (a = +rgb[3]);

		(a > 1 || a < 0) && (a = 1);

		if (r <= 255 && g <= 255 && b <= 255) {
			return { r, g, b, a };
		} else {
			return null;
		}
	} else {
		return null;
	}
};
export const rgb2hex = (r: number, g: number, b: number) => {
	let rr = r.toString(16);
	let gg = g.toString(16);
	let bb = b.toString(16);
	rr.length === 1 && (rr = '0' + rr);
	gg.length === 1 && (gg = '0' + gg);
	bb.length === 1 && (bb = '0' + bb);
	return ('#' + rr + gg + bb).toUpperCase();
};
export const rgba2hexa = (r: number, g: number, b: number, a: number) => {
	let hex = rgb2hex(r, g, b);
	let aa = Math.round(a * 255).toString(16);
	aa.length === 1 && (aa = '0' + aa);
	return (hex + aa).toUpperCase();
};
const StringColorConverter = (strColor: string) => {
	let r = 0;
	let g = 0;
	let b = 0;
	let h = 0;
	let s = 0;
	let l = 0;
	let a = 1;
	let str = strColor.toLowerCase();
	let isValid = true;
	if (str.match(/^rgb\(\d+\s*,\s*\d+\s*,\s*\d+\)|^rgba\(\d+\s*,\s*\d+\s*,\s*\d+\s*,\s*[\d.]+\)/g)) {
		let rgba = str2rgb(str);
		if (rgba) {
			r = rgba.r;
			g = rgba.g;
			b = rgba.b;
			a = rgba.a;
			let hsl = rgb2hsl(r, g, b);
			h = hsl.h;
			s = hsl.s;
			l = hsl.l;
		} else {
			isValid = false;
		}
	} else if (str.match(/^hsl\(\d+\s*,\s*[\d.]+%\s*,\s*[\d.]+%\)|^hsla\(\d+\s*,\s*[\d.]+%\s*,\s*[\d.]+%\s*,\s*[\d.]+\)/g)) {
		let hsl = str.match(/[\d.]+/g) || [];
		if (hsl.length === 3) {
			h = +hsl[0];
			s = +hsl[1];
			l = +hsl[2];
		} else if (hsl.length === 4) {
			h = +hsl[0];
			s = +hsl[1];
			l = +hsl[2];
			a = +hsl[3];
		}

		let rgb = hsl2rgb(h, s, l);
		r = rgb.r;
		g = rgb.g;
		b = rgb.b;
	} else if (str[0] === '#') {
		if (str.match(/^#[0-9a-f]+$/i)) {
			if (str.length === 4 || str.length === 7 || str.length === 9) {
				let rgba = hex2rgb(str);
				r = rgba.r;
				g = rgba.g;
				b = rgba.b;
				a = rgba.a;
				let hsl = rgb2hsl(r, g, b);
				h = hsl.h;
				s = hsl.s;
				l = hsl.l;
			} else {
				isValid = false;
			}
		} else {
			isValid = false;
		}
	} else if ((colorsList as IColorKey)[str.toLowerCase()]) {
		let rgba = hex2rgb((colorsList as IColorKey)[str.toLowerCase()]);
		r = rgba.r;
		g = rgba.g;
		b = rgba.b;
		a = rgba.a;
		let hsl = rgb2hsl(r, g, b);
		h = hsl.h;
		s = hsl.s;
		l = hsl.l;
	} else {
		isValid = false;
	}
	let rgb = `rgb(${r},${g},${b})`;
	let rgba = `rgba(${r},${g},${b},${a})`;
	let hsl = `hsl(${h},${s}%,${l}%)`;
	let hsla = `hsla(${h},${s}%,${l}%,${a})`;
	let hex = rgb2hex(r, g, b);
	let hexa = rgba2hexa(r, g, b, a);
	let name = (colorsList as IColorKey)[hex.toLowerCase()];
	let color: colorObject = { r, g, b, h, s, l, a, str, rgb, rgba, hsl, hsla, hex, hexa, name, isValid };
	Object.freeze(color);
	return color;
};

export default StringColorConverter;
