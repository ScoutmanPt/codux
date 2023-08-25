import React from 'react';
import { createBoard } from '@wixc3/react-board';
import TestCompo from '../../../components/TestCompo/TestCompo';

export default createBoard({
    name: 'TestCompo',
    Board: () => <TestCompo />,
    isSnippet: true,
});
