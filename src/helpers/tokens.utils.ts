const NUMBER: RegExp = /[0-9]+/;
const LETTER: RegExp = /[a-zA-Z]+/;
const WHITESPACE: RegExp = /\s+/;
const OPEN_PARENTHESIS: RegExp = /[({\[]/;
const CLOSE_PARENTHESIS: RegExp = /[)}\]]/;
const QUOTE: RegExp = /"/;

export const isNumber: Function = (character: any) => NUMBER.test(character);
export const isLetter: Function = (character: any) => LETTER.test(character);
export const isWhiteSpace: Function = (character: any) => WHITESPACE.test(character);
export const isOpenParenthesis: Function = (character: any) => OPEN_PARENTHESIS.test(character);
export const isCloseParenthesis: Function = (character: any) => CLOSE_PARENTHESIS.test(character);
export const isParenthesis: Function = (character: any) => isOpenParenthesis(character) || isCloseParenthesis(character);
export const isQuote: Function = (character: any) => QUOTE.test(character);