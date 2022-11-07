import { v4 as uuidv4 } from 'uuid';
import CardUser from './CardUser';
import Button from '../UI/Button';
import users from './data';
import styles from './ListUsers.module.scss';

function UsersList() {
  return (
    <div className={styles.list}>
      <div className={styles.listTitle}>
        <h4>Working with GET request</h4>
      </div>
      <div className={styles.listCards}>
        <ul className={styles.listItems}>
          {users.map((user) => {
            return (
              <li>
                <CardUser
                  key={uuidv4()}
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
