
import React from "react";
import { Col, Typography, Divider } from "antd";
const { Title } = Typography;




const Appetizer = () => {
    return (  
        <>
         <Col span={24} align="center">
           <Title level={1}></Title>
           <h1  style={{fontSize:"24px"}}>Appetizer Images </h1>
          </Col>
      <Divider />

        <Col span={24} align="center">
        <Title level={1}></Title>
     
        <Col span={6}>
        <img className="first-image" src="https://images.unsplash.com/photo-1541014741259-de529411b96a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGFwcGV0aXplcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"  alt="React Image"/>
        </Col>

        <Col span={6}>
        <img className="first-image" src="https://media.istockphoto.com/id/500829723/photo/boil-egg-fire.jpg?s=612x612&w=0&k=20&c=NFJk4QbjsSldK8KXCsQgSy50Ylp-xuCXDWcO-HKQLWk=" alt="React Image" />
        </Col>

        <Col span={6}>
        <img className="first-image" src="https://images.unsplash.com/photo-1625944525533-473f1a3d54e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGFwcGV0aXplcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="React Image" />
        </Col>
        <Col span={6}>
        <img className="first-image" src="https://media.istockphoto.com/id/1341504203/photo/fried-momos-dumpling.webp?b=1&s=170667a&w=0&k=20&c=VMmok_m2QBr6rjHfem4Sc4-sfPDqMjg1YjTyxuQCmck=" alt="React Image" />
        </Col>

        <Divider/>

        <Col span={6}>
        <img className="first-image" src="https://plus.unsplash.com/premium_photo-1669261881740-207192d38b67?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGFwcGV0aXplcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="React Image" />
        </Col>
        <Col span={6}>
        <img className="first-image" src="https://images.unsplash.com/photo-1485963631004-f2f00b1d6606?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YXBwZXRpemVyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" alt="React Image" />
        </Col>
        <Col span={6}>
        <img className="first-image" src="https://images.unsplash.com/photo-1577906096429-f73c2c312435?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YXBwZXRpemVyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" alt="React Image" />
        </Col>
        <Col span={6}>
        <img className="first-image" src="https://images.unsplash.com/photo-1549203386-9d4394c8a2fe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGFwcGV0aXplcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="React Image" />
        </Col>

        </Col> 
        <Divider/>
        <Divider/>



  
        </>
    );
}
 
export default Appetizer;