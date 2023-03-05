import React,{useState} from'react';
import { Link, useNavigate } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import MenuItem from '@mui/material/MenuItem';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import Paper from '@mui/material/Paper';
import FormLabel from '@mui/material/FormLabel';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import Stack from '@mui/material/Stack';
import PocketBase from 'pocketbase';
import Swal from 'sweetalert2';


const theme = createTheme();

export default function SignUpSide() {
    const nav = useNavigate();
    
    const client = new PocketBase("http://127.0.0.1:8090");
  const initialStateErrors = {
    email: { required: false },
    password: { required: false },
    firstName: { required: false },
  };

  const [errors, setErrors] = useState(initialStateErrors);

  const eventLog = () => {
    nav("/signin");
  };

  const handleSubmit = async () => {
    const name = input.firstName + input.lastName;

    console.log(input);
    try {
      const data = {
        username: name,
        email: input.email,
        password: input.password,
        passwordConfirm: input.passwordConfirm,
      };
      const record = await client.collection("users").create(data);
      if (record) {
        const uname = data.firstName + " " + data.lastName;
        // localStorage.setItem("agro-username", uname);
        // localStorage.setItem("agro-email", user.email);

        Swal.fire({
          icon: "success",
          title: "Yayy...",
          text: "Successfully Signed Up..!",
        });
      }
      setTimeout(() => {
        nav("/signin");
      }, 2000);
    } catch (e) {
      console.log("Please try again later...");
    }
  };

  const [input, setInputs] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    passwordConfirm: "",
  });
  const handleInput = (event) => {
    setInputs({ ...input, [event.target.name]: event.target.value });
  };

  const proofs = [
    "Aadhar Card",
    "Voter Id",
    "Driving License",
    "Passport",
    "Ration card",
  ];

  return (
    <Container
      className="main"
      maxWidth={false}
      maxHeight={false}
      style={{ backgroundImage: `url("/images/women.jpg")`, height: "100%" }}
    >
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
          <Paper elevation={8}>
            <CssBaseline />
            <Box sx={{ padding: 2 }}>
              <Box
                sx={{
                  marginTop: 8,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                  <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
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
                        autoFocus
                        onChange={handleInput}
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
                        onChange={handleInput}
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
                        onChange={handleInput}
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
                        onChange={handleInput}
                      />
                      {/* {input.password} */}
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        required
                        fullWidth
                        name="passwordConfirm"
                        label="Retype-Password"
                        type="password"
                        id="password"
                        autoComplete="new-password"
                        onChange={handleInput}
                      />
                      {/* {input.passwordConfirm} */}
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        required
                        fullWidth
                        name="number"
                        label="Phone Number"
                        type="number"
                        id="number"
                        autoComplete="new-password"
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        autoComplete="given-name"
                        name="idProof"
                        select
                        required
                        fullWidth
                        id="idProof"
                        label="Id Proof"
                        helperText="Please select your id proof"
                        autoFocus
                      >
                        {proofs.map((option) => (
                          <MenuItem key={option} value={option}>
                            {option}
                          </MenuItem>
                        ))}
                      </TextField>
                    </Grid>

                    <Grid item xs={12} sm={6}>
                      <TextField
                        required
                        fullWidth
                        id="idCardNo"
                        label="ID card no"
                        name="idCardNo"
                        autoComplete="family-name"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        required
                        fullWidth
                        name="land"
                        label="Land Quantity (in acre)"
                        type="number"
                        id="number"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Stack direction="row" alignItems="center" spacing={2}>
                        <span>ID Proof copy</span>
                        <Button variant="contained" component="label">
                          Upload
                          <input hidden accept="image/*" multiple type="file" />
                        </Button>
                        <IconButton
                          color="primary"
                          aria-label="upload picture"
                          component="label"
                        >
                          <input hidden accept="image/*" type="file" />
                          <PhotoCamera />
                        </IconButton>
                      </Stack>
                    </Grid>
                    <Grid item xs={12}>
                      <FormControlLabel
                        control={
                          <Checkbox value="allowExtraEmails" color="primary" />
                        }
                        label="I want to receive inspiration, marketing promotions and updates via email."
                      />
                    </Grid>
                  </Grid>
                  <Button
                    onClick={handleSubmit}
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                  >
                    Sign Up
                  </Button>
                  <Grid container justifyContent="flex-end">
                    <Grid item>
                      <Link to="/signin" variant="body2">
                        Already have an account? Sign in
                      </Link>
                    </Grid>
                  </Grid>
                </Box>
              </Box>
            </Box>
          </Paper>
        </Container>
      </ThemeProvider>
    </Container>
  );
}                                           