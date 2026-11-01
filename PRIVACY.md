# Privacy in the browser alpha

Framefold 0.4 processes project files and renders scenes in your browser. It does not offer a Framefold account, cloud project-upload API, analytics integration or live synchronization service.

Project data, including embedded images, is saved in local browser storage when available. A previous-save backup may also be stored. Clearing site data removes local saves. Download project files to preserve your work. Private browsing, storage limits and device access can affect privacy and availability.

Opening artwork embeds a resized copy in the project. Downloaded project and proposal files can include embedded assets. When you send them to someone, you decide who receives them. The app does not send invitations or files on your behalf.

The hosting service receives ordinary requests needed to serve the website and may process request metadata under its own policies. Saying project editing happens locally does not mean the host receives no network information. Fonts are bundled, and no third-party analytics script is intentionally included.

GitHub is a separate service. Public discussions, issues, pull requests and attachments can be read by anyone. Do not post confidential work, contact details, credentials or private information there.

For concerns, use the security guidance or ask for a contact channel without publishing sensitive details. This page describes the current alpha, not a promise about an unreleased cloud service. Updated 31 October 2026.

The primary app is hosted on Vercel at https://framefold-psi.vercel.app/. The earlier Sites address remains available for continuity. Each origin has separate local browser storage; download project files to move your work between them.

## Proposed features are separate

The specification set discusses review comments, capture, identity, hosted storage, invitations, GitHub issue sync and audience publications. These services are not active in alpha 0.4. Screen/microphone capture, asset upload and public publication must never be inferred from merely using the editor. Any future service needs a feature-specific privacy/access description before launch.

GitHub feedback is not automatically copied from the app. If you attach a project to a public issue, that is your public disclosure, not private collaboration. Downloaded files can contain artwork and metadata; inspect them before sharing.

## Manual local library

The project library uses IndexedDB on the current site origin. Snapshots include embedded artwork and are saved only when you choose a library action or preserve work before opening another entry. SHA256 fingerprints detect altered snapshot content; they are not encryption. The automatic workspace save remains separate. Clearing site data can remove both. No library data is uploaded to a Framefold server.

Archived entries remain on the device and can be restored. Checkpoint recovery makes a new library entry; no older checkpoint is automatically deleted. The limits are 20 entries, 10 checkpoints each, 8 MiB per snapshot and 64 MiB logical snapshot data; actual browser quota may be lower. Downloaded backups remain under your control.
