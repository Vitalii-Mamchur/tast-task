import CardUser from './CardUser';
import './ListUsers.scss';

function UsersList() {
  return (
    <div className="list">
      <div className="list-title">
        <h3>Working with GET request</h3>
      </div>
      <div className="list-cards">
        <CardUser />
      </div>
    </div>
  );
}

export default UsersList;
