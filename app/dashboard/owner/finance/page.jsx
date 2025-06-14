'use client';

import { useEffect, useState } from 'react';
import {
  PieChart, Pie, Cell, Tooltip, Legend,
} from 'recharts';

const COLORS = ['#00C49F', '#FF8042'];

const RANGE_OPTIONS = ['daily', 'weekly', 'monthly'];

export default function BookingStatusChart() {
  const [range, setRange] = useState('daily');
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      setLoading(true);
      const res = await fetch(`/api/owner/finance?range=${range}`);
      const result = await res.json();
      setData(result);
      setLoading(false);
    };

    fetchStats();
  }, [range]);

  const chartData = [
    { name: 'Paid', value: data?.paid?.amount || 0 },
    { name: 'Unpaid', value: data?.unpaid?.amount || 0 },
  ];

  const userData = [
    { name: 'Paid Users', value: data?.paid?.users || 0 },
    { name: 'Unpaid Users', value: data?.unpaid?.users || 0 },
  ];

  return (
    <div className="p-6 space-y-6 max-w-3xl mx-auto">
      <h2 className="text-xl font-semibold text-black">Booking Status - {range}</h2>

      <select
        className="border px-3 py-2 rounded text-black"
        value={range}
        onChange={(e) => setRange(e.target.value)}
      >
        {RANGE_OPTIONS.map(opt => (
          <option key={opt} value={opt}>{opt}</option>
        ))}
      </select>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold mb-2 text-blue-700">Amount</h3>
              <PieChart width={300} height={300}>
                <Pie
                  data={chartData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                  fill="#8884d8"
                  label
                >
                  {chartData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </div>

            <div>
              <h3 className="font-semibold mb-2 text-blue-700">Users</h3>
              <PieChart width={300} height={300}>
                <Pie
                  data={userData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                  fill="#82ca9d"
                  label
                >
                  {userData.map((entry, index) => (
                    <Cell key={`cell-user-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
