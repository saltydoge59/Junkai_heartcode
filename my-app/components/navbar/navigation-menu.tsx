
import Link from "next/link"
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, navigationMenuTriggerStyle } from "../ui/navigation-menu"


export function NavigationBar() {
    return (
        <NavigationMenu className="flex justify-between min-w-full list-none h-16 fixed top-0 p-5 h-[60px] bg-transparent">
            <div className="flex">
            <NavigationMenuItem className="mx-2">
                <Link href="/" legacyBehavior passHref>
                    
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                        Home
                    </NavigationMenuLink>
                    
                </Link>
            </NavigationMenuItem>
            <NavigationMenuItem className="mx-2">
                <Link href="/quiz" legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                        Quiz
                    </NavigationMenuLink>
                </Link>
            </NavigationMenuItem>
            <NavigationMenuItem className="mx-2">
                <Link href="/about" legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                        About me
                    </NavigationMenuLink>
                </Link>
            </NavigationMenuItem>
            </div>
        </NavigationMenu>
    )
}
