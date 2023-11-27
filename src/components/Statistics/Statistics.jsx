import { StatListItem } from './StatListItem';
import { Title } from './Title';
import { StatisticsSection } from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <StatisticsSection>
      <Title titleText={title} />

      <ul className="stat-list">
        {stats.map(el => {
          return (
            <StatListItem
              key={el.id}
              label={el.label}
              percentage={el.percentage}
            />
          );
        })}
      </ul>
    </StatisticsSection>
  );
};
