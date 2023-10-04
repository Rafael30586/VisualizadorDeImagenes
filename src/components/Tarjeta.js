import React, { useEffect, useState } from 'react'

const Tarjeta = () => {

    const [url, setUrl] = useState("https://www.dzoom.org.es/wp-content/uploads/2017/07/seebensee-2384369-810x540.jpg");
    console.log(url);
    const [ancho, setAncho] = useState(18);
    const [propiedad, setPropiedad] = useState("brightness");
    const [valor, setValor] = useState(100);
    const [input, setInput] = useState({});
    const [imagen,setImagen] = useState({});

    useEffect(()=>{
        setPropiedad("brightness");
        setValor(100);
        setAncho(18);
        setInput(document.getElementById("inputHeader"));
        setImagen(document.getElementById("imagen"));
    },[url]);

  return (
      <div className="container mt-1" id="contenedor">
          <header className="p-3 text-bg-dark">
              <div className="container">
                  <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                      <div className="text-strat">
                          <button type="button" className="btn btn-outline-light me-2" onClick={()=>setAncho(ancho+5)}>Agrandar</button>
                          <button type="button" className="btn btn-outline-light me-2" onClick={()=>setAncho(ancho-5)}>Achicar</button>
                          <button type="button" className="btn btn-info me-2" onClick={()=>setPropiedad("brightness")}>Brillo</button>
                          <button type="button" className="btn btn-info me-2" onClick={()=>setPropiedad("grayscale")}>Grises</button>
                          <button type="button" className="btn btn-info me-2" onClick={()=>setPropiedad("sepia")}>Sepia</button>
                          <button type="button" className="btn btn-warning me-2" onClick={()=>setValor(valor+5)}>+</button>
                          <button type="button" className="btn btn-warning me-2" onClick={()=>setValor(valor-5)}>-</button>
                      </div>
                      <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                          
                      </ul>

                      <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
                          <input type="text" className="form-control form-control-dark text-bg-dark" placeholder="Search..." aria-label="Search" id="inputHeader"></input>
                      </form>

                      <div className="text-end">
                          <button type="button" className="btn btn-outline-light me-2" onClick={() => setUrl(input.value)}>Cargar imagen</button>
                          <button type="button" className="btn btn-outline-warning">Tema</button>
                      </div>
                  </div>
              </div>
          </header>
          <div className="card p-1" style={{width: ancho + 'em'}}>
              <img src={url} className="card-img-top" id="imagen" alt="Foto" style={{filter: `${propiedad}(${valor}%)`}}></img>
              <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
          </div>
      </div>
  )
}

export default Tarjeta
