import { useState, useEffect } from 'react';
// import { v4 as uuidv4 } from 'uuid';
import CardUser from './CardUser';
import Button from '../UI/Button';
// import users from './data';
import styles from './ListUsers.module.scss';

const URL =
  'https://frontend-test-assignment-api.abz.agency/api/v1/users?page=1&count=15';

function UsersList() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch(URL)
      .then((response) => response.json())
      .then((data) => setUsers(data.users))
      .catch((error) => alert(error.message));
  }, []);

  // if (data.success) { // process success response } else { // process server errors } }

  return (
    <div className={styles.list}>
      <div className={styles.listTitle}>
        <h4>Working with GET request</h4>
      </div>
      <div className={styles.listCards}>
        <ul className={styles.listItems}>
          {users.map((user) => {
            return (
              <li key={user.id}>
                <CardUser
                  name={user.name}
                  position={user.position}
                  email={user.email}
                  phone={user.phone}
                  photo={user.photo}
                />
              </li>
            );
          })}
        </ul>
      </div>
      <Button type="button" class="button120" text="Show more" />
    </div>
  );
}

export default UsersList;
