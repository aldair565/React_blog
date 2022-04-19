import React from "react";
import "../stylesheets/Testimony.css" //es necesario importar la stylesheet para aplicarlo al componente

//export function Testimony(){ <-exportacion nombrada para exportar varios componentes. Con default se exporta uno solamente
function Testimony(props) { //mediante props(parametro) se indican las propiedades de la "plantilla" que se usara en el componente principal App.js
    return (
        <div className="container-testimony">
            <img className="img-testimony" src={require(`../img/${props.img}.jpg`)} alt={props.name} />
            <div className="container-testimony-text">
                <p className="testimony-name"><strong>{props.name}</strong> en {props.country}</p>
                <p className="testimony-position">{props.position}</p>
                <p className="testimony-description">{props.description}</p>
            </div>
        </div>
    );
}

export default Testimony;