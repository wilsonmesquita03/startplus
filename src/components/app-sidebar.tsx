"use client"

import * as React from "react"

import { NavUser } from "@/components/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenuButton,
  SidebarMenuSkeleton,
  SidebarRail,
} from "@/components/ui/sidebar"
import { AppSidebarNav } from "@/components/app-sidebar-nav"
import { admin } from "@/app/dashboard/roles"
import { useSession } from "@/app/session-provider"
import { useRouter } from "next/navigation"

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { user, status } = useSession()
  const router = useRouter()

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <SidebarMenuButton
          size="lg"
          className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
          onClick={() => router.push("/")}
        >
          <div className="flex size-8 items-center justify-center rounded-lg text-sidebar-primary-foreground">
            <svg version="1.1" viewBox="0 0 1552 1376" width="388" height="344" xmlns="http://www.w3.org/2000/svg">
              <path transform="translate(757,3)" d="m0 0 5 2 19 19 7 8 11 12 9 11 13 15 10 13 16 21 13 19 16 24 12 20 12 21 12 23 15 31 12 29 11 30 8 25 10 37 9 43 5 33 4 41 1 16v59l-2 32-3 28-6 36-7 30-12 52-9 33-13 40-10 26-11 26-9 20-8 16-16 30-12 20-15 24-11 16-10 14-14 19-13 16-9 11-12 14-9 10-11 12-14 15-18 18-8 7-7 7-8 7-10 9-11 9-14 12-14 11-18 14-14 10-17 12-33 22-13 8-28 17-29 16-23 12-42 21-41 18-36 14-34 12-32 10-28 7-19 3-22 2h-41l-33-3-30-5-22-6-22-8-19-10-13-9-13-11-7-7-11-15-9-17-7-21-5-25v-48l5-40 5-27 5-20 9-27 8-18 9-16 9-13 8-10 5-5 8-2 41-8 44-11 35-11 32-12 26-11 28-13 33-17 27-16 24-15 16-11 17-12 30-23 14-12 11-9 11-10 8-7 10-9 7-7 8-7 18-18 7-8 8-8 9-11 14-15 1-2h2l2-4 9-11 14-17 27-36 13-18 28-42 13-22 11-18 6-11 18-34 11-23h3l8 7 16 10 14 6 16 4 17 2 17-1 14-3 16-6 14-9 8-7 9-13 5-10 4-13 2-12v-22l-4-18-6-14-8-11-4-5-10-8-14-8-16-7-19-5-21-3-15-1v-4l5-14 4-20 3-26 2-34v-94l-2-56-5-84z" fill="#B41A15" />
              <path transform="translate(900,52)" d="m0 0 4 2 12 12 11 15 16 26 12 20 15 24 12 20 13 21 16 26 13 21 14 23 13 21 80 130 17 28 32 52 14 23 11 18 17 28 11 18 45 74 9 15 17 28 63 105 16 27 26 44 17 29 14 24 15 26 14 24 16 29 10 18 12 22 17 32 11 23 6 16 5 20 3 19 1 10v24l-4 27-6 27-7 20-8 16-9 14-11 13-8 8-16 12-15 9-20 9-24 8-25 6-31 5-32 3-19 1h-21l-25-3-26-5-30-8-36-12-21-8-26-11-24-11-29-14-34-18-24-14-26-15-23-15-18-11-37-25-20-14-36-26-38-29-5-5 7-8 12-13 11-14 12-15 14-19 13-18 8-12 11-17 12-19 15-26 12-22 12-23 13-27 13-30 14-36 14-41 12-43 9-39 7-38 5-38 3-32 1-16 1-45-1-32-3-39-5-38-7-41-10-43-12-42-15-44-13-33-13-30-14-30-12-24-12-22-14-25-9-16-7-16-1-4z" fill="#E51415" />
              <path transform="translate(680,7)" d="m0 0h5l3 9 3 17 3 28 3 56 1 39v25l-11 105-4 36v14l3 14 8 16 4 5 9 7 14 7 4 1 50 1 18 4 12 6 9 9 5 10 2 8v23l-4 13-8 11-10 7-15 5-17 1-12-3-10-7-13-12-10-9-10-6-12-5-5-1h-23l-12 4-10 6-10 10-8 13-8 17-12 31-8 16-13 24-14 23-15 23-7 11-10 14-14 18-11 13-9 11-10 11-7 8-14 15-34 34-8 7-14 13-11 9-14 12-14 11-21 16-35 23-20 12-21 12-27 14-16 8-37 17-36 15-43 16-28 9-1-2 12-22 16-29 13-23 8-14 6-11 15-28 10-18 11-19 6-12 14-24 6-12 12-21 12-22 9-16 13-23 8-14 6-12 12-21 12-22 13-23 25-45 10-17 6-11 12-21 6-11 13-24 12-21 15-27 14-24 11-20 13-23 14-25 14-24 14-25 12-21 14-24 15-26 16-27 10-17 12-20 14-22 9-12 22-22 15-11 17-10 16-7z" fill="#2B3042" />
            </svg>
          </div>
          <div className="grid flex-1 text-left text-sm leading-tight">
            <span className="truncate font-semibold">
              Escola START
            </span>
          </div>
        </SidebarMenuButton>
      </SidebarHeader>
      <SidebarContent>
        <AppSidebarNav
          sections={admin}
        />
      </SidebarContent>
      <SidebarFooter>
        {
          status === "loading" && (
            <SidebarMenuSkeleton />
          )
        }
        {
          status === "authenticated" && (
            <NavUser
              user={{
                name: user.displayName || user.email,
                email: user.email,
                avatar: "#",
              }}
            />
          )
        }
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
