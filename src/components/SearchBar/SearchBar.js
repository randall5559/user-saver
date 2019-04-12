import React from 'react';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core';

const styles = theme => ({
    paper: {
        padding: theme.spacing.unit * 2,
        margin: 'auto',
        display: 'flex',
        justifyContent: 'center',
    },
    textfield: {
        margin: '10px',
        width: '95%',
    },
});

/**
 * SearchBar Component - allows user to enter/trigger a call to retrieve a Github user's information
 *
 * @param {*} { classes: { paper, textfield }, fetchUser }
 */
export const SearchBar = ({ classes: { paper, textfield }, fetchUser, doQuery }) => (
    <Paper className={paper}>
        <TextField
          id="outline_textfield_fullwidth"
          label="Add a Github User"
          className={textfield}
          placeholder="Enter a Github Username"
          margin="normal"
          variant="outlined"
          InputLabelProps={{
            shrink: true,
          }}
          onKeyPress={({ key, target: { value }}) => {
            if (key === 'Enter') {
                fetchUser(value);
            } 
          }}
        />
    </Paper>
);

export default withStyles(styles)(SearchBar);