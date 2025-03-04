import React, { useState } from "react";
import {
  Avatar,
  Button,
  Container,
  IconButton,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { bgGradient } from "../../constants/color";
import { useInputValidation } from "6pp";
import { Navigate } from "react-router-dom";

const isAdmin = true;

const AdminLogin = () => {
  const secretKey = useInputValidation("");
  const submitHandler = () => {
    e.preventDefault();
    console.log("submit");
  };
  if (isAdmin) {
    return <Navigate to="/admin/dashboard" />;
  }
  return (
    <div
      style={{
        backgroundImage: bgGradient,
      }}
    >
      <Container
        component={"main"}
        maxWidth="xs"
        sx={{
          display: "flex",
          alignItems: "center",
          height: "100vh",
          justifyContent: "center",
        }}
      >
        <Paper
          elevation={3}
          sx={{
            padding: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {
            <>
              <Typography variant="h5">Admin Login</Typography>
              <form
                style={{
                  width: "100%",
                  marginTop: "1rem",
                }}
                onSubmit={submitHandler}
              >
                <TextField
                  required
                  fullWidth
                  label="Secret Key"
                  type="password"
                  variant="outlined"
                  margin="normal"
                  value={secretKey.value}
                  onChange={secretKey.changeHandler}
                />
                <Button
                  type="submit"
                  sx={{ marginTop: "1rem" }}
                  variant="contained"
                  color="primary"
                  fullWidth
                >
                  Login
                </Button>
              </form>
            </>
          }
        </Paper>
      </Container>
    </div>
  );
};

export default AdminLogin;
