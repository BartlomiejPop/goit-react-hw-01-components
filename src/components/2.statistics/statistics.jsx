import PropTypes from 'prop-types';
import styles from './statistics.module.css';

export const StatisticList = ({ title, stats }) => {
  return (
    <section className={styles.statistics}>
      <h2 className={styles.title}>{title}</h2>

      <ul className={styles.statsList}>
        {stats.map(statistic => (
          <li key={statistic.id} className={styles.item}>
            <span className={styles.label}>{statistic.label}</span>
            <span>{statistic.percentage}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

StatisticList.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.string,
};
