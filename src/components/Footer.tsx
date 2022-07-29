import { memo } from "react";
import { Box, Stack } from "@mui/material";

const Logo =
  "https://github.com/adrianhajdin/project_fitness_app/blob/main/src/assets/images/Logo-1.png?raw=true";

const Footer = () => (
  <Box mt="80px" bgcolor="#FFF3F4">
    <Stack
      gap="40px"
      sx={{ alignItems: "center" }}
      flexWrap="wrap"
      px="40px"
      pt="24px"
    >
      <img src={Logo} alt="logo" style={{ width: "200px", height: "41px" }} />
    </Stack>
  </Box>
);

export default memo(Footer);
