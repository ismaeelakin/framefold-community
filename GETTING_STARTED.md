# Your first Framefold session

This guide describes released **alpha 0.2**. Future tools in the [feature register](FEATURES.md) are not available until a release explicitly introduces them.

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

PNG exports the current frame without selection guides. WebM records one ten-second scene in real time, with no audio; keep the tab visible. Storyboard PNG exports a contact sheet. The animatic preview is not a full-sequence video export.

If a step fails, use [the bug template](https://github.com/ismaeelakin/framefold-community/issues/new?template=bug_report.yml). Use a small, non-confidential reproduction.

## What your audience receives

A PNG is a still image. A contact sheet presents story panels together. A scene WebM is a silent short video that needs a compatible player; recording may vary under device load. A project/proposal file is editable source for another Framefold user, not an audience playback link.

There is no hosted gallery, public player page, audio timeline, frame-by-frame cel editor or native 3D tool in this release. To evaluate the actual output before proposing improvements, use [the creative probes](TESTING.md). The broader direction is in [the roadmap](ROADMAP.md).
