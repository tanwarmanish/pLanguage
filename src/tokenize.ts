import { TOKEN } from './enums/token.enum';
import * as TKU from './helpers/tokens.utils';

const string = '"HELLO"';

export function tokenize(code: string): any[] {
	const tokens: any = [];
	let cursor = 0;
	while (cursor < code.length) {
		const character = code[cursor];
		const token: any = {
			type: null,
			value: null,
		}

		// number
		if (TKU.isNumber(character)) {
			token.type = TOKEN.NUMBER;
			token.value = character;
			while (TKU.isNumber(code[++cursor])) {
				token.value += code[cursor];
			}
			token.value = +token.value;
		}

		// letter
		if (TKU.isLetter(character)) {
			token.type = TOKEN.LETTER;
			token.value = character;
			while (TKU.isLetter(code[++cursor])) {
				token.value += code[cursor];
			}
		}

		// string
		if (TKU.isQuote(character)) {
			token.type = TOKEN.STRING;
			token.value = '';
			while (!TKU.isQuote(code[++cursor])) {
				token.value += code[cursor];
			}
		}

		// whitespace
		if (TKU.isWhiteSpace(character)) {
			cursor++;
			continue;
		}

		// parenthesis
		if (TKU.isParenthesis(character)) {
			token.type = TOKEN.PARENTHESIS;
			token.value = character;
		}

		if (token.type) {
			tokens.push(token);
			cursor++;
		}
		else {
			throw new Error(`${character} is not valid`);
		}
	}
	return tokens;
}

const tokens = tokenize(string);
console.log(tokens);