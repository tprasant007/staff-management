const ScheduleDetail = ({ schedule }) => {
  console.log(schedule);
  const {
    name,
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday,
  } = schedule;
  return (
    <div>
      <h2>{name}</h2>
      <table>
        <thead>
          <tr>
            <th>Monday</th>
            <th>Tuesday</th>
            <th>Wednesday</th>
            <th>Thursday</th>
            <th>Friday</th>
            <th>Saturday</th>
            <th>Sunday</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{Monday}</td>
            <td>{Tuesday}</td>
            <td>{Wednesday}</td>
            <td>{Thursday}</td>
            <td>{Friday}</td>
            <td>{Saturday}</td>
            <td>{Sunday}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ScheduleDetail;
