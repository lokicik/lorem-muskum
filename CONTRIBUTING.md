# Contributing to Lorem Muskum 🚀

First off, thanks for considering contributing to Lorem Muskum! We're making placeholder text multiplanetary, and we need your help.

## How Can I Contribute?

### Adding More Musk-Themed Content

The heart of Lorem Muskum is its content. We're always looking for:

1. **New Words** - Add Musk-related buzzwords to `src/data.ts`:
   ```typescript
   export const muskWords = [
     // Add your words here!
   ];
   ```

2. **New Phrases** - Add funny or characteristic Musk phrases:
   ```typescript
   export const muskPhrases = [
     'your hilarious phrase here',
   ];
   ```

3. **New Templates** - Create new sentence templates for any style:
   ```typescript
   export const muskTweetTemplates = [
     'your template with {word} and {phrase}',
   ];
   ```

### Reporting Bugs

Found a bug? Please open an issue with:
- A clear title and description
- Steps to reproduce
- Expected vs actual behavior
- Your environment (Node version, OS, etc.)

### Suggesting Enhancements

Have an idea? Open an issue with:
- A clear description of the enhancement
- Why it would be useful
- Examples of how it would work

## Development Setup

1. **Fork and Clone**
   ```bash
   git clone https://github.com/yourusername/lorem-muskum.git
   cd lorem-muskum
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Make Your Changes**
   - Edit files in `src/`
   - Add tests if needed in `src/*.test.ts`

4. **Build and Test**
   ```bash
   npm run build
   npm test
   ```

5. **Test the CLI**
   ```bash
   node dist/cli.js -c 5 -u sentences -s tweet
   ```

## Code Style

- Use TypeScript
- Follow existing code formatting
- Add JSDoc comments for public APIs
- Keep it funny but not offensive

## Content Guidelines

### DO:
- ✅ Reference actual Musk ventures (Tesla, SpaceX, Neuralink, etc.)
- ✅ Include meme culture references (Dogecoin, 420, stonks, etc.)
- ✅ Use tech buzzwords and startup lingo
- ✅ Keep it lighthearted and funny
- ✅ Reference well-known Musk moments (Joe Rogan podcast, Twitter antics, etc.)

### DON'T:
- ❌ Include political content
- ❌ Add offensive or discriminatory content
- ❌ Reference private/personal matters
- ❌ Include anything that could be considered harassment
- ❌ Use copyrighted material

## Pull Request Process

1. **Update Tests** - If you add functionality, add tests
2. **Update README** - If you add features, document them
3. **Build Successfully** - Ensure `npm run build` works
4. **Pass Tests** - Ensure `npm test` passes
5. **Describe Your Changes** - Write a clear PR description

### PR Title Format
- `feat: add new tweet templates`
- `fix: correct typo in data`
- `docs: update installation instructions`
- `test: add tests for generator`

## Questions?

Feel free to open an issue with the `question` label. We're friendly!

## Code of Conduct

Be respectful, be kind, and remember: we're all just trying to make placeholder text more entertaining.

## Recognition

Contributors will be added to a contributors list (coming soon). Your memes will live on in the codebase forever!

---

**Remember: This is a parody project. Keep it fun, keep it tasteful, and let's make the best placeholder text generator in the solar system! 🚀**

*Funding secured for your contribution.*
