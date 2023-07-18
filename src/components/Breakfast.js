
import React from "react";
import { Col, Typography, Divider } from "antd";
const { Title } = Typography;

const Breakfast = () => {
    return (  
        <>
        
         <Col span={24} align="center">
           <Title level={1}></Title>
           <h1  style={{fontSize:"24px"}}>Breakfast Images </h1>
          </Col>
      <Divider />

        <Col span={24} align="center">
        <Title level={1}></Title>
     
        <Col span={6}>
        <img className="first-image" src="https://images.unsplash.com/photo-1525351484163-7529414344d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YnJlYWtmYXN0fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"  alt="React Image"/>
        </Col>

        <Col span={6}>
        <img className="first-image" src="https://images.unsplash.com/photo-1513442542250-854d436a73f2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJyZWFrZmFzdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="React Image" />
        </Col>

        <Col span={6}>
        <img className="first-image" src="https://media.istockphoto.com/id/1408374876/photo/oatmeal-porridge-bowl-with-berry-fruits-in-female-hands.jpg?s=612x612&w=0&k=20&c=t-nDA76Z8G7aiTw4O6ET55yn-YXj8iA7hFJCkkJzaPw=" alt="React Image" />
        </Col>
        <Col span={6}>
        <img className="first-image" src="https://media.istockphoto.com/id/866853312/photo/bacon-eggs-and-waffles.jpg?s=612x612&w=0&k=20&c=Hql9BuXM4e5KVvD5KL69nB_DSdC51jjjlrwee7oRZ6M=" alt="React Image" />
        </Col>

        <Divider/>

        <Col span={6}>
        <img className="first-image" src="https://images.unsplash.com/photo-1495214783159-3503fd1b572d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGJyZWFrZmFzdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60" alt="React Image" />
        </Col>
        <Col span={6}>
        <img className="first-image" src="https://media.istockphoto.com/id/599953752/photo/bacon-and-eggs-frying.jpg?s=612x612&w=0&k=20&c=kSycjcJjiahltrsxof3RItUgveV09AqDuWDtKw8K6y8=" alt="React Image" />
        </Col>
        <Col span={6}>
        <img className="first-image" src="https://images.unsplash.com/photo-1482049016688-2d3e1b311543?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGJyZWFrZmFzdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60" alt="React Image" />
        </Col>
        <Col span={6}>
        <img className="first-image" src="https://media.istockphoto.com/id/882909924/photo/english-breakfast-fried-eggs-sausages-bacon.jpg?s=612x612&w=0&k=20&c=1FoR7MKGmnMyf6BfoRy2RlGgGiYaXqFe59u-alZT7yA=" alt="React Image" />
        </Col>

        </Col> 
        <Divider/>
        <Divider/>



  
    

</>
    );
}
 
export default Breakfast;