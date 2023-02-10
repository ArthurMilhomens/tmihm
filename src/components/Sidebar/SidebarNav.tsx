import NavLink from "./NavLink";
import Stack from "@mui/material/Stack";
import { GrHomeRounded } from 'react-icons/gr';
import { FaDirections } from 'react-icons/fa';
import { MdOutlineLinkedCamera, MdVolumeUp, MdVolumeDown } from 'react-icons/md';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import { SidebarButton } from "./styles";

export default function SidebarNav() {
    return (
        <Stack spacing="16px" justifyContent="center" sx={{ height: '600px', width: '70px' }}>
            <NavLink shouldMatch href="/"><GrHomeRounded className="home-icon" /></NavLink>
            <NavLink href="/route"><FaDirections /></NavLink>
            <NavLink href="/cameras"><MdOutlineLinkedCamera /></NavLink>
            <SidebarButton isActive={false} aria-label="button"><MdVolumeUp /></SidebarButton>
            <SidebarButton isActive={false} aria-label="button"><MdVolumeDown /></SidebarButton>
            <NavLink href="/settings"><SettingsOutlinedIcon /></NavLink>
        </Stack>
    );
}