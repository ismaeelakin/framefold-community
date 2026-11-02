# Architecture and operating boundaries

This page separates the **released alpha** from **proposed architecture**. The diagram uses solid borders for the current system and dashed borders for future work.

![Current and proposed boundaries](architecture.svg)

## Current system: alpha 0.9.0

The static website loads into a browser. Local project state contains the approved scene, proposals, embedded artwork and story panels. Scene evaluation supplies the same drawing path for preview and local exports. Review compares a proposal's base/draft against current approved content and asks for explicit decisions on overlapping changes.

Persistence keeps the legacy automatic localStorage workspace and a separate explicit IndexedDB library. Atomic checkpoint/head transactions compare generation and content fingerprint; stale saves fail. Recovery creates another entry and archives are reversible. JSON downloads remain portable. Scene and approved-storyboard WebM use fixed-time frame enumeration and a lazy-loaded local WebCodecs/Mediabunny muxing path. It has been decoded and timed in Chromium; broader codecs/browsers and longer sequence tools remain pending. The storyboard UI exports up to3,120 frames/130seconds using approved panel holds; exact boundary samples have been checked. Project/proposal exchange is manual. GitHub discussions and issues are separate public community records; app feedback is not automatically synchronized there.

The primary address is [framefold-psi.vercel.app](https://framefold-psi.vercel.app/). A secondary Sites deployment is retained. Its platform now redirects the older hostname to another platform hostname; the address notice covers both. Each origin has separate local storage. A redirect is not project migration: keep downloaded backups and reopen files on the main site.

## Proposed local engine

- A versioned document core with stable identities, frame-based time and validated operations.
- Separate evaluation and rendering boundaries shared by preview, review and export.
- Content-addressed assets, atomic local saves, checkpoints and portable packages.
- Immutable alternatives, dependency-aware review and conservative conflict handling.
- Bounded rendering jobs with cancellation, format checks and resource preflight.
- Optional 3D geometry, rigging and shot bridges, admitted through research gates.

Remaining design boundaries include automatic workspace migration, externalized assets, full archives and the 3D kernel. A bounded manual IndexedDB library and fixed-time WebM are already released; their existence does not complete the full future architecture.

## Optional services

Authentication, memberships, invitations, shared assets, hosted revisions, GitHub issue synchronization and audience links require an optional service boundary. Every remote read/write needs server-side authorization. Private media must not become a public bucket or an accidental GitHub attachment. The renderer and local file format must not depend on a particular hosting provider.

## Zero-spend boundary

No paid hosting, metered overage, automatic plan upgrade, purchased domain or rented render worker is authorized. Editing and rendering should use users' devices; exported media stays local unless they explicitly share it. This reduces operating costs but does not promise unlimited client capacity or website availability.

The existing Vercel Hobby deployment is subject to its current allocation and personal/non-commercial terms. A free static-host option can be evaluated before a commercial launch. Cloudflare Pages documents free unlimited static-asset requests; its functions, deployment limits and media storage remain separate concerns. No host migration is announced by this page.

Any hosted pilot needs a provider worksheet covering storage, requests, egress, retention, commercial terms and hard stops. At exhaustion, remote operations must stop gracefully without a billable fallback; local editing/downloads remain useful. Unlimited global media delivery is not part of the budget contract.

Provider references, checked 31 October 2026: [Vercel Hobby](https://vercel.com/docs/plans/hobby), [Cloudflare Pages pricing](https://developers.cloudflare.com/pages/functions/pricing/), [Pages limits](https://developers.cloudflare.com/pages/platform/limits/).

## Public and private material

This repository contains public documentation, approved screenshots and community templates. Implementation source and full engineering packets remain private. Public participation does not grant access to private projects. Public repositories can be forked; the source privacy boundary is the separate private application repository.

## Canvas view boundary

View pan/zoom is session state and does not enter project files. Input maps through the transformed canvas rectangle once. One primary pointer owns artwork input; cancellation discards unfinished work. Resulting scene edits are validated before committing. Export uses the full scene renderer and ignores viewport cropping.

## Starting points and guidance

The chooser prepares a fresh validated document, including actual artwork decoding, before preserving the current workspace. Scene/layer/asset identities are remapped and source proposals omitted. Identity checks around asynchronous work prevent late replacement after closing or newer edits. Optional steps call existing studio actions and stay outside project JSON and checkpoint hashes. These controls do not require a backend.

## Stroke inspection and cleanup

Inspection selection is session-only and bound to mode, scene, layer, list contents and index. Target changes clear it; a changed list invalidates it. Removal checks current live content before cloning one array without changing other layer data. Stage adds the optional preview halo, while exports retain the ordinary renderer. Proposal review still compares the entire strokes list atomically and treats concurrent list edits conservatively.

## Artwork and import ownership

Prepared images belong to each render/export operation. Native decodes must match declared dimensions; another project preparing the same image ID cannot change an in-flight output. Missing context fails before clearing the destination. Reusable decoding is an optimization, not a total memory guarantee.

Applying imports use a generation, content identity and editing-target guard after asynchronous work. Cancellation prevents application, while native decoding may still complete. Older completion cannot clear a newer pending operation; bitmap resources close. The artwork inventory is derived metadata and session UI. Project format2 and existing limits remain unchanged.

## Reviewed layer stacking

Existing scene.order stays back-to-front. Immutable layer commands alter only that array. An atomic review item appears when a draft's order differs from ordinary membership-only add/remove effects. Node/property changes apply first, stacking last; the order must reference each resulting layer exactly once. Overlapping order edits need explicit resolution, and approved-only layers cannot silently disappear. No schema migration is introduced.
