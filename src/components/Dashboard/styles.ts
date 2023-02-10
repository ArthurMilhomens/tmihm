import Stack from "@mui/material/Stack";
import styled from "styled-components";

export const DashboardContainer = styled(Stack)`
    height: 600px;
    width: 100%;
    min-height: 100%;
    align-items: center;
    justify-content: center;
`;

export const RouteInfoCard = styled.div`
    background-color: var(--background-card);
    border-radius: 12px;
    padding: 15px 30px;
    width: 391px;
`;

export const RouteName = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    
    p {
        font-size: 22px;
        margin: 0;
        
        :first-of-type {
            margin-right: 10px;
        }
    }
`;

export const ClockContainer = styled(Stack)`
    width: 100%;
    align-items: center;
    justify-content: center;

    span {
        font-size: 27px;
    }

    time {
        font-size: 112px;
    }
`;

export const NextStop = styled(Stack)`
    width: 100%;
    align-items: flex-start;
    justify-content: center;
    
    span {
        font-size: 27px;
    }

    p {
        margin-top: 0;
        font-size: 17px;
    }
`;

export const Location = styled(Stack)`
    width: 100%;
    flex-direction: row;
    align-items: center;
    margin-bottom: 10px;

    span {
        font-size: 38px;
    }

    svg {
        font-size: 32px;
    }
`;

export const LightInfo = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    max-height: 30px;

    span {
        font-size: 22px;
        margin-left: 5px;
    }

    p {
        font-size: 14px;
    }
`;

export const StatusCardContainer = styled.div`
    max-height: 136px;
    width: 319px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-radius: 12px;
    padding: 7px 30px;

    span {
        font-size: 24px;
        font-weight: bold;
        width: 50%
    }

    div {
        width: 50%;
    }

    h1 {
        margin: 0;
        font-size: 54px;
    }

    p {
        font-size: 12px;
        margin: 0 0 5px;
    }

    h4 {
        font-size: 18px;
        margin: 10px 0 5px;
    }
`;