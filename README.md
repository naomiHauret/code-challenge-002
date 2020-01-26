A shift booking app.

[Get the challenge on this repository.](https://github.com/woltapp/react-assignment)

## Pre-requisites
* `node` version >= 11
* `npm` version >= 6

## Deployment pre-requisites
* Have a `now` account
* `now-cli` version >= 16

## How to ...

* install: after cloning the project, open a new terminal `cd` in the newly created folder, and run `npm install`

* Launch (development mode) : in a terminal, launch `npm start`, and in another, `npm run server:start`
* Launch (production mode) : `npm run prod`
* Format code (with Prettier): `npm run format`
* Deploy (to a branch, not to production): `npm run branch:deploy`
* Deploy (to production): `npm run prod:deploy`
* Test: `npm run test`

## Tech
* workflow: webpack
* deployement: Zeit Now
* UI: React
* Async operations: swr library + Suspense
* Styles: Tailwind CSS, PostCSS, CSS Modules
* Format: Prettier
* Test: Jest
