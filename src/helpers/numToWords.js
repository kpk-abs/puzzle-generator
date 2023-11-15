import { converter, SYSTEM } from '@kushalst/numbers-to-words-converter';
import { reduce } from '@laufire/utils/collection';

const convertNumberToWords = ({ number, type }) =>
	converter.toWords(number, SYSTEM[type]).replace(/-/g, ' ');

const convertAmountToWords = ({ value, system = 'lnc' }) => {
	const type = {
		mnb: 'INTL',
		lnc: 'IN',
	};
	const [integerPart, decimalPart = ''] = String(value).split('.');
	const integerPartWords = convertNumberToWords({
		number: integerPart, type: type[system],
	});
	const decimalPartWords = reduce(
		decimalPart.split(''), (acc, number) =>
			`${ acc } ${ convertNumberToWords({
				number: number, type: type[system],
			}) }`, '',
	);

	return `${ integerPartWords }${ decimalPartWords && ` point${ decimalPartWords }` }`;
};

export {
	convertAmountToWords,
	convertNumberToWords,
};
