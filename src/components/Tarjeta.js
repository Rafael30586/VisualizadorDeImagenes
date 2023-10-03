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
        setInput(document.getElementById("inputFoto"));
        setImagen(document.getElementById("imagen"));
    },[url]);

  return (
      <div className="container mt-4" id="contenedor">
          <header className="p-3 text-bg-dark">
              <div className="container">
                  <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                      

                      <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                          <li><a href="#" className="nav-link px-2 text-secondary">Home</a></li>
                          <li><a href="#" className="nav-link px-2 text-white" onClick={()=>setAncho(ancho+5)}>Agrandar</a></li>
                          <li><a href="#" className="nav-link px-2 text-white" onClick={()=>setAncho(ancho-5)}>Achicar</a></li>
                          <li onClick={()=>setPropiedad("brightness")}><a href="#" className="nav-link px-2 text-white">Brillo</a></li>
                          <li onClick={()=>setPropiedad("grayscale")}><a href="#" className="nav-link px-2 text-white">Grises</a></li>
                          <li onClick={()=>setPropiedad("sepia")}><a href="#" className="nav-link px-2 text-white">Sepia</a></li>
                          <li onClick={()=>setValor(valor+5)}><a href="#" className="nav-link px-2 text-white">+</a></li>
                          <li onClick={()=>setValor(valor-5)}><a href="#" className="nav-link px-2 text-white">-</a></li>
                      </ul>

                      <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
                          <input type="search" className="form-control form-control-dark text-bg-dark" placeholder="Search..." aria-label="Search" id="inputHeader"></input>
                      </form>

                      <div className="text-end">
                          <button type="button" className="btn btn-outline-light me-2" onClick={() => setUrl(input.value)}>Cargar imagen</button>
                          <button type="button" className="btn btn-warning">Tema</button>
                      </div>
                  </div>
              </div>
          </header>
          <div className="card p-1" style={{width: ancho + 'em'}}>
              <img src={url} className="card-img-top" id="imagen" alt="Foto" style={{filter: `${propiedad}(${valor}%)`}}></img>
              <div className="card-body">
                  <input type='text' id="inputFoto" className="mx-auto"></input>
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <div className="btn-group" role="group" aria-label="Basic example">
                      <button type="button" className="btn btn-success" onClick={() => setUrl(input.value)}>Cargar imagen</button>
                      <button type="button" className="btn btn-danger">Tema</button>
                  </div> 
              </div>
          </div>
          <div id="botones" className="mx-auto">
              <div className="btn-group" role="group" aria-label="Basic example">
                  <button type="button" className="btn btn-primary" onClick={()=>setAncho(ancho+5)}>Agrandar</button>
                  <button type="button" className="btn btn-primary" onClick={()=>setAncho(ancho-5)}>Achicar</button>
              </div>

              <div className="btn-group form-check" role="group" aria-label="Basic radio toggle button group">
                  <input type="radio" className="btn-check form-check-input" name="btnradio" id="btnradio1" autocomplete="off" onFocus={()=>setPropiedad("brightness")}></input>
                  <label className="btn btn-outline-primary form-check-label" for="btnradio1">Brillo</label>

                  <input type="radio" className="btn-check form-check-input" name="btnradio" id="btnradio2" autocomplete="off" onFocus={()=>setPropiedad("grayscale")}></input>
                  <label className="btn btn-outline-primary form-check-label" for="btnradio2">Grises</label>

                  <input type="radio" className="btn-check form-check-input" name="btnradio" id="btnradio3" autocomplete="off" onFocus={()=>setPropiedad("sepia")}></input>
                  <label className="btn btn-outline-primary form-check-label" for="btnradio3">Sepia</label>
              </div>

              <div className="btn-group" role="group" aria-label="Basic example">
                  <button type="button" className="btn btn-primary" onClick={()=>setValor(valor+5)}>+</button>
                  <button type="button" className="btn btn-primary" onClick={()=>setValor(valor-5)}>-</button>
              </div>
          </div>
      </div>
  )
}

export default Tarjeta
