import { Col, Row } from "react-bootstrap";
import { actividadesRequest } from '../axios/axiosI.js'
import { useEffect, useState } from "react";
import ActividadCard from "../actividadCard/ActividadCard.js";


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
                        <ActividadCard item={actividad}/>
                    </Col>)
            })
        }
        </Row>
    </div>    
}

export default HolaMundo;