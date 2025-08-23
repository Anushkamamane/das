import Header from '../components/Header';
import Footer from '../components/Footer';

const donations = [
  { student: "Anaya Singh", donor: "Ramesh Kumar", amount: "$200", date: "2025-08-22" },
  { student: "Rohan Mehta", donor: "Priya Sharma", amount: "$150", date: "2025-08-21" }
];

export default function AdminDashboard() {
  return (
    <div className="flex flex-col min-h-screen w-full bg-gray-50">
      <Header />
      <main className="flex-grow w-full max-w-7xl mx-auto px-8 py-12">
        <h1 className="text-4xl font-bold mb-8 text-gray-900">Admin Dashboard</h1>

        <section className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-x-auto p-6">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">All Donations</h2>

          <table className="min-w-full divide-y divide-gray-300">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-bold text-gray-700 uppercase tracking-wide">Student</th>
                <th className="px-6 py-3 text-left text-sm font-bold text-gray-700 uppercase tracking-wide">Donor</th>
                <th className="px-6 py-3 text-left text-sm font-bold text-gray-700 uppercase tracking-wide">Amount</th>
                <th className="px-6 py-3 text-left text-sm font-bold text-gray-700 uppercase tracking-wide">Date</th>
              </tr>
            </thead>

            <tbody className="bg-white divide-y divide-gray-200">
              {donations.map((d, idx) => (
                <tr key={idx} className="hover:bg-teal-50 transition-colors cursor-pointer">
                  <td className="px-6 py-4 text-gray-900">{d.student}</td>
                  <td className="px-6 py-4 text-gray-800">{d.donor}</td>
                  <td className="px-6 py-4 text-teal-600 font-semibold">{d.amount}</td>
                  <td className="px-6 py-4 text-gray-600">{d.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </main>
      <Footer />
    </div>
  );
}
