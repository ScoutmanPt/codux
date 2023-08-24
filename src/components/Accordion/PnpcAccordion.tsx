import * as React from 'react';
import { Accordion } from "@pnp/spfx-controls-react/lib/Accordion";

interface Item {
  Question: string;
  Reponse: string;
  Langue: {
    Nom: string;
  };
}

// const props: Item[] = [
//   {
//     Question: "What is the capital of France?",
//     Reponse: "The capital of France is Paris.",
//     Langue: {
//       Nom: "French"
//     }
//   },
//   {
//     Question: "Who wrote the play 'Romeo and Juliet'?",
//     Reponse: "The play 'Romeo and Juliet' was written by William Shakespeare.",
//     Langue: {
//       Nom: "English"
//     }
//   },
//   // Add more items as needed
// ];
const PnpcAccordion: React.FC<{ props: Item[] }> = ({ props }) => {
  return (
    <div>
      {props.map((item: Item, index: number) => (
        <Accordion title={item.Question} defaultCollapsed={true} className={"itemCell"} key={index}>
          <div className={"itemContent"}>
            <div className={"itemResponse"}>{item.Reponse}</div>
            <div className={"itemIndex"}>{`Langue :  ${item.Langue.Nom}`}</div>
          </div>
        </Accordion>
      ))}
    </div>
  );
};
export default PnpcAccordion;
