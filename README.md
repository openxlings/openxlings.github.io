# OpenXlings Website

OpenXlings organization website and xlings documentation, built with Docusaurus.

## Development

```bash
xlings install
npm install
npm run start
```

`xlings install` reads [`.xlings.json`](.xlings.json) and installs the Node.js
toolchain expected by this project.

## Validate

```bash
npm run typecheck
npm run build
```

## Content Sources

- xlings usage and install commands: `openxlings/xlings`
- Package index: `openxlings/xim-pkgindex`
- xpkg and libxpkg references: `openxlings/xim-pkgindex` and `openxlings/libxpkg`

Keep command examples aligned with current xlings code before publishing.
