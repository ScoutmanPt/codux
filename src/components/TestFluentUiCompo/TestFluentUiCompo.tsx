import React from 'react';
import { DefaultButton } from '@fluentui/react';

const TestFluentUiCompo : React.FC =  () => {
  return (
    <div>
      <h1>Office UI Fabric Button Example</h1>
      <DefaultButton text="Click me" onClick={() => alert('Button clicked!')} />
    </div>
  );
};

export default TestFluentUiCompo;