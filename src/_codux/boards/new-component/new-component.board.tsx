import React from 'react';
import { createBoard } from '@wixc3/react-board';
import { NewComponent } from '../../../newcompos/new-component/new-component';

export default createBoard({
    name: 'NewComponent',
    Board: () => <NewComponent />,
    isSnippet: true,
});
