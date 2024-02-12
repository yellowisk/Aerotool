import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { SidebarItem } from "./sidebar-item";

export function Sidebar() {
  const appRoutes: string[] = ["/home", "/request", "/events", "/tools"];

  return (
    <aside className="flex flex-col p-4 items-center justify-between border-r-2">
      <Avatar>
        <AvatarImage
          src="https://wac-cdn.atlassian.com/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg?cdnVersion=1439"
          alt="Avatar"
        />
        <AvatarFallback>JD</AvatarFallback>
      </Avatar>
      <div className="flex flex-col space-y-4">
        {appRoutes.map((route) => (
          <SidebarItem key={route} route={route} />
        ))}
      </div>
      <SidebarItem route="/settings" />
    </aside>
  );
}
