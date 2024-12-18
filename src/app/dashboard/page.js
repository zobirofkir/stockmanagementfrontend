"use client";

import ProtectedRoute from "@/protected/protectedRoute";
import OverviewComponent from "@/components/dashboard/OverviewComponent";
import ChartComponent from "@/components/dashboard/ChartComponent";

export default function DashboardPage() {
  return (
    <ProtectedRoute>
      <OverviewComponent />
      
      <ChartComponent />
    </ProtectedRoute>
  );
}
