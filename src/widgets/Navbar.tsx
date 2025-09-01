// src/components/Navbar.tsx
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Link } from "react-router-dom";
import { Menu } from "lucide-react"; // icon for mobile menu

const Navbar = () => {
  return (
    <nav className="w-full bg-white">
      <div className="container flex h-16 items-center justify-between">
        {/* Left side: Logo */}
        <Link to="/" className="text-xl font-bold">
          MoorLand Fix
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex md:items-center md:gap-6">
          <NavigationMenu>
            <NavigationMenuList className="flex gap-6">
              <NavigationMenuItem>
                <Link
                  to="/"
                  className="text-sm font-medium hover:text-blue-600"
                >
                  Home
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link
                  to="/services"
                  className="text-sm font-medium hover:text-blue-600"
                >
                  Services
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link
                  to="/contact_us"
                  className="text-sm font-medium hover:text-blue-600"
                >
                  Contact us
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <div className="flex gap-2">
            <Button asChild>
              <Link to="/login">Login</Link>
            </Button>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-64">
              <div className="flex flex-col gap-4 mt-6">
                <Link
                  to="/"
                  className="text-sm font-medium hover:text-blue-600"
                >
                  Home
                </Link>
                <Link
                  to="/services"
                  className="text-sm font-medium hover:text-blue-600"
                >
                  Services
                </Link>
                <Link
                  to="/contact_us"
                  className="text-sm font-medium hover:text-blue-600"
                >
                  Contact us
                </Link>
                <div className="flex gap-2 mt-4">
                  <Button asChild className="w-full">
                    <Link to="/login">Login</Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
