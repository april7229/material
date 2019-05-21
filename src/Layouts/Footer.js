import React from 'react';
import { Paper, Tabs } from 'material-ui';
import { Tab } from 'material-ui/Tabs';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';



export default props =>
  <MuiThemeProvider>
  <Paper>
      <Tabs      
        value={0}
      indicatorColor="primary"
        centered
      >
      <Tab label="Item one" />
      <Tab label="Item two" />
      <Tab label="Item three" />
    </Tabs>
    </Paper>
  </MuiThemeProvider>
