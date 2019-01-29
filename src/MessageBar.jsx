import './style/core/_base.scss';
import './style/components/_messagebar.scss';
/* Icons */
import CheckIcon from 'photon-icons/icons/desktop/check-16.svg';
import CloseIcon from 'photon-icons/icons/desktop/close-16.svg';
import IdentityIcon from 'photon-icons/icons/desktop/identity-icon.svg';
import IdentityIconHover from 'photon-icons/icons/desktop/identity-icon-hover.svg';
import WarningIcon from 'photon-icons/icons/desktop/warning-16.svg';

import React from 'react';
import Button from './Button';
import Typography from './Typography';

const classNames = require('classnames');


export default function MessageBar(props) {
    let status = props.status ? props.status : 'generic';
    let classes = classNames(
        'messagebar',
        `messagebar-status--${status}`,
        {
            'messagebar-width--auto': props.auto
        }
    );
    // Generic default icon
    let icon = (<IdentityIcon className={'icon'} />)
    switch (props.status) {
        case 'error':
            icon = (<IdentityIconHover className={'icon'} />);
            break;
        case 'success':
            icon = (<CheckIcon className={'icon'} />);
            break;
        case 'warning':
            icon = (<WarningIcon className={'icon'} />);
            break;
    }
    return (
        <div className={classes}>
            {icon}
            <div className={'message'}>
                <Typography.Body size={'sm'}>
                    {props.children}
                </Typography.Body>
            </div>
            {props.action &&
             <Button.Default
                size={'micro'}
                status={props.status}
                onClick={props.actionOnClick}
             >
                {props.action}
             </Button.Default>
            }
            <div class={'spacer'} />
            {props.dismiss &&
             <CloseIcon
                 className={'icon close'}
                 size={'micro'}
                 onClick={props.onClose}
             />
            }
        </div>
    );
}
