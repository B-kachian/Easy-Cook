import React from "react";
import { Col, Typography, Divider } from "antd";
const { Title } = Typography;

const Breakfast = () => {
    return (  
        <>

<Col span={24} align="center">
           <Title level={1}></Title>
           <h1  style={{fontSize:"24px"}}>Desserts Images </h1>
          </Col>
      <Divider />

        <Col span={24} align="center">
        <Title level={1}></Title>
        <Col span={6}>
        <img className="first-image" src="https://images.pexels.com/photos/266706/pexels-photo-266706.jpeg?auto=compress&cs=tinysrgb&w=1600"  alt="Desserts Image"/>
        </Col>
        <Col span={6}>
        <img className="first-image" src="https://images.pexels.com/photos/2613471/pexels-photo-2613471.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="Desserts Images" />
        </Col>
        <Col span={6}>
        <img className="first-image" src="https://images.pexels.com/photos/3650438/pexels-photo-3650438.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="Desserts Images" />
        </Col>
        <Col span={6}>
        <img className="first-image" src="https://images.pexels.com/photos/1633668/pexels-photo-1633668.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="Desserts Images" />
        </Col>

        <Divider/>

        <Col span={6}>
        <img className="first-image" src="https://images.pexels.com/photos/248467/pexels-photo-248467.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="Desserts Images" />
        </Col>
        <Col span={6}>
        <img className="first-image" src="https://images.pexels.com/photos/357628/pexels-photo-357628.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="Desserts Images" />
        </Col>
        <Col span={6}>
        <img className="first-image" src="https://images.pexels.com/photos/6061391/pexels-photo-6061391.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="Desserts Imagese" />
        </Col>
        <Col span={6}>
        <img className="first-image" src="https://images.pexels.com/photos/6061404/pexels-photo-6061404.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="Desserts Images" />
        </Col>

        </Col> 
        <Divider/>
        <Divider/>


  
        </>
    );
}
 
export default Breakfast;