import { Box, Typography } from "@mui/material";
import { FC } from "react";

const Footer: FC = () => {
  return (
    <Box
      sx={{
        position: "fixed",
        bottom: 0,
        left: 0,
        width: "100%",
        py: 2,
        backgroundColor: "#f5f5f5",
        color: "#333",
        textAlign: "center",
      }}
    >
      <Typography variant="body2" component="p" color="inherit">
       Copyright &copy; {new Date().getFullYear()} EXL Service. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
