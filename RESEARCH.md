# Research and conditional features

These directions remain in the product vision. Their conditions determine whether a bounded implementation is admitted; inclusion does not establish technical success or market demand.

## Selective 3D change review · C33

Intended outcome: keep a material or silhouette improvement without accepting unrelated camera or topology changes. Investigate stable element identities, operation provenance, dependency closure and geometry validation. Begin with independent operations and explicitly reject ambiguous overlapping topology edits.

Evidence: valid results for controlled mesh branches, visible conflicts for deletion versus extrusion, and artists correctly understanding what they accept. If correspondence or comprehension fails, keep whole-asset replacement review while revising the design. Arbitrary automatic mesh merging is not promised.

## Efficient editable alternatives · C34

Intended outcome: branch a design without copying every raster/mesh asset. Investigate immutable revisions, content-addressed assets, recovery and safe garbage collection. Evidence includes independent branches, interrupted saves and shared assets surviving branch deletion. No storage optimization may erase the last recoverable version.

## Connected 2D and 3D production · C35

Intended outcome: storyboard, stage in 3D, then finish with drawings in a linked shot. Research pinned cameras/revisions, shared frame mapping and stale-reference notices. Evidence is a complete shot whose drawn work survives source-camera changes. There is no automatic sketch-to-3D reconstruction promise.

## Motion-aware review · C36

Intended outcome: understand changes through synchronized playback, trails and poses. Research whether overlays help decisions compared with ordinary side-by-side playback. Pixel difference is not an artistic quality score. Overlays must remain optional and absent from finished exports.

## Dependable local engine and portable projects · C37–C38

Intended outcome: useful finished work, recovery and export without a service account. Measure on named devices and clean browser profiles. Test fixed-time evaluation, memory limits, corrupt/missing assets and worker/storage failures. A same-machine reopen or polished preview does not prove portability or output reliability.

### Storage experiment — 31 October 2026

An isolated local prototype passed eight checks in Chromium 155: database reopen integrity, transaction-abort rollback, injected quota rollback, stale-generation rejection after undo, save-completion ordering, simulated newer-edit dirty state, blocked-upgrade recovery and competing writes from two real tabs. In the two-tab check, one writer committed and the other received an explicit conflict. The private evidence records the frozen fixture, environment and source hashes.

This supports further work on the transaction/revision design, not a claim that the editor has migrated. Quota failure was injected; editor dirty state was simulated. Actual storage exhaustion/eviction, power loss, separate-profile file recovery, broad browser support and production UI integration remain unverified. The experiment is not included in the public app build.

### Fixed-frame PNG experiment — 31 October 2026

The isolated trial wrote, reopened, decoded and hash-verified **464 PNGs**: 240 scene frames, 144 animatic frames and 80 partial frames from a controlled cancellation. Eight checks passed; two renderer/capture defect probes failed. Frame counts, timestamps, panel boundaries and partial-output status were checked. Sampled pixel comparisons used a documented, measured tolerance of at most four changed channels per image, each differing by at most one colour level.

