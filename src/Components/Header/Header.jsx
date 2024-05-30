import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import Paper from '@mui/material/Paper';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

export default function Header() {
 
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
          <nav
            aria-label='primary'
          >
            <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
              <a href='/' style={{textDecoration: 'none', color: 'inherit' }}>
              Accessibile Web Components
              </a>
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