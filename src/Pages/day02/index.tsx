import React from 'react';
import {Link} from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';


import {Container, Back, Spinner, Spinner2} from './styles';

const Day02: React.FC = () => {
  return (
    <Container>
      <Back><Link to="/"><FiArrowLeft size={35} color={`#000`}  /></Link></Back>
      <h1>L O A D I N G</h1>
      <Spinner>  </Spinner>
      <Spinner2>  </Spinner2>


    </Container>
  );
}

export default Day02;
