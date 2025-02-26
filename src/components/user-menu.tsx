"use client"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuGroup,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Link from "next/link"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { Button } from "@/components/ui/button"
import MenuIcon from '@mui/icons-material/Menu';
import { useSession } from "@/app/session-provider"

const UserMenu = () => {
  const { user, status } = useSession()

  if (status === "unauthenticated") return (
    <div className="flex items-center gap-2">
      <Link href="/login">
        <Button variant="outline">Entrar</Button>
      </Link>
      <Link href="/register">
        <Button>Registrar-se</Button>
      </Link>
    </div>
  )
  if (status !== "authenticated") return null

  const UserAvatar = () => (
    <div className="flex items-center gap-2.5">
      <Avatar>
        <AvatarImage />
        <AvatarFallback>{user.displayName?.charAt(0).toUpperCase()}</AvatarFallback>
      </Avatar>
      <span className="text-white">{user.displayName}</span>
    </div>
  )

  return (
    <>
      <div className="flex items-center md:hidden">
        <Drawer>
          <DrawerTrigger>
            <MenuIcon className="text-white" />
          </DrawerTrigger>
          <DrawerContent className="h-full">
            <DrawerHeader>
              <DrawerTitle className="hidden">Navegação</DrawerTitle>
            </DrawerHeader>
            <div>
              <ul className="flex flex-col gap-6 justify-center items-center">
                <li>
                  <Link href="/dashboard/panel">Painel</Link>
                </li>
                <li>
                  <Link href="/profile">Perfil</Link>
                </li>
                <li>
                  <Link href="/dashboard/my-courses">Meus cursos</Link>
                </li>
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="/courses">Cursos</Link>
                </li>
                <li>
                  <Link href="/methodology">Metodologia</Link>
                </li>
                
              </ul>
            </div>
            <DrawerFooter>
              <DrawerClose>
                <Button variant="outline">Sair</Button>
              </DrawerClose>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </div>
      <div className="hidden md:flex items-center">
        <DropdownMenu>
          <DropdownMenuTrigger className="flex items-center justify-center gap-2.5">
            <UserAvatar />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>Minha Conta</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <Link href={`/profile/${user.username}`}>
                  Perfil
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/dashboard/panel">
                  Painel
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/dashboard/my-courses">
                  Meus cursos
                </Link>
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="text-red-500">
              Sair
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </>
  )
}

export default UserMenu