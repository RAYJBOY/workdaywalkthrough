import {
  Button,
  FormControl,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";

const HelpAndContactForm = () => {
  return (
      <div
        style={{
          marginTop: "10px",
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr 1fr",
          gap: "5%",
        }}
      >

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gridColumn: "span 4",
          }}
        >
          <Typography variant="h3">Contact Us</Typography>
        </div>

        <div
          style={{
            display: "flex",
            gridColumn: "span 4",
          }}
        >
            <Typography variant="h5">Please use the form below to contact us about any issues you may have.</Typography>
        </div>

        <TextField
          required
          id="outline-required"
          label="Name"
          placeholder="Enter your name"
          margin="normal"
        />

        <TextField
          required
          id="outline-required"
          label="Email Address"
          placeholder="Enter email address"
          margin="normal"
        />

        <TextField
          required
          label="Message"
          placeholder="Message"
          margin="normal"
          multiline
          style={{ gridColumn: "span 4" }}
        />

        <div style={{ gridRowStart: 5 }}>
          <Button variant="contained" size="large">
            Submit
          </Button>
        </div>
      </div>
  );
};

export default HelpAndContactForm;
