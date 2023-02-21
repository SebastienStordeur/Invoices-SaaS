import React, { useState } from "react";
import InvoiceTable from "../components/Invoices/InvoiceTable";
import Sidepanel from "../components/Layout/Sidepanel/Sidepanel";

const AllInvoices = () => {
  const [invoices, setInvoices] = useState<any[]>([]);
  return (
    <div className="flex">
      <Sidepanel></Sidepanel>
      <div className="p-8 uppercase text-2xl font-semibold">
        <h2>Your invoices</h2>
        <InvoiceTable />
      </div>
    </div>
  );
};

export default AllInvoices;
