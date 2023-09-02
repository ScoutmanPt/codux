import React from 'react';
import { createBoard } from '@wixc3/react-board';
import PnpcAccordion from '../../../components/Accordion/PnpcAccordion';
interface Item {
    Question: string;
    Reponse: string;
    Langue: {
        Nom: string;
    };
}
const props: Item[] = [
    {
        Question: "What is the capital of France?",
        Reponse: "The capital of France is Paris.",
        Langue: {
            Nom: "French"
        }
    },
    {
        Question: "Who wrote the play 'Romeo and Juliet'?",
        Reponse: "The play 'Romeo and Juliet' was written by William Shakespeare.",
        Langue: {
            Nom: "English"
        }
    },
    // Add more items as needed
];
export default createBoard({
    name: 'PnpcAccordion 1',
    Board: () => <PnpcAccordion props={props}>
        {undefined}
    </PnpcAccordion>,
    isSnippet: true,
});
