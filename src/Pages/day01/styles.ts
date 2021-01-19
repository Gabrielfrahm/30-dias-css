import { shade } from 'polished';
import styled, { css } from 'styled-components';

interface ButtonPropsLinkedin{
  isClicked : boolean;
}
interface ButtonPropsInstagran{
  isClicked : boolean;
}
interface ButtonPropsFacebook{
  isClicked : boolean;
}
interface ButtonPropsGoogle{
  isClicked : boolean;
}
interface ButtonPropsTwitter{
  isClicked : boolean;
}

interface ContainerProps{
  isLink : boolean;
  isInstagram : boolean;
  isFacebook : boolean;
  isGoogle : boolean;
  isTwitter : boolean;
}

export const Container = styled.div<ContainerProps>`
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;



    ${props =>
    props.isLink &&
    css`
      background: #0077b5 ;
    `}
    ${props =>
    props.isInstagram &&
    css`
      background: linear-gradient( 45deg,#F2B705, #F27405, #F20505, #D91A4D, #854BBF, #7B37AE ) ;
    `}
    ${props =>
    props.isFacebook &&
    css`
      background: #0555a1 ;
    `}
    ${props =>
    props.isGoogle &&
    css`
      background: #dd4b39 ;
    `}
    ${props =>
    props.isTwitter &&
    css`
      background: #0088a1 ;
    `}
`;

export const Back = styled.div`
  position: absolute;
  top:0;
  left: 0;
`;

export const Ul = styled.ul`
    position: relative;
    margin: 0;
    padding: 0;
    display: flex;

    li:hover span{
     box-shadow: -1px 1px 1px rgba(0,0,0,.1);
    }

    li:hover span:nth-child(5){
        transform: translate(40px, -40px);
        opacity: 1;
    }

    li:hover span:nth-child(4){
        transform: translate(30px, -30px);
        opacity: 0.8;
    }

    li:hover span:nth-child(3){
      transform: translate(20px, -20px);
      opacity: 0.6;
    }

    li:hover span:nth-child(2){
      transform: translate(10px, -10px);
      opacity: 0.4;
    }

    li:hover span:nth-child(1){
        transform: translate(0,0);
        opacity: 0.2;
    }


    li:nth-child(1) span{
        background: #0077b5;
    }

    li:nth-child(2) span{
        background-image: linear-gradient( 45deg,#F2B705, #F27405, #F20505, #D91A4D, #854BBF, #7B37AE );
    }

    li:nth-child(3) span{
        background: #0555a1;
    }

    li:nth-child(4) span{
        background: #dd4b39;
    }

    li:nth-child(5) span{
        background: #0088a1;
    }

`;

export const Li = styled.li`
    position: relative;
    list-style: none;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    margin: 0 30px;
    transform: rotate(-30deg) skew(20deg) ;
    background: #ccc;

    span {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: #000;
      transition: 0.5s;
      display: flex !important;
      align-items: center;
      justify-content: center;
      color: #fff;
      font-size: 30px !important;
      border-radius: 50%;

    }
`;

export const ButtonLinkedin = styled.button<ButtonPropsLinkedin>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: transparent;
  border: none;
  border-radius: 50%;

  ${props =>
    props.isClicked &&
    css`
       background: ${shade(0.1,'#0077b5' )} ;
       opacity: 0.8;
    `}

`;

export const ButtonInstagran = styled.button<ButtonPropsInstagran>`

position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
background: transparent;
border: none;
border-radius: 50%;

  ${props =>
    props.isClicked &&
    css`
       background: linear-gradient( 45deg,#F2B705, #F27405, #F20505, #D91A4D, #854BBF, #7B37AE ) ;
       opacity: 0.6;
    `}

`;

export const ButtonTwitter= styled.button<ButtonPropsTwitter>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: transparent;
  border: none;
  border-radius: 50%;

  ${props =>
    props.isClicked &&
    css`
       background:  ${shade(0.1,'#0088a1' )};
       opacity: .8;
    `}


`;

export const ButtonGoogle= styled.button<ButtonPropsGoogle>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: transparent;
  border: none;
  border-radius: 50%;

  ${props =>
    props.isClicked &&
    css`
       background:  ${shade(0.1,'#FD9B8E' )};
       opacity: .8;
    `}

`;

export const ButtonFacebook= styled.button<ButtonPropsFacebook>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: transparent;
  border: none;
  border-radius: 50%;

  ${props =>
    props.isClicked &&
    css`
       background: #53ABFD ;
       opacity: 0.8;
  `}

`;




