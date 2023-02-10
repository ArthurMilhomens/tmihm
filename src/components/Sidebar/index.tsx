import Box from "@mui/material/Box";
import SidebarNav from "./SidebarNav";

export default function Sidebar() {

	return (
		<Box
			component="aside"
			sx={{
				width: '107px',
				minWidth: '107px',
				minHeight: '100%',
				maxHeight: '600px',
				height: '600px',
				display: 'flex',
				justifyContent: 'center',
				marginY: 'auto',
			}}
		>
			<SidebarNav />
		</Box>
	)
}