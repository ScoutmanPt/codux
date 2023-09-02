import React from 'react';
import { createBoard } from '@wixc3/react-board';

import { AnimatedDialog } from "@pnp/spfx-controls-react/lib/AnimatedDialog";
import{IDialogContentProps, DialogType, IModalProps, DialogFooter, PrimaryButton, DefaultButton} from 'office-ui-fabric-react';

const animatedDialogContentProps: IDialogContentProps = {
    type: DialogType.normal,
    title: 'Animated Dialog added directly on board',
    subText: 'Do you like the animated dialog??',
  };

const animatedModalProps: IModalProps = {
  isDarkOverlay: true
};

export default createBoard({
    name: 'manualboard',
    Board: () => <AnimatedDialog
    hidden={false}
    onDismiss={() => { alert('dismissed ') }}
    dialogContentProps={animatedDialogContentProps}
    modalProps={animatedModalProps}
    >
        <DialogFooter>
            <PrimaryButton onClick={() => { alert('click3 ')}} text="Yes" />
            <DefaultButton onClick={() => { alert('click4 ') }} text="No" />
        </DialogFooter>
</AnimatedDialog>,
    isSnippet: true,
});
