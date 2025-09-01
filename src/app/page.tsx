'use client'

import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import {
  PawPrint,
  ArrowRight,
  Sparkles,
  Store,
  Stethoscope,
  Bell,
  CalendarClock,
  QrCode,
  ShieldCheck,
  CreditCard,
  ShoppingCart,
  MessageCircle,
  Star,
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
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/ui/accordion'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Switch } from '@/components/ui/switch'
import { Separator } from '@/components/ui/separator'
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/40 text-foreground">
      <SiteHeader />
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <HeroSection />
        <TrustBar />
        <FeaturesSection />
        <IdentitySection />
        <HowItWorks />
        <PricingSection />
        <Testimonials />
        <FaqSection />
        <CtaBand />
      </main>
      <SiteFooter />
    </div>
  )
}

function SiteHeader() {
  const [open, setOpen] = useState(false)

  const NavLinks = () => (
    <div className="flex items-center gap-6">
      <a href="#features" className="text-sm font-medium opacity-80 hover:opacity-100">Funcionalidades</a>
      <a href="#pricing" className="text-sm font-medium opacity-80 hover:opacity-100">Planos</a>
      <a href="#faq" className="text-sm font-medium opacity-80 hover:opacity-100">FAQ</a>
      <a href="#contact" className="text-sm font-medium opacity-80 hover:opacity-100">Contato</a>
    </div>
  )

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#" className="flex items-center gap-2">
          <div className="grid h-8 w-8 place-items-center rounded-xl bg-primary/10">
            <PawPrint className="h-5 w-5 text-primary" />
          </div>
          <span className="text-lg font-bold">BobBob</span>
          <Badge className="ml-2" variant="secondary">Beta</Badge>
        </a>

        <nav className="hidden md:block">
          <NavLinks />
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <Button variant="ghost" asChild>
            <a href="/sign-in">Entrar</a>
          </Button>
          <Button className="gap-2" asChild>
            <a href="/get-started">Começar grátis <ArrowRight className="h-4 w-4" /></a>
          </Button>
        </div>

        <div className="md:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button size="icon" variant="ghost" aria-label="Abrir menu">
                <span className="i-lucide-menu h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80">
              <SheetHeader>
                <SheetTitle className="flex items-center gap-2">
                  <PawPrint className="h-5 w-5 text-primary" /> BobBob
                </SheetTitle>
              </SheetHeader>
              <div className="mt-6 grid gap-6">
                <a onClick={() => setOpen(false)} href="#features" className="text-base">Funcionalidades</a>
                <a onClick={() => setOpen(false)} href="#pricing" className="text-base">Planos</a>
                <a onClick={() => setOpen(false)} href="#faq" className="text-base">FAQ</a>
                <a onClick={() => setOpen(false)} href="#contact" className="text-base">Contato</a>
                <Separator />
                <div className="flex gap-3">
                  <Button variant="outline" className="flex-1" asChild>
                    <a href="/login">Entrar</a>
                  </Button>
                  <Button className="flex-1" asChild>
                    <a href="/get-started">Começar grátis</a>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}

function HeroSection() {
  return (
    <section className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 py-16 md:grid-cols-2 md:py-24">
      <div>
        <Badge variant="outline" className="mb-4 gap-2">
          <Sparkles className="h-4 w-4" /> Carteira digital do pet + Vitrine para petshops
        </Badge>
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-balance text-4xl font-bold tracking-tight md:text-5xl"
        >
          Saúde do seu pet organizada,
          <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent"> agendamentos no automático</span>.
        </motion.h1>
        <p className="mt-4 text-lg text-muted-foreground">
          O BobBob conecta <b>donos</b> e <b>petshops</b> com identidade digital do pet, lembretes de vacinas e uma vitrine que realmente vende.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <Button size="lg" className="gap-2" asChild>
            <a href="/get-started">
              Começar grátis
              <ArrowRight className="h-4 w-4" />
            </a>
          </Button>
          <Button size="lg" variant="outline" className="gap-2" asChild>
            <a href="https://wa.me/5599999999999?text=Quero%20testar%20o%20BobBob" target="_blank" rel="noreferrer">
              Falar no WhatsApp
              <MessageCircle className="h-4 w-4" />
            </a>
          </Button>
        </div>
        <ul className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
          <li className="flex items-center gap-2"><ShieldCheck className="h-4 w-4" /> LGPD-first</li>
          <li className="flex items-center gap-2"><Bell className="h-4 w-4" /> Push notifications</li>
          <li className="flex items-center gap-2"><CreditCard className="h-4 w-4" /> Stripe pronto</li>
        </ul>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="relative"
      >
        <div className="relative rounded-2xl border bg-card p-4 shadow-sm">
          <div className="rounded-xl bg-gradient-to-br from-primary/10 via-transparent to-primary/20 p-4">
            <div className="grid grid-cols-2 gap-4">
              <FeatureMini icon={<Stethoscope className="h-5 w-5" />} title="Carteira Digital" desc="Vacinas, exames, alergias" />
              <FeatureMini icon={<CalendarClock className="h-5 w-5" />} title="Agenda" desc="Banho, tosa, consultas" />
              <FeatureMini icon={<Store className="h-5 w-5" />} title="Vitrine" desc="Serviços e produtos" />
              <FeatureMini icon={<Bell className="h-5 w-5" />} title="Lembretes" desc="Vacinas e remédios" />
            </div>
          </div>
          <Separator className="my-4" />
          <div className="grid grid-cols-2 items-end gap-4 sm:grid-cols-3">
            <Stat label="Pets ativos" value="12.4k" />
            <Stat label="Agendamentos/mês" value="38k" />
            <Stat label="Satisfação" value="4.9/5" />
          </div>
        </div>
      </motion.div>
    </section>
  )
}

