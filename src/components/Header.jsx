import React from "react";
import { Link } from "react-router-dom";
import Rosa from "../images/rosa.png";
function Header() {
  return (
    <header className="bg-slate-950 text-slate-100 flex flex-col justify-center items-center pb-24">
      <h1 className="mt-36 text-6xl font-bold mb-12">Mis Imágenes</h1>
      <p className="text-base font-thin flex">
        "El arte de sentirse vivo"{" "}
        <img src={Rosa} className="w-7 ml-2" alt="" />
      </p>
      <div className="mt-16">
        <nav
          class=" text-slate-100
     py-5"
        >
          <ul className="flex justify-center space-x-4 sm:space-x-8 md:space-x-12 lg:space-x-16 xl:space-x-32">
            <li>
              <Link to="">Nature</Link>
            </li>

            <li>
              <a href="Cars" class=" font-medium">
                Cars
              </a>
            </li>
            <li>
              <a href="#" class="font-medium">
                Colabs
              </a>
            </li>
            <li>
              <a href="#" class=" font-medium">
                Surf
              </a>
            </li>
            <li>
              <a href="#" class=" font-medium">
                Contacto
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
