import { StatusCardContainer } from "./styles";

interface StatusCardProps {
    name: string;
    temperature: number;
    moisture: string;
}

export default function StatusCard({
    name,
    temperature,
    moisture
}: StatusCardProps) {
    let status: string;

    if (temperature > 25) {
        status = 'var(--background-card-status-alert)';
    } else if (temperature <= 25 && temperature > 20) {
        status = 'var(--background-card-status-normal)';
    } else {
        status = 'var(--background-card-status-cold)';
    }

    return (
        <StatusCardContainer
            style={{ background: status }}
        >
            <span>{name}</span>
            <div>
                <h1>{temperature}°</h1>
                <p>Temperatura (°C)</p>
                <h4>{moisture}</h4>
                <p>Umidade</p>
            </div>
        </StatusCardContainer>
    );
}