import GoogleIcon from "@mui/icons-material/Google";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
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
import { createTheme, styled, ThemeProvider } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import * as React from "react";
import google from "../img/google-logo.png";
import { signInWithGoogle } from '../service/firebase.js';


const theme = createTheme();

export default function SignIn() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  // Custom Button
  const GoogleButton = styled(Button)(({ theme }) => ({
    color: theme.palette.error.light,
    "& GoogleIcon": { color: theme.palette.error.main },
    border: "1px solid",
    borderColor: "#0007",
    borderRadius: 50,
    marginBottom: 10,
    "&:hover": {
      backgroundColor: "#f001",
      // color: theme.palette.getContrastText(theme.palette.error.main),
    },
  }));

  const LinkedInButton = styled(Button)(({ theme }) => ({
    color: theme.palette.primary.light,
    border: "1px solid",
    borderColor: "#0007",
    borderRadius: 50,
    marginBottom: 10,
    "&:hover": {
      backgroundColor: theme.palette.primary.light,
      color: theme.palette.getContrastText(theme.palette.primary.main),
    },
  }));

  const Login = () => (
    <ThemeProvider theme={theme}>
      <div className="d-flex vh-100">
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
              Log in
            </Typography>

            {/* Google and LinkedIn Login box */}
            <Box className="w-100">
              <Box className="d-flex flex-column justify-content-around mt-4 log-buttons">
                <GoogleButton onClick={signInWithGoogle}>
                  <GoogleIcon
                    // color="error"
                    fontSize="large"
                    // sx={{ "GoogleButton:hover": { color: "white" } }}
                    style={{ marginRight: "5px" }}
                  />
                  Sign in with Google
                </GoogleButton>
                <LinkedInButton>
                  <LinkedInIcon
                    // color="primary"
                    fontSize="large"
                    style={{ marginRight: "5px" }}
                  />
                  Sign in with LinkedIn
                </LinkedInButton>
              </Box>
              {/* or line */}
              <div className="d-flex flex-row align-items-center">
                <div style={{ flex: 1, height: 1, backgroundColor: "#0006" }} />
                <div>
                  <Typography
                    style={{
                      fontSize: 14,
                      width: 30,
                      textAlign: "center",
                      color: "#0006",
                    }}
                  >
                    or
                  </Typography>
                </div>
                <div style={{ flex: 1, height: 1, backgroundColor: "#0006" }} />
              </div>
            </Box>

            {/* Login Form */}
            <Box
              component="form"
              onSubmit={handleSubmit}
              noValidate
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                // autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Log In
              </Button>

              {/* bottom part */}
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="/Signup" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Container>
      </div>
    </ThemeProvider>
  );

  return <div className="login">{Login()}</div>;
}
