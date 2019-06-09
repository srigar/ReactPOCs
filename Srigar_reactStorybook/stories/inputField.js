import React from 'react';
import { storiesOf } from '@storybook/react';
import Input from '../src/components/textField/inputField';

const stories = storiesOf('Input Field', module);

stories.add('Without any props', () => {
    return <Input />
});

stories.add('Custom Placeholder', () => {
    return <Input placeholder="Enter Value" />
});

stories.add('Custom style', () => {
    return <Input placeholder="Custom Style" style={{
        'border-color': 'red',
        'color': 'blue'
    }} />
});
