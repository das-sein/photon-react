import React from 'react';
import { storiesOf } from '@storybook/react';
import MessageBar from '../src/MessageBar';


export const messageBarStories =
    storiesOf('MessageBar', module)
        .add('generic', () => (
            <MessageBar>
                This is a generic message
            </MessageBar>
        ))
        .add('generic (auto sized)', () => (
            <MessageBar auto>
                This is a generic message
            </MessageBar>
        ))
        .add('generic with dismiss', () => (
            <MessageBar dismiss>
                This is a generic message
            </MessageBar>
        ))
        .add('generic with action button and dismiss (auto sized)', () => (
            <MessageBar auto dismiss action={'Check Something'} actionOnClick={e => alert('Hello, Firefox!')}>
                This is a generic message
            </MessageBar>
        ))
        .add('generic with dismiss (auto sized)', () => (
            <MessageBar auto dismiss>
                This is a generic message
            </MessageBar>
        ))
        .add('generic with dismiss action (auto sized)', () => (
            <MessageBar auto dismiss onClose={e => alert('Hello, Firefox!')}>
                This is a generic message
            </MessageBar>
        ))
        .add('success with dismiss (auto sized)', () => (
            <MessageBar auto dismiss status={'success'}>
                This is a success message
            </MessageBar>
        ))
        .add('success with action button and dismiss (auto sized)', () => (
            <MessageBar auto dismiss status={'success'} action={'Success Action'}>
                This is a success message
            </MessageBar>
        ))
        .add('error with dismiss (auto sized)', () => (
            <MessageBar auto dismiss status={'error'}>
                This is an error message
            </MessageBar>
        ))
        .add('warning with dismiss (auto sized)', () => (
            <MessageBar auto dismiss status={'warning'}>
                This is a warning message
            </MessageBar>
        ))
