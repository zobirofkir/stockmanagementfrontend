import ProtectedRoute from "@/protected/protectedRoute";

export default function DashboardPage() {
return (
    <ProtectedRoute>
        <div>
            <h1>Dashboard</h1>
        </div>
    </ProtectedRoute>
);
}
  