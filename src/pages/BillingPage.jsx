import BillingSection from "../components/BillingSection";
import { GrCreditCard } from "react-icons/gr";
import { FaHistory, FaWallet, FaMoneyBillWave } from "react-icons/fa";

const BillingPage = () => {
  return (
    <div className="w-full px-8 py-6 bg-gray-50 min-h-screen">
      {/* Billing Header */}
      <div className="bg-white border border-gray-100 rounded-lg shadow-sm px-8 py-5 flex flex-col md:flex-row justify-between items-start md:items-center w-full">
        {/* Kiri: Judul dan deskripsi */}
        <div>
          <h1 className="text-xl md:text-2xl font-bold text-gray-800">Billing</h1>
          <p className="text-sm text-gray-500 mt-1">
            Manage your balance and view transaction history
          </p>
        </div>

        {/* Kanan: Tombol */}
        <div className="flex items-center gap-3 mt-4 md:mt-0">
          <button className="px-4 py-2 text-sm font-medium bg-slate-100 rounded-lg hover:bg-slate-200 transition">
            Redeem
          </button>
          <button className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition">
            + Add Credit
          </button>
        </div>
      </div>

      {/* Current Credits Section */}
      <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 w-full">
        {/* Card 1 */}
        <div className="bg-white border border-gray-100 rounded-lg shadow-sm p-6 flex items-center gap-4">
          <div className="bg-blue-100 p-3 rounded-lg">
            <GrCreditCard color="blue" size={25} />
          </div>
          <div>
            <p className="text-sm text-gray-500">Current Credits</p>
            <h2 className="text-2xl font-semibold text-gray-800">Rp 0</h2>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-white border border-gray-100 rounded-lg shadow-sm p-6 flex items-center gap-4">
          <div className="bg-green-100 p-3 rounded-lg">
            <FaWallet color="green" size={25} />
          </div>
          <div>
            <p className="text-sm text-gray-500">Total Balance</p>
            <h2 className="text-2xl font-semibold text-gray-800">Rp 500.000</h2>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-white border border-gray-100 rounded-lg shadow-sm p-6 flex items-center gap-4">
          <div className="bg-yellow-100 p-3 rounded-lg">
            <FaMoneyBillWave color="orange" size={25} />
          </div>
          <div>
            <p className="text-sm text-gray-500">Pending Payments</p>
            <h2 className="text-2xl font-semibold text-gray-800">Rp 120.000</h2>
          </div>
        </div>

        {/* Card 4 */}
        <div className="bg-white border border-gray-100 rounded-lg shadow-sm p-6 flex items-center gap-4">
          <div className="bg-purple-100 p-3 rounded-lg">
            <FaHistory color="purple" size={25} />
          </div>
          <div>
            <p className="text-sm text-gray-500">Transactions</p>
            <h2 className="text-2xl font-semibold text-gray-800">12</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BillingPage;
