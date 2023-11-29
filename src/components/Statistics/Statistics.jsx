import { StatisticsSection } from './Statistics.styled';
import { getRandomColor } from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <StatisticsSection>
      {title && <h2 className="title">{title}</h2>}

      <ul className="stat-list">
        {stats.map(el => {
          return (
            <li
              className="item"
              key={el.id}
              style={{ backgroundColor: getRandomColor() }}
            >
              <span className="label">{el.label}</span>
              <span className="percentage">{el.percentage}%</span>
            </li>
          );
        })}
      </ul>
    </StatisticsSection>
  );
};
