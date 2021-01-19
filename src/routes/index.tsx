import React from 'react';
import { Switch, Route } from 'react-router-dom';


import Index from '../Pages';
import Day01 from '../Pages/day01';
import Day02 from '../Pages/day02';


const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact  component={Index} />
      <Route path="/day01"  component={Day01} />
      <Route path="/day02"  component={Day02} />

    </Switch>
  );
};

export default Routes;
