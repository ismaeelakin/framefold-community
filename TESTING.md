# Test the current alpha

This guide concerns **released 0.14.1 behaviour**; versioned evidence below remains tied to its original release. Proposed specification recipes are not implemented tests or features. The three creative probes below have a bounded Last Light operator trace; independent artist evaluation is still needed.

## Before a session

Use a desktop browser and a disposable project. Download any existing work before replacing the workspace. Record date, app URL, browser/version, OS, viewport and a brief device description. Do not attach personal identifiers, private artwork or confidential project files.

## Probe 1: moving illustration

Create a blank project, import two safe images or draw a simple composition, change position/rotation/scale/opacity at several times and preview. Download the project, reopen it, export PNG and export a fixed-frame scene WebM.

Record whether the artwork was selectable, movement matched the intended keys, reopened work matched the saved version and the output played correctly. Check dimensions and visible timing; do not treat a completed download as proof of video quality. This is layer motion, not generated walk cycles or rigged character animation.

## Probe 2: storyboard animatic

Create three panels with visibly different artwork and holds. Capture a pose, change the source afterward, preview the sequence and export a contact sheet. Check panel order, hold timing, frozen poses and labels. Export Complete storyboard video and check the approved panels in order. Proposal drafts must not enter that output. The current cap is thirteen panels/130seconds; each editable scene remains ten seconds.

## Probe 3: selectively reviewed alternative

Download a project and open it in a separate disposable session or with a collaborator. Create a proposal with two different property edits and return its proposal file. In the original project, keep one change and reject another. Then change the same property differently in main and a proposal to inspect the explicit conflict decision.

Check approved content stays unchanged until apply; unselected edits remain unapplied; undo restores prior state; a proposal from another scene is not silently attached to the wrong target. Never use a different blank project as though it were the shared starting project.

## Recovery and boundaries

Confirm a downloaded project can reopen in a clean browser profile. Try a malformed disposable JSON file and confirm a visible rejection without losing the working scene. Do not clear important site data to test recovery. Browser-local saves and undo are not guaranteed backups.

## Report results

