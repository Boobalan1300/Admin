
import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";
import Header from "../../SharedComponents/Header/Header";

export default function MainScreenLayout() {
  return (
    <Box sx={{ display: "flex", height: "100vh" }}>
      <Header />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          bgcolor: "#F4F5F7",
          p: 3,
          overflowY: "auto",
        }}
      >
        <Outlet />
      </Box>
    </Box>
  );
}
