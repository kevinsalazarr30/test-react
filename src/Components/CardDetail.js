import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Fab from '@material-ui/core/Fab';
import ArrowBack from '@material-ui/icons/ArrowBack';
const useStyles = makeStyles({
    card: {
        maxWidth: 400,
        margin: '20px auto',
    },
    media: {
        height: 600,
        width: 150,
        margin: '20px auto'
    },
    fabIcon : {
        left : '48%',
        marginTop : 20
    }

});

export default function CardDetail(props) {
    const classes = useStyles();
    const { itemDetail , goToBack} = props
    return (
        <div>
            <Fab color="primary" aria-label="back" className = {classes.fabIcon} onClick = {goToBack}>
                <ArrowBack />
            </Fab>

            <Card className={classes.card}>

                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image={itemDetail.image_url}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {itemDetail.name}
                        </Typography>
                        <Typography gutterBottom variant="h6" component="h6">
                            Volume - {`${itemDetail.volume.value} ${itemDetail.volume.unit}`}
                            Tag line - {itemDetail.tagline} <br />
                            Attenuation level - {itemDetail.attenuation_level}<br />
                            Ph - {itemDetail.ph}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {itemDetail.description}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </div>


    );
}