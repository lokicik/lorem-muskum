// Test script for Lorem Muskum library
const loremMuskum = require('./dist/index.js');

console.log('=== Test 1: Default usage ===');
console.log(loremMuskum());
console.log('\n');

console.log('=== Test 2: Generate 20 words ===');
console.log(loremMuskum.words(20));
console.log('\n');

console.log('=== Test 3: Generate 3 sentences (technical) ===');
console.log(loremMuskum.sentences(3));
console.log('\n');

console.log('=== Test 4: Generate 3 sentences (tweet style) ===');
console.log(loremMuskum.sentences(3, 'tweet'));
console.log('\n');

console.log('=== Test 5: Generate with options ===');
console.log(loremMuskum.generate({
  count: 2,
  units: 'paragraphs',
  style: 'visionary'
}));
