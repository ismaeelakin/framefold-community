# Framefold

An animation workspace for trying another direction and bringing back the changes that work.

**Early alpha · 0.2 · Built by Ismaeel Habeeb**

[Open the studio](https://framefold-psi.vercel.app/) · [Welcome thread](https://github.com/ismaeelakin/framefold-community/discussions/1) · [Report a problem](https://github.com/ismaeelakin/framefold-community/issues/new/choose)

![Framefold public introduction](docs/images/public-home.png)

Draw, import artwork, arrange story panels and animate a scene. A proposal keeps an alternative separate from the approved scene. Review its edits, preview the combination, then accept selected changes.

## Try it with someone

1. Open the studio and explore the original sample, *The afternoon post*.
2. Review **A quicker delivery**. Keep the courier's position change and leave its rotation changes out.
3. Start your own blank project. Draw, import a PNG/JPEG/WebP, or add a shape.
4. Download the editable project and send it to a collaborator through your usual channel.
5. They open the same project, create a proposal, make edits and return the **Share proposal file** download.
6. Open that proposal in your original project, compare it and choose what to accept.

[Full first-session guide](GETTING_STARTED.md)

![The editing workspace](docs/images/editor.png)

## What you can use today

| Area | Available in the alpha |
| --- | --- |
| Artwork | Basic sketch layers; embedded PNG, JPEG and WebP imports |
| Motion | Ten-second scenes; position, rotation, scale and opacity; linear keyframes |
| Story | Additional panels, panel holds, animatic preview and contact-sheet PNG export |
| Review | Separate proposals, side-by-side previews, selected changes and explicit conflict choices |
| Files | Local saving, editable project files and portable proposal exchange |
| Export | Still PNG and browser-recorded WebM for an individual scene |

This is a desktop-first alpha. It does not yet have accounts, live multiplayer sessions, cloud project storage, native 3D editing, advanced painting tools or full-sequence video export. Keep downloaded backups of important work.

## How the parts fit

![Public product architecture](docs/architecture.svg)

The browser edits and renders your project. Project and proposal files carry artwork and structured scene changes between people. GitHub hosts the public conversation, bug reports and roadmap. The implementation stays in a separate private repository.

This public hub contains documentation and approved screenshots, not the application source. GitHub permits forks of public repositories, including this hub. Private implementation is not made public by participating here. Browser-delivered application code can still be inspected.

## Join in

- **Questions and work in progress:** [Discussions](https://github.com/ismaeelakin/framefold-community/discussions)
- **Reproducible problems:** [Issues](https://github.com/ismaeelakin/framefold-community/issues/new/choose)
- **Workflow improvements:** [Feature requests](https://github.com/ismaeelakin/framefold-community/issues/new?template=feature_request.yml)
- **Documentation fixes:** Pull requests to this repository are welcome.

Read [contributing](CONTRIBUTING.md), the [community rules](CODE_OF_CONDUCT.md), [roadmap](ROADMAP.md), [privacy notes](PRIVACY.md) and [release notes](CHANGELOG.md).

Please share only artwork you own or have permission to share. Public comments, issues and attachments are visible to everyone. Never upload private projects or credentials.

No adoption, performance-at-scale, investment or release-date claims are made. The working name has not been trademark-cleared.

The license in this repository covers its documentation and screenshots. It does not license the privately maintained studio implementation, the brand or artwork supplied by other people.
