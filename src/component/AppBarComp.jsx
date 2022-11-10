import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";

const pages = [
  "Sports",
  "Odds",
  "Picks",
  "Legal Betting",
  "Sportsbook",
  "Education",
  "Resources",
];

function AppBarComp() {
  return (
    <>
      <AppBar
        position="static"
        sx={{ minWidth: "100%", bgcolor: "#ffffff ", color: "#111111",mx:0,px:0 }}
      >
        <Container maxWidth="xl" sx={{ mx: 0, my: 1, px: 0, width: "100%" }}>
          <Toolbar sx={{ px: 0, margin: "auto", width: "inherit",display:"flex", justifyContent:"space-between" }}>
            <Box sx={{display:"flex",}}>
              <Box sx={{ flexGrow: 1, display: "block" }}>
                <Typography
                  variant="h4"
                  whiteSpace="nowrap"
                  component="a"
                  href="/"
                  sx={{
                    fontFamily: "arial",
                    fontWeight: 800,
                    p: 0,
                    letterSpacing: ".1rem",
                    color: "inherit",
                    textDecoration: "none",
                  }}
                >
                  ACTION
                </Typography>

                <IconButton
                  aria-label="upload picture"
                  component="label"
                  color="success"
                  size="small"
                  sx={{ verticalAlign: "baseline" }}
                >
                  <CheckCircleIcon />
                </IconButton>
              </Box>

              {/* ------------------------------ left complete ----------------------------- */}

              <Box
                sx={{ flexGrow: 1, display: { xs: "none", md: "flex" }, ml: 2 }}
              >
                {pages.map((page) => (
                  <Button
                    key={page}
                    size="small"
                    sx={{ m: 1, display: "block" }}
                  >
                    <Typography
                      variant="h6"
                      nowrap
                      sx={{
                        color: "#111111",
                        fontFamily: "arial",
                        fontWeight: "800",
                        textTransform: "capitalize",
                      }}
                      textAlign="center"
                    >
                      {page}
                    </Typography>
                  </Button>
                ))}
              </Box>
            </Box>

            <Box
              sx={{
                flexGrow: 0,
                right: 0,
                alignItem: "flex-end",
                display: { xs: "none", sm: "flex", md: "flex" },
              }}
            >
              <Button size="small" sx={{ m: 1, display: "block" }}>
                <Typography
                  variant="h6"
                  nowrap
                  sx={{
                    color: "#111111",
                    fontFamily: "arial",
                    fontWeight: "800",
                    textTransform: "capitalize",
                    minWidth: "max-content",
                  }}
                  textAlign="center"
                >
                  Log In
                </Typography>
              </Button>
              <Button variant="contained" disableElevation>
                <Typography
                  sx={{
                    fontWeight: "900",
                    wordSpacing: ".1rem",
                    letterSpacing: "2px",
                    minWidth: "max-content",
                    m: 0,
                    p: 0,
                    fontSize: { sm: "15px", md: "20px" },
                  }}
                  textAlign="center"
                >
                  TRY FOR FREE
                </Typography>
              </Button>
              <IconButton aria-label="last-icon" component="icon" size="large">
                <DescriptionOutlinedIcon sx={{ color: "black"}} />
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
}

export default AppBarComp;
