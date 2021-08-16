import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import { useContext, useEffect } from 'react';
import { UserContext } from '../components/Layout';
import yeenderServer from '../serverConfig';
import style from '../styles/login.module.css';

const Login = () => {

    const firebaseConfig = {
        apiKey: 'AIzaSyC48mgvUJtSRj7Cl4RHGi4VcwIPpJeYrxY',
        authDomain: 'yeender-2a00e.firebaseapp.com',
        projectId: 'yeender-2a00e',
        storageBucket: 'yeender-2a00e.appspot.com',
        messagingSenderId: '724915768331',
        appId: '1:724915768331:web:a03e14f63ceb9b6b100b0e',
    };

    const { loggedInUser, setLoggedInUser, admin, setAdmin } = useContext(UserContext);
    // if (loggedInUser.email) {
    //     localStorage.setItem('email', window.loggedInUser.email);
    // }
    // useEffect(() => {
    //     const emailr = window.localStorage.getItem('email');
    //     console.log("hello", emailr)
    // }, [])


    const handleGoogleSignIn = () => {
        if (firebase.apps.length === 0) {
            firebase.initializeApp(firebaseConfig);
        }
        const provider = new firebase.auth.GoogleAuthProvider();

        firebase
            .auth()
            .signInWithPopup(provider)
            .then((result) => {
                /** @type {firebase.auth.OAuthCredential} */
                const { credential } = result;

                // This gives you a Google Access Token. You can use it to access the Google API.
                const token = credential.accessToken;
                // The signed-in user info.
                const { displayName, email, photoURL } = result.user;
                const signedInUser = { name: displayName, email, img: photoURL };
                // console.log(signedInUser)
                setLoggedInUser(signedInUser);
                localStorage.setItem('email', signedInUser.email);
                
            })
            .catch((error) => {
                console.log(
                    'Error Code:',
                    error.code,
                    'errorMessage:',
                    error.message,
                    'ErrorEmail:',
                    error.email,
                    'credential:',
                    error.credential
                );
            });
    };


    useEffect(() => {
        if (loggedInUser.email) {
            fetch(`${yeenderServer}/admin/${loggedInUser.email}`)
                .then((res) => res.json())
                .then((data) => {
                    setAdmin(data[0]);
                });
        }
    }, [loggedInUser.email, setAdmin]);

    return (
        <div className={`${style.loginArea} d-flex align-items-center`}>
            <Container maxWidth="sm">
                <h1 className={style.title}>Login page</h1>
                {/* <img className="img-fluid" src="https://i.imgur.com/Se2uVFI.jpg" alt="login img" /> */}
                <Button onClick={handleGoogleSignIn} className={`${style.LoginBtn} w-100`}>
                    <img
                        className="img-fluid mr-auto"
                        src="https://img.icons8.com/fluent/48/000000/google-logo.png"
                        alt=""
                    />
                    <span className={`${style.T_login} ml-auto`}> Login </span>.
                    <span className={style.T_width}> with </span>.
                    <span className={style.T_google}> Google </span>
                </Button>

                {/* <div className="d-flex align-items-center">
                    <Row className="d-flex align-items-center">
                        <Col md={6}>
                            <img className="img-fluid" src="https://i.imgur.com/Se2uVFI.jpg" alt="login img" />
                        </Col>
                        <Col md={6}>
                            <Button
                                onClick={handleGoogleSignIn}
                                className={`${style.LoginBtn} w-100`}
                            >
                                <img src="https://img.icons8.com/fluent/48/000000/google-logo.png" alt=""/>
                                <span className={style.T_login}> Login </span>.<span className={style.T_width}> width </span>.<span className={style.T_google}> Google </span>
                            </Button>
                        </Col>
                    </Row>
                </div> */}
            </Container>
        </div>
    );
};

export async function getServerSideProps() {
    return {
        props: {},
    };
}

export default Login;
