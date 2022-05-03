import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import FormControlLabel from "@mui/material/FormControlLabel";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import * as React from "react";
import Form from "react-bootstrap/Form";
// import { registerWithEmailAndPassword } from "../service/firebase.js";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import { useState } from "react";
import "firebase/compat/storage"
import { useNavigate } from "react-router-dom";

const theme = createTheme();

export default function SignUp() {
  let navigate = useNavigate();

  var firestore = firebase.firestore();
  const [progresspercent, setProgresspercent] = useState(0);
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const fname = data.get("firstName");
    const lname = data.get("lastName");
    const contact = data.get("contact");
    const country = data.get("country");
    const work = data.get("work");
    const pref = data.get("preference");
    const email = data.get("email");
    const password = data.get("password");
    const resume = data.get("resume");
    const marketing_concent = data.get("marketing_concent");
    console.log("doc is ",document.getElementById("resume").value);

    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((registeredUser) => {
        console.log(registeredUser);
         console.log(resume.file);
        if(resume){
          var storageRef = firebase.storage().ref("resumes").child(resume.name);
          storageRef.put(resume).then(() => {
            console.log("Uploaded a blob or file!");
            navigate(-2)
          });
        }
        firestore.collection("usersCollection").add({
          uid: registeredUser.user.uid,
          fname: fname,
          lname: lname,
          contact: contact,
          country: country,
          work: work,
          pref: pref,
          marketing_concent: marketing_concent,
          resume: "resumes/" + resume.name,
        });
      });
  };
  const Signup = () => (
    <ThemeProvider theme={theme}>
      <div className="d-flex h-100 my-3">
        <Container
          component="main"
          maxWidth="xs"
          style={{ margin: "auto auto" }}
        >
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "primary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography
              component="h1"
              variant="h5"
              style={{ fontWeight: "bold" }}
            >
              Sign up
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 3 }}
            >
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete="given-name"
                    name="firstName"
                    required
                    fullWidth
                    id="firstName"
                    label="First Name"
                    // autoFocus
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="lastName"
                    label="Last Name"
                    name="lastName"
                    autoComplete="family-name"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    // required
                    fullWidth
                    id="contact"
                    label="Contact Number"
                    name="contact"
                    autoComplete="tel"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="country"
                    label="Country of Residence"
                    name="country"
                    autoComplete="country-name"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="work"
                    label="Work Authorization"
                    name="work"
                    // autoComplete="work"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    // required
                    fullWidth
                    id="preference"
                    label="Desired Job Preference"
                    name="preference"
                    // autoComplete="preference"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="new-password"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="confirm-pwd"
                    label="Confirm Password"
                    type="password"
                    id="confirm-pwd"
                    // autoComplete="confirm-pwd"
                  />
                </Grid>
                <Grid item xs={12}>
                  <Form.Group  className="mb-3">
                    <Form.Label className="px-3">Upload your Resume</Form.Label>
                    <Form.Control
                      type="file"
                      size="lg"
                      name="resume"
                      id="resume"
                    />
                  </Form.Group>
                </Grid>
                <Grid item xs={12}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        value="allowExtraEmails"
                        id="marketing_concent"
                        name="marketing_concent"
                        color="primary"
                      />
                    }
                    label="I want to receive inspiration, marketing promotions and updates via email."
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign Up
              </Button>
              <Grid container justifyContent="flex-end">
                <Grid item>
                  <Link href="/login" variant="body2">
                    Already have an account? Log in
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Container>
      </div>
    </ThemeProvider>
  );

  return <div className="signup">{Signup()}</div>;
}
