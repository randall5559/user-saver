import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';

import Header from '../../components/Header/Header'
import SearchBar from '../../components/SearchBar/SearchBar';
import UserTable from '../../components/UserTable/UserTable';
import MessageBar from '../../components/MessageBar/MessageBar';
import usersActions from '../../modules/users/actions';
import messageActions from '../../modules/message/actions';

const styles = (theme) => ({
  grid: {
    marginBottom: 10,
    marginTop: 10,
  },
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
});

class App extends Component {

  /**
   * LifeCycle Hook: triggers when component has been loaded
   *
   * @memberof App
   */
  componentDidMount() {
    const { usersActions: { fetchUsers }} = this.props;
    fetchUsers();
  }

  /**
   * Triggers when SnackBar message window disappears
   *
   * @memberof App
   */
  handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    const { messageActions: { hideMessage } } = this.props;
    hideMessage();
  }

  render() {
    const { classes, message: { display, message }, users, usersActions: { fetchUser, removeUser } } = this.props;
    const usersData = users ? users : [];

    return (
      <div className={classes.root}>
        <Header></Header>
        <MessageBar open={display} message={message} onClose={this.handleClose} ></MessageBar>
        <Grid container direction="row" justify="center" alignItems="center">
          <Grid className={classes.grid} item xs={11}>
            <SearchBar fetchUser={fetchUser}></SearchBar>
          </Grid>
          <Grid className={classes.grid} item xs={11}>
            <UserTable users={usersData} removeUser={removeUser}></UserTable>
          </Grid>
        </Grid>
      </div>
    );
  }
}

// function to convert the global state obtained from redux to local props
const mapStateToProps = state => ({
  users: state.users,
  message: state.message,
})

// function to convert redux action to pass on local props
const mapDispatchToProps = dispatch => ({
  usersActions: bindActionCreators(usersActions, dispatch),
  messageActions: bindActionCreators(messageActions, dispatch),
})

// wrapping the component within the connect HOC and calling the default function directly
export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(App));
