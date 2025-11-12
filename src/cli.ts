#!/usr/bin/env node

/**
 * Lorem Muskum CLI
 * Command-line interface for generating Musk-themed placeholder text
 */

import { generate, type StyleType, type UnitsType } from './generator';

interface CliArgs {
  count: number;
  units: UnitsType;
  style: StyleType;
  help: boolean;
}

function showHelp(): void {
  console.log(`
Lorem Muskum - Elon Musk-themed placeholder text generator

Usage:
  npx lorem-muskum [options]

Options:
  -c, --count <number>     Number of units to generate (default: 3)
  -u, --units <type>       Type of units: words, sentences, paragraphs (default: paragraphs)
  -s, --style <type>       Style: tweet, technical, visionary (default: technical)
  -h, --help               Show this help message

Examples:
  npx lorem-muskum
  npx lorem-muskum -c 5 -u sentences
  npx lorem-muskum --count 100 --units words
  npx lorem-muskum -c 2 -u paragraphs -s visionary
  npx lorem-muskum -s tweet
`);
}

function parseArgs(args: string[]): CliArgs {
  const parsed: CliArgs = {
    count: 3,
    units: 'paragraphs',
    style: 'technical',
    help: false
  };

  for (let i = 0; i < args.length; i++) {
    const arg = args[i];

    if (arg === '-h' || arg === '--help') {
      parsed.help = true;
    } else if (arg === '-c' || arg === '--count') {
      const count = parseInt(args[++i], 10);
      if (!isNaN(count) && count > 0) {
        parsed.count = count;
      }
    } else if (arg === '-u' || arg === '--units') {
      const units = args[++i] as UnitsType;
      if (['words', 'sentences', 'paragraphs'].includes(units)) {
        parsed.units = units;
      }
    } else if (arg === '-s' || arg === '--style') {
      const style = args[++i] as StyleType;
      if (['tweet', 'technical', 'visionary'].includes(style)) {
        parsed.style = style;
      }
    }
  }

  return parsed;
}

function main(): void {
  const args = process.argv.slice(2);
  const parsed = parseArgs(args);

  if (parsed.help) {
    showHelp();
    return;
  }

  const result = generate({
    count: parsed.count,
    units: parsed.units,
    style: parsed.style
  });

  console.log(result);
}

// Run CLI if executed directly
if (require.main === module) {
  main();
}

export { main };
