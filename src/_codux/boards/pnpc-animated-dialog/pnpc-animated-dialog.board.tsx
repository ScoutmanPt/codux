import React from 'react';
import { createBoard } from '@wixc3/react-board';
import PnpcAnimatedDialog from '../../../components/AnimatedDialog/PnpcAnimatedDialog';

export default createBoard({
    name: 'PnpcAnimatedDialog',
    Board: () => <PnpcAnimatedDialog />,
    isSnippet: true,
});
