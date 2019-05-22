import React from 'react';
import {Grid, Paper} from 'material-ui'

const styles = {
    Paper : {padding : 20, marginTop: 10, marginBottom: 10}
}

export default props =>
    <Grid container>
        <Grid item sm>
            <LeftPane styles={styles}/>
        </Grid>
    </Grid>
