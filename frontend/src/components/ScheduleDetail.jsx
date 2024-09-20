const ScheduleDetail = ({ schedule }) => {
  const {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday,
    name,
  } = schedule;
  return (
    <tr>
      <td>{name}</td>
      <td>{Monday}</td>
      <td>{Tuesday}</td>
      <td>{Wednesday}</td>
      <td>{Thursday}</td>
      <td>{Friday}</td>
      <td>{Saturday}</td>
      <td>{Sunday}</td>
    </tr>
  );
};

export default ScheduleDetail;
