import database from './firebase';
import { URLS } from './constants';

// Add a Github user to firebase
const addUser = (newUser, err) => database.ref('users').push(newUser, err);

// REmove a Github user from firebase
const removeUser = userToRemove => database.ref('users').child(userToRemove).remove();

// Retrieve all saved Github users info from firebase
const fetchUsers = () => database.ref('users').once('value');

// Retrieve a user's Github info
const fetchUser = (username) => fetch(`${URLS.BASE_URL}${URLS.USERS}/${username}`)
    .then(response => {
        if (!response) {
            return response.json().then(error => new Error(error.message));
        }

        return response.json();
    });

const usersAPIs = {
    fetchUser,
    fetchUsers,
    removeUser,
    addUser
}

export default usersAPIs;
