import React from 'react';
import { createBoard } from '@wixc3/react-board';
import PnpcCarousel from '../../../components/Carousel/PnpcCarousel';

export default createBoard({
    name: 'PnpcCarousel',
    Board: () => <PnpcCarousel />,
    isSnippet: true,
});
