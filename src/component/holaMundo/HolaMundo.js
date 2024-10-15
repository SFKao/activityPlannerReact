import { Card, Col, Row } from "react-bootstrap";
import { actividadesRequest } from '../axios/axiosI.js'
import { useEffect, useState } from "react";


const HolaMundo = () => {

    const [actividades, setActividades] = useState([]);

    useEffect(() => {
        return async () => {        
            if(localStorage.getItem("accessToken"))
                setActividades(await actividadesRequest())
            else
                setActividades([])
        };
    }, []);

    return <div>
        <h3>Lista de actividades</h3>
        <Row md={4}>
        {
            actividades.map((actividad, idx) => {
                return (
                    <Col key={idx}>
                        <Card style={{width:"18rem", margin:"2rem", height:"24rem"}} key={actividad.id}>
                            {actividad.imageURL ? <Card.Img src={actividad.imageURL}/> : ""}
                            <Card.Body style={{height:"100%",display:"flex",flexDirection:"column", justifyContent:"space-between"}}>
                                <Card.Title>{actividad.nombre}</Card.Title>
                                <Card.Text>{actividad.descripcion}</Card.Text>
                                <Card.Footer>{actividad.minJugadores} - {actividad.maxJugadores !== -1 ? actividad.maxJugadores : "infinitos"} jugadores</Card.Footer>
                            </Card.Body>
                        </Card>
                    </Col>)
            })
        }
        </Row>
    </div>    
}

export default HolaMundo;