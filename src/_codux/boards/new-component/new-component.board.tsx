import React from 'react';
import { createBoard } from '@wixc3/react-board';
import { NewComponentNotWorking } from '../../../newcompos/new-component/new-component';

export default createBoard({
    name: 'NewComponentNotWorking',
    Board: () => <NewComponentNotWorking />,
    isSnippet: true,
});
