import './App.css';
import Header from './components/Header';
import Posts from './components/Posts';
import {BrowserRouter, NavLink, Route, Switch} from 'react-router-dom';
import User from './components/User';
import {useEffect, useState} from "react";
import {fetchComments, fetchPosts, fetchUsers} from "./ustils/api/placeholder-api";
import PostViewing from "./components/PostViewing";

function App(props) {

    const [posts, setPosts] = useState([]);

    const [users, setUsers] = useState({})
    useEffect (async () => {
        const obj = {}
        const postsResponse = await fetchPosts()
        const usersResponse = await fetchUsers()

        for (let user of usersResponse) {
            obj[user.id] = user
        }


        setUsers(obj)
        setPosts(postsResponse)
    }, [])
     return (
        <div className="App">

            <BrowserRouter>
                <Header />
                <Switch>
                    <Route path={ '/posts'}
                           render={() => <Posts posts={posts} users={users} />}/>

                    <Route path={`/post/:postId`}
                           render={(props) => <PostViewing {...props} users={users} posts={posts}/>}/>
                </Switch>


            </BrowserRouter>
        </div>
    );
}

export default App;
