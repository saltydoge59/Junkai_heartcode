
import Link from "next/link"
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, navigationMenuTriggerStyle } from "../ui/navigation-menu"
import {
    SignedIn,
    SignedOut,
    SignInButton,
    UserButton
} from '@clerk/nextjs'


export function NavigationBar() {
    return (
        <NavigationMenu className="flex justify-between min-w-full list-none h-16 relative top-0 p-5 h-[60px]">
            <div className="flex">
            <NavigationMenuItem>
                <Link href="/" legacyBehavior passHref>
                    
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                        Home
                    </NavigationMenuLink>
                    
                </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
                <Link href="/quiz" legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                        Quiz
                    </NavigationMenuLink>
                </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
                <Link href="/about-me" legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                        About me
                    </NavigationMenuLink>
                </Link>
            </NavigationMenuItem>
            </div>
        </NavigationMenu>
    )
}
