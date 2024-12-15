"use client";

import ProtectedRoute from "@/protected/protectedRoute";

export default function DashboardPage() {

  return (
    <ProtectedRoute>
      <div>
        Dashboard
      </div>
    </ProtectedRoute>
  );
}
  