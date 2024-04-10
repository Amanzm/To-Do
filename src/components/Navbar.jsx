import React from "react";

export default function Navbar() {
  return (
    <nav className="flex justify-between bg-violet-400 text-white py-3">
      <div className="logo">
        <span className="font-mono text-xl mx-8">Azmy's</span>
      </div>
      <ul className="flex gap-8 mx-9">
        <li className="font-mono cursor-pointer hover:font-semibold transition-all">
          Home
        </li>
        <li className="font-mono cursor-pointer hover:font-semibold transition-all">
          Your Tasks
        </li>
      </ul>
    </nav>
  );
}
