import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import ProfileProvider from "../Providers/ProfileProvider";
import Header from "../componenets/common/Header";
import { useAuth } from "../hooks/useAuth";

export default function PrivateRoutes() {
  const { auth, authToken } = useAuth();

  return (
    <>
      {auth?.authToken ? (
        <>
          <ProfileProvider>
            <Header />
            <main className="mx-auto max-w-[1020px] py-8">
              <div className="container">
                <Outlet />
              </div>
            </main>
          </ProfileProvider>
        </>
      ) : (
        <Navigate to="/login" />
      )}
    </>
  );
}
