"use client";

import ChartComponent from "@/components/charts/ChartComponent";
import OverviewComponent from "@/components/charts/OverviewComponent";
import ProtectedRoute from "@/protected/protectedRoute";

export default function DashboardPage() {

  return (
    <ProtectedRoute>
      <div>
        <OverviewComponent />
        <ChartComponent />
      </div>
    </ProtectedRoute>
  );
}
  