import React from "react";
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
            <a
              href="#NaturePage"
              onClick={scrollToElement}
              className=" font-medium"
            >
              <li>Nature</li>
            </a>

            <li>
              <a
                href="#CarsPage"
                onClick={scrollToElement}
                className=" font-medium"
              >
                Cars
              </a>
            </li>
            <li>
              <a
                href="#SportsPage"
                onClick={scrollToElement}
                class="font-medium"
              >
                Sports
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
const scrollToElement = (e) => {
  e.preventDefault();
  const targetId = e.target.getAttribute("href").substring(1);
  const targetElement = document.getElementById(targetId);

  if (targetElement) {
    window.scrollTo({
      top: targetElement.offsetTop,
      behavior: "smooth",
    });
  }
};
export default Header;
