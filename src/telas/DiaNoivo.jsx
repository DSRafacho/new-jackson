import Footer from "../componentes/Footer"
import Navbar from "../componentes/Navbar"

const DiaNoivo = () => (
    <div>
        <Navbar />
        <div className="w-full font-bonheur h-screen bg-cover bg-groomday bg-no-repeat xsm:bg-center overflow-hidden">
            <div style={{"background": "rgba(2, 0, 0, .5)!important"}} className="xsm:pt-12 h-full">

                <div className="w-full flex justify-start px-12">
                    <h1 className="text-7xl xsm:text-5xl title-decoration text-j-white font-extrabold font-bonheur">Dia do noivo</h1>
                </div>

                <div className="text-j-white font-thin text-4xl xsm:text-3xl p-5 mt-5">
                    <p className="m-5">
                        Jackson 8 BarberShop também oferece serviços para o dia do noivo.
                    </p>

                    <p className="m-5">
                        Entre em contato e marque agende conosco um horário para uma experiência totalmente única e personalizada.
                    </p>
                </div>

                <div className="w-full flex justify-center">
                    <div className="flex gap-10 border-2 border-j-yellow border-solid rounded px-5 py-3 pt-5 divide-j-yellow divide-x-2">
                        <a href="https://api.whatsapp.com/send?phone=5531986414937&text=Ol%C3%A1%20gostaria%20de%20agendar%20um%20hor%C3%A1rio%3F" target="_blank"><i className="bi bi-whatsapp text-j-yellow cursor-pointer text-5xl"></i></a>
                        <a href="https://instagram.com/jacksonbarber_shop_oficial?utm_medium=copy_link" target="_blank" className="pl-10"><i className="bi text-j-yellow cursor-pointer text-5xl bi-instagram"></i></a>
                    </div>
                </div>

            </div>

        </div>



    </div>
)

export default DiaNoivo