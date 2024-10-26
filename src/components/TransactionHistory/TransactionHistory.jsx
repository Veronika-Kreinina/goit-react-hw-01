import s from './TransactionHistory.module.css';
const tableHeaders = ['Type', 'Amount', 'Currency'];

const TransactionHistory = ({ items }) => {
  return (
    <table className={s.tab}>
      <thead>
        {tableHeaders.map((item, index) => (
          <th className={s.th} key={index}>
            {item}
          </th>
        ))}
      </thead>

      <tbody>
        {items.map(transaction => (
          <tr key={transaction.id}>
            <td className={s.td}>{transaction.type}</td>
            <td className={s.td}>{transaction.amount}</td>
            <td className={s.td}>{transaction.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TransactionHistory;
