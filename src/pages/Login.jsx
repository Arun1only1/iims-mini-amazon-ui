import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  TextField,
  Typography,
} from "@mui/material";
import { Formik } from "formik";
import React from "react";
import { Link } from "react-router";
import * as yup from "yup";

const Login = () => {
  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validationSchema={yup.object({
        email: yup
          .string()
          .email("Must be a valid email")
          .required("Email is required.")
          .trim()
          .lowercase(),
        password: yup.string().required("Password is required.").trim(),
      })}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {(formik) => {
        return (
          <form
            onSubmit={formik.handleSubmit}
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: "2rem",
              width: 350,
              boxShadow:
                "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
              padding: "1rem 1rem 5px 1rem",
            }}
          >
            <Typography variant="h5">Login</Typography>

            <FormControl fullWidth>
              <TextField
                required
                label="Email"
                {...formik.getFieldProps("email")}
              />

              {formik.touched.email && formik.errors.email ? (
                <FormHelperText error>{formik.errors.email}</FormHelperText>
              ) : null}
            </FormControl>

            <FormControl fullWidth>
              <TextField
                required
                label="Password"
                {...formik.getFieldProps("password")}
              />

              {formik.touched.password && formik.errors.password ? (
                <FormHelperText error>{formik.errors.password}</FormHelperText>
              ) : null}
            </FormControl>

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: "10px",
                width: "100%",
              }}
            >
              <Button
                fullWidth
                variant="contained"
                color="warning"
                type="submit"
              >
                submit
              </Button>

              <Link
                to="/register"
                style={{
                  color: "orangered",
                  textDecoration: "none",
                }}
              >
                New here? Register
              </Link>
            </Box>
          </form>
        );
      }}
    </Formik>
  );
};

export default Login;
