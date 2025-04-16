export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-md p-4 z-50">
      <ul className="flex justify-center space-x-6">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
}
