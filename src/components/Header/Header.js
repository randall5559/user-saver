import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core';

const styles = () => ({
    header: {
        marginBottom: 10,
    },
});

const Header = ({classes: { header }}) => (
    <div className={header}>
        <AppBar position="static" color="default">
            <Toolbar>
            <Typography variant="h6" color="inherit">
                Github User Saver
            </Typography>
            </Toolbar>
        </AppBar>
    </div>
);

export default withStyles(styles)(Header);
