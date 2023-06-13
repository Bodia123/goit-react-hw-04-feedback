import { nanoid } from 'nanoid';
import css from './Statistic.module.css';
export const Statistic = ({ good, neutral, bad, total }) => {
  return (
    <ul className={css.list}>
      <li key={nanoid()} className={css.item}>
        <p>good:{good}</p>
      </li>
      <li key={nanoid()} className={css.item}>
        <p>neutral: {neutral}</p>
      </li>
      <li key={nanoid()} className={css.item}>
        <p>bad: {bad}</p>
      </li>
      <li key={nanoid()} className={css.item}>
        <p>total: {total}</p>
      </li>
      <li key={nanoid()} className={css.item}>
        <p>positive percent: {Math.round((good / total) * 100)} %</p>
      </li>
    </ul>
  );
};
