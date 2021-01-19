import styled from 'styled-components';


export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;

  h1{
    width: 300px;
    height: 300px;
    border-radius: 50%;
    color: #262626;
    align-items: center;
    position: absolute;
    line-height: 300px;
    background: transparent;
    top: 50%;
    left: 50%;
    transform: translate(-40%, -50%);
  }


`;

export const Back = styled.div`
  position: absolute;
  top:0;
  left: 0;
`;


export const Spinner = styled.div`
  width: 350px;
  height: 350px;
  border-radius: 50%;
  box-shadow: 0 4px 0 #00f440;
  background: transparent;
  animation: spin 1s linear infinite;




  @keyframes spin {
  to {

    transform: rotate(360deg);
    }

  }

`;


export const Spinner2 = styled.div`

  border: 4px solid transparent;
  border-left-color: #00f440;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: spin 1s linear infinite;
  position: absolute;
  margin-left:220px;


  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;
