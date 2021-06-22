import Head from 'next/head';
import styled from 'styled-components';
import { Button } from '@material-ui/core';
import LockOpenRoundedIcon from '@material-ui/icons/LockOpenRounded';
import { auth,provider } from '../firebase';


function Login() {

    const signIn = () => {
        auth.signInWithPopup(provider).catch(alert)
    }

    return (
        <Container>
            <Head>
                <title>Login</title>
            </Head>
            <LoginContainer>
                <Logo alt="login" src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c543.png" />
                
                <LoginButton onClick={signIn}><LockIcon/> Sign in with Google</LoginButton>
            </LoginContainer>
        </Container>
    )
}

export default Login


const Container = styled.div`
    background-color: #192734;
    display: grid;
    place-items: center;
    height: 100vh;
`;

const LoginContainer = styled.div`
    padding:100px;
    border-radius: 10px;
    background-color: #ffff;
    -webkit-box-shadow: 0px 0px 49px -2px rgba(81,81,81,0.53); 
    box-shadow: 0px 0px 49px -2px rgba(81,81,81,0.53);
    display: flex;
    flex-direction: column;    
`;

const Logo = styled.img`
    height: 200px;
    width: 200px;
    margin-bottom: 50px;
`;

const LoginButton = styled(Button)`
    background-color: #22303c;
    padding: 10px;
    color: white;

    :hover{
        background-color: #15202b;

    };
`;

const LockIcon = styled(LockOpenRoundedIcon)`
    margin-right:10px;
`;