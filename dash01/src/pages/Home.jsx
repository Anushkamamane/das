import Header from '../components/Header';
import Footer from '../components/Footer';
import StudentCard from '../components/StudentCard';

const students = [
  { name: "Anaya Singh", age: 16, school: "Delhi High School", need: "$200" },
  { name: "Rohan Mehta", age: 17, school: "Mumbai Public School", need: "$300" },
  { name: "Sara Khan", age: 15, school: "Pune Academy", need: "$150" }
];

export default function Home() {
  const steps = [
    {
      title: "1. Students Apply",
      desc: "Students submit their funding requests with details of their educational needs.",
    },
    {
      title: "2. Donors Contribute",
      desc: "Donors choose students and make secure contributions online.",
    },
    {
      title: "3. Admin Verifies",
      desc: "Admins verify transactions and ensure funds reach the right students.",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen w-full bg-teal-50">
      <Header />

      {/* Hero */}
      <section className="flex flex-col md:flex-row items-center justify-between w-full bg-gradient-to-r from-teal-100 to-teal-200 py-20 px-8 md:px-16">
        <div className="flex-1 flex flex-col space-y-6 text-left md:text-left">
          <h1 className="text-5xl md:text-6xl font-bold text-teal-900 leading-tight">
            Empower Students, Change Lives
          </h1>
          <p className="text-xl md:text-2xl text-teal-700 max-w-xl">
            Connect donors with students in need of educational funding. Make a difference today!
          </p>
          <a
            href="/donate"
            className="bg-teal-600 hover:bg-teal-700 text-white font-semibold px-8 py-4 rounded-xl shadow-lg transition-transform transform hover:scale-105 w-max"
          >
            Donate Now
          </a>
        </div>
        <div className="flex-1 flex justify-center md:justify-end mt-12 md:mt-0">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTqWWL_juS98qG7CLlQ4VoyDKdAnwRiPyUDQ&s"
            alt="Students"
            className="w-full max-w-md rounded-3xl shadow-2xl"
          />
        </div>
      </section>

      {/* How it works */}
      <section className="w-full px-8 md:px-16 py-16 text-center bg-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-teal-900">How It Works</h2>
        <div className="flex flex-wrap justify-center gap-8">
          {steps.map((step) => (
            <div
              key={step.title}
              className="bg-teal-50 p-8 rounded-2xl w-64 shadow-md hover:shadow-xl transition transform hover:-translate-y-2"
            >
              <h3 className="font-semibold text-xl mb-3 text-teal-800">{step.title}</h3>
              <p className="text-teal-700">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Students in Need */}
      <section className="w-full px-8 md:px-16 py-16 bg-teal-100 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-teal-900">Students in Need</h2>
        <div className="flex flex-wrap justify-center gap-8">
          {students.map((student) => (
            <StudentCard
              key={student.name}
              student={student}
              className="hover:scale-105 transition-transform transform"
            />
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
