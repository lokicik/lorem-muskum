# Lorem Muskum 🚀

[![Tests](https://github.com/lokicik/lorem-muskum/actions/workflows/test.yml/badge.svg)](https://github.com/lokicik/lorem-muskum/actions/workflows/test.yml)
[![npm version](https://img.shields.io/npm/v/lorem-muskum.svg?style=flat-square)](https://www.npmjs.com/package/lorem-muskum)
[![npm downloads](https://img.shields.io/npm/dm/lorem-muskum.svg?style=flat-square)](https://www.npmjs.com/package/lorem-muskum)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-blue.svg?style=flat-square)](https://www.typescriptlang.org/)

> **Making Placeholder Text Multiplanetary™**

Elon Musk-themed placeholder text generator - Lorem Ipsum but with rockets, AI, and Mars. Because regular Lorem Ipsum is so 15th century.

Lorem Muskum is a parody placeholder text generator inspired by Elon Musk's ventures, tweets, and visionary statements. Perfect for developers who want to add some tech-bro energy to their mockups and prototypes.

```
Simply tweeting at 3am about Dogecoin. The key to selling flamethrowers to fund Mars
is meme and Dogecoin. Big galaxy-brain energy!
```

## Installation

```bash
npm install lorem-muskum
```

## Usage

### Basic Usage

```javascript
const loremMuskum = require('lorem-muskum');

// Generate 1 paragraph (default)
console.log(loremMuskum());

// Generate 3 paragraphs
console.log(loremMuskum(3));
```

### Generate Words

```javascript
const loremMuskum = require('lorem-muskum');

// Generate 50 words
console.log(loremMuskum.words(50));

// Generate 20 words
console.log(loremMuskum.words(20));
```

### Generate Sentences

```javascript
const loremMuskum = require('lorem-muskum');

// Generate 5 sentences with technical style (default)
console.log(loremMuskum.sentences(5));

// Generate 3 sentences in tweet style
console.log(loremMuskum.sentences(3, 'tweet'));

// Generate 2 sentences in visionary style
console.log(loremMuskum.sentences(2, 'visionary'));
```

### Generate Paragraphs

```javascript
const loremMuskum = require('lorem-muskum');

// Generate 3 paragraphs
console.log(loremMuskum.paragraphs(3));

// Generate 2 paragraphs in visionary style
console.log(loremMuskum.paragraphs(2, 'visionary'));
```

### Advanced Usage with Options

```javascript
const loremMuskum = require('lorem-muskum');

// Generate with custom options
console.log(loremMuskum.generate({
  count: 5,
  units: 'sentences',
  style: 'tweet'
}));

console.log(loremMuskum.generate({
  count: 100,
  units: 'words'
}));

console.log(loremMuskum.generate({
  count: 2,
  units: 'paragraphs',
  style: 'visionary'
}));
```

### ES6 Import

```javascript
import loremMuskum from 'lorem-muskum';

console.log(loremMuskum.sentences(3, 'tweet'));
```

### TypeScript

```typescript
import loremMuskum, { GenerateOptions, StyleType } from 'lorem-muskum';

const options: GenerateOptions = {
  count: 5,
  units: 'sentences',
  style: 'technical'
};

const text: string = loremMuskum.generate(options);
console.log(text);
```

## CLI Usage

You can also use Lorem Muskum from the command line:

```bash
# Generate 3 paragraphs (default)
npx lorem-muskum

# Generate 5 sentences
npx lorem-muskum -c 5 -u sentences

# Generate 100 words
npx lorem-muskum --count 100 --units words

# Generate 2 paragraphs in visionary style
npx lorem-muskum -c 2 -u paragraphs -s visionary

# Generate tweets
npx lorem-muskum -c 5 -u sentences -s tweet

# Show help
npx lorem-muskum --help
```

### CLI Options

- `-c, --count <number>` - Number of units to generate (default: 3)
- `-u, --units <type>` - Type of units: words, sentences, paragraphs (default: paragraphs)
- `-s, --style <type>` - Style: tweet, technical, visionary (default: technical)
- `-h, --help` - Show help message

## Styles

Lorem Muskum supports three different styles:

### `technical` (default)
Professional, technical statements about technology and innovation.

Example:
> "We need to accelerating sustainable energy to ensure making life multiplanetary. The key to solving traffic with tunnels is reusable and autonomous. By combining neural with AI, we can achieve revolutionizing transportation."

### `tweet`
Short, punchy statements in the style of social media posts.

Example:
> "Mars! Working on high-bandwidth brain-machine interface. Starship is the future."

### `visionary`
Longer, inspirational statements about the future of humanity and technology.

Example:
> "Imagine a world where taking humanity to Mars is possible through advanced rocket technology. This isn't science fiction - it's the inevitable future we're building."

## API

### `loremMuskum(count?: number): string`
Generate paragraphs of Lorem Muskum text.
- `count` - Number of paragraphs (default: 1)

### `loremMuskum.words(count: number): string`
Generate random Musk-themed words.
- `count` - Number of words

### `loremMuskum.sentences(count: number, style?: StyleType): string`
Generate sentences.
- `count` - Number of sentences
- `style` - Style type: 'tweet', 'technical', or 'visionary' (default: 'technical')

### `loremMuskum.paragraphs(count: number, style?: StyleType): string`
Generate paragraphs.
- `count` - Number of paragraphs
- `style` - Style type: 'tweet', 'technical', or 'visionary' (default: 'technical')

### `loremMuskum.generate(options: GenerateOptions): string`
Generate text with custom options.

**Options:**
```typescript
interface GenerateOptions {
  count?: number;        // Number of units (default: 1)
  units?: 'words' | 'sentences' | 'paragraphs';  // Unit type (default: 'paragraphs')
  style?: 'tweet' | 'technical' | 'visionary';   // Style type (default: 'technical')
}
```

## Examples

### React Component
```jsx
import { useEffect, useState } from 'react';
import loremMuskum from 'lorem-muskum';

function PlaceholderText() {
  const [text, setText] = useState('');

  useEffect(() => {
    setText(loremMuskum.paragraphs(3));
  }, []);

  return <p>{text}</p>;
}
```

### Express API
```javascript
const express = require('express');
const loremMuskum = require('lorem-muskum');

const app = express();

app.get('/api/muskum', (req, res) => {
  const { count = 3, units = 'paragraphs', style = 'technical' } = req.query;

  const text = loremMuskum.generate({
    count: parseInt(count),
    units,
    style
  });

  res.json({ text });
});

app.listen(3000);
```

## Why Lorem Muskum?

Because regular Lorem Ipsum is so 15th century. Why use boring Latin placeholder text when you can have:
- 🚀 Mars colonization plans
- ⚡ Sustainable energy buzzwords
- 🤖 AI and neural interface references
- 🚗 Electric vehicle terminology
- 💎 Diamond hands and meme stock energy
- 🔥 3am Twitter energy
- 😎 Tech bro visionary statements

Perfect for:
- Tech startup mockups
- Presentation slides that need more rocket emojis
- Portfolio projects that want to go viral
- Developer humor and memes
- Making your placeholder text 10x more disruptive
- Pitching to VCs who love buzzwords
- Twitter threads about "the future"

## Features

✅ **TypeScript Support** - Full type definitions included
✅ **3 Generation Styles** - Technical, Tweet, and Visionary modes
✅ **CLI Tool** - Quick generation from command line
✅ **Browser & Node.js** - Works everywhere
✅ **Unit Tested** - Because even memes need quality assurance
✅ **Zero Dependencies** - Just pure Musk energy
✅ **Meme-Worthy Output** - Actually funny placeholder text

## Quick Start

```bash
# Try it instantly
npx lorem-muskum -s tweet

# Output: "lmao Dogecoin · Big autonomous energy · funding secured for making catgirls real"
```

## Contributing

Contributions are welcome! See [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

Ideas for contributions:
- More Musk-themed phrases and buzzwords
- Additional style templates
- Bug fixes and improvements
- Documentation enhancements
- Translations of Musk energy to other languages

## Support

- Star this repo if it made you laugh 😂
- Share on Twitter with `#LoremMuskum`
- Report bugs on [GitHub Issues](https://github.com/lokicik/lorem-muskum/issues)
- Tweet your favorite generations @lokicikai

## Roadmap

- [ ] Web playground for live generation
- [ ] VS Code extension
- [ ] API endpoint for maximum scalability
- [ ] Figma plugin
- [ ] More meme styles (Cybertruck ASCII art?)

## License

MIT - Free to use, modify, and distribute. Even on Mars.

## Disclaimer

This is a parody project for entertainment and development purposes. Not affiliated with Elon Musk, Tesla, SpaceX, Neuralink, The Boring Company, or any of his companies. All trademarks belong to their respective owners. Please don't sue us, we're just trying to make placeholder text multiplanetary.

## Share Your Favorites

Generated something hilarious? Share it!
- Tweet with #LoremMuskum
- Open a discussion on GitHub
- Add it to the Hall of Fame (coming soon)

---

Made with 🚀 by developers, for developers. **To Mars and beyond!**

*Funding secured.*
