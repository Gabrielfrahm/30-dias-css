import React, { useCallback, useState } from 'react';
import {Link} from 'react-router-dom';
import {FiInstagram, FiLinkedin, FiTwitter, FiFacebook, FiArrowLeft } from 'react-icons/fi';
import {IoLogoGoogleplus} from 'react-icons/io';
import {Container, Ul, Li, ButtonLinkedin, ButtonInstagran, ButtonTwitter, ButtonFacebook, ButtonGoogle, Back} from './styles';

const Day01: React.FC = () => {
  const [linkedin, setLinkedin] = useState(false);
  const [instagran, setInstagran] = useState(false);
  const [facebook, setFacebook] = useState(false);
  const [google, setGoogle] = useState(false);
  const [twitter, setTwitter] = useState(false);

  const handleBackgroundColorLinkedin = useCallback(()=> {
    setLinkedin(true);
    setInstagran(false);
    setFacebook(false);
    setGoogle(false);
    setTwitter(false);
    console.log(`dael`)
  }, [])

  const handleBackgroundColorInstageran = useCallback(()=> {
    setLinkedin(false);
    setInstagran(true);
    setFacebook(false);
    setGoogle(false);
    setTwitter(false);
  }, [])
  const handleBackgroundColorFacebook = useCallback(()=> {
    setLinkedin(false);
    setInstagran(false);
    setFacebook(true);
    setGoogle(false);
    setTwitter(false);
  }, [])
  const handleBackgroundColorGoogle = useCallback(()=> {
    setLinkedin(false);
    setInstagran(false);
    setFacebook(false);
    setGoogle(true);
    setTwitter(false);
  }, [])
  const handleBackgroundColorTwitter = useCallback(()=> {
    setLinkedin(false);
    setInstagran(false);
    setFacebook(false);
    setGoogle(false);
    setTwitter(true);
  }, [])

    return (
      <>

        <Container
        isLink ={linkedin}
        isInstagram={instagran}
        isFacebook ={facebook}
        isGoogle ={google}
        isTwitter ={twitter}
        >
          <Back><Link to="/"><FiArrowLeft size={35} color={`#000`}  /></Link></Back>

          <Ul>
            <Li>
              <Link to="#">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span><ButtonLinkedin isClicked={linkedin} onClick={handleBackgroundColorLinkedin}></ButtonLinkedin><FiLinkedin size={35} /></span>
              </Link>
            </Li>
            <Li>
              <Link to="#">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span><ButtonInstagran isClicked={instagran} onClick={handleBackgroundColorInstageran}></ButtonInstagran><FiInstagram size={35} /></span>
              </Link>
            </Li>
            <Li>
              <Link to="#">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span><ButtonFacebook  isClicked={facebook} onClick={handleBackgroundColorFacebook}></ButtonFacebook><FiFacebook size={35} /></span>
              </Link>
            </Li>
            <Li>
              <Link to="#">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span><ButtonGoogle isClicked={google} onClick={handleBackgroundColorGoogle}></ButtonGoogle><IoLogoGoogleplus size={35} /></span>
              </Link>
            </Li>
            <Li>
              <Link to="#">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span><ButtonTwitter isClicked={twitter} onClick={handleBackgroundColorTwitter}></ButtonTwitter><FiTwitter size={35} /></span>
              </Link>
            </Li>
          </Ul>
        </Container>
      </>
    );
}

export default Day01;
