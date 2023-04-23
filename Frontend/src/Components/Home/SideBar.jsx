import syles from '../../styles/Sidebar.module.css';

import logo from '../../assets/Logo.png';
import Dasboardsvg from '../svg/dashboard';
import Walletsvg from '../svg/wallet';
import Savingsvg from '../svg/savings';
import Feedsvg from '../svg/tips';

const SideBar = () => {
  return (
    <div className="Sidebar">
      <div className="logo">
        <img src={logo} alt="logo" className="homelogo" />
      </div>
      <div className="items">
        <ul className="list">
          <li className="item">
            <Dasboardsvg />
            <span className="text">Dasboard</span>
          </li>
          <li className="item">
            <Walletsvg />
            <span className="text"> Wallet </span>
          </li>
          <li className="item">
            <Savingsvg />
            <span className="text">Savings</span>
          </li>
          <li className="item">
            <Feedsvg />
            <span className="text">Feed</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
