import PropTypes from 'prop-types';
import styles from './transaction-history.module.css';

export const TransactionHistory = ({ transactions }) => {
  return (
    <table className={styles.table}>
      <thead className={styles.tableHead}>
        <tr className={styles.tr}>
          <th className={styles.type}>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      {transactions.map(transaction => (
        <tbody className={styles.tableBody}>
          <tr key={transaction.id}>
            <td className={styles.type}>{transaction.type}</td>
            <td>{transaction.amount}</td>
            <td>{transaction.currency}</td>
          </tr>
        </tbody>
      ))}
    </table>
  );
};

TransactionHistory.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      type: PropTypes.string,
      amount: PropTypes.string,
      currency: PropTypes.string,
    })
  ),
};
