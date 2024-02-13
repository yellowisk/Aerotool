"use client";
import { Cog, Home, Mail, Send, Wrench } from "lucide-react";
import Link from "next/link";

export type SidebarItemProps = {
  route: string;
  active?: boolean | undefined;
};

type RouteIcons = {
  [key: string]: JSX.Element;
};

export function SidebarItem({ route, active = false }: SidebarItemProps) {
  const routeIcons: RouteIcons = {
    "/home": <Home className="size-5" />,
    "/request": <Send className="size-5" />,
    "/events": <Mail className="size-5" />,
    "/tools": <Wrench className="size-5" />,
    "/settings": <Cog className="size-5" />,
  };

  return (
    <Link
      href={route}
      data-active={active}
      className="p-[.5rem] hover:scale-110 dark:text-white text-black transition-all rounded data-[active=true]:dark:text-blue-500 data-[active=true]:dark:bg-blue-950 data-[active=true]:bg-blue-200 data-[active=true]:text-blue-500"
    >
      {routeIcons[route]}
    </Link>
  );
}
