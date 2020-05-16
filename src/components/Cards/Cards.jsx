import React from 'react';
import {Card, CardContent, Typography, Grid} from '@material-ui/core'
import styles from './Cards.module.css'

const Cards = ( {data: {confirmed, recovered, deaths, lastUpdate} } ) => {
    
    if(!confirmed){
        return 'Loading...';
    }

    return(
        <div className={styles.container}>
            <Grid container spacing={3} justify="center">
                <Grid item component={Card}>
                    <CardContent>
                        <Typography color="textSecondary" guttorBottom>Infected</Typography>
                        <Typography variant="h5">{confirmed.value}</Typography> 
                        <Typography color="textSecondary">Last Update</Typography>
                        <Typography color="body2">Number of Active Cases</Typography> 
                    </CardContent>
                </Grid>

                <Grid item component={Card}>
                    <CardContent>
                        <Typography color="textSecondary" guttorBottom>Recovered</Typography>
                        <Typography variant="h5">{recovered.value}</Typography> 
                        <Typography color="textSecondary"> REAL DATE</Typography>
                        <Typography color="body2">Number of Recoveries</Typography> 
                    </CardContent>
                </Grid>

                <Grid item component={Card}>
                    <CardContent>
                        <Typography color="textSecondary" guttorBottom>Deaths</Typography>
                        <Typography variant="h5">{deaths.value}</Typography> 
                        <Typography color="textSecondary"> REAL DATE</Typography>
                        <Typography color="body2">Number of Deaths</Typography> 
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    )
}

export default Cards