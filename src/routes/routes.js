import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "../layouts/mainLayout";
import {
  HOME_PATH,
  NOTEBOOK_PATH,
  ABOUT_PATH,
  PROJECT_PATH,
  CONTACT_PATH,
  STACK_PATH,
} from "../components/constants";
import HomeComp from "../pages/home/home";
import AboutComp from "../pages/about/about";
import ContactComp from "../pages/contact/contact";
import NotebookComp from "../pages/notebook/noteBook";
import ProjectComp from "../pages/projects/projects";
import TechStackComp from "../pages/teckStack/teckStack";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomeComp />} />
          <Route path={HOME_PATH} element={<HomeComp />} />
          <Route path={ABOUT_PATH} element={<AboutComp />} />
          <Route path={PROJECT_PATH} element={<ProjectComp />} />
          <Route path={NOTEBOOK_PATH} element={<NotebookComp />} />
          <Route path={STACK_PATH} element={<TechStackComp />} />
          <Route path={CONTACT_PATH} element={<ContactComp />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