function FeatureMini({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) {
  return (
    <div className="flex items-start gap-3 rounded-lg border bg-background p-3">
      <div className="mt-0.5 text-primary">{icon}</div>
      <div>
        <div className="text-sm font-semibold">{title}</div>
        <div className="text-xs text-muted-foreground">{desc}</div>
      </div>
    </div>
  )
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="text-2xl font-bold tracking-tight">{value}</div>
      <div className="text-xs text-muted-foreground">{label}</div>
    </div>
  )
}

function TrustBar() {
  return (
    <section className="py-6">
      <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 opacity-70">
        <span className="text-sm">Stripe Connect Ready</span>
        <span className="text-sm">AWS S3</span>
        <span className="text-sm">PWA Offline</span>
        <span className="text-sm">Railway + Redis</span>
      </div>
    </section>
  )
}

function FeaturesSection() {
  const tutor = [
    { icon: PawPrint, title: 'Identidade do Pet', desc: 'Nome, raça, peso, vacinas, exames e alergias.' },
    { icon: Bell, title: 'Lembretes', desc: 'Vacinas, remédios e check-ups no prazo.' },
    { icon: CalendarClock, title: 'Agendamentos', desc: 'Banho, tosa e consultas em 2 cliques.' },
  ]
  const shop = [
    { icon: Store, title: 'Vitrine por /slug', desc: 'Página pública tipo Facebook, mas que vende.' },
    { icon: ShoppingCart, title: 'Serviços & Produtos', desc: 'Planos de banho/tosa e itens com estoque.' },
    { icon: ShieldCheck, title: 'Relatórios', desc: 'Clientes ativos, serviços mais usados e faturamento.' },
  ]

  return (
    <section id="features" className="scroll-mt-24 py-16">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-pretty text-3xl font-bold tracking-tight md:text-4xl">Feito para tutores e petshops</h2>
        <p className="mt-3 text-muted-foreground">Um único lugar para cuidar do pet e aumentar o faturamento do negócio.</p>
      </div>

      <Tabs defaultValue="tutor" className="mt-10">
        <div className="flex items-center justify-center">
          <TabsList>
            <TabsTrigger value="tutor">Donos de Pets</TabsTrigger>
            <TabsTrigger value="shop">Petshops</TabsTrigger>
          </TabsList>
        </div>
        <TabsContent value="tutor" className="mt-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {tutor.map((f) => (
              <Card key={f.title} className="border-muted-foreground/20">
                <CardHeader>
                  <div className="mb-2 inline-flex rounded-lg bg-primary/10 p-2 text-primary">
                    <f.icon className="h-5 w-5" />
                  </div>
                  <CardTitle className="text-lg">{f.title}</CardTitle>
                  <CardDescription>{f.desc}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="shop" className="mt-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {shop.map((f) => (
              <Card key={f.title}>
                <CardHeader>
                  <div className="mb-2 inline-flex rounded-lg bg-primary/10 p-2 text-primary">
                    <f.icon className="h-5 w-5" />
                  </div>
                  <CardTitle className="text-lg">{f.title}</CardTitle>
                  <CardDescription>{f.desc}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </section>
  )
}

