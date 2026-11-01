# Your first Framefold session

This guide describes released **alpha 0.4.0**. Future tools in the [feature register](FEATURES.md) are not available until a release explicitly introduces them.

Use a recent desktop browser. The studio works without a Framefold account. GitHub sign-in is needed only to participate in the community.

## First, try the sample

Open [Framefold](https://framefold-psi.vercel.app/) and choose **Open studio**. Select **A quicker delivery** in the proposals panel. Uncheck the rotation changes, keep the courier X-position change and preview the result. Apply the selected change. The movement changes without accepting the proposed rotation.

## Start a project

Choose **New project**, name it and create a blank project. Download your existing project first if you want to keep it. New projects replace the local workspace; Undo works during the same session.

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
