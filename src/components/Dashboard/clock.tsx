import { ClockContainer } from "./styles";
import Clock from 'react-live-clock';

export default function DatetimeClock() {
    const actualDate = new Intl.DateTimeFormat('pt-BR', {
        day: "numeric",
        month: "long",
        year: "numeric",
    }).format(new Date());

    return (
        <ClockContainer>
            <span>{actualDate}</span>
            <Clock format={'HH:mm'} ticking={true} />
        </ClockContainer>
    );
}