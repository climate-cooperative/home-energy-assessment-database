# Contributing to Zwell Open Source Project

We welcome contributions of all forms including bug reports, code, documentation, and feedback. Your contributions help make Zwell a better project and advance our mission of fostering sustainable energy solutions.

## Contributing

Simply fork the [main branch](https://github.com/climate-cooperative/home-energy-assessment-database) into your own a account, and abide by the following conventions.

### Pull Requests

**Pull Request onced approved will be merged in upon approval by code maintainers.**

Pull Requests are used to initiate the process of merging code into the [main branch](https://github.com/climate-cooperative/home-energy-assessment-database).

1. Under Pull requests tab
2. New Pull Request
3. Configure comparison
    - Left Hand Side = `base repository: climate-cooperative/home-energy-assessment-database` `base: main`
    - Right Hand Side = `base repository: <your_fork>` `base: <your_feature_branch>`

*Take this moment to review the file changes themselves. Make sure to have the most recent pushes to main merged in `git merge main`*

4. Create Pull Request
5. **IMPORTANT** Fill out the PR title/description provided template with as much information as possible. Make sure to link relevant issue/s and users for review.

### Branches

Climate Coorporation uses a feature branching convention. Each Pull-Request should be from a new branch, checked out from main, targeting a specific Issue.

Please follow these naming conventions

- Include Type of Feature [`feature`, `bug`, `refactor`, `fix`]
- Include [Issue](https://github.com/climate-cooperative/home-energy-assessment-database/issues) Number
- Simple Descriptive Names

> **feature/01-sample-branch**

### Keep your main up-to-date with Climate-Corp main!

It is important to keep your main updated with the [main branch](https://github.com/climate-cooperative/home-energy-assessment-database). Especially when making PR's and avoiding uneccessary commit history. These keep PR's small, which makes code reviews faster!

1. In your **home-energy-assessment-database** click `Sync fork` to sync your main.
2. In your feature branch merge in your main.

```(shell)
  // in main (git switch main)
  git switch <your_branch>
  git merge main
```

*Can also be done from the cli, with pull/push*

## Reporting Issues

Your reports are valuable in improving the project. Here's how to make them effective:

- **Where to Report**: Please report issues on our GitHub Issues page.
- **Search First**: Before creating a new issue, search existing ones to avoid duplicates. Add to existing discussions if your issue is already reported.
- **Bug Reports**: A good bug report includes:
  - A concise description of the problem
  - Steps to reproduce the issue
  - Expected vs. actual behavior
  - Your environment details (OS, version, etc.)
  - Any other relevant information

## Contributing Changes

We appreciate code contributions. Here are some guidelines:

### DOs

- **Follow Standard Coding Conventions**: Adhere to the coding style of the project.
- **Include Tests**: For new features or fixes, include tests that cover the new functionality or the bug being fixed.
- **Focused Discussions**: Keep the discussion on the issue at hand. Open new issues for unrelated topics.
- **Claim Issues**: Before starting work, indicate that you are taking on an issue.

### DON'Ts

- **Avoid Large Surprises**: Discuss significant changes in an issue before working on a large pull request.
- **No External Code**: Don't submit code you didn't write without discussing it first.
- **No License Changes**: Don't submit PRs that change licensing files or headers.
- **Discuss New APIs**: Before adding new APIs, file an issue and discuss it with the community.

Thank you for contributing to Zwell Open Source Project! Together, we can make a significant impact on creating sustainable and accessible energy solutions.
