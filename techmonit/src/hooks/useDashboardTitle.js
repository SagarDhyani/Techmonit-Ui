import React from "react";
import { menuItems } from "../utils/constants";
import { useLocation } from "react-router-dom";

const formatTitle = (title) => {
  return title
    ?.split("_")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
};

const useDashboardTitle = () => {
  const location = useLocation();
  const splitPath = location.pathname.split("/");
  const currentPageTitle = splitPath[splitPath.length - 1];
  const formattedTitle = formatTitle(currentPageTitle);

  return { title: formattedTitle };
};

export default useDashboardTitle;
