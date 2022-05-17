import { Grid, TextField, Box, Collapse, Alert } from "@mui/material";
import ButtonLoading from "../../../../components/atoms/buttonLoading";
import TitlePage from "../../../../components/atoms/titlePage";
import DashboardLayout from "../../../../template/admin";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { connect } from "react-redux";
import { addUser } from "../../../../redux/action/user";

function FormUser(props) {
    const [message, setMessage] = useState("");
    const [status, setStatus] = useState("error");

    const navigate = useNavigate();
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        props
            .addUser({
                username: data.get("username"),
                password: data.get("password"),
                name: data.get("nama"),
                email: data.get("email"),
                role: data.get("role"),
                password_confrim: data.get("confirmPassword"),
            })
            .then((res) => {
                setMessage(res.data.message);
                setStatus("success");
                setTimeout(() => {
                    navigate("/pengguna");
                }, 1000);
            })
            .catch((err) => {
                setMessage("Pengguna gagal ditambahkan");
                setStatus("error");
                setMessage(err.response.data.message);
            });
    };

    return (
        <DashboardLayout
            main={
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <TitlePage icon="bxs:user" title="Form Pengguna" />
                    </Grid>
                    <Grid item xs={12}>
                        <Box
                            component="form"
                            onSubmit={handleSubmit}
                            sx={{
                                display: "flex",
                                p: { xs: 1, md: 3 },
                                bgcolor: "#fff",
                                borderRadius: 1,
                                flexDirection: "column",
                            }}
                        >
                            <Collapse in={message !== "" ? true : false}>
                                <Alert severity={status}>{message}</Alert>
                            </Collapse>
                            <TextField
                                fullwidth="true"
                                name="nama"
                                margin="normal"
                                variant="outlined"
                                label="Nama"
                                autoComplete="off"
                            />
                            <TextField
                                fullwidth="true"
                                name="username"
                                margin="normal"
                                variant="outlined"
                                label="Username"
                                autoComplete="off"
                            />
                            <TextField
                                fullwidth="true"
                                name="email"
                                margin="normal"
                                variant="outlined"
                                type="email"
                                label="Email"
                            />
                            <TextField
                                fullwidth="true"
                                name="role"
                                margin="normal"
                                variant="outlined"
                                label="Role"
                                autoComplete="off"
                            />
                            <TextField
                                fullwidth="true"
                                name="password"
                                margin="normal"
                                variant="outlined"
                                type="password"
                                label="password"
                                autoComplete="off"
                            />
                            <TextField
                                fullwidth="true"
                                name="confirmPassword"
                                margin="normal"
                                variant="outlined"
                                type="password"
                                label="confirm Password"
                                autoComplete="off"
                            />
                            <ButtonLoading
                                sx={{ mt: 3, mb: 2 }}
                                variant="contained"
                                statusLoading={props.loading}
                                type="submit"
                                fullwidth="true"
                                title="Submit"
                            />
                        </Box>
                    </Grid>
                </Grid>
            }
        />
    );
}

const reduxState = (state) => ({
    loading: state.isLoading,
});

const reduxDispatch = (dispatch) => ({
    addUser: (data) => dispatch(addUser(data)),
});

export default connect(reduxState, reduxDispatch)(FormUser);
