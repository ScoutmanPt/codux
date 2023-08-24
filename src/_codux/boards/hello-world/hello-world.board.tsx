import React from 'react';
import { createBoard } from '@wixc3/react-board';
import HelloWorld from '../../../webparts/helloWorld/components/HelloWorld';
import { IHelloWorldProps } from '../../../webparts/helloWorld/components/IHelloWorldProps';
const theProps: IHelloWorldProps = {
    description: "description",
    isDarkTheme: true,
    environmentMessage: "environmentMessage",
    hasTeamsContext: false,
    userDisplayName: "user.displayName"
  };
export default createBoard({
    name: 'HelloWorld',
    Board: () => <HelloWorld {...theProps} />,
    isSnippet: true,
});
