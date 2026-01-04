# count-word

A fast, simple, and lightweight **CLI tool** to count words in a text file — built with modern Node.js and ES Modules.

You can:

- Count **all words** in a file
- Count occurrences of a **specific word**
- Run it **globally from anywhere** as a CLI

---

## Features

- ⚡ Fast and lightweight
- 🧠 Case-insensitive word counting
- 🧩 Optional filtering for a specific word
- 🖥️ Works as a global CLI command
- 📦 Built with modern Node.js (`fs/promises`, ESM)

---

## Installation

Install globally using npm:

```bash
npm install -g @engineer.dilnawaz.khan/count-word
```

---

## Usage

### Count all words in a file

```bash
count-word ./file.txt
```

**Output example:**

```js
{
  hello: 3,
  world: 2,
  node: 1
}
```

---

### Count a specific word

```bash
count-word ./file.txt hello
```

**Output example:**

```js
{
  hello: 3;
}
```

> Word matching is **case-insensitive**

---

## How It Works

- Reads the file using `node:fs/promises`
- Splits content using non-word characters
- Normalizes words to lowercase
- Counts word occurrences efficiently

---

## Requirements

- **Node.js v18+** (recommended: latest LTS)

---

## Error Handling

- If no file path is provided:

  ```text
  File path is needed.
  ```

- If the file does not exist or cannot be read, Node will throw a readable error.

---

## Local Development

Clone the repository and link it locally:

```bash
git clone <repo-url>
cd count-word
npm install
npm link
```

Test it:

```bash
count-word ./test.txt
```

---

## Project Structure

```text
.
├── app.js        # CLI entry point
├── package.json
└── README.md
```

---

## CLI Implementation Notes

- Uses a **shebang** (`#!/usr/bin/env node`) for execution
- Exposed via the `bin` field in `package.json`
- Distributed as a global npm CLI

---

## License

MIT © Dilnawaz Khan

---

## Author

**Dilnawaz Khan**
Frontend / Full-Stack Engineer
npm: `@engineer.dilnawaz.khan`

---

## Future Improvements

- `--help` and `--version` flags
- Support for large files via streams
- Output formatting options (JSON / table)
- Ignore common stop words

---

## Inspiration

Inspired by Unix-style CLI tools and real-world Node.js tooling patterns.

---

⭐ If you find this useful, consider starring the repository or sharing feedback!
