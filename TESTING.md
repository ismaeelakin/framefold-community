# Test the current alpha

This guide concerns **released 0.5.0 behaviour**. Proposed specification recipes are not implemented tests or features. The three creative probes below have a bounded Last Light operator trace; independent artist evaluation is still needed.

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
