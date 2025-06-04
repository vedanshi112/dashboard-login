
import React, { useState } from "react";
import {
  Menu,
  MenuItem,
  IconButton,
  Button,
  ListItemText,
  Box,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

 function YearDropdown() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedYear, setSelectedYear] = useState("2024");
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (year) => {
    if (year) setSelectedYear(year);
    setAnchorEl(null);
  };

  const years = ["2023", "2022", "2024"];

  return (
    <Box>
      <Button
        variant="contained"
        onClick={handleClick}
        sx={{
          backgroundColor: "#ffff",
          color:'#3E5C78',
          borderRadius: "20px",
          padding: "6px 14px",
          border:'1px solid #3E5C78',
          height:'30px',
          textTransform: "none",
          "&:hover": { backgroundColor: "#3E5C78", color:'white' },
        }}
        startIcon={<ArrowDropDownIcon />}
        endIcon={<CalendarTodayIcon />}
      >
        {selectedYear}
      </Button>

      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={() => handleClose(null)}
        PaperProps={{
          sx: {
            borderRadius: "10px",
            mt: 1,
            boxShadow: "0px 3px 8px rgba(0,0,0,0.1)",
            padding: "4px 0",
          },
        }}
      >
        {years.map((year) => (
          <MenuItem
            key={year}
            onClick={() => handleClose(year)}
            sx={{ justifyContent: "space-between", minWidth: 120 }}
          >
            <ListItemText primary={year} />
            <IconButton size="small" sx={{ color: "#3E5C78" }}>
              <EditIcon fontSize="small" />
            </IconButton>
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
}

export default YearDropdown;
