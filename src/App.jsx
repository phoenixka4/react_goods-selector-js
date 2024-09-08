import 'bulma/css/bulma.css';
import './App.scss';
import { useState, useEffect } from 'react';

export const goods = [
  'Dumplings',
  'Carrot',
  'Eggs',
  'Ice cream',
  'Apple',
  'Bread',
  'Fish',
  'Honey',
  'Jam',
  'Garlic',
];

export const App = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleRowClick = index => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  useEffect(() => {
    setActiveIndex(8);
  }, []);

  return (
    <main className="section container">
      <h1
        className={
          activeIndex === null ? 'title is-flex is-align-items-center' : 'title'
        }
      >
        {activeIndex === null
          ? 'No goods selected'
          : `${goods[activeIndex]} is selected`}
        {activeIndex !== null && (
          <button
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
            onClick={() => setActiveIndex(null)}
          />
        )}
      </h1>

      <table className="table">
        <tbody>
          {goods.map((n, index) => (
            <tr
              data-cy="Good"
              key={n}
              className={
                activeIndex === index ? 'has-background-success-light' : ''
              }
            >
              <td>
                <button
                  data-cy={activeIndex === index ? 'RemoveButton' : 'AddButton'}
                  type="button"
                  className={
                    activeIndex === index ? 'button is-info' : 'button'
                  }
                  onClick={() => handleRowClick(index)}
                >
                  {activeIndex === index ? '-' : '+'}
                </button>
              </td>

              <td data-cy="GoodTitle" className="is-vcentered">
                {n}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
};
