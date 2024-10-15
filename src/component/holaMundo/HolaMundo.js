import { Card, CardGroup } from "react-bootstrap";
import { actividadesRequest } from '../axios/axiosI.js'
import { useEffect, useState } from "react";


const HolaMundo = () => {

    const [actividades, setActividades] = useState([]);

    useEffect(() => {
        return async () => {        
            setActividades(await actividadesRequest())
        };
    }, []);

    return <div>
        <h3>Lista de actividades</h3>
        <CardGroup>
        {
            actividades.map(actividad => {
                return (
                <Card style={{width:"18em"}} key={actividad.id}>
                    {actividad.imageURL ? <Card.Img src={actividad.imageURL}/> : ""}
                    <Card.Body>
                        <Card.Title>{actividad.nombre}</Card.Title>
                        <Card.Text>{actividad.descripcion}</Card.Text>
                        <Card.Footer>{actividad.minJugadores} - {actividad.maxJugadores !== -1 ? actividad.maxJugadores : "infinitos"} jugadores</Card.Footer>
                    </Card.Body>
                </Card>)
            })
        }
        </CardGroup>
    </div>    
}

export default HolaMundo;