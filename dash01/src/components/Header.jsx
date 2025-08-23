export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black text-white shadow-md px-8 py-4 flex justify-between items-center">
      <div className="font-bold text-2xl">DonorConnect</div>
      <nav>
        <ul className="flex gap-6">
          <li><a href="/" className="hover:underline">Home</a></li>
          <li><a href="/about" className="hover:underline">About</a></li>
          <li><a href="/students" className="hover:underline">Students</a></li>
          <li><a href="/donate" className="hover:underline">Donate</a></li>
          <li><a href="/contact" className="hover:underline">Contact</a></li>
          <li><a href="/login" className="hover:underline">Login/Register</a></li>
        </ul>
      </nav>
    </header>
  );
}
