# Capability register

These IDs match the private engineering packets. This is public scope and sequencing, not application source or a claim that future tools work.

**48 proposed packets · 149 acceptance recipes · 12 mathematical vectors.** Recipes/vectors are design inputs, not passed implementation tests. Specification review remains required for each unimplemented capability; bounded G2 releases now have their own evidence. [Process and open decisions](SPECIFICATION.md)

## State definitions

- **Available:** a bounded capability exists in alpha 0.2; this does not establish professional quality.
- **Proposed:** specified as future implementation, pending readiness and release tests.
- **Conditional:** requires the stated technical, budget or operating gate.
- **Research:** the outcome is unresolved; bounded experiments precede implementation.

The phase column is a dependency sequence, not a release date. G2 entries for existing features describe preservation/improvement work. G0 specification review and G1 current creative probes precede implementation.

| ID   | Capability                                                      | Public status                                                                                  | Phase |
| ---- | --------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ----- |
| C01  | Scene creation and artwork intake                               | Starting points and guarded imports available; broader intake proposed                         | G2    |
| C02  | Frame evaluation and basic motion                               | Available in 0.2; future compatibility changes proposed                                        | G2    |
| C03  | Story panels and contact sheets                                 | Available in 0.2; future compatibility changes proposed                                        | G2    |
| C04  | Selective proposal review                                       | Available in 0.2; future compatibility changes proposed                                        | G2    |
| C05  | Legacy saving and exchange compatibility                        | Guarded file exchange available; broader compatibility proposed                                | G2    |
| C06  | Still PNG and fixed-frame scene WebM                            | Available in 0.2.2; browser matrix remains limited                                             | G2    |
| C07  | Layer management and selection                                  | Rename, duplicate/remove/fit and reviewed stacking available; rest proposed                    | G2    |
| C08  | Timeline tools and easing                                       | Key reuse, sampled easing and frame stepping available; native curves and other tools proposed | G2    |
| C09  | Drawing tools and viewport                                      | Pan/zoom and whole-stroke cleanup shipped; other tools proposed                                | G2    |
| C10  | Durable local storage and portable packages                     | Manual library and opt-in automatic recovery available; assets/packages proposed               | G2    |
| C11  | Fixed-time rendering and complete animatic export               | Scene and approved-storyboard WebM available; broader formats pending                          | G2    |
| C12  | Scene presets and limits                                        | Proposed implementation                                                                        | G3    |
| C13  | Parent transforms and pivots                                    | Proposed implementation                                                                        | G3    |
| C14  | Paths, masks and compositing                                    | Proposed implementation                                                                        | G3    |
| C15  | Cels, exposures and onion skins                                 | Proposed implementation                                                                        | G4    |
| C16  | Audio tracks and synchronized export                            | Proposed implementation                                                                        | G4    |
| C17  | Shot sequences and transitions                                  | Proposed implementation                                                                        | G4    |
| C18  | Portable timecoded review drawer                                | Proposed implementation                                                                        | G5    |
| C19  | Screenshots and screen-recorded feedback                        | Proposed implementation                                                                        | G5    |
| C20  | Offline application and safe updates                            | Proposed implementation                                                                        | G3    |
| C21  | Local audience viewer package                                   | Proposed implementation                                                                        | G3    |
| C22  | Identity, permissions and invitations                           | Conditional hosted feature                                                                     | G6    |
| C23  | Private hosted assets and asynchronous revisions                | Conditional hosted feature                                                                     | G6    |
| C24  | Optional GitHub issue synchronization                           | Conditional hosted feature                                                                     | G6    |
| C25  | Hosted audience viewing links                                   | Conditional hosted feature                                                                     | G6    |
| C26  | Live presence and simultaneous editing                          | Conditional research                                                                           | G7    |
| C27  | Rigging and inverse kinematics                                  | Conditional research                                                                           | G7    |
| C28  | Native 3D import, staging and cameras                           | Conditional research                                                                           | G7    |
| C29  | Interchange and interoperability                                | Conditional research                                                                           | G7    |
| C30  | Conditional discovery, commerce and remote rendering program    | Conditional research                                                                           | G8    |
| C31  | Optional assistive generation and ownership metadata boundaries | Optional local research; paid inference/legal adjudication excluded                            | G8    |
| C32  | Full 3D modelling suite research program                        | Conditional research                                                                           | G7    |
| C33  | Meaningful selective 3D change review                           | Conditional research                                                                           | G7    |
| C34  | Editable alternative graph and efficient revisions              | Proposed implementation                                                                        | G2    |
| C35  | Connected 2D and 3D shot production                             | Conditional research                                                                           | G7    |
| C36  | Motion-aware comparison and review                              | Proposed implementation                                                                        | G5    |
| C37  | Dependable local production engine                              | Bounded evaluator and artwork-isolation evidence; wider engine work proposed                   | G2    |
| C38  | Portable and inspectable artist-owned projects                  | Proposed implementation                                                                        | G2    |
| C30A | Public gallery and creator profiles                             | Conditional research                                                                           | G8    |
| C30B | Asset and template marketplace                                  | Conditional research                                                                           | G8    |
| C30C | Payments and paid plans                                         | Conditional research                                                                           | G8    |
| C30D | Optional remote render jobs                                     | Conditional research                                                                           | G8    |
| C32A | Mesh topology and direct modelling                              | Conditional research                                                                           | G7    |
| C32B | Modifiers and procedural geometry                               | Conditional research                                                                           | G7    |
| C32C | Sculpting and surface detail                                    | Conditional research                                                                           | G7    |
| C32D | Retopology and geometry repair                                  | Conditional research                                                                           | G7    |
| C32E | UV editing and texture coordinates                              | Conditional research                                                                           | G7    |
| C32F | Materials and texture authoring                                 | Conditional research                                                                           | G7    |

## Important boundaries

- Current exports are PNG/contact sheets and silent fixed-frame scene or approved-storyboard WebM on supported encoders. Storyboard output is bounded to thirteen panels/130seconds; longer sequences and broader formats remain future work.
- Current proposals compare supported 2D scene changes. Topology-aware 3D review is research, not an existing merge engine.
- The full 3D program is C32, with separately gated C32A–F. It is preserved in the vision rather than permanently excluded.
- C30 is an umbrella for conditional gallery, commerce and render services; C30A–D must pass independently.
- No account, invitation, hosted project, automatic GitHub sync or public audience link service exists in the current alpha.
- No mandatory paid hosting or AI dependency. Optional services can remain deferred if free operation is not viable.

See [ROADMAP.md](ROADMAP.md) for order, [RESEARCH.md](RESEARCH.md) for experiments/conditions and [GETTING_STARTED.md](GETTING_STARTED.md) for actual current usage.

## 0.8.0 admission

C01/C05 now include operation ownership for applying project/proposal/raster imports, visible cancellation and native dimension validation. A bounded C37/C38 slice adds an embedded artwork inventory and operation-owned render contexts. This does not complete those broader packets: package formats, asset cleanup, measured process-memory budgets and hosted assets remain proposed or conditional.

## 0.9.0 admission

C07/C04 adds four existing-format stacking commands and atomic order review. Conflict decisions cannot discard approved-only layers, and incompatible selected membership is rejected. This is a bounded ordering workflow; visibility, locking, groups and drag sorting remain proposed.
