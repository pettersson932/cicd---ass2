import { describe, it, expect } from "vitest"; // Rör köra tester, skriva själva testfallen, assertions (expect m.m.)
import { render, screen, fireEvent } from "@testing-library/react"; // Rendera komponenter, användarinteraktion (klicka på en knapp)
import { AuthProvider } from "../context/AuthContext";
import UserStatus from "./UserStatus";

describe("UserStatus", () => {
  it("should display correct status when user is logged out", () => {
    render(
      <AuthProvider>
        <UserStatus />
      </AuthProvider>
    );

    expect(screen.getByText("You are logged out")).toBeDefined();
    expect(screen.getByRole("button").textContent).toBe("Log in");
  });

  it("should display correct status when user is logged in", () => {
    render(
      <AuthProvider>
        <UserStatus />
      </AuthProvider>
    );

    const button = screen.getByText("Log in");

    fireEvent.click(button);

    expect(screen.getByText("You are logged in")).toBeDefined();
    expect(screen.getByRole("button").textContent).toBe("Log out");
  });

  it("should toggle between login/logut correctly", () => {
    render(
      <AuthProvider>
        <UserStatus />
      </AuthProvider>
    );

    const logInButton = screen.getByText("Log in");
    screen.debug();

    fireEvent.click(logInButton);

    screen.debug();
    expect(screen.getByText("You are logged in")).toBeDefined();
    expect(screen.getByRole("button").textContent).toBe("Log out");

    const logOutButton = screen.getByText("Log out");

    fireEvent.click(logOutButton);
    screen.debug();
    expect(screen.getByText("You are logged out")).toBeDefined();
    expect(screen.getByRole("button").textContent).toBe("Log in");
  });
});
