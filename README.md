# Workdaywalkthrough
- A website that gives users more information about the roles they are applying to
- To start the app, cd into `workdaywalkthrough/client` and do a `npm start`. Note: you may need to do a `npm init` first if your node modules haven't been initialised.
- Figma designs: https://www.figma.com/file/YQ6l457sfP5E4tYZpruGHg/workdaywalkthrough?type=design&node-id=0-1&t=z4L9R9YzW0itytiH-0


## Conventions
- If you have a feature branch you want to push:
  - commit you're feature branch changes
  - checkout staging
  - git pull staging
  - checkout feature branch
  - squash you're current feature branch (google this)
  - rebase the squashed branch into staging: `get rebase staging`
  - `git push -f` (force push it)
  - Open a PR on Github
  - `Rebase and Merge`
- Styling - all components should have their own dedicated styling files. This include one-off components or components used frequently.
