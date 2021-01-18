import React from 'react';
import { Switch, Route } from 'react-router-dom';


import Day01 from '../Pages/day01';


const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={Day01} />

    </Switch>
  );
};

export default Routes;
