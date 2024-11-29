import { ComponentType } from "react";

// Route Configuration Types
export interface RouteBase {
    path: string;
    title: string;
    icon?: string;
    isProtected?: boolean;
  }
  
  export interface RouteLeaf extends RouteBase {
    element: ComponentType;
  }
  
  export interface RouteBranch extends RouteBase {
    element?: ComponentType;
    children: RouteConfig[];
  }
  
  export type RouteConfig = RouteLeaf | RouteBranch;
  