import '../../styles/Navbar.css';
import Searchicon from '../svg/search';

import user from '../../assets/user.jpg';

const Navbar = () => {
  return (
    <div className="Navbar">
      <div className="wrapper">
        <h3 className="active">Dashboard</h3>
        <div className="search">
          <Searchicon />
          <input type="text" placeholder="Search..." className="searchInput" />
        </div>
        <div className="user">
          <img src={user} alt="profile image of user" className="avatar" />
          <p>
            <span className="user_name">Eunice J</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
