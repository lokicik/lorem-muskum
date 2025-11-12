/**
 * Lorem Muskum
 * Elon Musk-themed placeholder text generator
 */

import {
  generate,
  generateWords,
  generateSentences,
  generateParagraphs,
  generateSentence,
  generateParagraph,
  type GenerateOptions,
  type StyleType,
  type UnitsType
} from './generator';

/**
 * Generate Lorem Muskum text (default: 1 paragraph)
 */
function loremMuskum(count: number = 1): string {
  return generateParagraphs(count);
}

// Add methods to the main function
loremMuskum.words = (count: number = 50): string => generateWords(count);
loremMuskum.sentences = (count: number = 5, style?: StyleType): string => generateSentences(count, style);
loremMuskum.paragraphs = (count: number = 3, style?: StyleType): string => generateParagraphs(count, style);
loremMuskum.generate = (options?: GenerateOptions): string => generate(options);

// Export types
export type { GenerateOptions, StyleType, UnitsType };

// Named exports
export {
  loremMuskum,
  generateWords,
  generateSentences,
  generateParagraphs,
  generateSentence,
  generateParagraph,
  generate
};

// Default export
export default loremMuskum;

// CommonJS compatibility
module.exports = loremMuskum;
module.exports.default = loremMuskum;
module.exports.loremMuskum = loremMuskum;
module.exports.words = loremMuskum.words;
module.exports.sentences = loremMuskum.sentences;
module.exports.paragraphs = loremMuskum.paragraphs;
module.exports.generate = loremMuskum.generate;
module.exports.generateWords = generateWords;
module.exports.generateSentences = generateSentences;
module.exports.generateParagraphs = generateParagraphs;
module.exports.generateSentence = generateSentence;
module.exports.generateParagraph = generateParagraph;
