# Meeting Landing

Close a meeting with a named owner and actual due date for each decision.

Finish the last minute of a meeting with a person and a date attached to each decision. The bar leaves those assignments visible at the desk when the meeting window closes.

## Give a decision an owner

1. Set the decision names and the list of possible owners in device settings. Use comma-separated names, up to six in each list.
2. Turn to an unassigned decision and click. Turn through the owners until the person who accepted the work is on screen.
3. Click again to move to the due date. The first clip shows the choice moving from Ari to Bo.

![An unassigned decision opens an owner selection and the name changes to Bo.](media/guide/choose-a-decision-owner.gif)

## Confirm the deadline and close the item

1. Turn to the agreed number of days from now. Zero means due today. Click to save the owner and deadline together.
2. On the list, read the exact date on the rear and the owner on the front. The recording saves a two-day deadline for Bo.
3. Hold the wheel when the assigned task is complete. Hold it again to reopen it. **Start** exits an unfinished edit back to the list.

![The due interval changes from one to two days and the decision returns with Bo as owner.](media/guide/save-two-day-deadline.gif)

## Example from the emulator

For a three-item meeting such as review design, send estimate and book demo, each decision keeps its own owner, deadline and completion state. A decision can be reassigned by opening it again and choosing a new owner and date.

## Run in the emulator

Open BUSY Bar Emulator. From this repository, run:

```sh
~/.busy-emulator/bin/busy-emulator dev --once
```

Press **Back** to exit.

The GIFs are excerpts from the emulator recording. Each front-display pixel is shown at 9× its original width and height. The end frames pause for reading.

[Full recording](media/controls.mp4) · [Rear display](screenshots/back-1.png) · [Firmware test](EMULATOR-QA.md) · [MIT license](LICENSE)
