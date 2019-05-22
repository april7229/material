import React from 'react';
import {  Paper } from 'material-ui';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Grid from '@material-ui/core/Grid';
     
   

export default props =>
    
    
    <MuiThemeProvider>
        <Grid container >
            <Grid item sm>
            <Paper style ={{padding:20, marginTop: 10, marginBottom: 10}} >
                Left Pane
            </Paper>
            </Grid>    
                

            <Grid  >
                <Paper styles={{ padding: 20,  marginTop: 10, marginBottom: 10}}>
                Right pane
                </Paper>
            </Grid>
            
        </Grid>
        
    </MuiThemeProvider >
