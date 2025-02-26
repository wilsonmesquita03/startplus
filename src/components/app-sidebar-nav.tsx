import { SidebarGroup, SidebarGroupLabel, SidebarMenuButton, SidebarMenuSub, SidebarMenuSubButton, SidebarMenuSubItem } from "@/components/ui/sidebar"
import { SidebarMenu, SidebarMenuItem } from "@/components/ui/sidebar"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { ChevronRight, LucideIcon } from "lucide-react"
import Link from "next/link"

// Definir os tipos das props
interface SidebarNavItem {
  title: string
  icon?: LucideIcon
  url?: string
  subItems?: SidebarNavItem[]
  isCollapsible?: boolean
}

interface AppSidebarNavProps {
  sections: {
    sectionTitle: string
    items: SidebarNavItem[]
  }[]
}

export const AppSidebarNav = ({ sections }: AppSidebarNavProps) => {
  return (
    <>
      {sections.map((section, sectionIndex) => (
        <SidebarGroup key={sectionIndex}>
          {section.sectionTitle && (<SidebarGroupLabel>{section.sectionTitle}</SidebarGroupLabel>)}
          <SidebarMenu>
            {section.items.map((item, index) => (
              item.subItems ? (
                // Caso o item tenha subitens, renderiza o Collapsible
                <Collapsible asChild defaultOpen={item.isCollapsible} key={index} className="group/collapsible">
                  <SidebarMenuItem>
                    <CollapsibleTrigger asChild>
                      <SidebarMenuButton tooltip={item.title}>
                        {item.icon && <item.icon />}
                        <span>{item.title}</span>
                        <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                      </SidebarMenuButton>
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <SidebarMenuSub>
                        {item.subItems.map((subItem, subIndex) => (
                          <SidebarMenuSubItem key={subIndex}>
                            <SidebarMenuSubButton asChild>
                              <Link href={subItem.url || "#"}>
                                <span>{subItem.title}</span>
                              </Link>
                            </SidebarMenuSubButton>
                          </SidebarMenuSubItem>
                        ))}
                      </SidebarMenuSub>
                    </CollapsibleContent>
                  </SidebarMenuItem>
                </Collapsible>
              ) : (
                // Caso o item não tenha subitens, renderiza apenas o link simples
                <SidebarMenuItem key={index}>
                  <Link href={item.url || "#"}>
                    <SidebarMenuButton tooltip={item.title}>
                      {item.icon && <item.icon />}
                      {item.title}
                    </SidebarMenuButton>
                  </Link>
                </SidebarMenuItem>
              )
            ))}
          </SidebarMenu>
        </SidebarGroup >
      ))}
    </>
  )
}
