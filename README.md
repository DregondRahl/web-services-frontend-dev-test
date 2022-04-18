# Superheros UI

This is a project that integrates with Superheros API https://akabab.github.io/superhero-api/api/

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FDregondRahl%2Fweb-services-frontend-dev-test)

## Getting started

Clone this repository and run the install process to setup the dependencies of the project

```bash
npm install
# or
yarn install
# or
pnpm install
```

## Build Project

To build the project in dev mode

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

For production build

```bash
npm run build
# or
yarn build
# or
pnpm build
```

## Features

- Nextjs Project with Typescript
- i18n Multi-lingual support for English and French (French words may be inaccurate)
- Auto language detection based on browser/ OS
- a11y support for keyboard and screen reader
- Search feature
- Tags management
- Local Storage persitance and sync
- Filter by Tags and Text
- Responsive UI for different screen sizes
- Standardized CSS with Nextjs CSS modules
- ESlint for Javascript
- Commitlint for commit messages
- Standard Git workflow with dev branch
- Git Husky for on staging/committing hooks and actions
- Strongly typed objects and properties
- Integrated with Vercel
- Automated deployments to Dev/ Production environments on Vercel
- Componentized UI
- *Bonus: Game Mode*

### Game Mode

Built a simple card flip game using the superhero API. Goal is to flip only Hero cards until all are flipped. If a villain card is picked, the game resets and all cards are randomly arranged again. Give it a try! /game
