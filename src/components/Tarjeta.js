import React, { useEffect, useState } from 'react'

const Tarjeta = () => {

    const [url, setUrl] = useState("https://www.dzoom.org.es/wp-content/uploads/2017/07/seebensee-2384369-810x540.jpg");
    console.log(url);
    const [ancho, setAncho] = useState(25);
    const [propiedad, setPropiedad] = useState("brightness");
    const [valor, setValor] = useState(100);
    const [input, setInput] = useState({});
    const [imagen,setImagen] = useState({});
    const [propiedadTitulo, setPropiedadTitulo] = useState("Brillo: ");
    const [tarjeta,setTarjeta] = useState({});
    const [numeroTema, setNumeroTema] = useState(1); 
    const [h5,setH5] = useState({});
    const [subTarjeta,setSubTarjeta] = useState({});

    function agrandar(){
        if(ancho<=65){
            setAncho(ancho+5);
        }      
    }

    function achicar(){
        if(ancho>=15){
            setAncho(ancho-5);
        }
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

    function cambiarTema(){
        if(numeroTema<20){
            setNumeroTema(numeroTema+1)
        }else{
            setNumeroTema(1);
        }
        
        switch(numeroTema){
            case 1: tarjeta.style.background = "#91210f";
            subTarjeta.style.borderColor = "white";
            h5.style.color = "white"; break;
            case 2: tarjeta.style.background = "#2c24d4";
            subTarjeta.style.borderColor = "white";
            h5.style.color = "white";break;
            case 3: tarjeta.style.background = "#abd6b0";
            subTarjeta.style.borderColor = "#353535";
            h5.style.color = "#353535";break;
            case 4: tarjeta.style.background = "#de9358";
            subTarjeta.style.borderColor = "#353535";
            h5.style.color = "#353535";break;
            case 5: tarjeta.style.background = "#e7cf03";
            subTarjeta.style.borderColor = "#353535";
            h5.style.color = "#353535";break;
            case 6: tarjeta.style.background = "#73039c";
            subTarjeta.style.borderColor = "white";
            h5.style.color = "white";break;
            case 7: tarjeta.style.background = "#fb8ab1";
            subTarjeta.style.borderColor = "#353535";
            h5.style.color = "#353535";break;
            case 8: tarjeta.style.background = "#ecab0c";
            subTarjeta.style.borderColor = "white";
            h5.style.color = "white";break;
            case 9: tarjeta.style.background = "#15c483";
            subTarjeta.style.borderColor = "#353535";
            h5.style.color = "#353535";break;
            case 10: tarjeta.style.background = "#34a0eb";
            subTarjeta.style.borderColor = "white";
            h5.style.color = "white";break;
            case 11: tarjeta.style.background = "#bff80d";
            subTarjeta.style.borderColor = "#353535";
            h5.style.color = "#353535";break;
            case 12: tarjeta.style.background = "#435982";
            subTarjeta.style.borderColor = "white";
            h5.style.color = "white";break;
            case 13: tarjeta.style.background = "#b490da";
            subTarjeta.style.borderColor = "#353535";
            h5.style.color = "#353535";break;
            case 14: tarjeta.style.background = "#044f95";
            subTarjeta.style.borderColor = "white";
            h5.style.color = "white";break;
            case 15: tarjeta.style.background = "#a10646";
            subTarjeta.style.borderColor = "white";
            h5.style.color = "white";break;
            case 16: tarjeta.style.background = "#108e42";
            subTarjeta.style.borderColor = "white";
            h5.style.color = "white";break;
            case 17: tarjeta.style.background = "#d51962";
            subTarjeta.style.borderColor = "white";
            h5.style.color = "white";break;
            case 18: tarjeta.style.background = "#2e4c21";
            subTarjeta.style.borderColor = "white";
            h5.style.color = "white";break;
            case 19: tarjeta.style.background = "#a85f01";
            subTarjeta.style.borderColor = "white";
            h5.style.color = "white";break;
            case 20: tarjeta.style.background = "white";
            subTarjeta.style.borderColor = "#353535";
            h5.style.color = "#353535";break;
        }

    }

    useEffect(()=>{
        setPropiedad("brightness");
        setPropiedadTitulo("Brillo: ");
        setValor(100);
        setAncho(18);
        setInput(document.getElementById("inputHeader"));
        setImagen(document.getElementById("imagen"));
        setTarjeta(document.getElementById("contenedor"));
        document.getElementById("tarjeta").style.background = "none";
        setH5(document.getElementById("propiedadMasValor"));
        setSubTarjeta(document.getElementById("tarjeta"));
    },[url]);

  return (
      <div className="container mt-1 rounded p-1" id="contenedor">
          <header className="p-3 text-bg-dark sticky-top rounded">
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
                          <button type="button" className="btn btn-light" onClick={cambiarTema}>Tema</button>
                      </div>
                  </div>
              </div>
          </header>
          <div className="card p-1 m-2" id="tarjeta" style={{width: ancho + 'em'}}>
              <img src={url} className="card-img-top" id="imagen" alt="Foto" style={{filter: `${propiedad}(${valor}%)`}}></img>
              <div className="card-body">
                  <h5 className="card-title fw-bold" id="propiedadMasValor">{propiedadTitulo}{valor}</h5>
              </div>
          </div>
      </div>
  )
}

export default Tarjeta
