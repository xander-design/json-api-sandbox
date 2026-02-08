import { useParams, Link } from "react-router-dom";
import data from "../../api/data.json";

type Row = (typeof data)[number];

export default function TableDetail() {
  const { id } = useParams<{ id: string }>();
  const numericId = Number(id);
  const row = (data as Row[]).find((r) => r.invoiceId === numericId);

  if (!row) {
    return (
      <div>
        <p>No record found for invoice ID {id}.</p>
        <Link to="/">← Back to table</Link>
      </div>
    );
  }

  return (
    <div>
      <h2>Details for {row.invoiceTitle}</h2>
      <ul>
        <li>
          <strong>ID:</strong> {row.invoiceId}
        </li>
        <li>
          <strong>Invoice Number:</strong> {row.invoiceNumber}
        </li>
        <li>
          <strong>Title:</strong> {row.invoiceTitle}
        </li>
        <li>
          <strong>Project Name:</strong> {row.projectName}
        </li>
        <li>
          <strong>Project Reference:</strong> {row.projectReference}
        </li>
        <li>
          <strong>Date Created:</strong> {row.dateCreated}
        </li>
        <li>
          <strong>Due Date:</strong> {row.dueDate}
        </li>
        <li>
          <strong>Buyer:</strong> {row.buyer.name}
        </li>
        <li>
          <strong>Supplier:</strong> {row.supplier.name}
        </li>
        <li>
          <strong>VAT Rate:</strong> {row.vatRate}
        </li>
        <li>
          <strong>Subtotal:</strong> {row.subTotal}
        </li>
        <li>
          <strong>VAT Total:</strong> {row.vatTotal}
        </li>
        <li>
          <strong>Total:</strong> {row.total}
        </li>
        <li>
          <strong>Invoice Type:</strong> {row.invoiceType}
        </li>
        <li>
          <strong>Status:</strong> {row.status}
        </li>
        <li>
          <strong>Number of Items:</strong> {row.invoiceItems.length}
        </li>
      </ul>
      <Link to="/">← Back to table</Link>
    </div>
  );
}