function IdentitySection() {
  return (
    <section className="py-16">
      <Card className="overflow-hidden border-primary/20">
        <div className="grid items-center gap-0 md:grid-cols-2">
          <div className="p-8 md:p-10">
            <Badge variant="secondary" className="mb-3">Identidade Digital</Badge>
            <h3 className="text-2xl font-bold md:text-3xl">PetID: a chave que conecta tutor e petshop</h3>
            <p className="mt-2 text-muted-foreground">
              Cada pet possui um código único com dígito verificador. Use QR Code para acessar a carteirinha, histórico e próximos cuidados.
            </p>
            <ul className="mt-4 space-y-2 text-sm">
              <li className="flex items-center gap-2"><Check className="h-4 w-4 text-primary" /> Consulta rápida via QR</li>
              <li className="flex items-center gap-2"><Check className="h-4 w-4 text-primary" /> Histórico unificado (vacinas, exames, alergias)</li>
              <li className="flex items-center gap-2"><Check className="h-4 w-4 text-primary" /> Compartilhável com qualquer petshop</li>
            </ul>
            <div className="mt-6 flex gap-3">
              <Button asChild>
                <a href="/get-started">Criar PetID agora</a>
              </Button>
              <Button variant="outline" className="gap-2" asChild>
                <a href="#pricing">Ver planos <ArrowRight className="h-4 w-4" /></a>
              </Button>
            </div>
          </div>
          <div className="border-t p-8 md:border-l md:border-t-0 md:p-10">
            <div className="rounded-xl border bg-card p-6">
              <div className="mb-4 flex items-center gap-3">
                <div className="rounded-lg bg-primary/10 p-2 text-primary"><QrCode className="h-5 w-5" /></div>
                <div>
                  <div className="text-sm font-semibold">Exemplo de PetID</div>
                  <div className="text-xs text-muted-foreground">Escaneie e acesse a carteirinha</div>
                </div>
              </div>
              <code className="block rounded-lg bg-muted p-4 text-sm">BR-PA-SNM-01F9A7-7</code>
              <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
                <div className="rounded-lg border p-3">
                  <div className="text-xs text-muted-foreground">Próxima vacina</div>
                  <div className="font-semibold">V10 — 15/10/2025</div>
                </div>
                <div className="rounded-lg border p-3">
                  <div className="text-xs text-muted-foreground">Último banho/tosa</div>
                  <div className="font-semibold">22/08/2025</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </section>
  )
}

