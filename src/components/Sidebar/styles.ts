import { IconButton } from "@mui/material";
import styled from "styled-components";

interface IconButtonProps {
    isActive: boolean;
}

export const SidebarButton = styled(IconButton) <IconButtonProps>`
    background-color: ${props => props.isActive ? 'var(--background-active-card)' : 'var(--background-card)'};
    border-radius: 4px;
    padding: 20px;

    svg {
        font-size: 30px;
        color: var(--base-font-color);
    }
    
    .home-icon {
        path {
            stroke: var(--base-font-color);
        }
    }
`;