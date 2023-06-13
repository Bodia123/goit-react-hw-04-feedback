import { nanoid } from 'nanoid';
import css from './Control.module.css';
export const Control = ({ options, click }) => {
  return (
    <ul className={css.list}>
      {options.map(option => (
        <li key={nanoid()} className={css.item}>
          <button
            type="button"
            className={css.button}
            name={option}
            onClick={click}
          >
            {option}
          </button>
        </li>
      ))}
    </ul>
  );
};