function HowItWorks() {
  const steps = [
    { icon: PawPrint, title: 'Crie a identidade', desc: 'Cadastre seu pet e gere o PetID.' },
    { icon: Store, title: 'Conecte com o petshop', desc: 'Compartilhe o PetID e libere histórico.' },
    { icon: CalendarClock, title: 'Agende serviços', desc: 'Banho, tosa ou consultas em poucos cliques.' },
    { icon: Bell, title: 'Receba lembretes', desc: 'Vacinas e remédios sempre em dia.' },
  ]

  return (
    <section className="py-16">
      <div className="mx-auto max-w-3xl text-center">
        <h3 className="text-3xl font-bold tracking-tight">Como funciona</h3>
        <p className="mt-2 text-muted-foreground">Um fluxo simples para resultados imediatos.</p>
      </div>
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((s, i) => (
          <Card key={s.title}>
            <CardHeader>
              <div className="mb-2 inline-flex rounded-lg bg-primary/10 p-2 text-primary"><s.icon className="h-5 w-5" /></div>
              <CardTitle className="text-lg">{i + 1}. {s.title}</CardTitle>
              <CardDescription>{s.desc}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </section>
  )
}

function PricingSection() {
  const [yearly, setYearly] = useState(true)

  const ownerPrice = useMemo(() => (yearly ? 12 * 14 - 2 * 14 : 14), [yearly]) // R$14/mês com 2 meses grátis no anual
  const basicPrice = useMemo(() => (yearly ? 12 * 149 - 2 * 149 : 149), [yearly])
  const proPrice = useMemo(() => (yearly ? 12 * 299 - 2 * 299 : 299), [yearly])

  return (
    <section id="pricing" className="scroll-mt-24 py-16">
      <div className="mx-auto max-w-3xl text-center">
        <h3 className="text-3xl font-bold tracking-tight">Planos simples e diretos</h3>
        <p className="mt-2 text-muted-foreground">Comece grátis. Atualize quando precisar de mais poder.</p>
      </div>

      <div className="mt-6 flex items-center justify-center gap-3 text-sm">
        <span className="opacity-70">Mensal</span>
        <Switch checked={yearly} onCheckedChange={setYearly} aria-label="Alternar cobrança anual" />
        <span className="flex items-center gap-2">Anual <Badge variant="secondary">2 meses grátis</Badge></span>
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-3">
        <Card className="border-muted-foreground/20">
          <CardHeader>
            <div className="flex items-center gap-2">
              <Badge variant="outline">Tutores</Badge>
              <span className="text-xs text-muted-foreground">Carteira Digital</span>
            </div>
            <CardTitle className="text-2xl">Owner</CardTitle>
            <CardDescription>Identidade do pet, lembretes e agendamentos.</CardDescription>
          </CardHeader>
          <CardContent>
            <PriceTag amount={ownerPrice} yearly={yearly} />
            <ul className="mt-4 space-y-2 text-sm">
              <FeatureItem>PetID ilimitado</FeatureItem>
              <FeatureItem>Lembretes de vacinas e medicamentos</FeatureItem>
              <FeatureItem>Agendamentos básicos</FeatureItem>
              <FeatureItem>Compartilhamento via QR</FeatureItem>
            </ul>
          </CardContent>
          <CardFooter>
            <Button className="w-full" asChild>
              <a href="/get-started">Criar conta</a>
            </Button>
          </CardFooter>
        </Card>

        <Card className="relative border-primary/30">
          <div className="absolute right-3 top-3">
            <Badge className="gap-1"><Star className="h-3 w-3" /> Mais Popular</Badge>
          </div>
          <CardHeader>
            <div className="flex items-center gap-2">
              <Badge variant="outline">Petshops</Badge>
              <span className="text-xs text-muted-foreground">Para começar</span>
            </div>
            <CardTitle className="text-2xl">Basic</CardTitle>
            <CardDescription>Vitrine por /slug, serviços e agendamentos.</CardDescription>
          </CardHeader>
          <CardContent>
            <PriceTag amount={basicPrice} yearly={yearly} />
            <ul className="mt-4 space-y-2 text-sm">
              <FeatureItem>Vitrine pública que vende</FeatureItem>
              <FeatureItem>Agenda com lembretes</FeatureItem>
              <FeatureItem>WhatsApp integrado</FeatureItem>
              <FeatureItem>Relatórios essenciais</FeatureItem>
            </ul>
          </CardContent>
          <CardFooter>
            <Button className="w-full" asChild>
              <a href="/get-started">Começar no Basic</a>
            </Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <Badge variant="outline">Petshops</Badge>
              <span className="text-xs text-muted-foreground">Para escalar</span>
            </div>
            <CardTitle className="text-2xl">Pro</CardTitle>
            <CardDescription>Fidelidade, marketplace e relatórios avançados.</CardDescription>
          </CardHeader>
          <CardContent>
            <PriceTag amount={proPrice} yearly={yearly} />
            <ul className="mt-4 space-y-2 text-sm">
              <FeatureItem>Programa de pontos por pet</FeatureItem>
              <FeatureItem>Produtos e serviços com cobrança online</FeatureItem>
              <FeatureItem>Relatórios avançados de faturamento</FeatureItem>
              <FeatureItem>Suporte prioritário</FeatureItem>
            </ul>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full" asChild>
              <a href="#contact">Falar com vendas</a>
            </Button>
          </CardFooter>
        </Card>
      </div>

      <p className="mt-4 text-center text-xs text-muted-foreground">
        * Preços sugeridos. Integrações de pagamento via Stripe; taxas podem se aplicar.
      </p>
    </section>
  )
}

function PriceTag({ amount, yearly }: { amount: number; yearly: boolean }) {
  const per = yearly ? 'ano' : 'mês'
  return (
    <div className="flex items-end gap-2">
      <div className="text-3xl font-bold tracking-tight">R$ {amount.toLocaleString('pt-BR')}</div>
      <div className="pb-1 text-xs text-muted-foreground">/ {per}</div>
    </div>
  )
}

function FeatureItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-center gap-2"><Check className="h-4 w-4 text-primary" /> {children}</li>
  )
}