Include the task, smallest safe reproduction, expected result, observed result, completion/blocker and browser environment. Distinguish observation from interpretation. A screen recording is optional; check everything visible before publishing it. Use [bug reports](https://github.com/ismaeelakin/framefold-community/issues/new?template=bug_report.yml) for failures and Discussions for workflow observations.

## Future release evidence

Later specifications require fixture hashes, exact source/browser versions, timing/frame-count checks, clean-device portability, measured resource use, cancellation and failure injection. Hosted features additionally require separate-identity authorization tests. None is considered passed just because it is listed here.

## 0.2.2 checks to repeat

Try layer naming with Enter, Escape and Undo. Seek an animatic across a hold boundary and restart. Export a scene: check 240 decoded frames and 10-second duration with compatible tooling; an unsupported browser should show save/PNG alternatives. Cancel an export and confirm that it returns a visible cancellation message without a completed download. These are reproducible checks, not claims that every browser has passed.

## 0.3.0 checks to repeat

Duplicate/remove a layer in a proposal, then review and accept only that change. One Undo must restore the approved layer; Redo reapplies it. Check shared artwork survives. Fit a still imported image and reopen the saved project. Add a key, move it to an empty frame, cancel a collision and explicitly replace a destination. Remove a final key and confirm its pose stays constant. Imported off-grid keys must not move until requested.

Try picker and hex colours on an empty scene; invalid hex text must not change source. Cancel a long storyboard export, then save and reopen the unchanged project. Supported-browser evidence currently covers one Chromium browser, not universal codec support or peak memory guarantees.

## 0.4.0 library checks to repeat

Save a project to Library, edit it and save a checkpoint. Open the earlier checkpoint as a new project, then verify the original latest checkpoint remains intact. Undo/Redo across the project switch. Archive, show archived and restore. Rename the workspace and save a new copy; the original entry must keep its name. Refresh and Continue saved project when the workspace matches.

Use two browser tabs to open the same library entry. Save different edits from each: the second stale save must be rejected. Keep it as a new copy and verify the first entry is unchanged. Download a checkpoint and open it on another origin or browser. Closing a library while an operation finishes must not unexpectedly replace newer work.

Current evidence is bounded operator testing in one Chromium browser, with injected quota failure and controlled promise-delivery latency. Power loss, actual disk exhaustion and broad browser support are not established. No demo recording was made.

## 0.5.0 view checks to repeat

Zoom and pan, then save the project and export a frame: source and full-scene output must stay unchanged. Move/draw at fitted and double zoom. Pan while Draw is selected must not add a stroke. Release a stroke outside the canvas, then draw another. Escape and pointer cancellation must not commit unfinished artwork.

Current evidence includes actual mouse/file checks, nine synthetic React handler checks and eight stored-artifact assertion groups. Synthetic capture is explicitly shimmed in its private harness; it does not prove stylus feel, OS capture failures or latency. Narrow 319px layout was checked for reachable Save/Export, not mobile drawing quality.

## 0.6.0 first-project checks to repeat

Start each of the three project types. Keep current work in the library, then Undo: the original work and matching library association should return. Repeat from an identical detached file and check that another entry was not created. Test explicit download preservation and Cancel separately; keep your backup file.

Follow Project steps to add/select a layer, seek five seconds, edit a pose, create/compare a proposal and save/export. Turn the guide off for another start. Steps must not appear in saved JSON. Artwork-loading or preservation failure must leave current work intact, and closing a busy dialog must not allow a late replacement.

Current evidence:44 model tests, eight controlled component scenarios and ten stored-artifact groups. Actual new outputs fully decode to240 frames/10 seconds and192 frames/8 seconds. Narrow chooser controls and text fit at319px. These operator checks do not establish independent artist usability or a universal browser/device guarantee. No navigation demo was recorded.

## 0.7.0 sketch-cleanup checks to repeat

Draw several strokes, add or edit another layer, then inspect and remove an earlier stroke. Keep the later work; Undo/Redo must restore the exact state. Inspection alone must change neither an editable download nor a PNG export. Switch layers/modes and confirm the old choice clears. Remove a final stroke, keep the empty drawing and Undo.

Try cleanup in a proposal and accept it into the original scene. Repeat on a captured panel: the main scene must remain unchanged. Concurrent list edits remain a conflict rather than an automatic per-stroke merge. Test a rotated/scaled drawing at another playhead time and keyboard access to the picker/removal buttons.

Current evidence includes 49 model tests, four fixed-preview checks, nine repeated synthetic gesture checks and ten actual-artifact groups. Source/PNG inspection invariance is byte-exact. The first preview harness comparison failed with repeated-versus-fresh canvas readbacks; isolated one-read cases pass the same exact assertion. The failure remains recorded. This does not establish universal raster, device or artist usability.

## 0.8.0 checks to repeat

Save a project and a frame PNG, inspect Project artwork, then save/export again without editing: inspection should not change either output. Download an embedded image and compare it with the image bytes in the editable JSON. Run Check embedded artwork and try the picker, download and check controls with a keyboard and a narrow window.

Cancel a pending import and confirm no late replacement. Editing or changing targets while a read/decode is pending must preserve the newer work and ask you to choose the file again. Very fast files may finish before cancellation; controlled timing proofs use the actual App with held native-operation delivery in the private engineering harness. Those tests do not imply every operating-system decoder follows the same ordering.

Recorded release evidence includes 58 tests, 12 artwork artifact groups, eight native preparation checks, four inventory lifecycle cases, exact downloaded-file comparisons, closed bitmap resources and a fully decoded 192-frame storyboard. It remains one-browser evidence; independent creator sessions and a wider browser matrix are open.

## 0.9.0 checks to repeat

Place overlapping artwork forward/backward, check the layer list and output, then Undo/Redo. Save and reopen: IDs, motion and image bytes must stay intact. Try the same action in a proposal and a captured panel. Stacking should appear as one review item; accepting it must preserve unselected properties and other panels.

Conflicting reorders require explicit resolution. A proposed order cannot discard layers added only on the approved scene; incompatible membership must reject with current work intact. Eight new model tests and six retained artifact groups cover these boundaries. Keyboard/narrow checks and actual downloads are recorded separately from model tests.

## Automatic workspace recovery — 0.10.0

78 unit tests include twelve workspace cases. Fifteen actual native IndexedDB checks cover exact content, canonical integrity, aborted/injected-quota transactions, same-head and absent/null races, cancellation, unsupported versions and blocked/timeout opens. Two independent browser documents race the production adapter; one wins and one conflicts.

Twenty-one retained browser/artifact assertion groups cover opt-in preservation, original raw slots, Undo/Redo/reload, keep-current recovery, two-editor conflicts, Retry after Undo, delayed saves across the homepage, unmount, quota recovery, corrupt records, cancelled recovery with newer edits, artwork errors and homepage starter/library routing. Final narrow recovery targets fit 319px and measure at least 44px high. Earlier failures are retained separately from passing evidence.

These are one Chromium environment and explicit fault injections. Real device exhaustion, power loss, the complete browser/permission matrix and independent artist studies have not been established. No tutorial or navigation video is included in these checks.

## Motion reuse — 0.11.0

87 unit tests include nine motion-copy boundaries. Eleven retained artifact groups check source-preserving copy/cancel, exact paste Undo/Redo, stale/property rejection, individual proposal acceptance, captured-panel isolation, session reset and illustrated preview/no-op behavior. The dedicated motion workspace was checked with keyboard actions and319px controls; all measured targets are at least44px. Invalid frame entry leaves the prior playhead unchanged, and closing stops preview playback.

The actual exported scene video decodes all240 frames at24fps,960×540 and10seconds. A separate frozen piecewise-linear oracle checks the teal card's bounds in every frame: maximum1.25px error within the declared2.5px codec/edge tolerance. This is one Chromium environment and artist-output verification, not a tutorial recording or a general device-performance claim.

## Sampled easing — 0.12.0

97 unit tests include ten new numerical and command checks. A Python Decimal/bisection oracle independently supplies 980 curve values and the expected positions for every exported frame. Fourteen retained artifact groups check exact preview/cancel/close source and save records, one-step Undo/Redo, reopening, stale preview ownership, repaired selection lifecycle, proposal/panel isolation, narrow controls and the beginner guide.

The actual eased WebM decodes all 240 frames at 24 fps, 960 × 540 and 10 seconds. Every card position matches the independent oracle within the declared 2.5-pixel codec/edge tolerance; maximum measured error is 2 pixels. Native screenshot checks separately show the preview movement after correcting captured viewport-to-bitmap scaling. The initial coordinate-check failure remains recorded, and the tolerance was not relaxed.

This is one Chromium environment, not a complete device/browser matrix, independent artist study or navigation tutorial. The full deferred demonstration series remains future work.

## Dense motion and frame stepping — 0.13.0

102 unit tests include five new evaluator-compatibility checks. Eight retained artifact groups cover 96,000 exact numeric comparisons with the frozen 0.12.0 evaluator, a validated 80-layer / 96,400-key scene, six byte-identical production renderer RGBA hashes, integrated evaluator comparisons and exact source/save preservation.

Alternating baseline trials measured aggregate evaluator CPU improvement of 2.38×; the integrated follow-up measured 3.38×. Measurements vary on one host/browser. They exclude drawing, React, encoding and overall interaction latency; they do not establish whole-editor FPS, a device matrix, real artist usability or a million-user service capacity.

Repeat in a disposable project: step 0 → 1 → 0; check the previous button disables at zero; step 240 → 239; start playback then step and confirm playback stops. Preview easing and step 30 → 31 → 30: the temporary preview must remain, while Cancel leaves exact downloaded source unchanged. Check the label below the workspace header and 44-pixel controls at 319 pixels wide.

The earlier 0.12.0 240-frame decoded WebM is separate export evidence. This release adds exact evaluator and pixel-hash comparisons, not a new codec or a newly encoded video claim.

## Dense overview and complete creator path — 0.14.1

105 unit tests and nine retained creator assertion groups pass. Create an illustration, rename its layer, edit a pose, apply sampled easing, propose two changes, accept one, Undo/Redo, capture a panel, export, checkpoint and reopen. A native five-second storyboard has 120 decoded frames and the declared 3/2-second boundary. Expected scalar poses are calculated separately, then drawn by the shared renderer; this is not an independent renderer or multi-browser study.

Actual desktop/319-pixel overview targets measure at least 44 × 44 pixels, remain separated and do not add horizontal overflow. The 122-time fixture retains exact source bytes through grouped main/review/narrow navigation. Proposal/panel groups open the right context; copying keys into a captured panel preserves main, proposal and artwork. Library reload/checkpoint/continuation preserve canonical creative data; save timestamps differ by design.

The initial media report is retained. Its extra decoded-to-decoded threshold conflicted with the declared source/codec budget. The final check keeps the original mean RGB tolerance of 3, verifies exact uncompressed expected still pixels and records compressed variation as diagnostic. No navigation demo was recorded. Independent artist studies remain pending.
