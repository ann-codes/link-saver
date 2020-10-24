import React, { useEffect, Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Switch, Route } from "react-router-dom";
import MessageBlock from "./components/MessageBlock";
import Navigation from "./components/Navigation";
import UsersList from "./components/UsersList";
import UserStats from "./components/UserStats";
import LoginForm from "./components/LoginForm";
import BlogList from "./components/BlogList";
import BlogPage from "./components/BlogPage";
import Footer from "./components/Footer";
import { initBlogs } from "./reducers/blogReducer";
import { initUsers } from "./reducers/usersReducer";
import { setUserByLocalStorage } from "./reducers/loginReducer";
import { Container } from "@material-ui/core";
import "./App.css";

const App = () => {
  const user = useSelector((state) => state.user);
  const blogs = useSelector((state) => state.blogs);
  const usersList = useSelector((state) => state.usersList);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initBlogs());
    dispatch(initUsers());
    dispatch(setUserByLocalStorage());
  }, [dispatch, blogs.length]);

  return (
    <Fragment>
      <Container maxWidth="md">
        <h1>Link Saver</h1>
        <MessageBlock />
        {!user.token ? (
          <LoginForm />
        ) : (
          <Fragment>
            <Navigation user={user} usersList={usersList} />
            <Switch>
              <Route exact path="/blog-links" component={BlogList} />
              <Route exact path="/users" component={UsersList} />
              <Route exact path="/user/:id" component={UserStats} />
              <Route exact path="/blog/:id" component={BlogPage} />
              <Route exact path="/" component={UsersList} />
            </Switch>
          </Fragment>
        )}
      </Container>
      <hr />
      <hr />
      <hr />
      <hr />
      <hr />
      <Footer />
    </Fragment>
  );
};

export default App;
