import React from "react";
import { createRoot } from "react-dom/client";
import ContactApp from "./components/ContactApp";
import MyForm from "./components/latihan doang/MyForm";

// styling
import "./styles/style.css";

const root = createRoot(document.getElementById("root"));
root.render(<MyForm />);
