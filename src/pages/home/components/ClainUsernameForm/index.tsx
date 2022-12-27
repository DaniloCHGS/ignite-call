import { Button, Text, TextInput } from "@ignite-ui/react";
import { ArrowRight } from "phosphor-react";
import { Form } from "./style";

export function ClainUsernameForm(){
    return (
        <Form as="form">
            <TextInput
                size="sm"
                prefix="ingite.com/"
                placeholder="seu-usuário"
            />
            <Button
                size="sm"
                type="submit"
            >
                Reservar
                <ArrowRight />
            </Button>
        </Form>
    )
}