function Testimonials() {
  const items = [
    {
      name: 'Carla S.',
      role: 'Dona da Lola',
      text:
        'Eu esquecia as vacinas. Agora o BobBob me lembra e já marco banho no meu petshop. Muito prático!',
    },
    {
      name: 'Petshop AuAu',
      role: 'Belém - PA',
      text:
        'A vitrine em /slug e os lembretes aumentaram os agendamentos em 28% no primeiro mês.',
    },
    {
      name: 'Lucas R.',
      role: 'Tutor do Thor',
      text:
        'Ter a carteirinha digital sempre à mão salvou na consulta. O QR deu acesso a tudo em segundos.',
    },
  ]

  return (
    <section className="py-16">
      <div className="mx-auto max-w-3xl text-center">
        <h3 className="text-3xl font-bold tracking-tight">Quem usa recomenda</h3>
        <p className="mt-2 text-muted-foreground">Feedback real de quem já testou o BobBob.</p>
      </div>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {items.map((t) => (
          <Card key={t.name}>
            <CardContent className="pt-6">
              <p className="min-h-20 text-sm">“{t.text}”</p>
              <div className="mt-4 flex items-center gap-3">
                <Avatar className="h-8 w-8"><AvatarFallback>{t.name.slice(0, 2).toUpperCase()}</AvatarFallback></Avatar>
                <div>
                  <div className="text-sm font-semibold">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

function FaqSection() {
  return (
    <section id="faq" className="scroll-mt-24 py-16">
      <div className="mx-auto max-w-3xl text-center">
        <h3 className="text-3xl font-bold tracking-tight">Perguntas frequentes</h3>
        <p className="mt-2 text-muted-foreground">Transparência para você decidir com segurança.</p>
      </div>
      <div className="mx-auto mt-8 max-w-3xl">
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>O BobBob é um app ou um site?</AccordionTrigger>
            <AccordionContent>
              É um web app (PWA) que funciona em qualquer dispositivo e pode ser instalado como app. Mais à frente, lançaremos versão nativa.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Como funciona o PetID?</AccordionTrigger>
            <AccordionContent>
              Cada pet tem um código único com dígito verificador. Você pode compartilhar via QR para petshops acessarem a carteirinha e o histórico.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Preciso pagar para começar?</AccordionTrigger>
            <AccordionContent>
              Tutores podem começar grátis. Petshops têm plano Basic acessível e podem evoluir para o Pro quando precisarem de mais recursos.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>Posso falar pelo WhatsApp?</AccordionTrigger>
            <AccordionContent>
              Sim. Adotamos WhatsApp como canal oficial no MVP para adoção rápida. O chat interno virá no plano Pro futuramente.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      <ContactBar />
    </section>
  )
}

function ContactBar() {
  return (
    <div id="contact" className="mx-auto mt-10 max-w-2xl rounded-2xl border bg-card p-4 sm:p-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end">
        <div className="flex-1">
          <Label htmlFor="email">Receber novidades e convite para o beta</Label>
          <div className="mt-2 flex gap-2">
            <Input id="email" type="email" placeholder="seu@email.com" className="flex-1" />
            <Button className="gap-2" aria-label="Inscrever-se">
              Quero receber <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
          <p className="mt-1 text-xs text-muted-foreground">Sem spam. Você pode sair quando quiser.</p>
        </div>
      </div>
    </div>
  )
}

function CtaBand() {
  return (
    <section className="py-16">
      <div className="relative overflow-hidden rounded-2xl border bg-gradient-to-br from-primary/15 via-transparent to-primary/25 p-8 md:p-12">
        <div className="max-w-2xl">
          <h3 className="text-2xl font-bold md:text-3xl">Pronto para levar a saúde do seu pet e seu petshop para o próximo nível?</h3>
          <p className="mt-2 text-muted-foreground">Comece grátis hoje e ative recursos premium quando fizer sentido.</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button size="lg" className="gap-2" asChild>
              <a href="/get-started">Começar grátis <ArrowRight className="h-4 w-4" /></a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="#pricing">Ver planos</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

function SiteFooter() {
  return (
    <footer className="border-t py-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 sm:px-6 lg:px-8 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-2">
          <div className="grid h-8 w-8 place-items-center rounded-xl bg-primary/10">
            <PawPrint className="h-5 w-5 text-primary" />
          </div>
          <div className="text-sm font-semibold">BobBob</div>
        </div>
        <div className="text-xs text-muted-foreground">© {new Date().getFullYear()} BobBob. Todos os direitos reservados.</div>
        <div className="flex items-center gap-4 text-sm">
          <a className="opacity-80 hover:opacity-100" href="#">Termos</a>
          <a className="opacity-80 hover:opacity-100" href="#">Privacidade</a>
          <a className="opacity-80 hover:opacity-100" href="#">Contato</a>
        </div>
      </div>
    </footer>
  )
}
