import React from 'react';

import { IconPicker } from '@pnp/spfx-controls-react';

export interface NewComponentProps {
    className?: string;
}

export const NewComponentNotWorking: React.FC<NewComponentProps> = ({ className = '' }) => (
    <div className={className}>
        <IconPicker buttonLabel={'Icon'}
            onChange={(iconName: string) => { "" }}
            onSave={(iconName: string) => { "" }} />
        
        </div>
);
export default NewComponentNotWorking;