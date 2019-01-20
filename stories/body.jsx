import React from 'react';
import { storiesOf } from '@storybook/react';


export const BodyStories =
  storiesOf('Body', module)
    .add('Link', () => (
      <div>
        <p>This is a test paragraph with a link to the
          <a href="https://design.firefox.com">
            Firefox Photon Design webpage.
          </a>
        </p>
      </div>
    ));
