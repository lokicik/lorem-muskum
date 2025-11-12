/**
 * Lorem Muskum Generator
 * Core text generation logic
 */

import { muskWords, muskPhrases, allTemplates } from './data';

export type StyleType = 'tweet' | 'technical' | 'visionary';
export type UnitsType = 'words' | 'sentences' | 'paragraphs';

export interface GenerateOptions {
  count?: number;
  units?: UnitsType;
  style?: StyleType;
}

/**
 * Get random element from array
 */
function randomElement<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

/**
 * Fill template with random words and phrases
 */
function fillTemplate(template: string): string {
  return template
    .replace(/\{word\}/g, () => randomElement(muskWords))
    .replace(/\{phrase\}/g, () => randomElement(muskPhrases));
}

/**
 * Generate a single sentence based on style
 */
export function generateSentence(style: StyleType = 'technical'): string {
  const templates = allTemplates[style];
  const template = randomElement(templates);
  return fillTemplate(template);
}

/**
 * Generate multiple sentences
 */
export function generateSentences(count: number, style: StyleType = 'technical'): string {
  validateCount(count, 'sentence count');
  validateStyle(style);

  const sentences: string[] = [];
  for (let i = 0; i < count; i++) {
    sentences.push(generateSentence(style));
  }
  return sentences.join(' ');
}

/**
 * Generate a paragraph (3-7 sentences)
 */
export function generateParagraph(style: StyleType = 'technical'): string {
  const sentenceCount = Math.floor(Math.random() * 5) + 3; // 3-7 sentences
  return generateSentences(sentenceCount, style);
}

/**
 * Generate multiple paragraphs
 */
export function generateParagraphs(count: number, style: StyleType = 'technical'): string {
  validateCount(count, 'paragraph count');
  validateStyle(style);

  const paragraphs: string[] = [];
  for (let i = 0; i < count; i++) {
    paragraphs.push(generateParagraph(style));
  }
  return paragraphs.join('\n\n');
}

/**
 * Validate count parameter
 */
function validateCount(count: number, paramName: string = 'count'): void {
  if (typeof count !== 'number' || isNaN(count)) {
    throw new TypeError(`${paramName} must be a number`);
  }
  if (count < 1) {
    throw new RangeError(`${paramName} must be at least 1`);
  }
  if (!Number.isInteger(count)) {
    throw new RangeError(`${paramName} must be an integer`);
  }
}

/**
 * Validate style parameter
 */
function validateStyle(style: StyleType): void {
  const validStyles: StyleType[] = ['tweet', 'technical', 'visionary'];
  if (!validStyles.includes(style)) {
    throw new TypeError(`style must be one of: ${validStyles.join(', ')}`);
  }
}

/**
 * Generate random words
 */
export function generateWords(count: number): string {
  validateCount(count, 'word count');

  const words: string[] = [];
  const allWords = [...muskWords];

  for (let i = 0; i < count; i++) {
    words.push(randomElement(allWords));
  }

  return words.join(' ');
}

/**
 * Main generate function with options
 */
export function generate(options: GenerateOptions = {}): string {
  const {
    count = 1,
    units = 'paragraphs',
    style = 'technical'
  } = options;

  // Validate units
  const validUnits: UnitsType[] = ['words', 'sentences', 'paragraphs'];
  if (units && !validUnits.includes(units)) {
    throw new TypeError(`units must be one of: ${validUnits.join(', ')}`);
  }

  switch (units) {
    case 'words':
      return generateWords(count);
    case 'sentences':
      return generateSentences(count, style);
    case 'paragraphs':
      return generateParagraphs(count, style);
    default:
      return generateParagraphs(1, style);
  }
}
