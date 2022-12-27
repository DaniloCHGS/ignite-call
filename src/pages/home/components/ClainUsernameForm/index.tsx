import { Button, Text, TextInput } from "@ignite-ui/react";
import { ArrowRight } from "phosphor-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from '@hookform/resolvers/zod'
import { Form } from "./style";

const ClainUsernameFormSchema = z.object({
    username: z.string()
    .min(3, {message: ''})
    .regex(/^([a-z\\-]+)$/i)
    .transform(value => value.toLowerCase())
})

type ClainUsernameFormData = z.infer<typeof ClainUsernameFormSchema>

export function ClainUsernameForm() {

    const { register, handleSubmit } = useForm<ClainUsernameFormData>({
        resolver: zodResolver(ClainUsernameFormSchema)
    })

    async function handleClainUsername(data: ClainUsernameFormData) {
        console.log(data)
    }

    return (
        <Form as="form" onSubmit={handleSubmit(handleClainUsername)}>
            <TextInput
                size="sm"
                prefix="ingite.com/"
                placeholder="seu-usuário"
                {...register("username")}
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