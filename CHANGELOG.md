# Release notes

## 0.14.1 — 2 November 2026

The studio Guide now starts with three practical tasks: make movement, explore a proposal, and keep or deliver work. It names the current scene or alternative and links to existing motion, library and export panels. The full tool reference remains available in a collapsed section. Opening help does not change artwork, create a proposal or checkpoint, or begin an export.

Desktop, keyboard and 319-pixel checks include empty-scene guidance and preserved project files. Scene profiles remain private research; the released canvas, frame rate and duration limits are unchanged. No tutorial video has been recorded.

## 0.14.0

- Nearby timeline timestamps form counted groups with 44-pixel targets. Activating a group opens exact motion controls for that layer; isolated keys still navigate directly. Review groups seek their first key and keep the synchronized comparison open. No source keys are removed or retimed.
- Corrected a misleading explanation introduced in 0.12.0: storyboard output plays each approved scene from frame zero for its panel hold. Captured poses remain still until you add motion. The renderer is unchanged.
- 105 unit tests and nine retained creator acceptance groups pass. An actual complete workflow covers sampled easing, selected-only review with exact Undo/Redo, independently captured panels, library checkpoints/reload and proposal/panel target isolation.
- A real five-second storyboard decodes all 120 frames, with the expected boundary at frame 72. Independent scalar poses feed the shared artwork renderer; per-frame mean RGB error stays below 0.76 against the declared codec tolerance of 3. This is one browser and does not replace independent artist evaluation.
- Source format, scene limits and zero-spend setup remain. No tutorial recording, paid service or native 3D was added.

## 0.13.0

- Previous/Next animation frame controls stop playback, clamp at scene boundaries and retain an unapplied easing preview. The preview label remains visible below the persistent workspace header; narrow controls measure 44 × 44 pixels.
- Single-pass property evaluation replaces repeated key sorting without cached results or a document change. Exact legacy arithmetic, interior-key rounding, infinities, missing tracks and live mutation behaviour are preserved.
- 102 unit tests pass. Eight retained evaluation assertion groups cover 96,000 exact candidate/legacy comparisons, an 80-layer/96,400-key fixture, six identical renderer pixel hashes, source/save preservation and real frame navigation.
- Alternating browser microbenchmarks measured 2.38× aggregate evaluator CPU improvement before integration and 3.38× in a follow-up. These are one-host evaluator measurements, not whole-app FPS or a supported-device guarantee. No fresh video encode is claimed for this release; the 0.12.0 decoded export remains separate evidence.
- Format 2, scene limits and output rules remain. No service, dependency, 3D feature or tutorial recording was added.

## 0.12.0

- Four easing presets generate ordinary editable frame keys between two selected endpoints. Preview is separate from source and saved data; Apply is one edit, while Cancel or Close preserves exact project bytes and save generation.
- The motion workspace gains separate Reuse keys / Shape timing tools, a timing diagram, preview ownership label and compact transport. Source, target, preset and tool changes discard obsolete previews. An older property/track round-trip selection defect is repaired.
- The four-step beginner guide now reaches motion controls, handles an empty scene and completes a pose-to-easing-preview path. Captured-panel guidance distinguishes held storyboard delivery from a panel's Scene video. Final measured narrow controls fit 319 pixels and are at least 44 pixels tall.
- 97 unit tests and fourteen retained easing assertion groups pass. The solver is checked against 980 independently calculated high-precision values. An actual 240-frame export is decoded and checked against independent positions, within the declared 2.5-pixel codec/edge tolerance.
- Format 2 and linear evaluation remain. No native curve fields, overshoot, longer scenes, 3D, hosted service, new dependency or tutorial recording was added.

## 0.11.0

- Copy selected same-property motion keys with their relative frame gaps. Paste onto another layer, proposal or captured panel with explicit occupied-key review and exact one-step Undo/Redo. Wrong properties, off-grid source keys and out-of-range/over-budget pastes reject safely.
- Open motion workspace provides a larger scene preview beside layer selection, key controls and whole-frame navigation. Playback stops on close. Invalid frame entry gives a clear error. Narrow controls fit319px with44px targets; the close control stays visible while scrolling.
- 87 unit tests and eleven retained motion artifact groups pass. An actual ten-second WebM decodes all240 frames; independent position checks find the intended card on every frame, within the declared codec/edge tolerance.
- Clipboard and selection stay outside saved documents and exports. No new file format, interpolation, hosted service, dependency or navigation demo. Easing, loops and grouped dragging remain planned.

## 0.10.0

