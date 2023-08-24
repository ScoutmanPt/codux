import React from 'react';
import { createBoard } from '@wixc3/react-board';
import TestFluentUiCompo from '../../../components/TestFluentUiCompo/TestFluentUiCompo';

export default createBoard({
    name: 'WorkingWithSimpleTestFluentUiCompo',
    Board: () => <TestFluentUiCompo />,
    isSnippet: true,
    environmentProps: {
        canvasHeight: 505
    }
});
