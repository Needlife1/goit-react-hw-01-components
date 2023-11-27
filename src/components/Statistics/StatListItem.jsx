import { getRandomColor } from './Statistics.styled';

export const StatListItem = ({ label, percentage }) => {
  return (
    <li className="item" style={{ backgroundColor: getRandomColor() }}>
      <span className="label">{label}</span>
      <span className="percentage">{percentage}%</span>
    </li>
  );
};
