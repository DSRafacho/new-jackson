import Jackson from "../imagens/jackson.jpg";

import Haircut1 from "../imagens/haircut-1.jpg";
import Haircut2 from "../imagens/haircut-2.jpg";
import Haircut3 from "../imagens/haircut-3.jpg";
import Haircut4 from "../imagens/haircut-4.jpg";
import Haircut5 from "../imagens/haircut-5.jpg";
import Haircut6 from "../imagens/haircut-6.jpg";
import Haircut8 from "../imagens/haircut-8.jpg";
import Haircut9 from "../imagens/haircut-9.jpg";
import Haircut10 from "../imagens/haircut-10.jpg";
import Haircut11 from "../imagens/haircut-11.jpg";
import Haircut12 from "../imagens/haircut-12.jpg";
import Haircut13 from "../imagens/haircut-13.jpg";
import Haircut14 from "../imagens/haircut-14.jpg";
import Haircut15 from "../imagens/haircut-15.jpg";
import Footer from "../componentes/Footer";

const Home = () => (
    <div>
        <div id="content" className="w-full h-full text-j-white text overflow-hidden">

            <div style={{"opacity": "0.78"}} className="w-full bg-center bg-barber bg-no-repeat xsm:h-[42em] h-[42em] h-[42em] text-center flex flex-col justify-center">
                <h1 style={{"opacity": "100!important", "zIndex": "9000"}} className="xsm:text-4xl text-j-black bg-j-yellow md:text-7xl lg:text-8xl font-thin font-bonheur text-j-white">Jackson 8 BarberShop</h1>
            </div>

            <div className="first-content md:p-5 xsm:p-6 md:mb-0">
                <div className="text-j-white xsm:flex xsm:flex-col xsm:w-full xsm:h-fit md:h-fit lg:flex-row">

                    <div className="xsm:w-full big:w-2/5 flex justify-center">
                        <img className="rounded xsm:h-96 xsm:w-64 md:h-[489px] md:w-[359px] lg:h-[689px] lg:w-[449px] big:h-[689px] big:w-[449px] xsm:mb-4" src={Jackson} />
                    </div>

                    <div className="xsm:w-full big:w-3/5 md:ml-6 xsm:mb-7">
                        <span className="big:text-7xl xsm:text-6xl md:text-5xl text-j-white font-thin mt-12 block font-montserrat">Jackson Fonseca Rocha, </span>
                        <br />
                        <br />
                        <span className="bg-j-white text-j-black big:text-7xl md:text-5xl xsm:text-5xl rounded p-1 mt-5 font-montserrat">o barbeiro</span>

                        <p className="mt-12">
                            Jackson tem 28 anos, é casado a (X) anos e tenho 3 filhas, sou técnico em visagismo
                            de corte, formado pela <a className="font-bold" target="_blank" href="https://barberdayacademy.com/">BarberDay Academy</a>,
                            sou barbeiro a 8 anos e gostaria de contar um pouco da minha história.
                        </p>

                        <br />

                        <p>
                            Aos 3 anos minha mãe foi assasinada e meu pai não realizou o meu registro, o que me impediu de ter um núcleo
                            famíliar e uma boa influência em minha vida. Logo, com o passar dos anos, acabei me envolvendo com o tráfico de
                            drogas, virei a ser morador de rua por alguns meses. Mas mesmo depois de ter passado pelo pior, eu tive um
                            encontro com Jesus e aos poucos ele foi mudando a minha vida pra melhor e uma das formas das quais ele fez isso
                            foi através da minha profissão como barbeiro.
                        </p>

                        <br />

                        <p>
                            Através desse emprego, Deus me transformou completamente minha história, a minha vida, a vida da minha
                            família, a forma como o vejo e encaro o mundo, foi de longe, foi a melhor mudança que ocorreu na minha vida.
                        </p>

                        <br />

                        <p>
                            Já cheguei a contar a minha história em uma live do
                            <a href="https://www.instagram.com/paulovcoach/?hl=pt" className="font-thin">Paulo Vieira</a> e no momento
                            estou escrevendo um livro chamado <b>"Contrariando Estatísticas"</b> onde conto com mais detalhes a minha história.
                        </p>

                        <br />

                    </div>

                </div>
            </div>

            <div className="second-content bg-j-black2 xsm:p-6">

                <div className="flex text-j-white xsm:flex-col xsm:w-full xsm:h-full md:flex-row md:h-fit big:place-content-between">

                    <div className="text-left basis-1/2 md:mr-6 xsm:mb-9">
                        <div className="text-4xl text-j-white font-thin font-dancing-script title-decoration">Mais do que uma barbearia, uma experiência única</div>
                        <div>
                            <p className="mt-8">
                                Na nossa barbearia tratamos o cliente da verdadeira maneira como ele deve ser tratado. Oferecemos como
                                cortesia café, alguns tipos de sucos, jogos e brinquedos para as crianças mais novas.
                            </p>

                            <br />

                            <p>
                                Além disso, disponibilizamos diversos serviços, dentre eles: corte, barba, platinagem, luzes, entre  outros.
                                Também possuímos um tratamento único, exlusivo e preferencial com crianças
                            </p>
                        </div>
                    </div>

                    <div className="basis-1/2 md:mt-20 lg:mt-0">

                        <marquee loops="99" behavior="scroll" scrollamount="5" direction="left">
                            <div className="flex gap-12">
                                <img className="rounded-lg xsm:h-32 xsm:w-full md:h-64 md:w-72 mb-5" src={Haircut1} />
                                <img className="rounded-lg xsm:h-32 xsm:w-full md:h-64 md:w-72 mb-5" src={Haircut2} />
                                <img className="rounded-lg xsm:h-32 xsm:w-full md:h-64 md:w-72 mb-5" src={Haircut3} />
                                <img className="rounded-lg xsm:h-32 xsm:w-full md:h-64 md:w-72 mb-5" src={Haircut4} />
                                <img className="rounded-lg xsm:h-32 xsm:w-full md:h-64 md:w-72 mb-5" src={Haircut5} />
                                <img className="rounded-lg xsm:h-32 xsm:w-full md:h-64 md:w-72 mb-5" src={Haircut6} />
                                <img className="rounded-lg xsm:h-32 xsm:w-full md:h-64 md:w-72 mb-5" src={Haircut8} />
                                <img className="rounded-lg xsm:h-32 xsm:w-full md:h-64 md:w-72 mb-5" src={Haircut9} />
                                <img className="rounded-lg xsm:h-32 xsm:w-full md:h-64 md:w-72 mb-5" src={Haircut10} />
                                <img className="rounded-lg xsm:h-32 xsm:w-full md:h-64 md:w-72 mb-5" src={Haircut11} />
                                <img className="rounded-lg xsm:h-32 xsm:w-full md:h-64 md:w-72 mb-5" src={Haircut12} />
                                <img className="rounded-lg xsm:h-32 xsm:w-full md:h-64 md:w-72 mb-5" src={Haircut13} />
                                <img className="rounded-lg xsm:h-32 xsm:w-full md:h-64 md:w-72 mb-5" src={Haircut14} />
                                <img className="rounded-lg xsm:h-32 xsm:w-full md:h-64 md:w-72 mb-5" src={Haircut15} />
                            </div>
                        </marquee>

                    </div>

                </div>

            </div>


        </div>

      <Footer />

    </div>
)

export default Home