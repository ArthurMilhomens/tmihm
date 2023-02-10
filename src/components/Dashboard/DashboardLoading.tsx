import Stack from "@mui/material/Stack";
import { DashboardContainer } from "./styles";
import Skeleton from "@mui/material/Skeleton";

export default function DashboardLoading() {
    return (
        <DashboardContainer spacing="18px" direction="row">
            <Stack spacing="9px">
                <Skeleton sx={{ borderRadius: '12px' }} variant="rounded" width={391} height={53} />
                <Skeleton sx={{ borderRadius: '12px' }} variant="rounded" width={391} height={173} />
                <Skeleton sx={{ borderRadius: '12px' }} variant="rounded" width={391} height={118} />
            </Stack>
        </DashboardContainer>
    );
}
