import React, { useState } from "react";
import {Typography } from "@material-ui/core";
import amazonLogo from "../../Assets/images/amazonLogoBlack.png";
import {
  Button,
  Dialog,
  DialogActions,
  DialogTitle,
  Divider,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import styles from './login.module.css'
import {setSignedIn} from '../../Reducers/SignedInReducer'
import {setUser} from '../../Reducers/setUserReducer'

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({ mobileNumber: '', password: '' });

  const validate = () => {
    let isValid = true;
    const newErrors = {};
    if (!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(email)) {
      newErrors.email = 'Invalid email address';
      isValid = false;
    }
    console.log(password)
    if (password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const signIn = (e) => {
  //   e.preventDefault();
  //   var form = document.getElementById("form");
  //   var emailCheck = document.getElementById("email");
  //   var passwordCheck = document.getElementById("password");

  //   if (form.checkValidity()) {
  //     auth
  //       .signInWithEmailAndPassword(email, pass)
  //       .then(() => {
  //         var user = auth.currentUser;
  //         dispatch(setUserAction(user));
  //         dispatch(SignedInAction(true));
  //         navigate(-1);
  //       })
  //       .catch((e) => {
  //         console.log(e);
  //         var index = e.message.search("password");
  //         index === -1
  //           ? setError(e.message + "\n\n Create a new account for this email")
  //           : setError(
  //               e.message +
  //                 "\n\n Please enter the correct password for this account"
  //             );

  //         setOpen(true);
  //       });
  //   } else {
  //     !passwordCheck.checkValidity() &&
  //       setError("Please enter the password to continue");
  //     !emailCheck.checkValidity() &&
  //       setError("Please enter valid email address");
  //     setOpen(true);
  //     !emailCheck.checkValidity() &&
  //       !passwordCheck.checkValidity() &&
  //       setError("Please enter all the fields to continue");
  //   }
  // };

  const signIn=(e)=>{
    e.preventDefault();
    console.log(email,password)
    if (validate()) {
      console.log('Form submitted successfully');
    }
    let user={displayName:'',email}
    
    dispatch(setUser(user))
    dispatch(setSignedIn(true));
    navigate('/')
   // localStorage.setItem()
  }
  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className={styles.main}>
      <div className={styles.upperDiv}>
        <Link to="/">
          <img src={amazonLogo} alt="" className={styles.image} />
        </Link>
        <div className={styles.formDiv}>
          <Typography className="heading">Sign in </Typography>
          <form id="form" onSubmit={signIn}>
            <Typography className={styles.label}>
              Email or mobile phone number
            </Typography>
            <input
              type="email"
              id="email"
              className={styles.input}
              required
              placeholder="Enter your email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            {errors.email && <p className={styles.errormessage}>{errors.email}</p>}

            <Typography className="label">Password</Typography>
            <input
              type="password"
              id="password"
              required
              className={styles.input}
              placeholder="Enter your password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            {errors.password && <p className={styles.errormessage}>{errors.password}</p>}

            <button
              type="submit"
              className={styles.submitBtn}
            >
              Sign in
            </button>
          </form>
          <Typography className={styles.conditions}>
            By continuing, you agree to Amazon's{" "}
            <a
              href="https://www.amazon.in/gp/help/customer/display.html?ie=UTF8&nodeId=200545940"
              target="blank"
              className={styles.link}
            >
              Conditions of Use
            </a>{" "}
            and{" "}
            <a
              href="https://www.amazon.in/gp/help/customer/display.html?ie=UTF8&nodeId=200534380"
              target="blank"
              className={styles.link}
            >
              Privacy Notice
            </a>
            .
          </Typography>
        </div>
        <Divider
          className={styles.divider}
          textAlign="center"
          sx={{ borderBottomWidth: "50px" }}
        >
          New to Amazon?
        </Divider>
        <Link to="/SignUp">
          <button className={styles.createNewAccountbutton}>
            Create your Amazon account
          </button>
        </Link>
      </div>
      <Dialog
        open={open}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Oops😢 an Error Occured"}</DialogTitle>
        {/* <DialogContent>
          <Typography style={{ whiteSpace: "pre-line" }}>{errors}</Typography>
        </DialogContent> */}
        <DialogActions>
          <Button onClick={handleClose}>Okay</Button>
        </DialogActions>
      </Dialog>
      <div className={styles.lowerDiv}>
        <div className={styles.footerConditionsDiv}>
          <a
            href="https://www.amazon.in/gp/help/customer/display.html?ie=UTF8&nodeId=200545940"
            target="blank"
            className={styles.link}
          >
            Conditions of Use
          </a>
          <a
            href="https://www.amazon.in/gp/help/customer/display.html?ie=UTF8&nodeId=200534380"
            target="blank"
            className={styles.link}
          >
            Privacy Notice
          </a>
          <a
            href="https://www.amazon.in/gp/help/customer/display.html?ie=UTF8&nodeId=508510"
            target="blank"
            className={styles.link}
          >
            Help
          </a>
        </div>
        <Typography className={styles.copyright}>
          © 1996-2025, Amazon.com, Inc. or its affiliates
        </Typography>
      </div>
    </div>
  );
}

export default Login;
