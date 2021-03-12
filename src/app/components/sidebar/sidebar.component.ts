import { Component, OnInit } from "@angular/core";

declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
  {
    path: "/statusboard",
    title: "Status Board",
    icon: "icon-chart-pie-36",
    class: ""
  },
  {
    path: "/card-operation",
    title: "Card Operation",
    icon: "icon-single-02",
    class: ""
  },
  {
    path: "/rejected-list",
    title: "Rejected List",
    icon: "icon-credit-card",
    class: "" },
  {
    path: "/operation-board",
    title: "Operation Board",
   icon: "icon-sound-wave",
    class: ""
  },
  {
    path: "/report",
    title: "Report",
   icon: "icon-paper",
    class: ""
  },
  {
    path: "/export",
    title: "Export",
   icon: "icon-spaceship",
    class: ""
  },
  {
    path: "/import",
    title: "Import",
   icon: "icon-upload",
    class: ""
  },
  {
    path: "/export",
    title: "Export",
   icon: "icon-spaceship",
    class: ""
  },
  {
    path: "/dispatch",
    title: "Dispatch",
   icon: "icon-delivery-fast",
    class: ""
  },
  {
    path: "/history",
    title: "History",
    icon: "icon-time-alarm",
    class: ""
  },
  {
    path: "/admin",
    title: "Admin",
    icon: "icon-settings-gear-63",
    class: ""
  }
];

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.css"]
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() {}

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
    if (window.innerWidth > 991) {
      return false;
    }
    return true;
  }
}
