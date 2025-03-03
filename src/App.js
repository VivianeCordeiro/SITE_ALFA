import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from "./components/layout/navbar";
import Container from "./components/layout/container";
import Home from "./components/pages/home";
import Contact from "./components/pages/contact";
import Company from "./components/pages/company";
import Footer from "./components/layout/footer";
import "./components/layout/container.module.css";
import Projects from "./components/pages/projects";
import Budget from "./components/pages/budget";
import CompanyInformation from "./components/pages/companyInformation";
import { BudgetProvider } from "./components/budget/budgetContext";
import BudgetSummary from "./components/pages/budgetSummary";
const App = () => {
  return (
    <BudgetProvider>
      <Router>
        <Navbar />
        <Container customClass="min-height">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/budget" element={<Budget />}></Route>
            <Route path="/projects" element={<Projects />}></Route>
            <Route path="/company" element={<Company />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="/companyInformation" element={<CompanyInformation/>}></Route>
            <Route path="/budget/budgetSummary" element={<BudgetSummary />} />
          </Routes>
        </Container>
        <Footer />
      </Router>
    </BudgetProvider>
  );
};
export default App;
