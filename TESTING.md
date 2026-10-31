# Test the current alpha

This guide concerns **released 0.2 behaviour**. Proposed specification recipes are not implemented tests or features. The three creative probes below are planned evaluation tasks, not claims that independent artists have completed them.

## Before a session

Use a desktop browser and a disposable project. Download any existing work before replacing the workspace. Record date, app URL, browser/version, OS, viewport and a brief device description. Do not attach personal identifiers, private artwork or confidential project files.

## Probe 1: moving illustration

Create a blank project, import two safe images or draw a simple composition, change position/rotation/scale/opacity at several times and preview. Download the project, reopen it, export PNG and record a scene WebM.

Record whether the artwork was selectable, movement matched the intended keys, reopened work matched the saved version and the output played correctly. Check dimensions and visible timing; do not treat a completed download as proof of video quality. This is layer motion, not generated walk cycles or rigged character animation.

## Probe 2: storyboard animatic

Create three panels with visibly different artwork and holds. Capture a pose, change the source afterward, preview the sequence and export a contact sheet. Check panel order, hold timing, frozen poses and labels. There is no current full-sequence video export; report that distinction rather than treating it as a broken released control.

## Probe 3: selectively reviewed alternative

Download a project and open it in a separate disposable session or with a collaborator. Create a proposal with two different property edits and return its proposal file. In the original project, keep one change and reject another. Then change the same property differently in main and a proposal to inspect the explicit conflict decision.

Check approved content stays unchanged until apply; unselected edits remain unapplied; undo restores prior state; a proposal from another scene is not silently attached to the wrong target. Never use a different blank project as though it were the shared starting project.

## Recovery and boundaries

Confirm a downloaded project can reopen in a clean browser profile. Try a malformed disposable JSON file and confirm a visible rejection without losing the working scene. Do not clear important site data to test recovery. Browser-local saves and undo are not guaranteed backups.

## Report results

Include the task, smallest safe reproduction, expected result, observed result, completion/blocker and browser environment. Distinguish observation from interpretation. A screen recording is optional; check everything visible before publishing it. Use [bug reports](https://github.com/ismaeelakin/framefold-community/issues/new?template=bug_report.yml) for failures and Discussions for workflow observations.

## Future release evidence

Later specifications require fixture hashes, exact source/browser versions, timing/frame-count checks, clean-device portability, measured resource use, cancellation and failure injection. Hosted features additionally require separate-identity authorization tests. None is considered passed just because it is listed here.
