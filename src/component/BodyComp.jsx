import React from "react";
import {
  Grid,
  Card,
  Box,
  Button,
  Typography,
  Autocomplete,
  Divider,
  TextField,
  List,
  ListItem,
  ListItemText,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import TuneIcon from "@mui/icons-material/Tune";
function createData(
  SCHEDULED,
  OPEN,
  BESTODDS,
  POINTSBET,
  BETMGM,
  SPORTSBOOK,
  FANDUEL,
  DRAFTSKINGS,
  BETRIVERS
) {
  return {
    SCHEDULED,
    OPEN,
    BESTODDS,
    POINTSBET,
    BETMGM,
    SPORTSBOOK,
    FANDUEL,
    DRAFTSKINGS,
    BETRIVERS,
  };
}

const rows = [
  createData(
    "Raven 27",
    "+3.5",
    "+2.5",
    "+2.5",
    "+2.5",
    "+2",
    "+2.5",
    "+1.5",
    "+2"
  ),
  createData(
    "Raven 27",
    "+3.5",
    "+2.5",
    "+2.5",
    "+2.5",
    "+2",
    "+2.5",
    "+1.5",
    "+2"
  ),
  createData("Final"),
  createData(
    "Raven 27",
    "+3.5",
    "+2.5",
    "+2.5",
    "+2.5",
    "+2",
    "+2.5",
    "+1.5",
    "+2"
  ),
  createData(
    "Raven 27",
    "+3.5",
    "+2.5",
    "+2.5",
    "+2.5",
    "+2",
    "+2.5",
    "+1.5",
    "+2"
  ),
  createData("Final"),
  createData(
    "Raven 27",
    "+3.5",
    "+2.5",
    "+2.5",
    "+2.5",
    "+2",
    "+2.5",
    "+1.5",
    "+2"
  ),
  createData(
    "Raven 27",
    "+3.5",
    "+2.5",
    "+2.5",
    "+2.5",
    "+2",
    "+2.5",
    "+1.5",
    "+2"
  ),
  createData("Final"),
  createData(
    "Raven 27",
    "+3.5",
    "+2.5",
    "+2.5",
    "+2.5",
    "+2",
    "+2.5",
    "+1.5",
    "+2"
  ),
  createData(
    "Raven 27",
    "+3.5",
    "+2.5",
    "+2.5",
    "+2.5",
    "+2",
    "+2.5",
    "+1.5",
    "+2"
  ),
  createData("Final"),
  createData(
    "Raven 27",
    "+3.5",
    "+2.5",
    "+2.5",
    "+2.5",
    "+2",
    "+2.5",
    "+1.5",
    "+2"
  ),
  createData(
    "Raven 27",
    "+3.5",
    "+2.5",
    "+2.5",
    "+2.5",
    "+2",
    "+2.5",
    "+1.5",
    "+2"
  ),
  createData("Final"),
  createData(
    "Raven 27",
    "+3.5",
    "+2.5",
    "+2.5",
    "+2.5",
    "+2",
    "+2.5",
    "+1.5",
    "+2"
  ),
  createData(
    "Raven 27",
    "+3.5",
    "+2.5",
    "+2.5",
    "+2.5",
    "+2",
    "+2.5",
    "+1.5",
    "+2"
  ),
  createData("Final"),
  createData(
    "Raven 27",
    "+3.5",
    "+2.5",
    "+2.5",
    "+2.5",
    "+2",
    "+2.5",
    "+1.5",
    "+2"
  ),
  createData(
    "Raven 27",
    "+3.5",
    "+2.5",
    "+2.5",
    "+2.5",
    "+2",
    "+2.5",
    "+1.5",
    "+2"
  ),
  createData("Final"),
  createData(
    "Raven 27",
    "+3.5",
    "+2.5",
    "+2.5",
    "+2.5",
    "+2",
    "+2.5",
    "+1.5",
    "+2"
  ),
  createData(
    "Raven 27",
    "+3.5",
    "+2.5",
    "+2.5",
    "+2.5",
    "+2",
    "+2.5",
    "+1.5",
    "+2"
  ),
  createData("Final"),
  createData(
    "Raven 27",
    "+3.5",
    "+2.5",
    "+2.5",
    "+2.5",
    "+2",
    "+2.5",
    "+1.5",
    "+2"
  ),
  createData(
    "Raven 27",
    "+3.5",
    "+2.5",
    "+2.5",
    "+2.5",
    "+2",
    "+2.5",
    "+1.5",
    "+2"
  ),
  createData("Final"),
];
function Main() {
  const temporaryArray = [];
  const tempTeams = [
    "Cincinnati Bengals",
    "Los Angeles Rams",
    "San Francisco 49ers",
    "Kansas City Chiefs",
  ];
  const first = [];
  return (
    <>
      <Box
        sx={{
          mx: 2,
          mb: 2,
          mt: 0,
          height: "auto",
          display: "flex",
          flexDirection: "column",
          alignItem: "left",
          justifyContent: "space-between",
        }}
      >
        <Typography
          variant="h4"
          sx={{ fontWeight: "900", fontFamily: "arial", mb: 2 }}
        >
          Sports Betting Odds
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
            gap: 2,
            mb: 2,
          }}
        >
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={first}
            sx={{ width: "500px" }}
            renderInput={(params) => (
              <TextField {...params} sx={{ fontWeight: 800 }} />
            )}
          />
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={first}
            sx={{ width: "500px" }}
            renderInput={(params) => <TextField {...params} />}
          />
        </Box>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={first}
            sx={{ width: "700px" }}
            renderInput={(params) => <TextField {...params} />}
          />
          <Button
            disableElevation
            size="large"
            variant="contained"
            sx={{
              border: "1px solid rgba(0,0,0,.3)",
              bgcolor: "white",
              color: "inherit",
              "&:hover": { bgcolor: "white" },

              py: 1,
              px: 4,
            }}
            startIcon={<TuneIcon />}
          >
            <Typography
              variant="h6"
              sx={{
                fontWeight: "900",
                textTransform: "none",
              }}
            >
              Odds Settings
            </Typography>
          </Button>
        </Box>
      </Box>
      <Grid container spacing={1}>
        <Grid item md={9}>
          <Card
            variant="outlined"
            sx={{ maxHeight: "75vh", overflowY: "scroll" }}
          >
            <Table>
              <TableHead sx={{ fontWeight: "900" }}>
                <TableRow>
                  <TableCell
                    sx={{ fontWeight: "900", fontSize: "1rem" }}
                    align="left"
                  >
                    SCHEDULED
                  </TableCell>
                  <TableCell
                    sx={{ fontWeight: "900", fontSize: "1rem" }}
                    align="right"
                  >
                    OPEN
                  </TableCell>
                  <TableCell
                    sx={{ fontWeight: "900", fontSize: "1rem" }}
                    align="right"
                  >
                    BEST ODDS
                  </TableCell>
                  <TableCell
                    sx={{ fontWeight: "900", fontSize: "1rem" }}
                    align="right"
                  >
                    POINTSBET
                  </TableCell>
                  <TableCell
                    sx={{ fontWeight: "900", fontSize: "1rem" }}
                    align="right"
                  >
                    BETMGM
                  </TableCell>
                  <TableCell
                    sx={{ fontWeight: "900", fontSize: "1rem" }}
                    align="right"
                  >
                    SPORTSBOOK
                  </TableCell>
                  <TableCell
                    sx={{ fontWeight: "900", fontSize: "1rem" }}
                    align="right"
                  >
                    FANDUEL
                  </TableCell>
                  <TableCell
                    sx={{ fontWeight: "900", fontSize: "1rem" }}
                    align="right"
                  >
                    DRAFTSKINGS
                  </TableCell>
                  <TableCell
                    sx={{ fontWeight: "900", fontSize: "1rem" }}
                    align="right"
                  >
                    BETRIVERS
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow
                    key={row.SCHEDULED}
                    sx={{
                      "&:last-child td, &:last-child th": { border: 0 },
                      "&:nth-child(3n) th": {
                        textAlign: "left",
                        fontWeight: "normal",
                      },
                      fontWeight: "900",
                    }}
                  >
                    <TableCell
                      component="th"
                      scope="row"
                      align="right"
                      sx={{ fontWeight: "900" }}
                    >
                      {row.SCHEDULED}
                    </TableCell>
                    <TableCell
                      align="right"
                      sx={{ fontWeight: "900", color: "grey" }}
                    >
                      {row.OPEN}
                    </TableCell>
                    <TableCell align="right" sx={{ fontWeight: "900" }}>
                      {row.BESTODDS}
                    </TableCell>
                    <TableCell align="right" sx={{ fontWeight: "900" }}>
                      {row.POINTSBET}
                    </TableCell>
                    <TableCell align="right" sx={{ fontWeight: "900" }}>
                      {row.BETMGM}
                    </TableCell>
                    <TableCell align="right" sx={{ fontWeight: "900" }}>
                      {row.SPORTSBOOK}
                    </TableCell>
                    <TableCell align="right" sx={{ fontWeight: "900" }}>
                      {row.FANDUEL}
                    </TableCell>
                    <TableCell align="right" sx={{ fontWeight: "900" }}>
                      {row.DRAFTSKINGS}
                    </TableCell>
                    <TableCell align="right" sx={{ fontWeight: "900" }}>
                      {row.BETRIVERS}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Card>
        </Grid>
        <Grid item md={3}>
          <Card fullWidth variant="outlined" sx={{ mx: 2 }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-evenly",
                alignItem: "center",
                gap: 2,
                px: 2,
                m: 2,
              }}
            >
              <Typography
                variant="h5"
                sx={{
                  fontFamily: "Helvetica,Arial,sans-serif",
                  fontWeight: "900",
                  textAlign: "center",
                  my: 2,
                  p: 0,
                }}
              >
                Promotions
              </Typography>
              <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={temporaryArray}
                sx={{ width: 200, textAlign: "center", alignitem: "center" }}
                renderInput={(params) => <TextField {...params} />}
              />
            </Box>
            <Divider />
            <Typography
              variant="h6"
              sx={{
                fontFamily: "arial",
                fontWeight: "900",
                mx: 1,
                px: 3,
                py: 2,
              }}
            >
              {" "}
              No promotions available.Try selecting a different locations.
            </Typography>
          </Card>
          <Card
            fullWidth
            variant="outlined"
            sx={{
              display: "flex",
              flexDirection: "column",
              mx: 2,
              mt: 3,
              borderRadius: "25px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItem: "center",
                gap: 2,
                px: 2,
                m: 2,
              }}
            >
              <Typography
                variant="h5"
                sx={{ fontFamily: "arial", fontWeight: "900" }}
              >
                NFL Teams
              </Typography>
              <Button variant="text" sx={{ fontWeight: "900" }}>
                All Teams
              </Button>
            </Box>
            <List sx={{ display: "flex", flexDirection: "column", ml: 4 }}>
              {tempTeams.map((team) => (
                <ListItem>
                  <ListItemText primary={team} />
                </ListItem>
              ))}
            </List>
          </Card>
        </Grid>
      </Grid>
    </>
  );
}

export default Main;
