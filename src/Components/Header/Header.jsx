import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';


export default function ButtonAppBar() {
  const [expanded, setExpanded] = useState(false)

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="small"
            edge="start"
            color="inherit"
            aria-label="Website home link"
            sx={{ mr: 2 }}
          >
           <HomeRoundedIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Accessiblility Examples
            <IconButton
            onClick={toggleExpand}
            aria-expanded={expanded} // Setting the aria-expanded attribute
            >
              {expanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </IconButton>
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}