# Architecture and operating boundaries

This page separates the **released alpha** from **proposed architecture**. The diagram uses solid borders for the current system and dashed borders for future work.

![Current and proposed boundaries](architecture.svg)

## Current system: alpha 0.13.0

The static website loads into a browser. Local project state contains the approved scene, proposals, embedded artwork and story panels. Scene evaluation supplies the same drawing path for preview and local exports. Review compares a proposal's base/draft against current approved content and asks for explicit decisions on overlapping changes.

Persistence keeps original localStorage slots, an opt-in transactional automatic workspace and a separate explicit IndexedDB library. Atomic checkpoint/head transactions compare generation and content fingerprint; stale saves fail. Recovery creates another entry and archives are reversible. JSON downloads remain portable. Scene and approved-storyboard WebM use fixed-time frame enumeration and a lazy-loaded local WebCodecs/Mediabunny muxing path. It has been decoded and timed in Chromium; broader codecs/browsers and longer sequence tools remain pending. The storyboard UI exports up to3,120 frames/130seconds using approved panel holds; exact boundary samples have been checked. Project/proposal exchange is manual. GitHub discussions and issues are separate public community records; app feedback is not automatically synchronized there.

The primary address is [framefold-psi.vercel.app](https://framefold-psi.vercel.app/). A secondary Sites deployment is retained. Its platform now redirects the older hostname to another platform hostname; the address notice covers both. Each origin has separate local storage. A redirect is not project migration: keep downloaded backups and reopen files on the main site.

## Proposed local engine

- A versioned document core with stable identities, frame-based time and validated operations.
- Separate evaluation and rendering boundaries shared by preview, review and export.
- Content-addressed assets, atomic local saves, checkpoints and portable packages.
- Immutable alternatives, dependency-aware review and conservative conflict handling.
- Bounded rendering jobs with cancellation, format checks and resource preflight.
- Optional 3D geometry, rigging and shot bridges, admitted through research gates.

Remaining design boundaries include externalized assets, full archives and the 3D kernel. Bounded manual and automatic IndexedDB storage and fixed-time WebM are released; their existence does not complete the full future architecture.

## Optional services

Authentication, memberships, invitations, shared assets, hosted revisions, GitHub issue synchronization and audience links require an optional service boundary. Every remote read/write needs server-side authorization. Private media must not become a public bucket or an accidental GitHub attachment. The renderer and local file format must not depend on a particular hosting provider.

## Zero-spend boundary

No paid hosting, metered overage, automatic plan upgrade, purchased domain or rented render worker is authorized. Editing and rendering should use users' devices; exported media stays local unless they explicitly share it. This reduces operating costs but does not promise unlimited client capacity or website availability.

The existing Vercel Hobby deployment is subject to its current allocation and personal/non-commercial terms. A free static-host option can be evaluated before a commercial launch. Cloudflare Pages documents free unlimited static-asset requests; its functions, deployment limits and media storage remain separate concerns. No host migration is announced by this page.

Any hosted pilot needs a provider worksheet covering storage, requests, egress, retention, commercial terms and hard stops. At exhaustion, remote operations must stop gracefully without a billable fallback; local editing/downloads remain useful. Unlimited global media delivery is not part of the budget contract.

Provider references: [Vercel Hobby](https://vercel.com/docs/plans/hobby), [Cloudflare Pages pricing](https://developers.cloudflare.com/pages/functions/pricing/), [Pages limits](https://developers.cloudflare.com/pages/platform/limits/).

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

## Automatic workspace and recovery

Original localStorage saving remains until explicit opt-in. A startup gate verifies any transactional workspace and its artwork before mounting a writing editor. The separate automatic IndexedDB record contains a generation and current/prior canonical snapshots with byte counts and hashes. Native write transactions reread the exact verified record and compare generation/hash; missing keys and stored null are distinct. Save completion follows transaction completion. A bounded serial queue coalesces edits and leaves errors paused with the same expected head on Retry.

Recovery previews are derived first frames, not extra stored snapshots. Opening a recovery copy validates artwork, preserves the current project in the manual library and applies only while its initiating context is still current. Damaged/conflicted automatic saving stays paused. Returning to the homepage retains the entered studio and saver while disabling hidden keyboard commands and playback. Limits are two 8 MiB logical snapshots, per-origin storage and no cloud synchronization.

## Motion reuse

A typed application clipboard stores selected same-property key values at relative integer-frame offsets. Capture and paste validate numeric/property/time limits. Destination planning enforces the final track budget and identifies occupied stamps before one immutable scene command. Explicit replacement and existing Undo/history preserve the old motion. Existing per-key proposal review handles the resulting values; no document fields or interpolation rules change.

Copied keys belong to the mounted application session; selection and pending decisions belong to the current scene/layer/property/track context. Target, frame, clipboard or scene changes invalidate replacement decisions. The dedicated motion workspace shares the inspector's key editor and clipboard beside a non-editable Stage preview, with one active key-control surface. Closing stops playback. Reload clears copied motion while ordinary project data remains saved.

## Sampled easing

A bracketed cubic solver derives bounded whole-frame numeric keys from one of four presets. Plans retain exact endpoints and outside keys, count replaced interior keys and enforce the final property budget before changing a scene. Existing linear evaluation, numeric proposal review and export consume those samples; no native curve field or new document format is written.

An easing preview belongs to the exact source scene, layer, property, endpoint selection and preset. Time changes inspect it; source/target/preset/tool changes invalidate it. Competing key-copy/edit commands are disabled while previewing. Apply recomputes and commits one ordinary scene command. Cancel and modal unmount discard temporary state without changing source, automatic saves or history. Property and track changes permanently clear old selection. The preview and final numeric motion are verified separately.

## Dense property evaluation

Evaluation scans a track once to find the greatest stamp strictly before the requested time and the least stamp at or after it. It preserves the legacy interpolation operation order, including rounding at exact interior stamps. Empty/missing tracks, endpoint clamping and observed mutation remain compatible. There is no key cache to invalidate and no project-format change.

A frozen old evaluator, adversarial/random tracks and actual project fixtures support exact comparisons. The production renderer produces identical RGBA hashes at six fixture frames. Alternating timing trials measure evaluator CPU only on one browser; wider resource budgets, device studies and other C37 engine work remain open. Previous/Next frame controls change session time and playback, not saved scene data.
