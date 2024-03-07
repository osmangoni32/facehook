import React from "react";
import { useAuth } from "../../hooks/useAuth";
import Header from "../common/Header";
import { Link } from "react-router-dom";

export default function HomePage() {
  const { auth } = useAuth();
  console.log(auth);
  return (
    <div>
      
      HomePage
      <Link to="/me">go to profile</Link>
    </div>
  );
}
