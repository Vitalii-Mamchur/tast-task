import { useState, useEffect } from 'react';
// import { v4 as uuidv4 } from 'uuid';
import CardUser from './CardUser';
import Button from '../UI/Button/Button';
import Loading from '../UI/Loading/Loading';
// import users from './data';
import styles from './ListUsers.module.scss';

const PER_PAGE = 6;

function UsersList() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);

  let URL = `https://frontend-test-assignment-api.abz.agency/api/v1/users?page=${page}&count=${PER_PAGE}`;

  useEffect(() => {
    fetch(URL)
      .then((response) => response.json())
      .then(
        (data) => {
          setIsLoaded(true);
          setUsers(data.users);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  // if (data.success) { // process success response } else { // process server errors } }

  function handleOnClick() {}

  if (error) {
    return <h3>Ошибка: {error.message}</h3>;
  } else if (!isLoaded) {
    return (
      <div className={styles.loading}>
        <Loading />
      </div>
    );
  } else {
    return (
      <div className={styles.list}>
        <h4 className={styles.listTitle}>Working with GET request</h4>
        <div className={styles.listCards}>
          <ul className={styles.listItems}>
            {users.map((user) => {
              return (
                <li className={styles.listItem} key={user.id}>
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
        <Button
          type="button"
          class="button120"
          text="Show more"
          onClickHandler={handleOnClick}
        />
      </div>
    );
  }
}

export default UsersList;
