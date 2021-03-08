import React, {useState, useEffect} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import {Grid} from '@material-ui/core';
import {fetchComments} from "../ustils/api/placeholder-api";


const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: 50,
        minWidth: 1700,
        height: 800
    },
    authorInfoContainer: {
        textAlign: "left",
        padding: "5px",

    },
    authorInfo: {
        color: "white",
        backgroundColor: "#290929",
        padding: "40px",
        borderRadius: "5px"
    },
    title: {
        margin: "1em"
    },
    comments: {
        textAlign: "left"
    },
    comment: {
        border: "1px solid #e8e8e8",
        borderRadius: "5px",
        margin: "5px",
        padding: "5px"
    }
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
    // {name}
    // Title: {post.title}
    // {post.body}
    // <b>Author name:</b> {name}
    // <b> Author email: </b>{email}
    // <b> Author phone:</b> {phone}
    return (
        <Grid container justify='center' alignItems='center'>
            <Card className={classes.root}>
                        <Typography className={classes.authorInfo} variant="body3" component="h1">
                            {name}
                        </Typography>
                <Typography className={classes.title} variant="body3" color="textPrimary" component="h3">
                    Title: {post.title}
                </Typography>
                <Typography variant="body1" color="textPrimary" component="p">
                    <b> Description post:</b> <br/>
                    {post.body}
                </Typography>
                <div className={classes.authorInfoContainer}>
                        <Typography variant="body3" color="textPrimary" component="p">
                            <b>Author name:</b> {name}
                        </Typography>
                        <Typography variant="body3" color="textPrimary" component="p">
                            <b> Author email: </b>{email}
                        </Typography>
                        <Typography variant="body3" color="textPrimary" component="p">
                            <b> Author phone:</b> {phone}
                        </Typography>
                </div>
                    <h4>Comments</h4>


                    {
                        comments.map(comment => {
                                return (
                                    <div className={classes.comments}>
                                        <Typography className={classes.comment}>
                                            <b>author comment:</b> {comment.name} <br/>
                                            <b>email: </b>{comment.email}
                                            <Typography  variant="body2"  component="p">
                                                <b> comment: </b>{comment.body}
                                            </Typography>
                                        </Typography>


                                    </div>
                                )
                            }
                        )
                    }


            </Card>
        </Grid>
    )
}
export default PostViewing;