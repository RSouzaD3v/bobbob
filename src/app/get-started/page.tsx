'use client'

import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import {
  PawPrint,
  Store,
  ArrowRight,
  LogIn,
  Check,
} from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'

export default function GetStartedPage() {
  const router = useRouter()

  const goTutor = () => router.push('/sign-up/owner')
  const goPetshop = () => router.push('/sign-up/petshop')
  const goSignin = () => router.push('/sign-in')

  return (
    <div className="min-h-[100dvh] bg-gradient-to-b from-background to-muted/40">
      <header className="mx-auto max-w-5xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <div className="grid h-9 w-9 place-items-center rounded-xl bg-primary/10">
            <PawPrint className="h-5 w-5 text-primary" />
          </div>
          <div>
            <h1 className="text-xl font-bold leading-none">Começar no BobBob</h1>
            <p className="text-sm text-muted-foreground">Escolha seu perfil para continuar</p>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-4 pb-16 sm:px-6 lg:px-8">
        {/* Hero */}
        <section className="mx-auto max-w-3xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-balance text-3xl font-bold tracking-tight md:text-4xl"
          >
            Quem é você?
          </motion.h2>
          <p className="mt-2 text-muted-foreground">
            Isso ajuda a personalizar sua experiência. Você pode mudar depois nas configurações.
          </p>
        </section>

        {/* Options */}
        <section className="mt-10 grid gap-6 md:grid-cols-2">
          {/* Tutor */}
          <motion.div initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35 }}>
            <Card className="group h-full overflow-hidden border-primary/20">
              <CardHeader>
                <div className="mb-2 inline-flex items-center gap-2">
                  <Badge variant="outline">Para Donos de Pets</Badge>
                </div>
                <CardTitle className="flex items-center gap-2 text-2xl">
                  <PawPrint className="h-5 w-5 text-primary" /> Sou Tutor (Dono de Pet)
                </CardTitle>
                <CardDescription>
                  Crie a identidade digital do seu pet, receba lembretes de vacinas e agende serviços.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2"><Check className="h-4 w-4 text-primary" /> PetID com QR e carteira de vacinas</li>
                  <li className="flex items-center gap-2"><Check className="h-4 w-4 text-primary" /> Lembretes de vacinas e medicamentos</li>
                  <li className="flex items-center gap-2"><Check className="h-4 w-4 text-primary" /> Agendamento rápido com seu petshop</li>
                </ul>
              </CardContent>
              <CardFooter className="flex flex-col gap-3 sm:flex-row">
                <Button className="w-full gap-2" onClick={goTutor} aria-label="Criar conta de Tutor">
                  Começar como Tutor <ArrowRight className="h-4 w-4" />
                </Button>
                <Button className="w-full" variant="outline" onClick={goSignin} aria-label="Já tenho conta">
                  Já tenho conta
                </Button>
              </CardFooter>
            </Card>
          </motion.div>

          {/* Petshop */}
          <motion.div initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }}>
            <Card className="group h-full overflow-hidden border-primary/20">
              <CardHeader>
                <div className="mb-2 inline-flex items-center gap-2">
                  <Badge variant="outline">Para Petshops</Badge>
                </div>
                <CardTitle className="flex items-center gap-2 text-2xl">
                  <Store className="h-5 w-5 text-primary" /> Sou Petshop
                </CardTitle>
                <CardDescription>
                  Tenha uma vitrine que vende, gestão de agendamentos e relatórios do seu negócio.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2"><Check className="h-4 w-4 text-primary" /> Página pública em /{`{slug}`}</li>
                  <li className="flex items-center gap-2"><Check className="h-4 w-4 text-primary" /> Agenda com lembretes automáticos</li>
                  <li className="flex items-center gap-2"><Check className="h-4 w-4 text-primary" /> Relatórios de clientes e serviços</li>
                </ul>
              </CardContent>
              <CardFooter className="flex flex-col gap-3 sm:flex-row">
                <Button className="w-full gap-2" onClick={goPetshop} aria-label="Criar conta de Petshop">
                  Começar como Petshop <ArrowRight className="h-4 w-4" />
                </Button>
                <Button className="w-full" variant="outline" onClick={goSignin} aria-label="Já tenho conta">
                  Já tenho conta
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        </section>

        {/* Sign-in shortcut */}
        <div className="mx-auto mt-8 max-w-3xl text-center">
          <Separator className="my-6" />
          <Button variant="ghost" onClick={goSignin} className="gap-2" aria-label="Ir para login">
            <LogIn className="h-4 w-4" /> Entrar com minha conta
          </Button>
          <p className="mt-2 text-xs text-muted-foreground">
            Ao continuar, você concorda com nossos Termos e Política de Privacidade.
          </p>
        </div>
      </main>
    </div>
  )
}
