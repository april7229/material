import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Grid, Paper, Typography, List} from 'material-ui';
import { ListItem, ListItemText } from 'material-ui/List';

const styles = {
    Paper: { padding: 20, marginTop: 10, marginBottom: 10 }
}

export default ({exercises})=>
    
    
    <MuiThemeProvider>
        <Grid container >
            <Grid item sm>
                <Paper style={styles.Paper}>
                {exercises.map( ( [ group, exercises ] ) =>
                    <Typography
                        variant="headline"
                        styles={{ textTransform: 'capitalize' }}
                    >
                        {group}

                        </Typography>

                    <List component="nav">
                        <ListItem button>
                            <ListItemText primary="Trash" />
                        </ListItem>
                        <ListItem button component="a" href="simple-list">
                            <ListItemText primary="Spam" />
                        </ListItem>
                    </List>
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
