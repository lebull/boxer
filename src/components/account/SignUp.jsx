import React, { useCallback, useContext } from 'react';
import { withRouter, Redirect } from 'react-router';
import app from '../../base';
import { AuthContext } from '../../contexts/Auth';

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

//  https://www.youtube.com/watch?v=unr4s3jd9qA

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        '& .MuiTextField-root': {
            margin: theme.spacing(2),
            width: '30ch',
        }
    },
}));


export default function SignUp({history}) {

    const classes = useStyles();

    const handleLogIn = useCallback(
        async event => {
            event.preventDefault();
            const { email, password } = event.target.elements;
            try{
                await app
                    .auth()
                    .createUserWithEmailAndPassword(email.value, password.value);
                history.push("/");
            }catch (error){
                alert(error)
            }
        },
        [history]
    );

    const { currentUser } = useContext(AuthContext);

    if(currentUser){
        return <Redirect to="/" />;
    }

    return (
        <form onSubmit={handleLogIn} className={classes.root} noValidate autoComplete="off">
            <TextField
                required
                id="email"
                name="email"
                label="Email"
            />
            <TextField
                required
                id="password"
                name="password"
                label="Password"
                type="password"
                autoComplete="current-password"
            />
            <Button type="submit" variant="contained" color="primary">
                Sign In asdf
            </Button>
            <p>---or---</p>
            <div>Sign in with other shit</div>
        </form>
    )
}