- Opt-in transactional workspace saving preserves original browser save files and keeps the latest/prior automatic versions. Generation checks reject conflicting tabs; Retry cannot hide a conflict even after Undo returns to cached content.
- Saving and recovery provides real first-frame previews, verified-content downloads, raw preservation downloads and recovery as a manual-library copy. Damaged or unavailable storage leaves saving paused and the current project downloadable.
- Leaving for the homepage retains an entered studio and pending saves. Resume controls show the open project and save state. Hidden editor shortcuts no longer affect the homepage. Recovery controls fit 319px and have at least 44px target heights.
- 78 unit tests, fifteen actual native IndexedDB checks and twenty-one retained browser/artifact assertion groups pass. Fault injection does not claim real disk exhaustion, physical crash durability or a complete browser matrix.
- Two automatic versions up to 8 MiB each; separate manual-library limits remain. No package archive, externalized asset store, cloud service, paid dependency or navigation demo was added.

## 0.9.0

- Four layer-position commands preserve motion, artwork and other scene data. Endpoint controls disable correctly and remain keyboard accessible at 319px.
- Order-only alternatives now appear as atomic stacking changes in proposal review. Readable starting/proposed order replaces the old array-as-strokes wording. Overlapping order edits require explicit resolution; incompatible layer membership rejects without discarding approved layers.
- 66 tests and six stacking artifact groups pass. Actual editor files cover keyboard movement, exact Undo/Redo, proposal acceptance/Undo, captured-panel isolation and changed PNG with identical artwork.
- Existing format 2 and limits remain. Groups, hide/lock and drag sorting remain planned. No navigation demo was recorded.

## 0.8.0

- Project artwork inventory: embedded previews, sizes, approved/proposal usage, exact-image downloads and native dimension checks. Readable desktop and 319px layouts.
- Pending project/proposal/artwork imports show Cancel import and preserve newer work when delayed operations finish. Native bitmap resources close after cancellation or stale delivery.
- Rendering and exports retain operation-owned artwork. A reproduced same-ID concurrent preparation defect is repaired; all 240 decoded test frames retain the intended image.
  - 58 tests and 12 artwork artifact groups pass. A newly downloaded complete storyboard decodes all 192 frames with correct timing and panel boundaries; source/PNG/embedded image comparisons are exact. Broader asset packages and cloud collaboration remain planned.
- No navigation demo, paid dependency or hosting service was added.

## 0.7.1

The secondary host redirects its older platform hostname to another platform address. The main-address notice now covers all Sites hostnames. Vercel remains Framefold's main home. Website addresses have separate browser storage; a redirect does not migrate projects.

## 0.7.0

- Inspect and remove a whole sketch stroke while retaining its layer and later work. Inspection stays outside files and exports; Undo/Redo restore exact source.
- Mode, scene, layer and list identity guard stroke selection. A layer-switch selection defect found during testing is repaired and retained in the private evidence.
- Existing atomic drawing-list review works for approved scenes and captured panels. Panel labels now identify the approved panel and use singular stroke counts correctly.
- A more compact desktop guide recovers about 67 pixels at the tested editor width; collapse and keyboard navigation remain available. Narrow stroke controls were checked at 319 pixels.
- 49 model tests, four preview checks, nine repeated synthetic gesture checks and ten stored-artifact groups pass. Actual mouse drawing and downloaded files are separate evidence. No navigation demo was recorded.

## 0.6.0

- Three starting points: Blank canvas, Moving illustration and Three-beat storyboard, with fresh identities and original embedded artwork.
- Keep the current workspace before starting; identical library content is reused. Cancel/failure/late operations preserve current work; Undo returns to the previous workspace.
- Optional four-step project guidance invokes real editing, proposal, playback, library and export controls. Updated homepage entry and narrow-screen chooser layout.
- 44 model tests, eight controlled component boundary scenarios and ten actual-artifact groups pass. New starter videos fully decode to 240/192 frames and 10/8 seconds in Chromium. Independent artist usability and broader browser quality remain open.
- No format migration, account requirement, hosted collaboration or navigation demo.

## 0.5.0

- Canvas view zoom, pan, keyboard directions and Fit scene. Navigation leaves artwork, keys and exports unchanged.
- Pointer ownership, Escape/capture cancellation, final stroke endpoints and rejection of excess samples without truncated commits.
- Coordinate and key-cap validation preserves readable project files. Narrow headers keep Save/Export within reach.
- Forty model tests, nine controlled React gesture checks and eight actual-artifact assertion groups pass. Actual fitted/double movement and unchanged PNG/source files are recorded.

Format2 remains unchanged. Pressure/smoothing/erasers and broader device performance remain future work. No navigation demo was recorded.

## 0.4.0

