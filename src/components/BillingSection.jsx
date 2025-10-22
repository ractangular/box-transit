import React from "react";


const BillingSection = () => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-sm px-8 py-5 flex flex-col md:flex-row justify-between items-start md:items-center w-full">
      <div>
        <h1 className="text-xl md:text-2xl font-bold text-gray-800">Billing</h1>
        <p className="text-sm text-gray-500 mt-1">
          Manage your balance and view transaction history
        </p>
      </div>

      <div className="flex items-center gap-3 mt-4 md:mt-0">
        <button className="px-4 py-2 text-sm font-medium border border-gray-300 rounded-lg hover:bg-gray-100 transition">
          Redeem
        </button>
        <button className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition">
          + Add Credit
        </button>
      </div>
    </div>
  );
};

export default BillingSection;
