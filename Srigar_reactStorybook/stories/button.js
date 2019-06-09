import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Button from '../src/components/button/button';

const stories = storiesOf('Button', module);

stories.add('Without any props', () => {
    return <Button />
});

stories.add('With action log', () => {
    return <Button btnText="Submit" onClick={action('Triggered')} />
});

stories.add('Dyncamic text', () => {
    return <Button btnText="Submit" />
});

stories.add('Custom classes', () => {
    return <Button btnText="Box Shadow" className="btn" />
});

stories.add('Custom style', () => {
    return <Button btnText="Custom Style" style={{
        'border-color': 'red',
        'color': 'blue'
    }} />
});

stories.add('Large text', () => {
    return <Button btnText="Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum " />
});