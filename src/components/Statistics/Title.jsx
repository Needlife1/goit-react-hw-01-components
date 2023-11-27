export const Title = ({ titleText }) => {
  if (!titleText) {
    return;
  }
  return <h2 className="title">{titleText}</h2>;
};
