import styles from '../../styles/Barchart.module.css';

import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  Tooltip,
  YAxis,
} from 'recharts';
import { SavingsData } from '../../assets/Dummy data/Data.js';

const Barchart = () => {
  return (
    <div className={styles.barchart}>
      <div className={styles.barchartwrapper}>
        <ResponsiveContainer width="100%">
          <BarChart
            data={SavingsData}
            margin={{ top: 10, left: 20, right: 20, bottom: 10 }}
          >
            <XAxis dataKey="Month" stroke="#2A5C99" />
            <YAxis />
            <Tooltip />
            <Bar
              dataKey="Amount"
              stroke="#2A5C99"
              fill="#2A5C99"
              radius={[5, 5, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Barchart;
