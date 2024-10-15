import { Card } from "react-bootstrap";

const ActividadCard = (params) => {
    let actividad = params.item;
    return <Card style={{width:"18rem", margin:"2rem", height:"24rem"}} key={actividad.id}>
                {actividad.imageURL ? <Card.Img src={actividad.imageURL}/> : ""}
                <Card.Body style={{height:"100%",display:"flex",flexDirection:"column", justifyContent:"space-between"}}>
                    <Card.Title>{actividad.nombre}</Card.Title>
                    <Card.Text>{actividad.descripcion}</Card.Text>
                    <Card.Footer>{actividad.minJugadores} - {actividad.maxJugadores !== -1 ? actividad.maxJugadores : "infinitos"} jugadores</Card.Footer>
                </Card.Body>
            </Card>
}

export default ActividadCard;