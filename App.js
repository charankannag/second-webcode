import React,{useState,useEffect} from "react";
import "./App.css";
import {Route, Routes} from "react-router-dom";
import { openRoutes,closedRoutes } from "./configs/Routes";
import { useSelector } from "react-redux";
function App() {
  const {islanding}=useSelector((state)=>state.authentication);
  
  return (
    <div className="App">
      <Routes>{islanding
      ?closedRoutes.map((route)=> (
      <Route path={route.path} element={route.Compomnent} />
      ))
      :openRoutes.map((route)=>(
      <Route path={route.path} element={route.Component} />
      ))}
      </Routes>
    </div>
  );
}

export default App;