- Manual local project library: named work, checkpoints, recovery copies and reversible archives, separate from automatic workspace saving.
- Atomic IndexedDB saves with generation/hash conflict checks, content integrity validation and explicit resource caps. No automatic deletion.
- Safe open/preserve choices, project-switch Undo/Redo, matching-workspace continuation and direct homepage/library navigation.
- Fourteen adapter checks, three controlled React timing scenarios and eight artifact assertion groups pass. Two actual editors preserve both winning and conflicting alternatives without overwriting.

Format2 and JSON interchange remain compatible. Full autosave migration, external assets, ZIP packages and cloud collaboration remain future work. No tools/navigation demo was recorded.

## 0.3.0

- Duplicate/remove layers, fit still imported artwork and enter exact playhead frames.
- Add/remove/move individual property keys, with explicit collision replacement and preserved imported off-grid times.
- Complete approved-storyboard WebM, excluding proposal drafts: up to thirteen panels/130seconds. Actual files decoded to192frames/8seconds and3,120frames/130seconds in one Chromium browser, with checked boundaries.
- Validated hex colour entry and repaired picker commits.
- Fixed a history snapshot bug found during accepted layer deletion; actual downloads verify Undo/Redo and independent edits. Format2 remains compatible.

No navigation walkthrough was recorded. Audio, cels, longer shots, native 3D and hosted collaboration remain future work. This is bounded operator verification, not independent artist adoption.

## 0.2.2

- Fixed-frame scene WebM replaces the imprecise real-time recorder: 240 frames at 24 fps, ten-second decoded duration in the tested Chromium browser.
- Visible export success/cancel/error status and actionable unsupported-encoder fallback.
- Editable layer names with commit/cancel and undo; first-frame storyboard posters using the established fonts.
- Animatic seek/restart controls, with seeking pausing playback.
- Completed the bounded Last Light operator proofs; downloadable project, actual scene video and contact sheet are public.
- Eleven actual-source assertions, six encoding/failure-path checks and six actual-editor decode checks pass. Independent artist usability and other browsers remain unverified.
- Full-sequence video remains a private experiment. The navigation demo has not been recorded.

## 0.2.1

- Isolated canvas drawing state so repeated rendering no longer carries styles between calls.
- New captured courier panels preserve their visual wheel phase through save/reopen, while transforms remain editable.
- Kind and capture phase are reviewed together; replacement preserves layer order.
- Added captured-file compatibility guidance: use 0.2.1 or newer. Older captures need recapturing because they did not store their phase.
- Verification: 23 model tests and 12 bounded browser render checks pass; 464 PNGs were written, reopened, decoded and hash-checked. The research PNG-sequence harness is not a released export tool.

## Fixed-frame PNG research

The isolated trial verified 464 PNG files and recorded eight passing checks plus two failing renderer/capture probes. These historical failures were repaired in 0.2.1; their original reports remain preserved. No new export feature is live. See [research results and limitations](RESEARCH.md#fixed-frame-png-experiment).

## Local-storage research result

An isolated browser prototype passed eight bounded transaction/recovery checks, including two-tab conflict handling. This is research evidence, not a new alpha feature or a completed migration. See [the result and limitations](RESEARCH.md#storage-experiment).

## Community and specification update

Documentation-only update; the available application remains alpha 0.2.

- Aligned the full public hub with specification-first development and explicit release/research gates.
- Added the public capability register, specification process, research conditions, architecture boundaries and testing guide.
- Recorded the exceptional workflows: editable alternatives, local reliability/portability, motion-aware review, selective 3D review and connected 2D/3D production.
- Preserved full 3D modelling as six individually gated research areas. Gallery, commerce and remote rendering remain conditional rather than blanket exclusions.
- Added research reporting and improved bug/workflow templates.
- The private design set contains 48 proposed packets, 149 acceptance recipes and 12 mathematical vectors. These are not new tools or passed implementation tests.
- No paid hosting or new backend service was provisioned.

## Hosting and identity update

- Primary public address: https://framefold-psi.vercel.app/
- Petrol, mineral white and citron interface with Chivo, Source Sans 3 and Fragment Mono.
- Product-focused footer and refreshed screenshots.
- The old address stays available so existing local projects can be downloaded and reopened on the new site.
- Accounts, platform invitations and shared storage remain unreleased.

## 0.2

- Public product introduction with interactive sample versions.
- Blank-project creation and a file-based collaborator guide.
- Raster artwork imports and portable embedded assets.
- Basic freehand sketch layers.
- Storyboard panels, captured poses, holds, animatic preview and contact-sheet PNG.
- Proposal review targets its originating scene or panel.
- Version 1 project files migrate to the version 2 format on open.
- Public community documentation and reporting templates.

Accounts, live multiplayer, cloud storage, native 3D and full-sequence video export are not part of this release.

## 0.1

Private engineering alpha: original sample scene, transforms, keyframes, selective proposals, local persistence, portable files, PNG and WebM exports.
