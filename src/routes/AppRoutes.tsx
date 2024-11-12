import { BrowserRouter, Routes, Route } from "react-router-dom";

import useNotification from "../hooks/useNotification";
import SharedLayout from "../components/SharedLayout";
import MainPage from "../pages/MainPage";
import FormPage from "../pages/FormPage";
import InfoPage from "../pages/InfoPage";
import NewNotification from "../pages/NewNotification";
import NotificationsList from "../pages/NotificationsList";
import NotificationDetail from "../pages/NotificationDetail";
import FinalPage from "../pages/FinalPage";
import ErrorPage from "../pages/ErrorPage";

const AppRoutes = () => {
  const {
    notifications,
    addNotification,
    deleteNotification,
    editNotification,
  } = useNotification();
  return (
    <BrowserRouter
      future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
    >
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<MainPage />} />
          <Route path="/infopage" element={<InfoPage />} />
          <Route path="/newnotification" element={<NewNotification />} />
          <Route
            path="/formpage"
            element={<FormPage addNotification={addNotification} />}
          />
          <Route path="/finalpage" element={<FinalPage />} />
          <Route
            path="/notificationlist"
            element={
              <NotificationsList
                notifications={notifications}
                deleteNotification={deleteNotification}
              />
            }
          />
          <Route
            path="/notificationdetail/:id"
            element={
              <NotificationDetail
                notifications={notifications}
                deleteNotification={deleteNotification}
                editNotification={editNotification}
              />
            }
          />
          <Route path="/*" element={<ErrorPage />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
