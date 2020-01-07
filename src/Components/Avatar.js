import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    large: {
        width: theme.spacing(6),
        height: theme.spacing(15),
    },
}));

export default function ImageAvatars(props) {
    const classes = useStyles();
    const { image_url } = props;
    return (
        <div>
            <img src={image_url} className={classes.large} />
        </div>
    );
}
