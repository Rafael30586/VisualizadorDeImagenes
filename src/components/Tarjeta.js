import React, { useEffect, useState } from 'react'

const Tarjeta = () => {

    const [url, setUrl] = useState["https://www.dzoom.org.es/wp-content/uploads/2017/07/seebensee-2384369-810x540.jpg"];
    const [ancho, setAncho] = useState[18];
    const [propiedad, setPropiedad] = useState["brightness"];
    const [valor, setValor] = useState[100];
    const [input, setInput] = useState[{}];
    const [imagen,setImagen] = useSate[{}];

    useEffect(()=>{
        setPropiedad(100);
        setAncho(18);
        setInput(document.getElementById("inputFoto"));
        setImagen(document.getElementById("imagen"));
    },[url]);

  return (
      <div>
          <div class="card" style={{width: {ancho} + 'em'}}>
              <img src={url} class="card-img-top" id="imagen" alt="Foto" style={{filter: `${propiedad}(${valor}%)`}}></img>
              <div class="card-body">
                  <input type='text' id="inputFoto"></input>
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <button type="button" class="btn btn-success" onClick={()=>setUrl(input.value)}>Success</button>
                  <button type="button" class="btn btn-danger">Danger</button>
              </div>
          </div>
          <div id="botones">
              <div class="btn-group" role="group" aria-label="Basic example">
                  <button type="button" class="btn btn-primary" onClick={()=>setAncho(ancho+5)}>Agrandar</button>
                  <button type="button" class="btn btn-primary" onClick={()=>setAncho(ancho-5)}>Achicar</button>
              </div>

              <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
                  <input type="radio" class="btn-check" name="btnradio" id="btnradio1" autocomplete="off" checked onFocus={()=>setPropiedad("brightness")}></input>
                  <label class="btn btn-outline-primary" for="btnradio1">Brillo</label>

                  <input type="radio" class="btn-check" name="btnradio" id="btnradio2" autocomplete="off" onFocus={()=>setPropiedad("grayscale")}></input>
                  <label class="btn btn-outline-primary" for="btnradio2">Grises</label>

                  <input type="radio" class="btn-check" name="btnradio" id="btnradio3" autocomplete="off" onFocus={()=>setPropiedad("sepia")}></input>
                  <label class="btn btn-outline-primary" for="btnradio3">Sepia</label>
              </div>

              <div class="btn-group" role="group" aria-label="Basic example">
                  <button type="button" class="btn btn-primary" onClick={()=>setValor(valor+5)}>+</button>
                  <button type="button" class="btn btn-primary" onClick={()=>setValor(valor-5)}>-</button>
              </div>
          </div>
      </div>
  )
}

export default Tarjeta
