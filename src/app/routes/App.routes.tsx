import React from "react";
import {
  BrowserRouter as Container,
  Routes as Content,
  Navigate,
  Route,
} from "react-router-dom";
import { Blog, Home, Login } from "../pages";

export const AppRoutes = () => {
  return (
    <Container>
      <Content>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Content>
    </Container>
  );
};
