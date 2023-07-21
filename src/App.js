import { Routes, Route, BrowserRouter } from "react-router-dom";
import CajaDeBusqueda from "./pages/components/CajaDeBusqueda";
import SearchResultsPage from "./pages/SearchResultsPage";
import ProductDetailPage from "./pages/ProductDetailPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <CajaDeBusqueda />
        <Routes>
          <Route path="/items" element={<SearchResultsPage />} />
          <Route path="/items/:id" element={<ProductDetailPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

//el element es el componente que se va a renderizar cuando el usuario acceda a la ruta path determinada
//voy a tener una ruta que va a ser el search que se va a ejecutar cuando el cliente haga click en la lupa de la caja de busqueda,
//mostrandole asi el resultado de la busqueda
