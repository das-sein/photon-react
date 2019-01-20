import { addDecorator, configure } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

const req = require.context('../stories', true, /.\.jsx$/);

addDecorator(
    withInfo({
        header: false,
        inline: true
    })
);

configure(() => {
    req.keys().forEach(req);
}, module);
