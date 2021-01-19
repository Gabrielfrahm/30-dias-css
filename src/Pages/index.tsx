import React from 'react';
import {Link} from 'react-router-dom';
import { Container,Title, Ul, Li} from './styles';

const Index: React.FC = () => {
  return(
      <Container>
        <Title>Bem-vindo ao desafio css 30 dias</Title>
        <Ul>
          <Li><Link to="/day01">Desafio dia 01 - Ícone de mídia social em camadas</Link></Li>
          <Li><Link to="/day02">Desafio dia 02 - Loader animado</Link></Li>
        </Ul>
      </Container>
  );
}

export default Index;
