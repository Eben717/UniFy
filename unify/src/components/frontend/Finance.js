import React from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '../ui/tabs';
import {
  FaDollarSign,
  FaCreditCard,
  FaChartBar,
  FaPlus,
} from 'react-icons/fa';

function Finance() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Finance Management</h1>

      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="mb-4">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="invoices">Invoices</TabsTrigger>
          <TabsTrigger value="expenses">Expenses</TabsTrigger>
          <TabsTrigger value="reports">Reports</TabsTrigger>
        </TabsList>

        {/* Overview */}
        <TabsContent value="overview">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white rounded-2xl shadow p-4 flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Total Revenue</p>
                <h3 className="text-xl font-semibold">$124,000</h3>
              </div>
              <FaDollarSign className="text-green-500 text-2xl" />
            </div>

            <div className="bg-white rounded-2xl shadow p-4 flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Total Expenses</p>
                <h3 className="text-xl font-semibold">$58,000</h3>
              </div>
              <FaCreditCard className="text-red-500 text-2xl" />
            </div>

            <div className="bg-white rounded-2xl shadow p-4 flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Net Profit</p>
                <h3 className="text-xl font-semibold">$66,000</h3>
              </div>
              <FaChartBar className="text-blue-500 text-2xl" />
            </div>
          </div>
        </TabsContent>

        {/* Invoices */}
        <TabsContent value="invoices">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-bold">Invoices</h2>
            <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
              <FaPlus /> Create Invoice
            </button>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <p>No invoices available. Connect to DB or API to load data.</p>
          </div>
        </TabsContent>

        {/* Expenses */}
        <TabsContent value="expenses">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-bold">Expenses</h2>
            <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
              <FaPlus /> Add Expense
            </button>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <p>No expenses found.</p>
          </div>
        </TabsContent>

        {/* Reports */}
        <TabsContent value="reports">
          <div className="bg-white p-4 rounded shadow">
            <h2 className="text-lg font-bold mb-4">Financial Reports</h2>
            <ul className="list-disc ml-6 space-y-2">
              <li>Profit and Loss Statement</li>
              <li>Balance Sheet</li>
              <li>Cash Flow Report</li>
              <li>General Ledger</li>
            </ul>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}

export default Finance;
