import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';

/**
 * MessageBar Component - display warnings, errors, etc. for fail requests
 *
 * @param {*} { open, onClose, message }
 * @returns
 */
const MessageBar = ({ open, onClose, message }) => {
    return <Snackbar
        anchorOrigin={{
        vertical: 'top',
        horizontal: 'center',
        }}
        open={open}
        autoHideDuration={6000}
        onClose={onClose}
        ContentProps={{
        'aria-describedby': 'message-id',
        }}
        message={<span id="message-id" >{message}</span>}
        action={[
            <IconButton
              key="close"
              aria-label="Close"
              color="inherit"
              onClick={onClose}
            >
              <CloseIcon />
            </IconButton>,
        ]}
    />
}

export default MessageBar;