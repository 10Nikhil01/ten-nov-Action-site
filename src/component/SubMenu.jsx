import React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import {Box,Typography,Button} from "@mui/material";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import TuneIcon from "@mui/icons-material/Tune";


// line 12-43 are needed for tabs basic 
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function SubMenu() {

  
  const [value, setValue] = React.useState(0);
  
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const menus = [
    { count: 0, names: "Public Betting" },
    { count: 1, names: "PRO Report" },
    { count: 2, names: "PRO Projections" },
    { count: 3, names: "Game Odds" },
    { count: 4, names: "Future Odds" },
    { count: 5, names: "NFL" },
    { count: 6, names: "NCAAF" },
    { count: 7, names: "NBA" },
    { count: 8, names: "NCAAB" },
    { count: 9, names: "Golf" },
    { count: 10, names: "UFC" },
    { count: 11, names: "Soccer" },
    { count: 12, names: "MLB" },
    { count: 13, names: "NHL" },
  ];
  const first = ["NCAAF", "NCAAB", "NBA", "UFC"];
  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItem: "center",
          justifyContent: "center",
          flexDirection: "column",
          width: "100%",
        }}
      >
        <Box
          sx={{ borderBottom: 1, borderColor: "divider", ml: { md: "10px" } }}
        >
          <Tabs
            value={value}
            textColor="black"
            indicatorColor="primary"
            indicatorHeight="10px"
            onChange={handleChange}
            variant="scrollable"
            scrollButtons="auto"
            aria-label="basic tabs example"
          >
            {menus.map((menu) => (
              <Tab
                label={menu.names}
                {...a11yProps(menu.count)}
                sx={{
                  fontWeight: "900",
                  color: "#000000",
                  fontSize: "1.1rem",
                  textTransform: "none",
                }}
              />
            ))}
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          PublicBetting
        </TabPanel>
        <TabPanel value={value} index={1}>
          PROReport 
        </TabPanel>
        <TabPanel value={value} index={2}>
          PROProjections 
        </TabPanel>
        <TabPanel value={value} index={3}>
        <Box
        sx={{
          mx: 2,
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
        </TabPanel>
        <TabPanel value={value} index={4}>
          FutureOdds 
        </TabPanel>
        <TabPanel value={value} index={5}>
          NFL 
        </TabPanel>
        <TabPanel value={value} index={6}>
          NCAAF 
        </TabPanel>
        <TabPanel value={value} index={7}>
          NBA 
        </TabPanel>
        <TabPanel value={value} index={8}>
          NCAAB 
        </TabPanel>
        <TabPanel value={value} index={9}>
          Golf 
        </TabPanel>
        <TabPanel value={value} index={10}>
          UFC 
        </TabPanel>
        <TabPanel value={value} index={11}>
          Soccer 
        </TabPanel>
        <TabPanel value={value} index={12}>
          MLB 
        </TabPanel>
        <TabPanel value={value} index={13}>
          NHL 
        </TabPanel>
      </Box>
    </>
  );
}

export default SubMenu;
