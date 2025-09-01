import "./App.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Routes, Route } from "react-router-dom";

// pages
import {
  LoginPage,
  RegisterPage,
  HomePage,
  AboutPage,
  DashboardPage,
  DashboardHome,
  StaffPage,
  ServicesPage,
  AppointmnetPage,
} from "./pages";

// constants
import { NavigationLinks } from "./utils/constants";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path={`/${NavigationLinks.about}`} element={<AboutPage />} />
        <Route path={`/${NavigationLinks.login}`} element={<LoginPage />} />
        <Route
          path={`/${NavigationLinks.reigster}`}
          element={<RegisterPage />}
        />
        <Route
          path={`/${NavigationLinks.dashboard}`}
          element={<DashboardPage />}
        >
          <Route path="" element={<DashboardHome />} />
          <Route
            path={NavigationLinks.appointments}
            element={<AppointmnetPage />}
          />
          <Route path={NavigationLinks.staff} element={<h1>Settings</h1>} />
        </Route>
      </Routes>
    </QueryClientProvider>
  );
}

export default App;
