import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import LaunchIcon from '@material-ui/icons/Launch';
import DeleteIcon from '@material-ui/icons/Delete';
import { withStyles } from '@material-ui/core';

import CustomTableCell from './UserTableRow';

const styles = (theme) => ({
    paper: {
        flexGrow: 1,
    },
    table: {
        minWidth: 700,
    },
    row: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.background.default,
        },
    },
    margin: {
        margin: theme.spacing.unit,
    },
});

/**
 * UserTable Component - displays all saved Github users
 *
 * @param {*} { classes: { paper, table, row, margin }, users, removeUser }
 */
const UserTable = ({ classes: { paper, table, row, margin }, users, removeUser }) => (
    <Paper className={paper}>
        <Table className={table}>
        <TableHead>
            <TableRow>
                <CustomTableCell></CustomTableCell>
                <CustomTableCell>Username</CustomTableCell>
                <CustomTableCell align="left">Name</CustomTableCell>
                <CustomTableCell align="left">Public Repos</CustomTableCell>
                <CustomTableCell align="left">Public Gists</CustomTableCell>
                <CustomTableCell align="left">Followers</CustomTableCell>
                <CustomTableCell align="left">Following</CustomTableCell>
                <CustomTableCell align="left">Created At</CustomTableCell>
                <CustomTableCell></CustomTableCell>
            </TableRow>
        </TableHead>
        <TableBody>
            {users.map(user => (
                <TableRow className={row} key={user.id}>
                    <CustomTableCell>
                        <IconButton
                            target="_blank"
                            href={user.url}
                            aria-label="Launch"
                            className={margin}
                        >
                            <LaunchIcon fontSize="small" />
                        </IconButton>
                    </CustomTableCell>
                    <CustomTableCell component="th" scope="row">
                        {user.username}
                    </CustomTableCell>
                    <CustomTableCell align="left">{user.name}</CustomTableCell>
                    <CustomTableCell align="left">{user.publicRepos}</CustomTableCell>
                    <CustomTableCell align="left">{user.publicGists}</CustomTableCell>
                    <CustomTableCell align="left">{user.followers}</CustomTableCell>
                    <CustomTableCell align="left">{user.following}</CustomTableCell>
                    <CustomTableCell align="left">{user.createdAt}</CustomTableCell>
                    <CustomTableCell>
                        <IconButton
                            aria-label="Delete"
                            className={margin}
                            onClick={() => {
                                removeUser(user.key);
                            }}
                        >
                            <DeleteIcon fontSize="small" />
                        </IconButton>
                    </CustomTableCell>
                </TableRow>
            ))}
        </TableBody>
        </Table>
    </Paper>
);

export default withStyles(styles)(UserTable);