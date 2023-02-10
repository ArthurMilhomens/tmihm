import Stack from "@mui/material/Stack";
import DatetimeClock from "./clock";
import { DashboardContainer, NextStop, RouteInfoCard, RouteName, Location, LightInfo } from "./styles";
import { MdLocationOn } from 'react-icons/md';
import StatusCard from "./StatusCard";

export default function Dashboard() {
  return (
    <DashboardContainer spacing="18px" direction="row">
      <Stack spacing="9px">
        <RouteInfoCard>
          <RouteName>
            <p>Rota atual:</p>
            <p>Nome da rota aqui</p>
          </RouteName>
        </RouteInfoCard>
        <RouteInfoCard>
          <DatetimeClock />
        </RouteInfoCard>
        <RouteInfoCard>
          <NextStop>
            <p>Próxima parada</p>
            <Location>
              <MdLocationOn />
              <span>
                Cachoeira grande
              </span>
            </Location>
          </NextStop>
        </RouteInfoCard>
        {false && <RouteInfoCard>
          <LightInfo>
            <span>Auto iluminação</span>
            <p>
              Estágio
              <span>01</span>
            </p>
          </LightInfo>
        </RouteInfoCard>}
      </Stack>
      {false && <Stack spacing="9px">
        <StatusCard name="Salão 1" temperature={35} moisture="25%" />
        <StatusCard name="Salão 2" temperature={25} moisture="25%" />
        <StatusCard name="Salão 3" temperature={19} moisture="25%" />
      </Stack>}
    </DashboardContainer>
  );
}
