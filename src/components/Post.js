import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import {Grid} from '@material-ui/core';
import {NavLink} from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: 50,
        maxWidth: 400,
        minWidth: 400,
        minHeight: 250,
        textAlign: 'center',
        justifyContent: 'center',
        alignContent: 'center',
    },
    userName: {
        backgroundColor: "black",
    },
    linkToPost: {
        color: "white",
        textDecoration: "none"
    }
}));

const Post = ({post, user}) => {
    const classes = useStyles();

    return (
        <Grid container justify='center' alignItems='center'>

            <Card className={classes.root}>
                <CardContent>
                    <Typography>
                        <b>TITLE POST</b>
                    </Typography>
                    {post.title}
                    <Typography variant="body3" color="textPrimary" component="p">
                        DESCRIPTION POST: <Typography color="textSecondary">{post.body}</Typography>
                    </Typography>
                </CardContent>
                <CardContent>
                    <Typography className={classes.userName}>
                        <NavLink className={classes.linkToPost} to={`/post/${post.id}`}>{user.name}</NavLink>
                    </Typography>
                </CardContent>
            </Card>
        </Grid>
    );
}
export default Post;