import { Route, Routes } from "react-router-dom";
import { AddPaymentMethod } from "../pages/AddPaymentMethod";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route exact path="/" element={<AddPaymentMethod />} />
    </Routes>
  );
};
