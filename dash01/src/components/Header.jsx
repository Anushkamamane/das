export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-teal-700 text-white shadow-md px-8 py-4 flex justify-between items-center font-poppins">
      <div className="font-bold text-2xl text-amber-400">DonorConnect</div>
      <nav>
        <ul className="flex gap-6">
          <li><a href="/" className=" text-white hover:text-amber-300 transition-colors">Home</a></li>
          <li><a href="/about" className=" text-white hover:text-amber-300 transition-colors">About</a></li>
          <li><a href="/donate" className=" text-white hover:text-amber-300 transition-colors">Donate</a></li>
          <li><a href="/contact" className=" text-white hover:text-amber-300 transition-colors">Contact</a></li>
          <li><a href="/login" className=" text-white hover:text-amber-300 transition-colors">Login/Register</a></li>
        </ul>
      </nav>
    </header>
  );
}

