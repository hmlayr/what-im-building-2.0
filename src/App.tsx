import React from "react";
import Project from "./components/Project";
import RealmApp, { useRealmApp } from "./backend/RealmApp";
import GqlProvider from "./backend/GqlProvider";
import "./App.css";

function App() {
  const app = useRealmApp();
  const anonUser =
    !app.user ||
    !((app.user?.profile as any).identities.filter((id: any) => id.providerType !== "anon-user").length > 0);
  if (!app.user) {
    console.log(app.user);
    app.logIn("test@tester.com", "testing12");
    console.log(app.user);
  }
  return (
    <div className="App">
      <GqlProvider>
        <Project />
        <div />
      </GqlProvider>
    </div>
  );
}

export default App;
