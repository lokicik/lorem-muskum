/**
 * Tests for Lorem Muskum generator
 */

import { describe, it } from 'node:test';
import assert from 'node:assert';
import {
  generateWords,
  generateSentences,
  generateParagraphs,
  generate
} from './generator';

describe('generateWords', () => {
  it('should generate the correct number of words', () => {
    const result = generateWords(10);
    const words = result.split(' ');
    assert.strictEqual(words.length, 10);
  });

  it('should throw error for invalid count', () => {
    assert.throws(() => generateWords(-1), /must be at least 1/);
    assert.throws(() => generateWords(0), /must be at least 1/);
    assert.throws(() => generateWords(1.5), /must be an integer/);
  });
});

describe('generateSentences', () => {
  it('should generate text with correct style', () => {
    const result = generateSentences(3, 'technical');
    assert.ok(result.length > 0);
    assert.ok(typeof result === 'string');
  });

  it('should throw error for invalid style', () => {
    assert.throws(() => generateSentences(1, 'invalid' as any), /style must be one of/);
  });

  it('should throw error for invalid count', () => {
    assert.throws(() => generateSentences(-5), /must be at least 1/);
  });
});

describe('generateParagraphs', () => {
  it('should generate paragraphs separated by double newlines', () => {
    const result = generateParagraphs(3);
    const paragraphs = result.split('\n\n');
    assert.strictEqual(paragraphs.length, 3);
  });

  it('should throw error for invalid count', () => {
    assert.throws(() => generateParagraphs(0), /must be at least 1/);
  });
});

describe('generate', () => {
  it('should generate words when units is "words"', () => {
    const result = generate({ count: 5, units: 'words' });
    const words = result.split(' ');
    assert.strictEqual(words.length, 5);
  });

  it('should generate sentences when units is "sentences"', () => {
    const result = generate({ count: 2, units: 'sentences', style: 'tweet' });
    assert.ok(result.length > 0);
  });

  it('should generate paragraphs by default', () => {
    const result = generate({ count: 2 });
    const paragraphs = result.split('\n\n');
    assert.strictEqual(paragraphs.length, 2);
  });

  it('should throw error for invalid units', () => {
    assert.throws(() => generate({ units: 'invalid' as any }), /units must be one of/);
  });

  it('should use default values when no options provided', () => {
    const result = generate();
    assert.ok(result.length > 0);
    assert.ok(typeof result === 'string');
  });
});
