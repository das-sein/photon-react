import React from 'react';
import { storiesOf } from '@storybook/react';


export const BodyStories =
    storiesOf('Body', module)
        .add('Link', () => (
            <div>
                <a href="https://design.firefox.com">
                    A link to the Firefox Photon Design webpage.
                </a>
            </div>
        ));