The historical defects were: [canvas state carried between render calls](https://github.com/ismaeelakin/framefold-community/issues/2) and [captured courier wheel motion remaining animated](https://github.com/ismaeelakin/framefold-community/issues/3). Initial failed trials and the diagnostic measurements were preserved privately. A caller-isolation wrapper was used only in the research exporter; the live app was unchanged during that historical trial.

This is not encoded video, a production exporter, a long-form performance claim or cross-browser validation. The 0.2.1 repair run passes all twelve checks, including the original defect probes and new persisted-pose/selection checks. It again verifies 464 PNGs without widening pixel tolerance. Twenty-three model tests pass. Older readers reject the new captured-layer kind safely. The two observed defects are repaired; production sequence export, cross-browser evidence and broader admission gates remain pending.

## Full 3D modelling · C32A–F

| Area             | First bounded scope                                                                        | Condition before expansion                                                              |
| ---------------- | ------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------- |
| Direct modelling | Primitives, stable vertex/edge/face identities, selection, transforms and planar extrusion | Valid topology, exact undo, save/reopen and export                                      |
| Modifiers        | Bounded mirror/array prototypes, then separately evaluated subdivision                     | Resource preflight, provenance and reversible baking                                    |
| Sculpting        | Fixed-topology inflate/smooth experiments                                                  | Local latency, stable geometry and cancellation                                         |
| Retopology       | Separate source/target meshes and bounded surface projection                               | Explicit failures and preserved originals; automatic retopology needs separate evidence |
| UV editing       | Direct island edits and simple projections                                                 | Per-corner seams, distortion diagnostics and interchange fixtures                       |
| Materials        | A declared material subset and texture assignments                                         | Preview/export agreement and correct colour/data interpretation                         |

Full-suite parity has no promised date. General booleans, dynamic remeshing, advanced physics and arbitrary shader graphs require new child specifications before admission. A small successful mesh prototype is not a complete modelling suite.

## Rigs, live editing and interchange · C26–C29

Rigs need rest/pose separation, stable skinning, constrained solvers and honest nonconvergence. Live editing needs real identities, partitions, duplicate delivery, reconnect behaviour and explicit creative conflicts. Interchange needs a declared supported subset, loss reports and tests in target applications. These are separate experiments, not checkboxes satisfied by adding a library.

## Hosted and commercial extensions · C22–C25, C30A–D

Accounts, invitations, private media, GitHub sync and hosted viewing require a viable free allocation, server-enforced access, deletion rules and quota exhaustion behaviour. Galleries additionally require moderation and public-publishing consent. Marketplaces/payments require a sustainable operating model and appropriate rights/provider/legal review. Remote rendering requires explicitly funded or donated capacity; no device is volunteered for compute by using Framefold.

The owner's authorized hosting spend remains zero. If conditions cannot be met, the feature stays unavailable and the local workflow remains usable. Static website delivery is not unlimited private-media storage.

## Optional local assistance · C31

Research is limited to a specific artist task, acceptable licences/privacy and bounded local execution. No paid inference dependency or automatic replacement of approved work. Attribution notes can record what a user claims; they cannot adjudicate legal ownership.

## Proposing research

State the blocked artist task, hypothesis, alternatives, safe fixture, measurements, cost ceiling and stop condition. Report failures as carefully as successes. See [the specification process](SPECIFICATION.md).

## First creative workflow trace — 31 October 2026

The primitive-motion source was downloaded through Save project, then opened using the actual file chooser on a separate localhost origin. Its two position keys and evaluated midpoint were preserved. This is one-browser, separate-origin portability evidence, not clean-device recovery or independent artist feedback.

PNG and WebM files exported from that reopened project were retrieved and decoded. The still is960×540 and was visually checked without selection guides. Video samples show the expected left-to-right motion. **Measured WebM duration:9.746828s for a nominal10s scene**, a0.253172s shortfall. The broad media sanity checks do not establish frame-accurate timing. This known real-time-export limitation remains part of C11's deterministic delivery work.

Actual editable source, PNG, WebM, browser measurements and hashes are retained privately. The moving rectangle is a workflow exercise; the finished moving illustration, storyboard animatic and reviewed-alternative proofs remain open. No new application feature or paid service was introduced.

## Last Light and fixed-video result — 0.2.2

The three bounded operator tasks now have actual files: original moving illustration, three-panel animatic and separate-origin proposal exchange with an intervening owner conflict. Applying only the resolved Y change retained rotation and left panels intact. The downloaded result reopened/resaved semantically identical. Eleven actual-source assertions pass; a separate drawing/shape proposal leaves approved main unchanged.

The historical WebMs ran9.571587/9.653675s and the opening-frame probe failed; those artifacts remain retained privately. They triggered a pinned local WebCodecs/muxer experiment. Six encoding/failure-path checks pass, and the actual replacement editor download has240 packets,240 decoded frames,960×540 and10s native duration (1ms timestamp tolerance). Actual UI Cancel produced a visible confirmation and no download during an8s observation. Unsupported capability is an injected provider test, not proof of another browser.

Only fixed **scene** WebM is released. The192-frame/eight-second animatic encoder stays research. No MP4, audio, long-form or cross-browser promise. [Try the complete sample](examples/last-light/README.md). No full navigation video has been recorded yet.
