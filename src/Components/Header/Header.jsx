import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
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

  // function to toggle aria-expanded attribute
  // on a button that controls expandable content
  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  const links = [
    <Link to="/Forms">Forms</Link>,
    <Link to="/Tables">Tables</Link>,
    <Link to="/View1">Tooltips</Link>,
    <Link to="/View1">Cards</Link>,
    <Link to="/View1">Carousels</Link>
  ];

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="Website home link"
            sx={{ mr: 2 }}
          >
            <HomeRoundedIcon />
          </IconButton>
          <nav
            aria-label='primary'
          >
            <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
              Accessibility Examples
              <IconButton
                onClick={toggleExpand}
                aria-expanded={expanded} // Setting the aria-expanded attribute
                aria-controls="link-list"
              >
                {expanded ? <ExpandMoreIcon /> : <ExpandLessIcon />}
              </IconButton>
            </Typography>
          </nav>
        </Toolbar>
      </AppBar>
      <Paper
        id="link-list"
        sx={{
          position: 'absolute',
          marginLeft: '300px'
        }}
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