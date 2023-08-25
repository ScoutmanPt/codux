import * as React from 'react';
import { AnimatedDialog } from "@pnp/spfx-controls-react/lib/AnimatedDialog";
import{IDialogContentProps, DialogType, IModalProps, DialogFooter, PrimaryButton, DefaultButton} from 'office-ui-fabric-react';

const animatedDialogContentProps: IDialogContentProps = {
    type: DialogType.normal,
    title: 'Animated Dialog',
    subText: 'Do you like the animated dialog?',
  };

const animatedModalProps: IModalProps = {
  isDarkOverlay: true
};
const PnpcAnimatedDialog : React.FC =  () => {
    return (
<AnimatedDialog
    hidden={false}
    onDismiss={() => { alert('dismissed ') }}
    dialogContentProps={animatedDialogContentProps}
    modalProps={animatedModalProps}
    >
        <DialogFooter>
            <PrimaryButton onClick={() => { alert('click1 ')}} text="Yes" />
            <DefaultButton onClick={() => { alert('click2 ') }} text="No" />
        </DialogFooter>
</AnimatedDialog>
    );

};
export default PnpcAnimatedDialog;
