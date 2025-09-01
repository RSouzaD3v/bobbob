'use client'

import { useState, useTransition, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { signIn } from 'next-auth/react'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { motion } from 'framer-motion'
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form'
import { Badge } from '@/components/ui/badge'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Eye, EyeOff, Lock, Mail, PawPrint, Loader2, ShieldCheck } from 'lucide-react'
import Link from 'next/link'

const schema = z.object({
  email: z.string().email('Informe um e-mail válido'),
  password: z.string().min(6, 'A senha deve ter ao menos 6 caracteres'),
})

type FormValues = z.infer<typeof schema>

export default function SignInPageContent() {
  const router = useRouter()

  const [showPassword, setShowPassword] = useState(false)
  const [isPending, startTransition] = useTransition()
  const [genericError, setGenericError] = useState<string | null>(null)

  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { email: '', password: '' },
  })

  useEffect(() => {
  }, [])

  async function onSubmit(values: FormValues) {
    setGenericError(null)
    startTransition(async () => {
      const res = await signIn('credentials', {
        email: values.email,
        password: values.password,
        redirect: false,
      })

      if (!res) {
        setGenericError('Falha ao conectar ao servidor de autenticação.')
        return
      }

      if (res.error) {
        setGenericError('E-mail ou senha inválidos.')
        return
      }
    })
  }

  return (
    <div className="min-h-[100dvh] bg-gradient-to-b from-background to-muted/40">
      <header className="mx-auto max-w-xl px-4 py-8">
        <Link href="/" className="flex items-center gap-2">
          <div className="grid h-9 w-9 place-items-center rounded-xl bg-primary/10">
            <PawPrint className="h-5 w-5 text-primary" />
          </div>
          <span className="text-lg font-bold">BobBob</span>
          <Badge variant="secondary" className="ml-1">Entrar</Badge>
        </Link>
      </header>

      <main className="mx-auto max-w-xl px-4 pb-20">
        <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35 }}>
          <Card className="overflow-hidden border-primary/20">
            <CardHeader>
              <CardTitle className="text-2xl">Bem-vindo de volta</CardTitle>
              <CardDescription>Acesse sua conta para continuar cuidando do seu pet e do seu petshop.</CardDescription>
            </CardHeader>

            <CardContent className="grid gap-6">
              {genericError && (
                <Alert variant="destructive">
                  <AlertTitle>Não foi possível entrar</AlertTitle>
                  <AlertDescription>{genericError}</AlertDescription>
                </Alert>
              )}

              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-4">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <Label htmlFor="email">E-mail</Label>
                        <FormControl>
                          <div className="relative">
                            <Mail className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 opacity-60" />
                            <Input id="email" placeholder="voce@email.com" type="email" className="pl-9" {...field} />
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <Label htmlFor="password">Senha</Label>
                        <FormControl>
                          <div className="relative">
                            <Lock className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 opacity-60" />
                            <Input
                              id="password"
                              type={showPassword ? 'text' : 'password'}
                              placeholder="••••••••"
                              className="pl-9 pr-10"
                              {...field}
                            />
                            <button
                              type="button"
                              onClick={() => setShowPassword((s) => !s)}
                              aria-label={showPassword ? 'Ocultar senha' : 'Mostrar senha'}
                              className="absolute right-2 top-1/2 -translate-y-1/2 rounded-md p-2 text-muted-foreground hover:bg-muted"
                            >
                              {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                            </button>
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="flex items-center justify-between text-sm">
                    <Link className="text-primary underline-offset-4 hover:underline" href="/forgot-password">
                      Esqueci minha senha
                    </Link>
                    <Link className="text-muted-foreground underline-offset-4 hover:underline" href="/get-started">
                      Criar conta
                    </Link>
                  </div>

                  <Button type="submit" size="lg" className="mt-2 gap-2" disabled={isPending}>
                    {isPending && <Loader2 className="h-4 w-4 animate-spin" />} Entrar
                  </Button>
                </form>
              </Form>

              <p className="flex items-center justify-center gap-2 text-xs text-muted-foreground">
                <ShieldCheck className="h-3.5 w-3.5" />
                Seus dados são protegidos conforme a LGPD.
              </p>
            </CardContent>

            <CardFooter className="flex items-center justify-between">
              <Link href="/" className="text-sm text-muted-foreground underline-offset-4 hover:underline">
                Voltar para a página inicial
              </Link>
              <Link href="/privacy" className="text-sm text-muted-foreground underline-offset-4 hover:underline">
                Política de Privacidade
              </Link>
            </CardFooter>
          </Card>
        </motion.div>
      </main>
    </div>
  )
}
