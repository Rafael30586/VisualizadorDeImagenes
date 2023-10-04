import React, { useEffect, useState } from 'react'

const Tarjeta = () => {

    const [url, setUrl] = useState("https://www.dzoom.org.es/wp-content/uploads/2017/07/seebensee-2384369-810x540.jpg");
    console.log(url);
    const [ancho, setAncho] = useState(18);
    const [propiedad, setPropiedad] = useState("brightness");
    const [valor, setValor] = useState(100);
    const [input, setInput] = useState({});
    const [imagen,setImagen] = useState({});
    const [propiedadTitulo, setPropiedadTitulo] = useState("Brillo: ");

    function agrandar(){
        setAncho(ancho+5);
    }

    function achicar(){
        setAncho(ancho-5);
    }

    function modificarBrillo(){
        setPropiedad("brightness");
        setPropiedadTitulo("Brillo: ");
        setValor(100);
    }

    function modificarGrises(){
        setPropiedad("grayscale");
        setPropiedadTitulo("Grises: ");
        setValor(75);
    }

    function modificarSepia(){
        setPropiedad("sepia");
        setPropiedadTitulo("Sepia: ");
        setValor(75);
    }

    function aumentar(){
        setValor(valor+5);
    }

    function disminuir(){
        setValor(valor-5);
    }

    useEffect(()=>{
        setPropiedad("brightness");
        setPropiedadTitulo("Brillo: ");
        setValor(100);
        setAncho(18);
        setInput(document.getElementById("inputHeader"));
        setImagen(document.getElementById("imagen"));
    },[url]);

  return (
      <div className="container mt-1" id="contenedor">
          <header className="p-3 text-bg-dark sticky-top">
              <div className="container">
                  <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                      <div className="text-strat">
                          <button type="button" className="btn btn-info me-2" onClick={agrandar}>Agrandar</button>
                          <button type="button" className="btn btn-info me-2" onClick={achicar}>Achicar</button>
                          <button type="button" className="btn btn-warning me-2" onClick={modificarBrillo}>Brillo</button>
                          <button type="button" className="btn btn-warning me-2" onClick={modificarGrises}>Grises</button>
                          <button type="button" className="btn btn-warning me-2" onClick={modificarSepia}>Sepia</button>
                          <button type="button" className="btn btn-warning me-2" onClick={aumentar}>+</button>
                          <button type="button" className="btn btn-warning me-2" onClick={disminuir}>-</button>
                      </div>
                      <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                          
                      </ul>

                      <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
                          <input type="text" className="form-control form-control-dark text-bg-dark" placeholder="Search..." aria-label="Search" id="inputHeader"></input>
                      </form>

                      <div className="text-end">
                          <button type="button" className="btn btn-success me-2" onClick={() => setUrl(input.value)}>Cargar imagen</button>
                          <button type="button" className="btn btn-light">Tema</button>
                      </div>
                  </div>
              </div>
          </header>
          <div className="card p-1" style={{width: ancho + 'em'}}>
              <img src={url} className="card-img-top" id="imagen" alt="Foto" style={{filter: `${propiedad}(${valor}%)`}}></img>
              <div className="card-body">
                  <h5 className="card-title">{propiedadTitulo}{valor}</h5>
              </div>
          </div>
      </div>
  )
}

export default Tarjeta
