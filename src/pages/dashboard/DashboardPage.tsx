// src/components/DashboardLayout.tsx
import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Menu } from "lucide-react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="flex flex-col h-full p-4 space-y-4">
      <h2 className="text-xl font-bold text-primary">MoorLand Fix</h2>
      <Separator />
      <nav className="flex flex-col gap-2">
        <Link to="/overview" className="text-sm font-medium hover:text-primary">
          Overview
        </Link>
        <Link
          to="/appointments"
          className="text-sm font-medium hover:text-primary"
        >
          Appointments
        </Link>
        <Link to="/settings" className="text-sm font-medium hover:text-primary">
          Settings
        </Link>
      </nav>
    </div>
  );
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex h-screen">
      {/* Desktop Sidebar */}
      <aside className="hidden md:flex md:w-64 md:flex-col md:border-r">
        <Sidebar />
      </aside>

      {/* Mobile Sidebar (Drawer using Sheet) */}
      <div className="md:hidden">
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="m-2">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-64 p-0">
            <Sidebar />
          </SheetContent>
        </Sheet>
      </div>

      {/* Main content */}
      <main className="flex-1 overflow-y-auto p-6">{children}</main>
    </div>
  );
}
