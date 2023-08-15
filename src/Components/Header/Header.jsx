import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
// import MenuList from '@mui/material/MenuList';
// import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import Paper from '@mui/material/Paper';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

export default function ButtonAppBar() {
  const [expanded, setExpanded] = useState(false)

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  const links = [
<Link to="/View1">View 1</Link>,
'Link 2',
'Link 3',
'Link 4'
  ];

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
            aria-controls="link-list"
            >
              {expanded ? <ExpandMoreIcon /> : <ExpandLessIcon />}
          </IconButton>
          </Typography>
        </Toolbar>
      </AppBar>
      <Paper
        id="link-list"
      >
      {expanded && (
        <List>
          {links.map((link, index) => (
            <ListItem key={index}>
              <ListItemText primary={link} />
            </ListItem>
          ))}
          </List> 
      )}
      </Paper>
      </Box>
  );
}