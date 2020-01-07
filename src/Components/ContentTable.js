import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import ImageAvatars from './Avatar';


const useStyles = makeStyles({
    table: {
        minWidth: 650,

    },
    content: {
        padding: '20px 200px 0px 200px'
    }
});


const ContentTable = (props) => {
    const classes = useStyles();
    const { title, beers, goToDetail } = props

    return (

        <div className={classes.content}>
            <h1>{title}</h1>
            <TableContainer>
                <Table className={classes.table} size="small" aria-label="a dense table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Image</TableCell>
                            <TableCell align="right">Name</TableCell>
                            <TableCell align="right">Tag Line</TableCell>
                            <TableCell align="right">Volume</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {beers.map(beer => (
                            <TableRow key={beer.id} hover={true} onClick={() => goToDetail(beer)}>
                                <TableCell>
                                    <ImageAvatars image_url={beer.image_url} />
                                </TableCell>
                                <TableCell align="right">{beer.name}</TableCell>
                                <TableCell align="right">{beer.tagline}</TableCell>
                                <TableCell align="right">{`${beer.volume.value} ${beer.volume.unit}`}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>

    );
}
export default ContentTable