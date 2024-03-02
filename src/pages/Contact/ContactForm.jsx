import {
  Box,
  Button,
  CircularProgress,
  TextField,
  Typography,
} from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import { useFormik } from "formik";
import * as Yup from "yup";
import Grid from "@mui/material/Unstable_Grid2";
import MuiPhoneNumber from "material-ui-phone-number-2";
import "./ContactForm.scss";
import { useEffect, useRef, useState } from "react";
import { Exception } from "sass";

const validationSchema = Yup.object({
  firstName: Yup.string().required("First Name is required"),
  lastName: Yup.string().required("Last Name is required"),
  phone: Yup.string().required("Phone is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  message: Yup.string().required("Message is required"),
});

const ContactForm = () => {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("stop");

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      message: "",
    },
    validationSchema: validationSchema,
  });

  const handleSubmit = async (event) => {
    event.preventDefault();

    let values = formik.values;
    setLoading(true);

    await fetch("http://localhost:8000/send_email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    })
    .then((res) => {
      if(res.status != 200)
      {
        setStatus("failed");
      }
      else {
        setStatus("success");
      }
      
      console.log(res);
    })
    .catch((err) => {
      setStatus("failed");
      console.log(err);
    });

    setLoading(false);
    
    setTimeout(() => {
      setStatus("stop");
    }, 2000);
  };

  return (
    <div className="form-container">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h5">
          Send me the message
        </Typography>
        <Box sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item="true" xs={12} sm={6}>
              <TextField
                name="firstName"
                fullWidth
                id="firstName"
                color="secondary"
                label="First Name"
                value={formik.values.firstName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.firstName}
              />
            </Grid>
            <Grid item="true" xs={12} sm={6}>
              <TextField
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                color="secondary"
                value={formik.values.lastName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.lastName}
              />
            </Grid>
            <Grid item="true" xs={12}>
              <MuiPhoneNumber
                defaultCountry={"us"}
                disableAreaCodes
                inputClass="phone-input"
                dropdownClass="phone-dropdown"
                color="secondary"
                preferredCountries={["en", "pl"]}
                variant="outlined"
                label="Phone number"
                id="phone"
                fullWidth
                value={formik.values.phone}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.phone}
              />
            </Grid>
            <Grid item="true" xs={12}>
              <TextField
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                color="secondary"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.email}
              />
            </Grid>
            <Grid item="true" xs={12}>
              <TextField
                label="Message"
                id="message"
                color="secondary"
                variant="outlined"
                fullWidth
                multiline
                minRows={6}
                className="message-input"
                value={formik.values.message}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.message}
              />
            </Grid>
          </Grid>
          <Button
            fullWidth
            color="secondary"
            variant="contained"
            sx={{ mt: 3, mb: 2, }}
            onClick={handleSubmit}
          >
            <Box>
              <CircularProgress
                className={`icon ${loading ? "visible" : ""}`}
                size={24}
              />
              <CheckIcon
                className={`icon ${status == "success" ? "visible" : ""}`}
                size={24}
              />
              <CloseIcon
                className={`icon ${status == "failed" ? "visible" : ""}`}
                size={24}
              />
            </Box>
            <Box>Send the message</Box>
          </Button>
        </Box>
      </Box>
    </div>
  );
};

export default ContactForm;
