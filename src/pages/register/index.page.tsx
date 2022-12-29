import { zodResolver } from "@hookform/resolvers/zod"
import { Button, Heading, MultiStep, Text, TextInput } from "@ignite-ui/react"
import { useRouter } from "next/router"
import { ArrowRight } from "phosphor-react"
import { useEffect } from "react"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Container, Header, Form, ErrorMessage } from "./style"

const UserRegisterSchema = z.object({
    username: z.string()
        .min(3, { message: 'Username deve conter no mínimo 3 letras' })
        .regex(/^([a-z\\-]+)$/i, { message: 'Digite apenas letras e hifen' })
        .transform(value => value.toLowerCase()),
    name: z.string()
        .min(3, { message: 'Nome deve conter no mínimo 3 letras' })
        .regex(/^([a-z" "]+)$/i, { message: 'Digite apenas letras' })
})

type UserRegisterData = z.infer<typeof UserRegisterSchema>

export default function Register() {

    const { register, handleSubmit, setValue, formState: { errors, isSubmitting } } = useForm<UserRegisterData>({
        resolver: zodResolver(UserRegisterSchema)
    })

    const router = useRouter()

    useEffect(()=>{
        setValue('username', String(router.query.username))
    }, [router.query?.username, setValue])

    async function handleRegister(data: UserRegisterData) {
        const { username } = data
    }

    return (
        <Container>
            <Header>
                <Heading as="strong">Bem-vindo ao Ignite Call!!</Heading>
                <Text>Precisamos de algumas informações para criar seu perfil! Ah, você pode editar essas informações depois</Text>
                <MultiStep size={4} currentStep={1} />

                <Form as="form" onSubmit={handleSubmit(handleRegister)}>
                    <label>
                        <Text size="sm">Nome de usuário</Text>
                        <TextInput prefix="ignit.com/" placeholder="seu-usuário" {...register('username')} />
                        {errors.username && (
                            <ErrorMessage size="sm">
                                {errors.username?.message}
                            </ErrorMessage>
                        )}
                    </label>
                    <label>
                        <Text size="sm">Nome completo</Text>
                        <TextInput placeholder="Seu nome" {...register('name')} />
                        {errors.name && (
                            <ErrorMessage size="sm">
                                {errors.name?.message}
                            </ErrorMessage>
                        )}
                    </label>
                    <Button type="submit" disabled={isSubmitting}>
                        Próximo passo
                        <ArrowRight />
                    </Button>
                </Form>
            </Header>
        </Container>
    )
}