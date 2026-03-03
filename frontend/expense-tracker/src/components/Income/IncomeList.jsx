import React from "react";
import { LuDownload } from "react-icons/lu";
import TransactionInfoCard from "../Cards/TransactionInfoCard";
import moment from "moment";

const IncomeList = ({ transactions, onDelete, onDownload }) => {
  return (
    <div className="card">
      <div className="flex items-center justify-between">
        <h5 className="text-lg">Income Sources</h5>
        <button className="card-btn" onClick={onDownload}>
          <LuDownload className="text-base" />
          Download
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 ">
        {transactions?.map((income) => (
          <TransactionInfoCard
            key={income.id}
            title={income.source}
            amount={income.amount}
            icon={income.icon}
            date={moment(income.date).format("MMM D, YYYY")}
            onDelete={() => onDelete(income.id)}
            type="income"
          />
        ))}
      </div>
    </div>
  );
};

export default IncomeList;
