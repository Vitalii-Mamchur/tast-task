import { v4 as uuidv4 } from 'uuid';
import CardUser from './CardUser';
import users from './data';
import './ListUsers.scss';

function UsersList() {
  return (
    <div className="list">
      <div className="list-title">
        <h3>Working with GET request</h3>
      </div>
      <div className="list-cards">
        {users.map((user) => {
          return (
            <CardUser
              key={uuidv4()}
              name={user.name}
              position={user.position}
              email={user.email}
              phone={user.phone}
              photo={user.photo}
            />
          );
        })}
      </div>
    </div>
  );
}

export default UsersList;
