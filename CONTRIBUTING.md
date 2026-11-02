# Contributing

Framefold's public community covers documentation, artist workflows, feedback and research discussion. The application source and full engineering specification set are maintained privately.

## Choose the right route

| Contribution                                              | Where it belongs           |
| --------------------------------------------------------- | -------------------------- |
| A reproducible problem in alpha 0.2                       | Bug report                 |
| An artist task or useful result the tool does not support | Workflow request           |
| A bounded technical/product experiment                    | Research proposal          |
| Questions, observations and safe work in progress         | Discussions                |
| Corrections to these public documents                     | Documentation pull request |

Search existing threads first. Reference a capability ID from [FEATURES.md](FEATURES.md) where relevant. A planned or research feature is not a released capability; say which behaviour you actually observed.

## Specification-first development

The active gate is [specification review](SPECIFICATION.md). All known capabilities have proposed packets; research and exact production decisions remain open. Useful contributions include missing failure cases, schema/interaction contradictions, licensed minimal examples, algorithm comparisons and clearer acceptance criteria.

For research, state hypothesis, alternatives, reproducible inputs, measurements and a stop condition. Do not invent users, benchmarks or conclusions. Suggesting a feature does not commit the project to deliver it. No paid infrastructure is authorized.

## Documentation pull requests

Keep changes focused and use plain language. Separate current behaviour from planned scope. Update related links, capability IDs and dates when necessary. Images must show the actual released version and have permission to be published; concept images must be labelled as concepts, never release screenshots.

This repository does not build the studio. Do not upload private implementation, credentials, private design packets or confidential artwork here. Public participation does not automatically grant application-source access, project membership or a maintainer role.

## Testing

Follow [GETTING_STARTED.md](GETTING_STARTED.md) and [TESTING.md](TESTING.md) with disposable files. Keep backups and record the browser/task/result. Do not post another person's work without permission. GitHub participation is separate from manually exchanging private project files.

There is no guaranteed response time, bounty, employment offer or release date. Maintainers may combine duplicates, request evidence, defer research or decline a proposal. See [community rules](CODE_OF_CONDUCT.md), [privacy](PRIVACY.md) and [security](SECURITY.md).

## Public release dates

Only the newest release heading in CHANGELOG.md carries its publication date. When publishing a new version, remove the date from the previous heading while retaining its version and notes. Do not remove commit history, alter evidence timestamps inside example project data, or invent release dates. Guides link to the current release notes rather than repeating historical release dates.

Run `node scripts/check-release-notes.mjs` before a public documentation release. CI checks the latest-only date rule and keeps the README, first-session guide, testing guide and architecture versions aligned.
