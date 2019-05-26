import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Grid, Paper, Typography} from 'material-ui';


const styles = {
    Paper: { padding: 20, marginTop: 10, marginBottom: 10 }
}

export default ({exercises})=>
    
    
    <MuiThemeProvider>
        <Grid container >
            <Grid item sm>
                <Paper style={styles.Paper}>
                    {exercises.map(( [ group, exercises ] ) =>
                        <Typography>
                            (group)
                        </Typography>
                    )}
                </Paper>
    </Grid>
                
            <Grid item sm>
                <Paper style={styles.Paper}>
            right Pane
                </Paper>
            </Grid>
            </Grid>
        
        
    </MuiThemeProvider >
