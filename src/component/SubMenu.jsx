import React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { Box, Typography } from "@mui/material";

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
          sx={{ borderBottom: 1, borderColor: "divider", ml: { md: "10px" },mb:2 }}
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
        
      </Box>
    </>
  );
}

export default SubMenu;
