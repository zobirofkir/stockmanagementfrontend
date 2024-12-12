import SidebarComponent from "@/components/SidebarComponent"; 

export default function DashboardLayout({ children }) {
  return (
    <div className="flex h-screen bg-gray-50">

      <aside className="lg:block ">
        <SidebarComponent />
      </aside>

      <div className="flex-1 flex flex-col">
        <main className="flex-1 p-6 bg-gray-100">
          {children} 
        </main>
      </div>
    </div>
  );
}
