import React from "react";
import {
  BrowserRouter as Container,
  Routes as Content,
  Navigate as Redirect,
  Route as Channel,
} from "react-router-dom";
import { Blog, CardsPages, Error, Home, Login } from "../pages";
import { Header } from "../shared";

export const AppRoutes = () => {
  return (
    <Container>
      <Header />
      <Content>
        <Channel path="/" element={<Home />} />
        <Channel path="/cards/:id" element={<CardsPages />} />
        <Channel path="/login" element={<Login />} />
        <Channel path="/blog" element={<Blog />} />
        <Channel path="/404-not-found" element={<Error />} />
        <Channel path="*" element={<Redirect to="/404-not-found" />} />
      </Content>
    </Container>
  );
};
