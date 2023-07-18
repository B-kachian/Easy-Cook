import React, { useState, useEffect } from "react";
import { Row, Layout, Menu, Divider } from "antd";
import { Link, useRouteMatch, Switch, Route } from "react-router-dom";
import RecipeList from "./RecipeList";
import { getCategories } from "../api";
import Images from "./Images";

const Recipes = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    getCategories().then(cats => setCategories(cats));
  }, []);

  const { path, url } = useRouteMatch();
  return (
    <Layout>
        <h1 style={{fontSize:'22px', color:"darkblue" }}>Select a category</h1>
      <Row span={12}>
        <Menu mode="horizontal" theme="dark">
          {categories &&
            categories.map((c, i) => (
              <Menu.Item key={i}>
                <Link className='link' to={`${url}/${c}`}>{c.toUpperCase()}</Link>
              </Menu.Item>
            ))}
        </Menu>
      </Row>
      <Divider />
      <Row>
        <Switch>
          <Route exact path={path}>
          <Images/>  
          </Route>

          <Route path={`${path}/:category/:recipeId?`}>
            <RecipeList />
          </Route>
        </Switch>
      </Row>
      <Divider />
      <Row>
    
      </Row>
  
    </Layout>
  );
};

export default Recipes;
