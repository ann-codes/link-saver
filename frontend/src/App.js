import React, { useEffect, useState, Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Switch, Route } from "react-router-dom";
import LoginHelperModal from "./components/LoginHelperModal";
import MessageBlock from "./components/MessageBlock";
import Navigation from "./components/Navigation";
import UsersList from "./components/UsersList";
import UserStats from "./components/UserStats";
import LoginForm from "./components/LoginForm";
import BlogList from "./components/BlogList";
import BlogPage from "./components/BlogPage";
import Footer from "./components/Footer";
import Error404 from "./components/Error404";
import { initBlogs } from "./reducers/blogReducer";
import { initUsers } from "./reducers/usersReducer";
import { setUserByLocalStorage } from "./reducers/loginReducer";
import { Container } from "@material-ui/core";
import "./App.css";

const App = () => {
  const [open, setOpen] = useState(true);
  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

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
          <Fragment>
            <LoginForm />
            <LoginHelperModal open={open} onCloseModal={onCloseModal} />
          </Fragment>
        ) : (
          <Fragment>
            <Navigation
              user={user}
              usersList={usersList}
              onOpenModal={onOpenModal}
            />
            <Switch>
              <Route exact path="/links" component={BlogList} />
              <Route exact path="/users" component={UsersList} />
              <Route exact path="/user/:id" component={UserStats} />
              <Route exact path="/blog/:id" component={BlogPage} />
              <Route exact path="/" component={UsersList} />
              <Route exact path="/404" component={Error404} />
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
