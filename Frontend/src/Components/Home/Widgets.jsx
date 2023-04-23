import '../../styles/Widgets.module.css';
import ArrowUpIcon from '../svg/arrowup';
import ChartIcon from '../svg/chart';

const Widgets = () => {
  return (
    <div className="widgets">
      <div className="widget">
        <div className="left">
          <span className="title">Total Amount</span>
          <span className="Number">$12310</span>
          <div className="review">
            <span className="small_text">
              <ArrowUpIcon />
              12%
            </span>
            <span>vs last month</span>
          </div>
        </div>
        <div className="right">
          <ChartIcon />
        </div>
      </div>
      <div className="widget">
        <p>first</p>
      </div>
    </div>
  );
};

export default Widgets;
