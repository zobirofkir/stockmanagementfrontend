"use client";

import ProtectedRoute from "@/protected/protectedRoute";
import OverviewComponent from "@/components/dashboard/OverviewComponent";

export default function DashboardPage() {
  return (
    <ProtectedRoute>
      <OverviewComponent />
    </ProtectedRoute>
  );
}
