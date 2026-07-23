# Contributing to workhorse-e2e-test

> hiiii 👋

Thank you for your interest in contributing! This document explains what this repository is, how it is structured, and how you can help.

---

## What this repository is

**workhorse-e2e-test** is a minimal test target used for Workhorse end-to-end runs. It contains no application code, library, or build toolchain — its purpose is to act as a lightweight, well-known repository that Workhorse workflows can run against during integration testing.

If you are looking to contribute to Workhorse itself, please visit the Workhorse repository directly.

---

## Repository layout

```
.
├── README.md       # One-line project description
├── SUPPORT.md      # Where to report issues and security vulnerabilities
├── CONTRIBUTING.md # This file
└── .workflow/      # Workhorse workflow definitions (managed by Workhorse)
```

There is no build system, test suite, package manifest, or language-specific tooling in this repository.

---

## How to contribute

Because the repo is a bare test target, most contributions will be small: correcting documentation, adjusting workflow definitions, or updating support information.

### Workflow

1. **Fork** the repository on GitHub.
2. **Create a branch** from `main` with a short, descriptive name:
   - `feat/<description>` — for additions or improvements
   - `fix/<description>` — for corrections
   - `docs/<description>` — for documentation-only changes
3. **Commit** your changes with a clear, concise message that explains *why*, not just *what*.
4. **Open a Pull Request** against `main`. Include:
   - A summary of what changed and why.
   - Any relevant context (e.g. a link to the issue it addresses).
5. A maintainer will review and merge when everything looks good.

### Guidelines

- Keep changes focused and minimal — match the philosophy of the repo itself.
- Write clear commit messages (imperative mood: *"Add …"*, *"Fix …"*, *"Remove …"*).
- No linter or formatter is configured; just aim for readable, consistent Markdown.

---

## Reporting issues

See [SUPPORT.md](SUPPORT.md) or go directly to the issue tracker:

**<https://github.com/StevenJPx2/workhorse-e2e-test/issues>**

Please include a clear description, reproduction steps, and any relevant context.

---

## Security issues

Do **not** open a public issue for security vulnerabilities.  
Email **security@example.com** instead.
