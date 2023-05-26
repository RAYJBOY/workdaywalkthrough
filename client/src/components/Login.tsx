import React, { useState } from "react";
import { Dialog, DialogTitle, DialogContent, Button, TextField, Box } from "@mui/material";

type AuthModalProps = {
  open: boolean;
  handleClose: () => void;
};

const AuthModal: React.FC<AuthModalProps> = ({ open, handleClose }) => {
  const [isSignUp, setIsSignUp] = useState(false);

  const switchMode = () => {
    setIsSignUp((prevIsSignUp) => !prevIsSignUp);
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>{isSignUp ? "Sign Up" : "Sign In"}</DialogTitle>
      <DialogContent>
        <TextField
          required
          label="Username"
          variant="outlined"
          fullWidth
          margin="normal"
        />
        {isSignUp && (
          <TextField
          required type="email"
          label="Email"
          variant="outlined"
          fullWidth
          margin="normal"
        />
        )}
        <TextField
          required type="password"
          label="Password"
          variant="outlined"
          fullWidth
          margin="normal"
        />
        {isSignUp && (
          <TextField 
            required type="password"
            label="Confirm Password"
            variant="outlined"
            fullWidth
            margin="normal"
          />
        )}
        <Box sx={{ mt: 2 }}>
          <Button variant="contained" color="primary" fullWidth>
            {isSignUp ? "Sign Up" : "Sign In"}
          </Button>
          {!isSignUp && (
            <Button
              color="secondary"
              fullWidth
              onClick={() => console.log("Reset Password Clicked")}
            >
                Reset Password
            </Button>
          )}
        </Box>
        <Box sx={{ mt: 2 }}>
          <Button onClick={switchMode} fullWidth>
            {isSignUp ? "Already have an account? Sign In" : "Don't have an account? Sign Up"}
          </Button>
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default AuthModal;
