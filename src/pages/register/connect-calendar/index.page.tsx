import { Heading, MultiStep, Text, Button } from "@ignite-ui/react"
import { signIn, useSession } from "next-auth/react"
import { ArrowRight } from "phosphor-react"
import { Container, Header } from "../style"
import { ConnectBox, ConnectItem } from "./style"


export default function Register() {

    // async function handleRegister() {

    // }
    const session = useSession()

    return (
        <Container>
            <Header>
                <Heading as="strong">Conecte sua agenda!</Heading>
                <Text>Conecte o seu calendário para verificar automaticamente os horas ocupadas e os novos eventos à medida em que são agendados.</Text>
                <MultiStep size={4} currentStep={2} />
            </Header>
            <ConnectBox>
                <ConnectItem>
                    <Text>Google Calendar</Text>
                    <Button variant="secondary" size="sm" onClick={() => signIn('google')}>
                        Conectar
                        <ArrowRight />
                    </Button>
                </ConnectItem>
                <Button type="submit">
                    Próximo passo
                    <ArrowRight />
                </Button>
            </ConnectBox>
        </Container>
    )
}