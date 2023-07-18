
import React from "react";

import { Typography, Col, Divider, Card } from "antd";

import { BrowserRouter as Routes, Switch, Route, Link } from "react-router-dom";

import Appetizer from "./Appetizer";
import Breakfast from "./Breakfast";
import Dessrts from "./Desserts";
const { Title } = Typography;

const Images = () => {
    return ( 

     <>


           
           <Routes>
           <Switch>
           <Route path="/appetizer"><Appetizer /></Route>
           <Route path="/breakfast"><Breakfast /></Route>
           <Route path="/desserts"><Dessrts /></Route> 
           </Switch>
            
           <Col span={24} align="center">
           <Title level={1}></Title>
         
           <h1 style={{fontSize:"24px"}}>Choose your faivarite Images of Foods </h1>
           <Divider/>
           <Col span={8}>
           <h1 style={{fontSize:'20px'}}>APPETIZER</h1>
           <Link to={"/appetizer"}>
           <img className="first-image" src="https://media.istockphoto.com/id/1265704837/photo/creamy-mashed-potato-croquettes-with-cheese-and-sour-cream-dip.jpg?s=612x612&w=0&k=20&c=UUbj4lPm5B3nUKvoFP-EuATaXKfSk7P9OTg-DP0UBL8=" alt="APPETIZER"/>
          </Link>
          </Col>

          <Col span={8}>
           <h1 style={{fontSize:'20px'}}>BREAKFAST</h1>
           <Link to={"/breakfast"}>
           <img className="first-image" src="https://media.istockphoto.com/id/166474007/photo/scrambled-eggs-and-sausages.jpg?s=612x612&w=0&k=20&c=PsXoCFSrUrPDlHzjYsrzlPAdgcKjVAj8tRh1iuppB0s=" alt="BREAKFAST"/>
          </Link>
          </Col>

          <Col span={8}>
           <h1 style={{fontSize:'20px'}}>DESSERTS</h1>
           <Link to={"/desserts"}>
           <img className="first-image" src="https://images.pexels.com/photos/1468870/pexels-photo-1468870.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="DESSERTS" />
          </Link>
          </Col>


          </Col>
           </Routes>
         
           </>




      
        
     );
}
 
export default Images;