import {
  Cog,
  Home,
  MessageCircleMore,
  PieChart,
  Send,
  User,
  Wrench,
} from "lucide-react";
import Link from "next/link";

interface SidebarItemProps {
  route: string;
}

type RouteIcons = {
  [key: string]: JSX.Element;
};

export function SidebarItem({ route }: SidebarItemProps) {
  const routeIcons: RouteIcons = {
    "/home": <Home className="size-6" />,
    "/request": <Send className="size-6" />,
    "/events": <MessageCircleMore className="size-6" />,
    "/tools": <Wrench className="size-6" />,
    "/settings": <Cog className="size-6" />,
  };

  return (
    <Link href={route} className="hover:opacity-60 transition-opacity">
      {routeIcons[route]}
    </Link>
  );
}
