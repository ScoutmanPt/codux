import React from 'react';
import { createBoard } from '@wixc3/react-board';
import PnpcAccessibleAccordion from '../../../components/AccessibleAccordion/PnpcAccessibleAccordion';

export default createBoard({
    name: 'WorkingWithComposeFluentUiPnpcAccessibleAccordion',
    Board: () => <PnpcAccessibleAccordion />,
    isSnippet: true,
});
