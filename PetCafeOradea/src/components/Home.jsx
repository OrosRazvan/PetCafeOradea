import Banner from "./Banner";
import { IoRemoveOutline } from "react-icons/io5";
// import { MdOutlineKeyboardArrowRight } from "react-icons/md";
// import imageHome from "../assets/photos/ash.jpeg";
import Footer from "./Footer";
import { Animals } from "../constants/AnimalsHomePage.jsx";
import { Link } from "react-router-dom";
import Navbar from "./Navbar.jsx";

function Home() {
  return (
    <div className="md:ml-[25%] lg:ml-[25%] xl:ml-[20%] h-full">
      <div className="bg-[#FFF8EA]">
        <Banner />

        {/* Despre noi component */}
        <div className="mt-20 mx-6 md:mt-16 lg:mt-20 lg:ml-20 z-50">
          <div className="flex flex-col items-center md:items-center">
            <div className="flex flex-col items-center justify-center md:justify-items-center xl:-ml-16 lg:-ml-14">
              <h1 className="text-4xl md:text-4xl font-bold text-[#633404] text-center ">
                Despre noi
              </h1>

              {/* Linia responsive sub titlu */}
              <div className="mt-2 md:mt-1 lg:mt-1">
                <IoRemoveOutline className="text-[#EF7F00] text-6xl md:text-7xl lg:text-8xl -mt-8 md:-mt-6 lg:-mt-10" />
              </div>
            </div>
          </div>
          <h2
            className="text-justify leading-relaxed md:leading-relaxed lg:leading-9 md:ml-6 lg:-ml-5 
          md:mr-6 lg:mr-8 xl:mr-8 text-lg md:text-3xl lg:text-2xl text-[#633404] font-medium "
          >
            În inima Oradei, Pet Cafe Oradea este o oază de liniște și bucurie
            pentru iubitorii de animale și cafea. Aici, într-o atmosferă caldă
            și primitoare, te poți relaxa savurând o cafea aromată, în timp ce
            te joci cu prietenii blănoși ai cafenelei. Decorul cozy și
            personalul prietenos te fac să te simți ca acasă, iar compania
            pisicilor și câinilor adaugă o notă de veselie și confort fiecărui
            moment petrecut aici.
          </h2>

          {/* Realizarea butonului */}
          <div className="flex justify-center items-center">
            <Link to="/contact">
              <button
                className="flex flex-row mt-10 bg-[#EF7F00] items-center justify-center p-4 rounded-full 
              border-4 border-white pl-6 pr-5 pt-3 pb-3 md:pl-10 md:pr-8 text-lg md:text-xl xl:-ml-16 lg:-ml-[60px] text-white font-bold 
              transition-all duration-300 ease-in-out transform hover:bg-[#D96E00] hover:scale-105"
                style={{ boxShadow: "4px 4px 15px rgba(0, 0, 0, 0.7)" }}
              >
                Mai multe &gt;
              </button>
            </Link>
          </div>
        </div>

        {/* Animalutele noastre component */}
        <div
          className="mt-14 mx-6 md:mt-16 lg:mt-32 bg-gradient-to-b from-[#FFF8EA] via-[#EF7F00] to-[#EF7F00] p-10 rounded-lg shadow-lg"
          style={{ boxShadow: "2px 8px 25px rgba(0, 0, 0, 0.5)" }}
        >
          <div className="flex flex-col items-center md:items-center">
            <div className="flex flex-col items-center justify-center md:justify-items-center">
              <h1 className="text-4xl md:text-4xl font-bold text-[#633404] text-center">
                Animăluțele Noastre
              </h1>

              {/* Linia responsive sub titlu */}
              <div className="mt-2 md:mt-1 lg:mt-1">
                <IoRemoveOutline className="text-[#EF7F00] text-6xl md:text-7xl lg:text-8xl -mt-8 md:-mt-6 lg:-mt-10" />
              </div>
            </div>

            {/* Afisarea animalelor pe rand care au fost salvate intr-o constanta */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-x-24 md:gap-x-16 lg:gap-x-28 xl:gap-x-16 gap-y-8 md:gap-y-12 justify-items-center mx-auto mt-10 max-w-screen-xl px-4 lg:px-8">
              {Animals.map((animal, index) => (
                <Link to={`/animal/${animal?.denumire?.toLowerCase() || ''}`} key={index}>
                  <div key={index} className="flex flex-col items-center group">
                    <div
                      className="relative w-32 h-32 lg:w-48 lg:h-48 rounded-full overflow-hidden 
                    transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 
                    group-hover:shadow-2xl group-hover:shadow-[#FFF8EA]"
                    >
                      <img
                        src={animal.imagine}
                        alt={animal.denumire}
                        className="w-full h-full object-cover rounded-full transition-transform 
                        duration-700 ease-out group-hover:scale-125 group-hover:rotate-6"
                      />
                    </div>
                    <h2
                      className="mt-2 mb-6 text-xl lg:text-2xl font-semibold transition-transform 
                    duration-300 ease-in-out group-hover:scale-110 group-hover:text-[#633404]"
                    >
                      {animal.denumire}
                    </h2>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Butonul de Galerie */}
        <div className="flex justify-center items-center">
          <Link to="/galerie">
            <button
              className="flex flex-row mx-auto -my-8 bg-[#EF7F00] items-center justify-center p-4 
              rounded-full border-4 border-white pt-3 pb-3 md:pl-8 md:pr-8 text-lg md:text-xl text-white font-bold 
              transition-all duration-300 ease-in-out transform hover:bg-[#D96E00] hover:scale-105"
              style={{ boxShadow: "4px 4px 15px rgba(0, 0, 0, 0.7)" }}
            >
              Galerie &gt;
            </button>
          </Link>
        </div>

        {/* Regulament component */}
        <div className="mt-24 mx-6 md:mt-32 lg:mt-32">
          <div className="flex flex-col items-center md:items-center md:ml-6 xl:ml-24">
            <div className="flex flex-col items-center justify-center xl:-ml-24 lg:-ml-6">
              <h1 className="text-4xl md:text-4xl font-bold text-[#633404] text-center">
                Regulament
              </h1>

              {/* Linia responsive sub titlu */}
              <div className="mt-2 md:mt-1 lg:mt-1">
                <IoRemoveOutline className="text-[#EF7F00] text-6xl md:text-7xl lg:text-8xl -mt-8 md:-mt-6 lg:-mt-10" />
              </div>
            </div>
            <ul
              className="flex flex-col gap-6 mt-6 mb-20 text-[#633404] list-inside text-justify md:mr-6 lg:mr-10 lg:ml-6
            xl:mr-10 xl:-ml-14 text-lg md:text-3xl lg:text-2xl leading-7 md:leading-relaxed lg:leading-10 sm:leading-6 list-none"
            >
              <li>
                <strong>Respectați animalele:</strong> Nu forțați animalele să
                interacționeze dacă ele nu doresc. Respectați semnalele de stres
                sau disconfort.
              </li>
              <li>
                <strong>Nu hrăniți:</strong> Nu oferiți hrană animalelor fără
                permisiunea personalului. Unele alimente pot fi dăunătoare
                pentru animale.
              </li>
              <li>
                <strong>Încălțați:</strong> Nu stați pe canapele sau fotolii cu
                încălțăminte murdară.
              </li>
              <li>
                <strong>Spălați-vă pe mâini:</strong> După interacțiunea cu
                animalele, vă rugăm să folosiți dezinfectantul pentru mâini
                disponibil la intrare.
              </li>
              <li>
                <strong>Curățenie:</strong> Orice accident (de exemplu, de la
                animale) trebuie raportat imediat personalului pentru a fi
                curățat corespunzător.
              </li>
              <li>
                <strong>Respectați liniștea:</strong> Nu faceți zgomote excesive
                care ar putea speria animalele sau deranja alți clienți.
              </li>
            </ul>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
}

export default Home;
