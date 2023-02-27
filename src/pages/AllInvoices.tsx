import axios from "axios";
import React, { useEffect, useState } from "react";
import InvoiceTable from "../components/Invoices/InvoiceTable";
import Sidepanel from "../components/Layout/Sidepanel/Sidepanel";

const AllInvoices: React.FC = () => {
  const [invoices, setInvoices] = useState<any[]>([]);

  useEffect(() => {
    axios.get("http://localhost:8000/invoice/").then((res) => {
      console.log(res.data);
      setInvoices(res.data.invoices);
    });
  }, []);
  return (
    <div className="flex">
      <Sidepanel></Sidepanel>
      <div className="p-8 w-full text-2xl font-semibold relative">
        <h2 className="uppercase text-darkgray">Your invoices</h2>
        {invoices.length > 0 && <InvoiceTable invoices={invoices} />}
        {invoices.length <= 0 && (
          <p className="text-center text-darkgray absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            You don't have any invoices yet.
            <br />
            Once an invoice will be created, it will appear on this page.
          </p>
        )}
      </div>
    </div>
  );
};

export default AllInvoices;
