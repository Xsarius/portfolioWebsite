import { Box, Button, TextField, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import MuiPhoneNumber from "material-ui-phone-number";
import "./ContactForm.scss";

const ContactForm = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
    });
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
                  color="secondary"
                  label="First Name"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  color="secondary"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <MuiPhoneNumber
                  defaultCountry={"us"}
                  disableAreaCodes
                  inputClass="phone-input"
                  dropdownClass="phone-dropdown"
                  color="secondary"
                  preferredCountries={"en"}
                  variant="outlined"
                  label="Phone number"
                  fullWidth
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
                  color="secondary"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  label="Message"
                  id="msg"
                  color="secondary"
                  variant="outlined"
                  fullWidth
                  multiline
                  minRows={6}
                  className="message-input"
                  type="text"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              color="secondary"
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Send message
            </Button>
          </Box>
        </Box>
    </div>
  );
};

export default ContactForm;
