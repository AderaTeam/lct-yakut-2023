import {
  ASSISTANT_ROUTE,
  COMMUNITY_ROUTE,
  EDUCATIONS_ROUTE,
  LOGIN_ROUTE,
  MY_PATH_ROUTE,
  NEWS_ROUTE,
  REGISTRATION_ROUTE,
  TRAINING_ROUTE,
} from "shared/constants/const";
import { lazy } from "react";

const auth = lazy(() => import("pages/assistant"));
const myPath = lazy(() => import("pages/my-path"));
const community = lazy(() => import("pages/community"));
const educations = lazy(() => import("pages/educations"));
const news = lazy(() => import("pages/news"));
const assistant = lazy(() => import("pages/assistant"));
const training = lazy(() => import("pages/training"));

export const authRoutes = [
  {
    path: MY_PATH_ROUTE,
    Component: myPath,
    title: "Мой путь",
    isAdmin: true,
  },
  {
    path: COMMUNITY_ROUTE,
    Component: community,
    title: "Мой путь",
    isAdmin: true,
  },
  {
    path: EDUCATIONS_ROUTE,
    Component: educations,
    title: "Мой путь",
    isAdmin: true,
  },
  {
    path: NEWS_ROUTE,
    Component: news,
    title: "Мой путь",
    isAdmin: true,
  },
  {
    path: ASSISTANT_ROUTE,
    Component: assistant,
    title: "Мой путь",
    isAdmin: true,
  },
  {
    path: TRAINING_ROUTE,
    Component: training,
    title: "Мой путь",
    isAdmin: true,
  },
];

export const publicRoutes = [
  {
    path: LOGIN_ROUTE,
    Component: auth,
    title: "login",
  },
  {
    path: REGISTRATION_ROUTE,
    Component: auth,
    title: "registration",
  },
];
