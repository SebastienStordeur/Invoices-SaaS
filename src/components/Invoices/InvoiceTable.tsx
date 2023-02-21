import React from "react";

const InvoiceTable: React.FC = () => {
  const array = [200, 150, 277, 500, 800];
  return (
    <table className="border border-gray mt-10">
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
        {array.map((value, index) => {
          return (
            <tr
              key={index}
              className="grid grid-cols-5 [&>*]:flex [&>*]:justify-center [&>*]:items-center h-10 odd:bg-gray even:bg-light"
            >
              <td>ABC</td>
              <td>POI</td>
              <td>Paid</td>
              <td>450</td>
              <td>files</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default InvoiceTable;
