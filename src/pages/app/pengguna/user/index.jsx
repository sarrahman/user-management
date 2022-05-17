import { Grid, Box, Typography, Divider } from "@mui/material";
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import IconButton from "../../../../components/atoms/iconButton";
import TitlePage from "../../../../components/atoms/titlePage";
import TableUser from "../../../../components/molecules/table/tableUser";
import { deleteUser, getUsers } from "../../../../redux/action/user";
import DashboardLayout from "../../../../template/admin";
import Lottie from "react-lottie-player/dist/LottiePlayerLight";
import nodata from "../../../../assets/nodata.json";
import SnackNotif from "../../../../components/atoms/snackNotif";
// import AlertDialog from "../../../../components/atoms/dialogAlert";

function Users(props) {
    const navigate = useNavigate();
    const [snack, setSnack] = useState({
        status: "",
        message: "",
        open: false,
    });
    const [data, setData] = useState([]);

    useEffect(() => {
        props.getUsers()
            .then((res) => {
                setData(res.data.data);
            })
            .catch((err) => {
                console.log(err.response.data.message);
                console.log(err)
            });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const handleRemove = (id) => {
        const confirm = window.confirm("Apakah anda yakin ingin menghapus data ini?");
        if (confirm) {
            props.deleteUser(id)
                .then((res) => {
                    setData(data.filter((item) => item.id !== id));
                    setSnack({
                        status: "success",
                        message: res.data.message,
                        open: true,
                    });
                })
                .catch((err) => {
                    console.log(err.response.data.message);
                    console.log(err)
                });
        }
    }

    return (
        <>
            <DashboardLayout main={
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <TitlePage icon="bxs:user" title="Pengguna" />
                    </Grid>
                    <Grid item xs={12}>
                        <Box sx={{
                            bgcolor: "background.paper",
                            p: { xs: 1, md: 3 },
                            borderRadius: 2,
                        }}>
                            <Box sx={{
                                display: "flex",
                                justifyContent: "space-between",
                            }}>
                                <Typography variant="h6">
                                    Daftar Pengguna
                                </Typography>
                                <IconButton onClick={() => navigate('form')} titleTooltip="tambah pengguna baru" icon="ant-design:user-add-outlined" title="Tambah Pengguna" size="small" />
                            </Box>
                            <Divider sx={{
                                mt: 2,
                                mb: 2
                            }} />
                            <Box>
                                {
                                    data.length > 0 ? (
                                        <TableUser onRemove={handleRemove} data={data} />
                                    ) :
                                        <Box
                                            sx={{
                                                display: "flex",
                                                justifyContent: "center",
                                                alignItems: "center",
                                            }}
                                        >
                                            <Box sx={{ p: { xs: 1, md: 2 }, m: { xs: 1, md: 2 } }}>
                                                <Typography sx={{ textAlign: "center" }} variant="h6">
                                                    Tidak Ada Data
                                                </Typography>
                                                <Lottie
                                                    loop
                                                    animationData={nodata}
                                                    play
                                                    style={{ width: "100%", height: "300px" }}
                                                />
                                            </Box>
                                        </Box>
                                }
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            } />
            <SnackNotif
                status={snack.status}
                message={snack.message}
                open={snack.open}
            />
        </>
    )
}

const reduxState = (state) => ({
    loading: state.isLoading,
})

const reduxDispatch = (dispatch) => ({
    getUsers: () => dispatch(getUsers()),
    deleteUser: (id) => dispatch(deleteUser(id)),
})

export default connect(reduxState, reduxDispatch)(Users);