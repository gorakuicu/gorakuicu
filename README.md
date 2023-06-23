# AIKOICU [aico.icu]

> NSFW for all

AIKOYCU is a multi-module NSFW content artist and illustrator project written in TypeScript and designed to be deployed in a Docker environment. It includes applications such as the CMS and the site web application, as well as shares.

## Installation and use

All project dependencies are managed via `pnpm`. Make sure you have installed `pnpm` and `node` (relevant versions are listed in `./package.json`).

To install all dependencies, run the following command:

```bash
pnpm install
```

## Scripts

The following scripts are defined in `package.json`:

- `dev`: Runs the project in development mode.
- `build`: Builds the project for production.
- `start`: Starts the built project.
- `test`: Runs project tests.
- `lint`: Checks the code against style and format.
- `formatter`: Applies formatting to code using Prettier.
- `release`: Creates a project release.
- `versions`: Checks the versions of installed dependencies.
- `size-limit`: Checks the size of the built project.

## CI/CD

The project uses GitLab CI/CD for automated builds, testing, and deployment. Check the `.gitlab-ci.yml` file for configuration details.

## Project structure

The project includes the following main directories:

- `apps`: Each sub-application of the project. Currently includes `admin` and `root` as well as shares in `shared`.
- `scripts`: Scripts used in the project, including CI/CD scripts and Git scripts.

## License

Please see the `LICENSE` file for information about the rights and restrictions associated with using or distributing this project.

## Mirrors

- [GitHub](https://github.com/aikoicu/aikoicu)
- [GitLab](https://gitlab.com/aiko.icu/aikoicu)

## Docs

- [TODO](./docs/TODO.md)
