import React, {useState, useEffect} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import {red} from '@material-ui/core/colors';
import {Grid, IconButton} from '@material-ui/core';
import CardActions from '@material-ui/core/CardActions';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Collapse from '@material-ui/core/Collapse';
import {fetchComments} from "../ustils/api/placeholder-api";
import clsx from "clsx";


const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: 50,
        maxWidth: 600,
        minWidth: 600,
        minHeight: 400,
        textAlign: 'center',
        justifyContent: 'center',
        alignContent: 'center',
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: red[500],
    },
}));


const PostViewing = ({posts, users, match}) => {
    const id = match.params.postId
    const post = posts.find((post) => String(post.id) === String(id)) || {};
    const user = users[post.userId] || {};
    const {name = '', email = 'emal@email.com', phone} = user;
    const [comments, setComments] = useState([]);


    useEffect(async () => {
        const commentsResponse = await fetchComments(id)


        setComments(commentsResponse)
    }, [id])
    const classes = useStyles();

    return (
        <Grid container justify='center' alignItems='center'>
            <Card className={classes.root}>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        author info
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        <b>author name:</b> {name}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        <b> author email: </b>{email}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        <b> author phone:</b> {phone}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        <b> desc:</b> {post.title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        <b> desc:</b> {post.body}
                    </Typography>
                    <h4>Comments</h4>


                    {
                        comments.map(comment => {
                                return (
                                    <div>
                                        <Typography paragraph>
                                            <b>author comment:</b> {comment.name}
                                        </Typography>
                                        <Typography >
                                            <b>email: </b>{comment.email}
                                        </Typography>

                                        <Typography variant="body2" color="textSecondary" component="p">
                                            <b> comment: </b>{comment.body}
                                        </Typography>

                                    </div>
                                )
                            }
                        )
                    }

                </CardContent>
            </Card>
        </Grid>
    )
}
export default PostViewing;