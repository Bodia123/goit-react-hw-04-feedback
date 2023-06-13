import React, { useState, useRef } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { Control } from './Control/Control';
import { Statistic } from './Statistic/Statistic';

// css
import 'react-toastify/dist/ReactToastify.css';
import css from './App.module.css';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [statistic, setStatistic] = useState(false);

  let total = useRef(0);

  const handleIncrement = event => {
    setStatistic(true);

    switch (event.target.name) {
      case 'good':
        setGood(prev => prev + 1);
        total.current += 1;
        toast.success('Дякуємо за Ваш відгук!', {
          position: 'top-right',
          autoClose: 500,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: false,
          theme: 'colored',
        });
        break;
      case 'neutral':
        setNeutral(prev => prev + 1);
        total.current += 1;
        toast.success('Дякуємо за Ваш відгук!', {
          position: 'top-right',
          autoClose: 500,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: false,
          theme: 'colored',
        });
        break;
      case 'bad':
        setBad(prev => prev + 1);
        total.current += 1;
        toast.success('Дякуємо за Ваш відгук!', {
          position: 'top-right',
          autoClose: 500,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: false,
          theme: 'colored',
        });
        break;

      default:
        break;
    }
  };

  return (
    <div className={css.container}>
      <h1 className={css.title}>Будь ласка, залиште відгук!</h1>
      <Control click={handleIncrement} options={['good', 'neutral', 'bad']} />
      <h2 className={css.title}>Статистика!</h2>
      {statistic ? (
        <Statistic
          good={good}
          neutral={neutral}
          bad={bad}
          total={total.current}
        />
      ) : (
        <p className={css.notification}>Зробіть перший відгук!</p>
      )}
      <ToastContainer
        position="top-right"
        autoClose={500}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable={false}
        pauseOnHover={false}
        theme="colored"
      />
    </div>
  );
};
