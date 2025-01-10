import React from 'react';
import { Container, Col, Row, Image, Card, Button } from 'react-bootstrap';
import bigStar from '../assets/bigStar.png'

const DevicePage = () => {
    const device =  {id: "1", name: "B310N", price: "50", rating: "0", img: "ad0aac0d-f9f5-41eb-80b8-fcd1c7d4cc2e.jpg"}
    const description = [
        { id: 1, title: "Тип подключения", description: "Беспроводное" },
        { id: 2, title: "Шумоподавление", description: "Активное" },
        { id: 3, title: "Время работы", description: "30 часов" },
        { id: 4, title: "Микрофон", description: "Встроенный" },
        { id: 5, title: "Вес", description: "254 грамма" }
    ];
    // const [device, setDevice] = useState({info: []})
    // const {id} = useParams()
    // useEffect(() => {
    //     fetchOneDevice(id).then(data => setDevice(data))
    // }, [])
    return (
        <Container className='mt-3'>
              <Row>
                <Col md={4}>
                    <Image width={300} height={300} src={device.img}/>
                </Col>
                <Col md={4}>
                    <div className="d-flex flex-column align-items-center">
                        <h2>{device.name}</h2>
                        <div
                            className="d-flex align-items-center justify-content-center"
                            style={{background: `url(${bigStar}) no-repeat center center`, width:240, height: 240, backgroundSize: 'cover', fontSize:64}}
                        >
                            {device.rating}
                        </div>
                    </div>
                </Col>
                <Col md={4}>
                    <Card
                        className="d-flex flex-column align-items-center justify-content-around"
                        style={{width: 300, height: 300, fontSize: 32, border: '5px solid lightgray'}}
                    >
                        <h3>От: {device.price} руб.</h3>
                        <Button variant={"outline-dark"}>Добавить в корзину</Button>
                    </Card>
                </Col>
            </Row>
            <div className="d-flex flex-column m-3">
                <h1>Характеристики</h1>
                {description.map((info, index) => (
                    <Row 
                        key={info.id} 
                        style={{
                        background: index % 2 === 0 ? 'lightgray' : 'transparent',
                        padding: 10
                        }}
                    >
                        {info.title}: {info.description}
                    </Row>
            ))}
            </div>
        </Container>
    );
};

export default DevicePage;