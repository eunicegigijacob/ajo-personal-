import styles from '../../styles/Dashboard.module.css';
import CloudIcon from '../svg/cloud';
import PlusIcon from '../svg/plus';
import Widgets from './Widgets';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="top">
        <p className="welcome_text">
          Hi, <span>Eunice J</span>
        </p>
        <div className="links">
          <div className="link">
            <CloudIcon />
            <span>fund wallet</span>
          </div>
          <div className="link">
            <PlusIcon />
            <span>withdraw</span>
          </div>
        </div>
      </div>
      <div className="main">
        <div className="left">{/* <Widgets /> */}</div>
        <div className="right">
          <p>Notificatons</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
