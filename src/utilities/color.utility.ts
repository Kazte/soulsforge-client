export function getTextColorFromBackground(r: number, g: number, b: number): string {

	const rgb = {
		r: r ?? 0,
		g: g ?? 0,
		b: b ?? 0
	};

	const brightness = (rgb.r * 299 + rgb.g * 587 + rgb.b * 114) / 1000;

	return brightness > 125 ? 'black' : 'white';
}

export function hexToRgb(hex: string): { r: number, g: number, b: number } {

	const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);

	if (!result) {
		throw new Error(`Invalid hex color: ${hex}`);
	}

	return {
		r: parseInt(result[1], 16),
		g: parseInt(result[2], 16),
		b: parseInt(result[3], 16)
	};
}

export function rgbToHex(r: number, g: number, b: number): string {
	const componentToHex = (c: number) => {
		const hex = c.toString(16);
		return hex.length === 1 ? '0' + hex : hex;
	};

	const hexR = componentToHex(r ?? 0);
	const hexG = componentToHex(g ?? 0);
	const hexB = componentToHex(b ?? 0);

	return `#${hexR}${hexG}${hexB}`;
}