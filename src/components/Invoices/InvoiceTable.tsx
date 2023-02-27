import React from "react";
import PDF from "../../assets/icons/pdf.svg";

interface InvoiceTableInterface {
  invoices: any[];
}

const InvoiceTable: React.FC<InvoiceTableInterface> = ({ invoices }) => {
  return (
    <table className="border border-gray mt-10 w-full">
      <thead>
        <tr className="grid grid-cols-5 [&>*]:px-4">
          <th>From</th>
          <th>To</th>
          <th>Status</th>
          <th>Total</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {invoices.map((invoice) => {
          return (
            <tr
              key={invoice._id}
              className="grid grid-cols-5 [&>*]:flex [&>*]:justify-center [&>*]:items-center h-10 odd:bg-gray even:bg-light text-sm"
            >
              <td>{invoice.company}</td>
              <td>{invoice.toName}</td>
              <td>Paid</td>
              <td>{invoice.totalAmount}</td>
              <td>
                <img className="h-8 w-8 cursor pointer" src={PDF} alt="pdf" />
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default InvoiceTable;
