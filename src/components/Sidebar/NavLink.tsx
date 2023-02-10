import { LinkProps } from "next/link";
import ActiveLink from "./ActiveLink";
import { SidebarButton } from "./styles";

interface NavLinkProps extends LinkProps {
    children: any;
    href: string;
    shouldMatch?: boolean;
}

export default function NavLink({ children, href, ...rest }: NavLinkProps) {
    return (
        <ActiveLink href={href} {...rest} passHref>
            <SidebarButton isActive={false} aria-label="button">
                {children}
            </SidebarButton>
        </ActiveLink>
    );
}