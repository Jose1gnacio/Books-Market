import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { BackendURL } from "./component/backendURL";


import { Home } from "./pages/home";
/* REGISTROS */
import Login from "./component/login/Login";
import Register from "./pages/register";
import RegisterBook from "./pages/registerBook";

/* CATEGORIAS */
import { AllBooks } from "./pages/allBooks";
import { BookDetails } from "./pages/bookDetails";
import { MasVendidos } from "./pages/masVendidos";
import { LibrosIntercambio } from "./pages/librosIntercambio";
import { DonacionesRealizadas } from "./pages/donacionesRalizadas";
import Card from "./component/reviewsLibros/Card";
import Testimonio from "./component/reviewsLibros/Testimonio";
import BookReviews from "./pages/BookReviews";

import Intercambio from "./pages/Intercambio";

import PurchasedBooks from "./pages/purchasedBooks";


import { Profile } from "./pages/profile";

import Enviar_formulario from "./pages/enviar_formulario";



/* FOOTERS */
import { GuiaCompra } from "./pages/guiaCompra";
import { MetodoPago } from "./pages/metodoPago";
import { MetodoEnvio } from "./pages/metodoEnvio";
import { SobreNosotros } from "./pages/sobreNosotros";
import { NuestraHistoria } from "./pages/nuestraHistoria";
import { ComoDonar } from "./pages/comoDonar";
import injectContext from "./store/appContext";
import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";




//create your first component
const Layout = () => {
    //the basename is used when your project is published in a subdirectory and not in the root of the domain
    // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
    const basename = process.env.BASENAME || "";
    const [useAlternateNavbar, setUseAlternateNavbar] = useState(false); // Estado para controlar el Navbar alternativo

    if (!process.env.BACKEND_URL || process.env.BACKEND_URL == "") return <BackendURL />;

    return (
        <div>
            <BrowserRouter basename={basename}>
                <ScrollToTop>
                    <Navbar />
                    <Routes>
                        <Route element={<Home />} path="/" />
                        <Route element={<AllBooks />} path="/allBooks" />
                        <Route element={<BookDetails />} path="/allBooks/bookDetails/:id" />
                        <Route element={<MasVendidos />} path="/masVendidos" />
                        <Route element={<LibrosIntercambio />} path="/librosIntercambio" />
                        <Route element={<GuiaCompra />} path="/guiaCompra" />
                        <Route element={<MetodoPago />} path="/metodoPago" />
                        <Route element={<MetodoEnvio />} path="/metodoEnvio" />
                        <Route element={<SobreNosotros />} path="/sobreNosotros" />
                        <Route element={<NuestraHistoria />} path="/nuestraHistoria" />
                        <Route element={<DonacionesRealizadas />} path="/donacionesRalizadas" />
                        <Route element={<ComoDonar />} path="/comoDonar" />
                        <Route element={<BookReviews />} path="/bookreviews" />
                        <Route element={<Login />} path="/login" />
                        <Route element={<Intercambio />} path="/intercambio" /> 
                        <Route element={<Register />} path="/register" />                        
                        <Route element={<RegisterBook />} path="/registerBook" />
                        <Route element={<PurchasedBooks />} path="/purchasedBooks" />
                        
                        <Route element={<Profile />} path="/profile" />
                        <Route element={<Enviar_formulario />} path="/enviar_formulario" />                         
                        <Route element={<h1>Not found!</h1>} />
                    </Routes>
                    <Footer />
                </ScrollToTop>
            </BrowserRouter>
        </div>
    );
};

export default injectContext(Layout);


