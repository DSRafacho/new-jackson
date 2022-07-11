import { Link } from "react-router-dom";

const Navbar = () => (
    <div>
        <nav className="bg-j-yellow px-2 sm:px-4 py-2.5 sticky top-0 z-50">
            <div className="container flex flex-wrap justify-between items-center mx-auto">
                <Link to="/" className="flex">
                    <span className="self-center big:text-5xl xsm:text-3xl md:text-5xl font-bonheur whitespace-nowrap">Jackson's Barber</span>
                </Link>

                <br />

                <button data-collapse-toggle="mobile-menu" type="button" className="inline-flex items-end w-full text-sm rounded-lg md:hidden mt-2 outline-none" aria-controls="mobile-menu-2" aria-expanded="false">
                    <Link to="/agende-um-horario/" className="block outline-none py-2 pr-4 pl-3 text-j-black md:border-0 xsm:text-md md:p-0 hover:text-j-black4">Agende um horário</Link>
                    <Link to="/dia-do-noivo/" className="block outline-none py-2 pr-4 pl-3 text-j-black md:border-0 xsm:text-md md:p-0 hover:text-j-black4">Dia do noivo</Link>
                    <a className="mb-1" href="https://api.whatsapp.com/send?phone=5531986414937&text=Ol%C3%A1%20gostaria%20de%20agendar%20um%20hor%C3%A1rio%3F" target="_blank"><i className="bi bi-whatsapp text-j-black7 cursor-pointer text-2xl" /> </a>
                </button>

                <div className="hidden w-full md:block md:w-auto" id="mobile-menu">
                    <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:font-bonheur">
                        <li>
                            <Link to="/dia-do-noivo/" className="block py-2 big:text-lg md:text-xl pr-4 pl-3 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 text-j-black7 hover:text-j-black4 font-medium md:p-0 md:hover:bg-transparent border-gray-700">Dia dos Noivos</Link>
                        </li>
                        <li>
                            <Link to="/agende-um-horario/" className="block py-2 big:text-lg md:text-xl pr-4 pl-3 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 text-j-black7 hover:text-j-black4 font-medium md:p-0 md:hover:bg-transparent border-gray-700">Agende um horário</Link>
                        </li>
                        <li>
                            <a href="https://api.whatsapp.com/send?phone=5531986414937&text=Ol%C3%A1%20gostaria%20de%20agendar%20um%20hor%C3%A1rio%3F" target="_blank"><i className="bi bi-whatsapp text-j-black7 cursor-pointer text-2xl"></i></a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    </div>
)

export default Navbar