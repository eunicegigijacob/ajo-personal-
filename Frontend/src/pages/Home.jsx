import styles from '../styles/Home.module.css';

import SideBar from '../Components/Home/SideBar';
import Navbar from '../Components/Home/Navbar';
import Dashboard from '../Components/Home/Dashboard';

const Home = () => {
  return (
    <div className="Home">
      <SideBar />
      <div className="homeContainer">
        <Navbar />
        <Dashboard />
      </div>
    </div>
  );
};

export default Home;
