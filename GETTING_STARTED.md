# Your first Framefold session

This guide describes released **alpha 0.7.1**. Future tools in the [feature register](FEATURES.md) are not available until a release explicitly introduces them.

Use a recent desktop browser. The studio works without a Framefold account. GitHub sign-in is needed only to participate in the community.

## First, try the sample

Open [Framefold](https://framefold-psi.vercel.app/) and choose **Open studio**. Select **A quicker delivery** in the proposals panel. Uncheck the rotation changes, keep the courier X-position change and preview the result. Apply the selected change. The movement changes without accepting the proposed rotation.

## Start a project

Choose **New project** (or **Choose your starting point** on the homepage). Pick **Blank canvas**, **Moving illustration** or **Three-beat storyboard**, then name it. Keep the current workspace in the local library by default, or explicitly choose its editable download. Starting waits for preparation and preservation; a failure keeps the current workspace open. Cancel leaves it unchanged. Undo returns to it during the same session.

Leave **Show project steps after starting** checked for practical guidance. **Next step** moves between selecting/adding artwork, changing a pose, trying a proposal and keeping/exporting the result. These buttons open the real tools; they do not perform the creative edits for you. Collapse **Project steps** to make more room. Experts can uncheck it before starting. Steps are session-only; reloading keeps the project but does not preserve this guide.

The illustration keeps Last Light's ten-second motion and editable image layers. The storyboard starts with three frozen poses held for 3/2/3 seconds; use **Play animatic** or **Complete storyboard video** to see the eight-second result. Each start gets fresh identities. To collaborate on the same project, share its saved file rather than independently starting the same template.

Use **Draw** for a basic sketch, **Import artwork** for PNG/JPEG/WebP, or **Add shape**. Imports must be smaller than 2 MiB. Images are resized to a longest edge of 1024 pixels and embedded in the project; this is not archival storage for your original files.

Select a layer and change transforms at the playhead to create keyframes. Choose **Storyboard** to add blank panels or capture the current pose. Each scene supports ten seconds of motion; panel holds control animatic timing. The first scene stays first; additional panels can move earlier or later.

## Exchange a proposal

1. The project owner chooses **Save project**, then sends the file to the collaborator.
2. The collaborator opens the same project using **Open**. Starting a different blank project will create different scene IDs and will not work as the same review target.
3. The collaborator selects the intended scene or panel, chooses **New proposal**, names it and makes edits in that proposal.
4. They open **Compare**, then choose **Share proposal file**. Send that file back.
5. The owner opens the proposal file in the original project. This adds the proposal without replacing the approved scene.
6. Review the proposed changes, preview the result and select what to apply. Overlapping edits need an explicit choice; review is not a guarantee of an artistically good result.

Sharing is manual. The studio does not email collaborators, upload files or synchronize live sessions. Embedded artwork is included in exchanged files, so check what you share.

## Keep your work

Download project files regularly. Browser storage can fill up, be disabled or be cleared. Undo history is limited and does not survive a reload. Saving pauses if another tab writes to the workspace.

PNG exports the current frame without selection guides. WebM renders one ten-second scene as 240 frames at 24 fps, with no audio, using a supported browser encoder. Storyboard PNG exports a contact sheet. Choose **Complete storyboard video** in Export for the approved panels in order, using their holds. Up to thirteen panels /130 seconds; proposal drafts are excluded.

If a step fails, use [the bug template](https://github.com/ismaeelakin/framefold-community/issues/new?template=bug_report.yml). Use a small, non-confidential reproduction.

## What your audience receives

A PNG is a still image. A contact sheet presents story panels together. A scene WebM is a silent short video that needs a compatible player; encoding support depends on your browser. A project/proposal file is editable source for another Framefold user, not an audience playback link.

There is no hosted gallery, public player page, audio timeline, frame-by-frame cel editor or native 3D tool in this release. To evaluate the actual output before proposing improvements, use [the creative probes](TESTING.md). The broader direction is in [the roadmap](ROADMAP.md).

## Captured-file compatibility

New courier captures keep their visual wheel phase fixed, including after saving and reopening. Their transforms remain editable. Share these files with Framefold **0.2.1 or newer**; earlier versions reject the new captured-layer type rather than silently animating it.

Older captured panels never stored their visual capture time. Recapture at the intended pose in the current app. Ordinary earlier projects remain supported. The two observed renderer defects are resolved in 0.2.1; scene WebM uses fixed timestamps in 0.2.2; complete approved-storyboard WebM is available in 0.3.0; longer shots, transitions and additional output formats remain planned.

## Find your way around

Use **Guide** for a first movement and the vocabulary. **Layer name** in Properties commits with Enter or leaving the field; Escape cancels, blank text preserves the old name, and Undo restores the previous name. Storyboard thumbnails/contact sheets show first frames. In **Play animatic**, seek with **Animatic time** (this pauses), then Resume or Restart.

Export success, cancellation and errors stay visible inside the Export dialog. An unsupported encoder offers editable project/PNG alternatives. [Open the complete Last Light example](examples/last-light/README.md) for a project you can inspect and change.

## Edit the details

Select a layer, then use **Duplicate layer** or **Remove layer**. Duplicate offsets all its movement by24 pixels and shares the artwork. Undo restores the edit. **Fit artwork to scene** centres and contains a still imported image; animated transform keys must be removed first.

Enter **Playhead frame** for exact timing (0–240). Expand **Edit individual keyframes** in Properties. Choose a property, then a key. **Add key here** samples the motion at the playhead. **Remove selected key** affects only that property; deleting its final key keeps the pose constant. **Move key** preserves the value and asks before replacing another key. Imported off-grid keys remain exact until you explicitly move them.

Scene background and shape fill accept a six-digit hex value such as `#153b40`. Enter or leaving the field commits; Escape restores; invalid text leaves the project intact. Property editing pauses playback. Save a project file after finishing your changes.

## Keep projects in your local library

Choose **Library** in the studio or **Your project library** on the homepage. The current workspace still saves automatically as before; library snapshots are explicit. Use **Keep in library** for a first save, **Save library checkpoint** for a milestone and **Save as new library copy** for a separate entry. A six-character entry label and full local date distinguish copies.

Edit **Project name** in the library: Enter or leaving the field commits, Escape cancels and blank keeps the prior name. This changes your workspace, then a library save records it.

Inspect a card to see saved checkpoints. **Open saved project** asks you to keep the current workspace in the library or download it first. **Recover as new project** preserves the original history. **Archive project** is reversible; use Show archived and Restore to library. Archiving does not free storage. There is no permanent-delete control in this release.

After reload, the automatic workspace is separate from the library. If its content matches a saved entry, **Continue saved project** reconnects it without another copy. If another tab saved the same entry, a stale save is rejected. Open the current version or save your alternative as a new library copy. Downloads remain available.

Limits: 20 entries including archived work, 10 checkpoints per entry,8 MiB per snapshot and 64 MiB total logical snapshot data. No automatic eviction. Browser quota may be lower. Download files to move between the Vercel/Sites addresses or other browsers.

## Zoom and pan the canvas

**View zoom** runs from 25% to 800% of the fitted scene. 100% means fitted to the workspace, rather than one screen pixel per artwork pixel. Choose **Pan view**, then drag or use its direction buttons. **Fit scene** centres the whole composition again. At 100% or smaller, the scene stays centred.

View controls do not move layers, create keys or crop exports. Use Select/Draw for artwork. Escape cancels an unfinished drawing or object drag; losing pointer capture or switching scene/tool/time also cancels unfinished input. A completed stroke is one Undo step.

If a drawing on a very small layer scale exceeds supported coordinates, it is rejected without changing source. Use a new drawing layer or a larger layer scale. Save/Export now wrap within narrow headers; desktop remains the primary editing layout.

## Inspect and remove a sketch stroke

Select a drawing layer, then use **Drawing stroke** in Properties. On a narrow screen, choose the layer's row in the timeline first. The picker names each stroke by its number, point count, colour and width. Choosing one adds an inspection outline on the canvas; **Clear stroke selection** removes that marker. Markers do not enter project files, PNGs or video.

Choose **Remove selected stroke** to remove that entire path. Undo restores it without undoing later unrelated edits. Removing the final stroke leaves the drawing layer available for new drawing. Layer/mode changes clear the choice; list changes require another selection. Imported artwork cannot be erased with this control.

For a separate alternative, choose **New proposal** before removing. Compare shows one drawing-list change, not independent merge choices for every stroke. Concurrent changes to that list require an explicit conflict choice. Panel proposals affect their target panel, keeping the main scene intact.

## Inspect and keep embedded artwork

Choose **Project artwork** in the studio toolbar. Pick an image to preview its embedded copy, dimensions, size and usage. **Download embedded image** retains the exact stored bytes; the upload may have been resized, so keep your originals separately. **Check embedded artwork** opens the images in your browser and checks their dimensions. The memory estimate describes one uncompressed copy per image, not peak browser usage.

While opening a project/proposal or importing artwork, the status shows **Cancel import**. Cancel preserves current work, though the native read/decode may still finish. If you edit the project or switch targets before completion, the import stops; choose the file again when ready. A failed import leaves the current editable source intact.

## Put a layer in front or behind

Select the layer and find **Layer position** in Properties. Move forward/backward changes one position; Bring to front/Send to back moves to an end. The top layer row is in front. Endpoint buttons are disabled, and Undo restores the prior order.

Try stacking in a proposal to compare before applying. Review lists starting and proposed order from back to front. An overlapping reorder needs an explicit decision. When stacking requires added/removed layers, select those related changes too; leave stacking unchecked to apply other edits while keeping the approved order.

## Reliable workspace saving

Open **Saving and recovery → Use reliable workspace saving** when you want automatic transactional saves on this browser. Existing original save files are preserved. Latest/prior previews help identify a version before downloading or opening it as a library copy. Opening a copy first keeps your current work in the library.

If another tab saves first, download or keep your local project, then use **Keep current in library and reopen stored workspace**. Retry does not merge or adopt the other tab's generation. If storage is damaged or unavailable, saving stays paused; raw recovery downloads preserve what could be read. Keep downloaded backups: clearing browser data removes local saves. The main and secondary website addresses have separate storage.

The homepage's **Resume studio** button returns to an already entered workspace. Saving can finish while you view the homepage; editing shortcuts and playback stay inactive there. Starting another project still asks how to keep current work first.

## Copy timing to another layer

Choose a layer in the sidebar or its timeline row, then **Open motion workspace** in Properties. Pick the property you want and tick the keys to reuse. **Copy selected keys** captures their values and the gaps between frames. Select the destination layer and the same property, move the playhead to the first destination frame and choose **Paste at playhead**.

If destination keys are occupied, inspect the listed frames and choose **Replace occupied keys** or **Cancel paste**. Unselected keys stay intact; Undo restores the whole paste. Closing the workspace returns to the normal editor and stops preview playback. You can also use the smaller **Edit individual keyframes** controls in Properties.

For another panel or proposal, close the motion workspace, change **Editing version** and reopen it. Copied motion remains available in the same session. Reload clears it. An off-grid imported key must first be moved to a whole frame; a paste beyond the current scene cannot silently extend it. These are ordinary numeric motion keys, with the existing linear interpolation.
