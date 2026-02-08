import { Link } from "react-router-dom";
import data from "../../api/data.json";
import "./table.css";

type Row = (typeof data)[number];

export default function Table() {
  return (
    <table>
      <thead>
        <tr>
          <th>Invoice ID</th>
          <th>Title</th>
          <th>Project Name</th>
          <th>Project Reference</th>
        </tr>
      </thead>
      <tbody>
        {(data as Row[]).map((row) => (
          <tr key={row.invoiceId}>
            <Link to={`/detail/${row.invoiceId}`} className="table-link">
              <td>{row.invoiceNumber}</td>
              <td>{row.invoiceTitle}</td>
              <td>{row.projectName}</td>
              <td>{row.projectReference}</td>
            </Link>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
