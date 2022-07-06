import React from "react";
import {
  BrowserRouter as Container,
  Routes as Content,
  Navigate as Redirect,
  Route as Channel,
} from "react-router-dom";
import { Blog, Error, Home, Login } from "../pages";

export const AppRoutes = () => {
  return (
    <Container>
      <Content>
        <Channel path="/home" element={<Home />} />
        <Channel path="/login" element={<Login />} />
        <Channel path="/blog" element={<Blog />} />
        <Channel path="/404-not-found" element={<Error />} />
        <Channel path="*" element={<Redirect to="/404-not-found" />} />
      </Content>
    </Container>
  );
};
