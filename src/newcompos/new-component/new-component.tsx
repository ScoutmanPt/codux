import React from 'react';
import { IconPicker } from '@pnp/spfx-controls-react';

export interface NewComponentProps {
    className?: string;
}

export const NewComponent: React.FC<NewComponentProps> = ({ className = '' }) => (
    <div className={className}>
        <IconPicker />NewComponent</div>
);