import { useLocation } from "react-router-dom";
import Navbar from "../ui/navbar";
import { CarouselDemo } from "../features/Carousel";
import Footer from "../ui/footer";

function Prueba() {
    const location = useLocation();
    const { title, category, src } = location.state || {};

    return (
        <div className="min-h-screen flex flex-col " style={{background:"#f6f4f0"}} >
            {/* Navbar fijo */}
            <div className="fixed top-0 left-0 right-0 z-50">
                <Navbar />
            </div>

            {/* Contenido principal */}
            <main className="flex-1 mt-32 px-4">
                <div className="flex flex-col items-center">
                    {/* Sección del título */}
                    <header className="text-center mb-8">
                        <h1 className="font-Montserrat-semi-bold text-5xl mb-2">
                            {title}
                        </h1>
                        <div className="h-0.5 w-16 bg-gray-300 mx-auto"></div>
                    </header>

                    {/* Sección del contenido */}
                    <section className="w-full max-w-5xl font-Montserrat-semi-bold">
                        {/* Breadcrumb */}
                        <nav className="mb-4">
                            <p className="text-gray-600">
                                Proyectos / {title}
                            </p>
                        </nav>

                        {/* Carrusel */}
                        <div className="mb-4">
                            <CarouselDemo card={title} />
                        </div>

                        {/* Información de ubicación */}
                        <div className="mb-8">
                            <p className="text-gray-600">
                                UBICACIÓN / {title}
                            </p>
                        </div>
                    </section>
                </div>
            </main>

            {/* Footer */}
            <Footer />
        </div>
    );
}

export default Prueba;