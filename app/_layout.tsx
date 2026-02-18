import * as React from "react";
import { Stack } from "expo-router";
import { UserProvider } from "../../app1/context/UserContext";
import "../global.css"

export default function Layout() {
  return (
    <UserProvider>
      <Stack screenOptions={{ headerShown: false }} />
    </UserProvider>
  );
}
