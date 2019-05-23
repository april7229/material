import React from 'react';
import { Paper, Tabs } from 'material-ui';
import { Tab } from 'material-ui/Tabs';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


export default ( { muscles })  =>
  <MuiThemeProvider>
  <Paper>
      <Tabs      
        value={0}
      indicatorColor="primary"
        centered
      >
        <Tab label="All" />
        {muscles.map(group =>
        <Tab label={group} />
        )}
        
    </Tabs>
    </Paper>
  </MuiThemeProvider>
