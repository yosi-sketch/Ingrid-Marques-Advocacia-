"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence, Variants, MotionConfig } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  CheckCircle2,
  Scale,
  Award,
  Shield,
  HeartHandshake,
  ArrowRight,
  ArrowUpRight,
  Star,
  Menu,
  X,
  Sparkles,
  ShieldCheck,
  HeartPulse,
  Activity,
  FileCheck2,
  CalendarCheck,
  Stethoscope,
} from "lucide-react";
import GlowingButton from "./components/GlowingButton";

const WHATSAPP_NUMBER = "5531992938746";
const PHONE_DISPLAY = "(31) 99293-8746";
const EMAIL_CONTACT = "contato@ingridmarquesadvocacia.com.br";
const INSTAGRAM_URL = "https://www.instagram.com/draingridmarques/";
const INSTAGRAM_HANDLE = "@draingridmarques";

const ADDRESS_TEXT =
  "R. Seis, 147 - Alta de Gaya, Nova Lima - MG, 34012-856 · Atendimento Presencial & Online em Todo o Brasil";
const GOOGLE_SEARCH_URL =
  "https://www.google.com/search?q=Ingrid+Marques+Advocacia+Previdenci%C3%A1ria%0ANova+Lima+%C2%B7+MG&sourceid=chrome&ie=UTF-8#";

const LOGO_SRC = "/logo.png";
const FOTO_HERO_SRC = "/dra-ingrid-marques.jpg";
const FOTO_SOBRE_SRC = "/dra-ingrid-office.jpg";
const FOTO_EDITORIAL_SRC = "/dra-ingrid-portrait-bw.jpg";

function getWhatsAppUrl(
  message?: string,
  number: string = WHATSAPP_NUMBER
) {
  const defaultText =
    "Olá, Dra. Ingrid Marques! Gostaria de consultar sobre meu benefício previdenciário e agendar um atendimento.";
  return `https://wa.me/${number}?text=${encodeURIComponent(
    message || defaultText
  )}`;
}

function WhatsAppIcon({
  size = 17,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  return (
    <svg
      aria-hidden="true"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.63C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2ZM12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.59 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19.01L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67ZM8.53 7.33C8.37 7.39 8.1 7.39 7.87 7.64C7.65 7.89 7.02 8.48 7.02 9.69C7.02 10.9 7.9 12.07 8.02 12.23C8.15 12.39 9.74 14.85 12.19 15.91C12.77 16.16 13.23 16.31 13.58 16.42C14.17 16.61 14.71 16.58 15.13 16.52C15.6 16.45 16.58 15.93 16.78 15.35C16.99 14.77 16.99 14.27 16.93 14.17C16.86 14.07 16.71 14.01 16.47 13.89C16.24 13.77 15.11 13.21 14.9 13.14C14.69 13.06 14.54 13.02 14.39 13.25C14.23 13.47 13.8 13.98 13.67 14.13C13.54 14.27 13.41 14.29 13.18 14.17C12.95 14.06 11.98 13.74 10.84 12.72C9.95 11.92 9.34 10.94 9.17 10.65C9.01 10.36 9.15 10.2 9.27 10.08C9.37 9.98 9.5 9.8 9.62 9.66C9.74 9.52 9.78 9.42 9.86 9.26C9.94 9.1 9.9 8.95 9.84 8.83C9.78 8.71 9.32 7.57 9.13 7.11C8.94 6.66 8.75 6.72 8.6 6.71C8.47 6.71 8.31 6.71 8.15 6.71L8.53 7.33Z" />
    </svg>
  );
}

function InstagramIcon({
  size = 17,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  return (
    <svg
      aria-hidden="true"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069ZM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0ZM12 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324ZM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8ZM18.406 4.155a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881Z" />
    </svg>
  );
}

function GoogleIcon({
  size = 16,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={className}
    >
      <path
        fill="#4285F4"
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      />
      <path
        fill="#34A853"
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      />
      <path
        fill="#FBBC05"
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
      />
      <path
        fill="#EA4335"
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
      />
    </svg>
  );
}

const reveal: Variants = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.04 } },
};

interface PracticeArea {
  id: string;
  title: string;
  icon: typeof Scale;
  tag: string;
  summary: string;
  details: string;
  topics: string[];
  whatsAppText: string;
}

const practiceAreas: PracticeArea[] = [
  {
    id: "planejamento-aposentadorias",
    title: "Planejamento Previdenciário & Aposentadorias",
    icon: CalendarCheck,
    tag: "Aposentadoria Integral · 13º Salário · Regras de Transição",
    summary:
      "Planejamento do momento exato e da regra mais vantajosa para você receber o maior valor de aposentadoria possível, com direito integral a 13º salário e retroativos.",
    details:
      "A Dra. Ingrid Marques realiza uma auditoria detalhada de todo o seu histórico contributivo (CNIS, carteiras antigas, tempo rural e especial), corrigindo falhas do INSS e evitando armadilhas que reduzem seu benefício. Nossa atuação garante a conquista da aposentadoria integral, orientando se o segurado se enquadra em regras definitivas ou de transição da Reforma.",
    topics: [
      "Planejamento Previdenciário personalizado com simulação de cenários e cálculo de valor futuro",
      "Aposentadoria por Idade Urbana e Rural com cômputo de períodos não registrados",
      "Aposentadoria por Tempo de Contribuição e aplicação das melhores regras de transição",
      "Aposentadoria Especial para trabalhadores expostos a agentes insalubres ou periculosos (PPP/LTCAT)",
      "Retificação e averbação de vínculos no CNIS, tempo de serviço militar e atividade rural",
      "Cobrança integral de valores retroativos devidos desde o primeiro requerimento no INSS",
    ],
    whatsAppText:
      "Olá, Dra. Ingrid Marques! Gostaria de fazer o meu Planejamento Previdenciário e consultar minha aposentadoria.",
  },
  {
    id: "incapacidade-permanente-invalidez",
    title: "Aposentadoria por Incapacidade Permanente (Invalidez)",
    icon: HeartPulse,
    tag: "Reversão de Pente-Fino · Laudos Médicos · Causas Complexas",
    summary:
      "Restabelecimento e concessão judicial de aposentadoria por invalidez para segurados com doenças ou limitações definitivas, inclusive revertendo cortes indevidos do INSS.",
    details:
      "Muitos trabalhadores aposentados por invalidez há anos têm seus benefícios cortados arbitrariamente pelo 'pente-fino' do INSS sob a alegação infundada de que estão aptos. A Dra. Ingrid Marques possui histórico de êxito em casos complexos de reversão, preparando provas periciais consistentes e impugnando laudos médicos desfavoráveis na Justiça.",
    topics: [
      "Ação de concessão e restabelecimento de Aposentadoria por Incapacidade Permanente",
      "Reversão judicial de cancelamentos e cortes indevidos em pente-finos do INSS",
      "Elaboração de quesitos periciais estratégicos e impugnação minuciosa de laudos desfavoráveis",
      "Adicional de 25% para o aposentado por invalidez que necessita de assistência permanente de terceiros",
      "Conversão de auxílio-doença em aposentadoria por invalidez definitiva",
      "Defesa de segurados portadores de doenças graves, ortopédicas, cardíacas e psiquiátricas",
    ],
    whatsAppText:
      "Olá, Dra. Ingrid Marques! Preciso de ajuda urgente para restabelecer ou solicitar minha Aposentadoria por Invalidez.",
  },
  {
    id: "auxilio-acidente-sequelas",
    title: "Auxílio-Acidente & Indenizações do INSS",
    icon: Activity,
    tag: "Sequela Permanente · Acidente de Moto / Trabalho · Benefício Vitalício",
    summary:
      "Benefício mensal indenizatório pago pelo INSS para quem sofreu acidente de qualquer natureza (trânsito, moto, trabalho) que resultou em sequela permanente ou limitação motora.",
    details:
      "Poucos segurados sabem que têm direito ao Auxílio-Acidente mesmo voltando a trabalhar com carteira assinada. Esse benefício possui caráter indenizatório, não impede o trabalho formal e é pago até a aposentadoria para quem teve redução da capacidade de trabalho (como encurtamento de membro, fraturas ou lesões consolidadas).",
    topics: [
      "Concessão do Auxílio-Acidente decorrente de acidentes de moto, trânsito ou esportivos",
      "Auxílio-Acidente por acidentes de trabalho típicos e doenças ocupacionais",
      "Benefício que não impede o retorno ao trabalho e pode ser acumulado com o salário",
      "Comprovação técnica de sequelas motoras permanentes e encurtamento de membros",
      "Cobrança de parcelas retroativas desde a cessação do auxílio-doença original",
      "Atuação contenciosa contra a recusa arbitrária da perícia médica do INSS",
    ],
    whatsAppText:
      "Olá, Dra. Ingrid Marques! Gostaria de consultar se tenho direito ao Auxílio-Acidente por sequela de acidente.",
  },
  {
    id: "auxilio-incapacidade-temporaria",
    title: "Auxílio por Incapacidade Temporária (Auxílio-Doença)",
    icon: Stethoscope,
    tag: "Perícia Médica · Benefício Negado · Prorrogação Urgente",
    summary:
      "Garantia rápida do pagamento do benefício para quem está impossibilitado de exercer sua atividade habitual por motivo de doença, acidente ou cirurgia.",
    details:
      "Se o médico perito do INSS indeferiu o seu pedido de auxílio-doença ou determinou uma 'alta programada' antes de sua recuperação real, ingressamos com recurso e ação judicial imediata para restabelecer o seu sustento enquanto você realiza seu tratamento de saúde.",
    topics: [
      "Pedido urgente de concessão judicial com pedido de liminar para restabelecimento imediato",
      "Reversão de altas programadas injustas e indeferimentos por 'ausência de incapacidade'",
      "Reconhecimento da qualidade de segurado e cômputo correto do período de carência",
      "Reunir relatórios médicos, exames de imagem e atestados conclusivos com quesitação direcionada",
      "Auxílio-doença comum (B31) versus auxílio-doença acidentário (B91) com estabilidade provisória",
      "Acompanhamento direto pelo WhatsApp até o primeiro pagamento em conta",
    ],
    whatsAppText:
      "Olá, Dra. Ingrid Marques! Meu auxílio-doença foi indeferido pelo INSS e preciso de ajuda para reverter.",
  },
  {
    id: "bpc-loas-beneficio-assistencial",
    title: "BPC / LOAS & Benefício Assistencial",
    icon: HeartHandshake,
    tag: "Idosos 65+ · Pessoa com Deficiência · Triagem de Direitos",
    summary:
      "Concessão de um salário mínimo mensal para idosos com 65 anos ou mais e pessoas com deficiência ou enfermidade incapacitante em situação de vulnerabilidade social.",
    details:
      "O BPC/LOAS é um direito garantido por lei, mas exige extremo rigor no CadÚnico e nos critérios socioeconômicos. A Dra. Ingrid Marques realiza uma triagem honesta e detalhada para verificar se o segurado não possui direito a uma aposentadoria integral (com 13º salário) antes de requerer o LOAS, atuando com máxima transparência.",
    topics: [
      "BPC do Idoso (a partir de 65 anos) que nunca contribuiu ou contribuiu pouco para o INSS",
      "BPC para Pessoa com Deficiência (PcD) física, sensorial, intelectual ou mental de qualquer idade",
      "Enquadramento de doenças crônicas ou incapacitantes (câncer, cardiopatias, TEA, ortopédicas)",
      "Avaliação socioeconômica e comprovação da vulnerabilidade familiar com dedução de despesas médicas",
      "Análise preliminar para verificar se não há possibilidade de concessão de aposentadoria com 13º",
      "Ação judicial célere após indeferimento indevido na agência do INSS",
    ],
    whatsAppText:
      "Olá, Dra. Ingrid Marques! Gostaria de consultar sobre a concessão do BPC / LOAS para minha família.",
  },
  {
    id: "revisoes-destravamento-inss",
    title: "Revisões, Destravamento de Processos & Retroativos",
    icon: FileCheck2,
    tag: "Processos Travados · Mandado de Segurança · Valores Atrasados",
    summary:
      "Destravar pedidos parados no INSS há meses, recorrer de decisões erradas no judiciário e receber boladas de atrasados acumulados corrigidos monetariamente.",
    details:
      "Muitos segurados enfrentam esperas abusivas de 6 meses, 1 ano ou mais sem nenhuma resposta do INSS. Entramos com Mandado de Segurança para forçar a agência a decidir seu processo com urgência, além de pleitear revisões de valor e cobrar todos os atrasados com juros e correção monetária.",
    topics: [
      "Mandado de Segurança para cumprimento imediato de prazos legais pelo INSS",
      "Desbloqueio de requerimentos paralisados ou esquecidos na fila administrativa",
      "Revisão da vida toda, revisão das melhores contribuições e revisão do teto",
      "Cobrança judicial de precatórios e RPVs (Requisições de Pequeno Valor) de parcelas atrasadas",
      "Impugnação de descontos indevidos e fraudes em folha de pagamento de aposentados",
      "Recursos em instâncias superiores contra decisões judiciais desfavoráveis",
    ],
    whatsAppText:
      "Olá, Dra. Ingrid Marques! Meu processo está travado no INSS e gostaria de assistência jurídica.",
  },
];

const clientReviews = [
  {
    name: "Camila Gonçalves",
    reviewsCount: "1 avaliação no Google",
    date: "Avaliação Verificada no Google Meu Negócio",
    badge: "Aposentadoria Integral com 13º",
    content:
      "Fui até Ingrid através de uma indicação de uma amiga que conseguiu se aposentar com ela. Minha sogra estava tentando se aposentar, procurou um profissional de BH que sugeriu omitir coisas para tentar pelo LOAS. Mas como tudo que começa errado dá errado, não conseguiram. Sugeri procurar o profissional certo, que atue com honestidade e falei de Ingrid: foi o certo a fazer! Ingrid é competente ao extremo, super honesta, e se não me engano conseguiu a aposentadoria da minha sogra em menos de 2 meses. E aposentadoria integral sem ser pelo Loas, com direito a décimo terceiro! Indico de olhos fechados. Que Deus te abençoe Ingrid, minha sogra que já estava sem esperança de se aposentar está feliz demais graças a você.",
    reply:
      "Agradeço muito seu feedback e a confiança no meu trabalho. Deus abençoe!",
  },
  {
    name: "Karina Nogueira",
    reviewsCount: "1 avaliação no Google",
    date: "Avaliação Verificada no Google Meu Negócio",
    badge: "Invalidez Revertida Após Corte de 2019",
    content:
      "A Ingrid resolveu o caso do meu pai, que parecia impossível! Ele era aposentado por invalidez desde 2006, mas com a reforma da previdência em 2019 cortaram a aposentadoria, dizendo que ele não se encaixava mais como inválido. Já tínhamos tentado de tudo... Dra. Ingrid acolheu e reverteu a decisão. Uma bênção!",
    reply:
      "Atender seu pai foi um presente pra mim. Um dos casos mais complexos que eu já tive. Foi uma sensação inexplicável poder dar a notícia que ele tanto queria. Me lembro bem do primeiro atendimento, ele sem a menor esperança... quando veio a notícia foi uma bênção!",
  },
  {
    name: "Jéssika Marina",
    reviewsCount: "4 avaliações no Google",
    date: "Avaliação Verificada no Google Meu Negócio",
    badge: "Auxílio-Acidente Concedido",
    content:
      "Há cerca de um ano, procurei a Ingrid Marques Advocacia Previdenciária para dar início ao processo de solicitação de auxílio-acidente, após um acidente de moto que resultou em uma sequela permanente, com encurtamento de um dos meus membros. Trabalho de excelência e dedicação do início ao fim!",
    reply:
      "Muito obrigada pelo seu depoimento. Ficamos muito felizes em contribuir com esse momento tão importante na sua vida!",
  },
  {
    name: "Vanessa Ribeiro",
    reviewsCount: "1 avaliação no Google",
    date: "Avaliação Verificada no Google Meu Negócio",
    badge: "Acolhimento & Justiça",
    content:
      "Hoje deixo aqui minha gratidão à advogada Ingrid. Quando cheguei até ela, já estava sem esperança e acreditando que minha situação não tinha mais solução. Mesmo assim, ela acolheu meu caso com profissionalismo, dedicação e muita competência. Fez justiça por mim!",
    reply:
      "Eu fico até emocionada. Muito obrigada pelo seu feedback, ele é muito importante pra mim. Fiquei imensamente feliz em poder fazer justiça por você!",
  },
  {
    name: "Marlene Teixeira",
    reviewsCount: "1 avaliação no Google",
    date: "Avaliação Verificada no Google Meu Negócio",
    badge: "Aposentadoria Garantida",
    content:
      "Só tenho que agradecer a Deus e à advogada Ingrid. Consegui resolver meu caso, uma excelente advogada. Vencemos a guerra das perícias e hoje minha aposentadoria tá garantida!",
    reply:
      "Obrigada Marlene, por confiar no nosso trabalho, mesmo com as demoras das impugnações de laudos médicos e as mazelas do judiciário. Agora sim, aposentadoria garantida e sua hora enfim chegou!",
  },
  {
    name: "Luciene Santos",
    reviewsCount: "5 avaliações no Google",
    date: "Avaliação Verificada no Google Meu Negócio",
    badge: "Dedicação & Educação",
    content:
      "Só tenho a agradecer à Dra. Ingrid pelo trabalho maravilhoso que ela prestou para meu pai. Toda dedicação, nunca deixou de atender, muita educação. E excelência no trabalho. Parabéns e gratidão Dra. Ingrid pelo excelente trabalho!",
    reply:
      "Fico feliz em ter feito parte desse processo que foi tão difícil pra nós, mas deu certo!",
  },
  {
    name: "Emmanuelle Crispim",
    reviewsCount: "2 avaliações no Google",
    date: "Avaliação Verificada no Google Meu Negócio",
    badge: "Causa Conduzida à Vitória",
    content:
      "Dra., quero expressar minha imensa gratidão pelo excelente trabalho realizado e pela dedicação em conduzir minha causa até a vitória. Sua competência, comprometimento e profissionalismo fizeram toda a diferença nesse processo.",
    reply:
      "Muito obrigada querida. Fico imensamente feliz com esse resultado!",
  },
  {
    name: "Lucimar Ramos",
    reviewsCount: "1 avaliação no Google",
    date: "Avaliação Verificada no Google Meu Negócio",
    badge: "Sonho Realizado",
    content:
      "Quero agradecer à Dra. Ingrid pelo excelente trabalho. Em momento nenhum quis desistir do meu caso, mesmo sendo muito desafiador, e sempre muito prestativa. Enfim ela conseguiu realizar o meu grande sonho!",
    reply:
      "Ah que fofa. Eu que agradeço a confiança no meu trabalho! Seu caso era realmente muito difícil, mas conseguimos desembaraçar tudo. Grata por fazer parte desse momento!",
  },
  {
    name: "Leandro Freitas",
    reviewsCount: "3 avaliações · 1 foto no Google",
    date: "Avaliação Verificada no Google Meu Negócio",
    badge: "Clareza nos Processos",
    content:
      "Excelente recepção e um trabalho com muita dedicação. Excelente esclarecimento nos atos dos processos... esclareceu muito bem todas as minhas dúvidas!",
    reply:
      "Muito obrigada pela confiança depositada no nosso trabalho desde o primeiro contato!",
  },
  {
    name: "Leidriene Alves",
    reviewsCount: "1 avaliação no Google",
    date: "Avaliação Verificada no Google Meu Negócio",
    badge: "Agilidade & Atenção",
    content:
      "Super atenciosos, resolveu bem rápido o que a gente achou que ia demorar muito!",
    reply: "Ficamos muito felizes em poder ajudar com rapidez e segurança!",
  },
];

function Heading({
  eyebrow,
  children,
  description,
  dark = true,
}: {
  eyebrow: string;
  children: React.ReactNode;
  description?: string;
  dark?: boolean;
}) {
  return (
    <div className="max-w-2xl">
      <p className={dark ? "eyebrow-dark" : "eyebrow"}>{eyebrow}</p>
      <h2 className="mt-3.5 font-serif text-3xl leading-[1.12] tracking-[-0.02em] text-white sm:text-4xl lg:text-[2.75rem]">
        {children}
      </h2>
      {description && (
        <p className="mt-4 text-[15px] leading-7 text-[#9eb1a3]">
          {description}
        </p>
      )}
    </div>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeArea, setActiveArea] = useState<PracticeArea | null>(null);

  useEffect(() => {
    const close = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveArea(null);
        setMenuOpen(false);
      }
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <MotionConfig reducedMotion="user">
      <main className="relative min-h-screen overflow-hidden bg-[#0a110c] text-white">
        {/* Top Header / Announcement Bar */}
        <header className="sticky top-0 z-40 border-b border-[#233427] bg-[#0a110c]/95 backdrop-blur-md">
          {/* Top Info Bar */}
          <div className="border-b border-[#1b2b1e] bg-[#0d1610] px-4 py-2 text-[11px] text-[#9eb1a3]">
            <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 sm:px-6">
              <div className="flex items-center gap-4">
                <span className="inline-flex items-center gap-1.5 font-semibold text-white">
                  <Star size={13} className="fill-[#deb26a] text-[#deb26a]" />
                  5,0 ★ no Google (39 avaliações)
                </span>
                <span className="hidden sm:inline text-[#233427]">|</span>
                <span className="hidden sm:inline">
                  Nova Lima - MG · Atendimento Presencial & Online em Todo o Brasil
                </span>
              </div>
              <div className="flex items-center gap-4">
                <a
                  href={`tel:+${WHATSAPP_NUMBER}`}
                  className="hidden md:inline-flex items-center gap-1.5 transition-colors hover:text-[#deb26a]"
                >
                  <Phone size={12} /> {PHONE_DISPLAY}
                </a>
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 font-bold text-[#deb26a] transition-colors hover:text-[#f5dfad]"
                >
                  <WhatsAppIcon size={13} /> Plantão Previdenciário WhatsApp
                </a>
              </div>
            </div>
          </div>

          {/* Main Navigation */}
          <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 py-3.5 sm:px-8">
            <a
              href="#inicio"
              className="inline-flex items-center gap-3 transition-transform hover:scale-[1.01]"
              aria-label="Ingrid Marques Advocacia Previdenciária"
            >
              <div className="relative h-[65px] w-[230px] sm:h-[75px] sm:w-[280px]">
                <Image
                  src={LOGO_SRC}
                  alt="Ingrid Marques Advocacia Previdenciária - Logo Oficial"
                  fill
                  priority
                  sizes="(max-width: 640px) 230px, 280px"
                  className="object-contain object-left brightness-150 contrast-125 saturate-125 drop-shadow-[0_0_12px_rgba(222,178,106,0.65)]"
                />
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden shrink-0 items-center gap-4 xl:flex">
              <a className="nav-link whitespace-nowrap" href="#inicio">
                Início
              </a>
              <a className="nav-link whitespace-nowrap" href="#sobre">
                A Advogada
              </a>
              <a className="nav-link whitespace-nowrap" href="#atuacao">
                Especialidades
              </a>
              <a className="nav-link whitespace-nowrap" href="#diferenciais">
                Por Que Escolher
              </a>
              <a className="nav-link whitespace-nowrap" href="#avaliacoes">
                Avaliações (5,0 ★)
              </a>
              <a className="nav-link whitespace-nowrap" href="#contato">
                Contato & Sede
              </a>
            </nav>

            <div className="hidden shrink-0 items-center gap-3 xl:flex">
              <GlowingButton
                href={getWhatsAppUrl(
                  "Olá, Dra. Ingrid Marques! Gostaria de uma consultoria sobre meu benefício no INSS."
                )}
                target="_blank"
                size="sm"
                variant="gold"
                className="rounded-lg shadow-sm"
              >
                <WhatsAppIcon size={14} /> Falar no WhatsApp
              </GlowingButton>
            </div>

            {/* Mobile Menu Trigger */}
            <button
              type="button"
              onClick={() => setMenuOpen(!menuOpen)}
              className="grid size-11 place-items-center rounded-lg border border-[#233427] bg-[#142017] text-white xl:hidden"
              aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          {/* Mobile Menu Dropdown */}
          <AnimatePresence>
            {menuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="border-b border-[#233427] bg-[#0d1610] px-5 py-6 xl:hidden"
              >
                <div className="flex flex-col gap-4 text-sm font-semibold uppercase tracking-wider text-[#9eb1a3]">
                  <a onClick={closeMenu} className="hover:text-white" href="#inicio">
                    Início
                  </a>
                  <a onClick={closeMenu} className="hover:text-white" href="#sobre">
                    A Advogada
                  </a>
                  <a onClick={closeMenu} className="hover:text-white" href="#atuacao">
                    Especialidades Previdenciárias
                  </a>
                  <a onClick={closeMenu} className="hover:text-white" href="#diferenciais">
                    Por Que Escolher
                  </a>
                  <a onClick={closeMenu} className="hover:text-white" href="#avaliacoes">
                    Avaliações Google (5,0 ★)
                  </a>
                  <a onClick={closeMenu} className="hover:text-white" href="#contato">
                    Contato & Sede
                  </a>
                  <div className="pt-2">
                    <GlowingButton
                      href={getWhatsAppUrl(
                        "Olá, Dra. Ingrid Marques! Gostaria de agendar uma consulta previdenciária."
                      )}
                      target="_blank"
                      size="md"
                      variant="gold"
                      className="w-full justify-center rounded-lg"
                    >
                      <WhatsAppIcon size={15} /> Falar no WhatsApp
                    </GlowingButton>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </header>

        {/* Hero Section - Deep Emerald Green #222F25 Gradient & Polished Gold */}
        <section
          id="inicio"
          className="relative isolate scroll-mt-24 border-b border-[#233427] bg-gradient-to-b from-[#0a110c] via-[#142017] to-[#0a110c]"
        >
          {/* Subtle Ambient Forest Green & Gold Glow Spheres */}
          <div className="pointer-events-none absolute -right-32 top-8 -z-10 size-[42rem] rounded-full bg-[#222f25]/40 blur-3xl" />
          <div className="pointer-events-none absolute -left-20 bottom-10 -z-10 size-[36rem] rounded-full bg-[#deb26a]/10 blur-3xl" />

          <div className="mx-auto grid min-h-[660px] max-w-7xl items-center gap-12 px-5 py-16 sm:px-8 sm:py-20 lg:min-h-[720px] lg:grid-cols-[1.1fr_0.9fr] lg:gap-14 lg:px-12 lg:py-20">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={stagger}
              className="relative z-10 max-w-2xl lg:py-4"
            >
              {/* Authority badge */}
              <motion.div
                variants={reveal}
                className="mb-6 inline-flex items-center gap-2.5 rounded-lg border border-[#deb26a]/40 bg-[#142017] px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-[#deb26a] shadow-sm"
              >
                <span className="size-2 shrink-0 rounded-full bg-[#deb26a] shadow-[0_0_8px_#deb26a]" />
                <span>DRA. INGRID MARQUES · ADVOCACIA PREVIDENCIÁRIA · NOVA LIMA - MG</span>
              </motion.div>

              <motion.h1
                variants={reveal}
                className="max-w-[760px] font-serif text-[2.65rem] leading-[1.08] tracking-[-0.02em] text-white sm:text-5xl lg:text-[3.85rem]"
              >
                Defesa previdenciária de excelência para conquistar o benefício que é{" "}
                <span className="font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-white via-[#f5dfad] to-[#deb26a]">
                  seu por direito.
                </span>
              </motion.h1>

              <motion.p
                variants={reveal}
                className="mt-7 max-w-xl text-[15px] leading-7 text-[#9eb1a3] sm:text-base sm:leading-8"
              >
                ⚖️ <strong className="font-semibold text-white">Nota máxima 5,0 ★ com 39 avaliações no Google Meu Negócio.</strong> Atuação especializada liderada pela <span className="font-semibold text-white">Dra. Ingrid Marques</span>. Combate técnico para destravar pedidos no INSS, reverter cortes indevidos, impugnar laudos periciais e garantir <span className="text-[#deb26a] font-semibold">aposentadorias integrais com 13º, auxílio-acidente por sequelas, auxílio-doença e BPC/LOAS</span>.
              </motion.p>

              <motion.div
                variants={reveal}
                className="mt-9 flex flex-col items-start gap-4 sm:flex-row sm:items-center"
              >
                <GlowingButton
                  href={getWhatsAppUrl(
                    "Olá, Dra. Ingrid Marques! Gostaria de consultar sobre meus direitos previdenciários e agendar um atendimento."
                  )}
                  target="_blank"
                  size="lg"
                  variant="gold"
                  className="rounded-lg shadow-md"
                >
                  <WhatsAppIcon size={16} /> Falar no WhatsApp com a Dra. Ingrid
                </GlowingButton>
                <GlowingButton
                  href="#atuacao"
                  size="lg"
                  variant="forest"
                  className="rounded-lg shadow-xs"
                >
                  Especialidades Previdenciárias{" "}
                  <ArrowRight
                    size={14}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </GlowingButton>
              </motion.div>

              <motion.div
                variants={reveal}
                className="mt-12 flex flex-wrap items-center gap-x-7 gap-y-4 border-t border-[#233427] pt-6 text-xs text-[#9eb1a3]"
              >
                <a
                  href={GOOGLE_SEARCH_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 font-semibold text-white transition-colors hover:text-[#deb26a]"
                >
                  <Star size={15} className="fill-[#deb26a] text-[#deb26a]" />{" "}
                  5,0 estrelas no Google (39 avaliações verificadas)
                </a>
                <span className="inline-flex items-center gap-2 font-medium">
                  <Clock size={15} className="text-[#deb26a]" /> Seg. a Sex. a partir das 09:00
                </span>
                <span className="inline-flex items-center gap-2 font-medium">
                  <ShieldCheck size={15} className="text-[#deb26a]" /> Nova Lima - MG & Atendimento em Todo o Brasil
                </span>
              </motion.div>
            </motion.div>

            {/* Hero Visual Presentation - Dra. Ingrid Marques */}
            <motion.div
              initial={{ opacity: 0, scale: 0.97, y: 18 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{
                duration: 0.95,
                delay: 0.18,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative mx-auto w-full max-w-[490px] lg:ml-auto lg:mr-2"
            >
              <div className="relative aspect-[4/5.2] overflow-hidden rounded-2xl border-2 border-[#233427] bg-[#142017] shadow-2xl ring-1 ring-[#deb26a]/30">
                <Image
                  src={FOTO_HERO_SRC}
                  alt="Dra. Ingrid Marques — Advogada Previdenciária em Nova Lima - MG"
                  fill
                  priority
                  sizes="(max-width: 640px) 90vw, (max-width: 1024px) 70vw, 45vw"
                  className="object-cover object-top"
                />
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#0a110c] via-[#0a110c]/80 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between gap-3 text-white sm:bottom-8 sm:left-8 sm:right-8">
                  <div>
                    <p className="font-serif text-2xl font-normal tracking-wide text-white">
                      Dra. Ingrid Marques
                    </p>
                    <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-[#deb26a]">
                      Advogada Previdenciária Titular
                    </p>
                  </div>
                  <span className="grid size-11 shrink-0 place-items-center rounded-lg border border-[#deb26a]/40 bg-[#142017]/90 text-[#deb26a] backdrop-blur-sm">
                    <Scale size={18} />
                  </span>
                </div>
              </div>

              {/* Authority badge */}
              <div className="absolute -left-3 bottom-28 z-10 rounded-lg border border-[#233427] bg-[#142017]/95 backdrop-blur-md px-4 py-2 text-[10px] font-bold tracking-[0.14em] text-white shadow-card sm:-left-5">
                <span className="text-[#deb26a]">●</span> NOVA LIMA - MG · ATENDIMENTO BRASIL
              </div>

              {/* Floating Google rating badge */}
              <a
                href={GOOGLE_SEARCH_URL}
                target="_blank"
                rel="noreferrer"
                className="absolute -bottom-5 -right-3 z-10 rounded-xl border border-[#233427] bg-[#142017]/95 backdrop-blur-md p-3.5 shadow-card transition-all hover:scale-105 hover:border-[#deb26a] sm:-right-5"
              >
                <div className="flex items-center gap-2">
                  <GoogleIcon size={16} />
                  <div className="flex items-center gap-1">
                    <Star size={13} className="fill-[#deb26a] text-[#deb26a]" />
                    <span className="font-serif text-base font-bold text-white">
                      5,0 / 5,0
                    </span>
                  </div>
                </div>
                <p className="mt-0.5 text-[9px] font-semibold uppercase tracking-wider text-[#9eb1a3]">
                  39 Avaliações no Google (100% 5★)
                </p>
              </a>
            </motion.div>
          </div>
        </section>

        {/* Highlights Banner - High Contrast Deep Forest Band */}
        <section
          aria-label="Credenciais e Destaques"
          className="border-y border-[#233427] bg-[#0e1711] text-white"
        >
          <div className="mx-auto grid max-w-7xl gap-7 px-5 py-8 sm:grid-cols-4 sm:gap-4 sm:px-8 lg:px-12">
            {[
              [
                "5,0 ★",
                "nota máxima de excelência no Google com 39 avaliações",
              ],
              [
                "100% 5★",
                "reconhecimento por reverter causas complexas e dedicação",
              ],
              [
                "Direito Previdenciário",
                "especialização integral em INSS, aposentadorias, auxílios e BPC",
              ],
              [
                "Nova Lima & Brasil",
                "sede no Alta de Gaya e atendimento digital humanizado para todo o país",
              ],
            ].map(([value, label], index) => (
              <div
                key={label}
                className={
                  index > 0
                    ? "flex items-center gap-4 sm:justify-center sm:border-l sm:border-[#233427]"
                    : "flex items-center gap-4 sm:justify-center"
                }
              >
                <span className="font-serif text-2xl font-semibold text-[#deb26a] sm:text-3xl">
                  {value}
                </span>
                <span className="max-w-[165px] text-[11px] leading-5 text-[#9eb1a3]">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Sobre a Advogada - Executive Forest & Amber Gold Canvas */}
        <section
          id="sobre"
          className="scroll-mt-24 border-b border-[#233427] bg-[#0d1610] py-20 text-white sm:py-28 lg:py-32"
        >
          <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20 lg:px-12">
            {/* Presentation portrait - Real Office Photo */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={reveal}
              className="relative mx-auto w-full max-w-[480px]"
            >
              <div className="relative aspect-[3/3.8] overflow-hidden rounded-2xl border-2 border-[#233427] bg-[#142017] shadow-xl">
                <Image
                  src={FOTO_SOBRE_SRC}
                  alt="Dra. Ingrid Marques em seu escritório de Advocacia Previdenciária"
                  fill
                  sizes="(max-width: 1024px) 90vw, 45vw"
                  className="object-cover object-top"
                />
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#0a110c]/90 via-[#0a110c]/30 to-transparent" />
              </div>

              {/* Authority badge card - Deep Forest & Gold Contrast */}
              <div className="absolute -bottom-6 right-3 max-w-[340px] rounded-xl border border-[#deb26a]/40 bg-[#142017] px-5 py-4 shadow-xl sm:-right-6 sm:px-6">
                <div className="flex items-center gap-2 text-[#deb26a]">
                  <Award size={16} />
                  <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#deb26a]">
                    Advocacia Previdenciária de Alto Padrão
                  </p>
                </div>
                <p className="mt-1 font-serif text-lg leading-snug text-white">
                  Dra. Ingrid Marques
                </p>
                <p className="mt-0.5 text-[11px] font-medium text-[#deb26a]">
                  Especialista em Benefícios Previdenciários
                </p>
                <p className="mt-1 text-[11px] leading-4 text-[#9eb1a3]">
                  Nova Lima - MG · R. Seis, 147 - Alta de Gaya
                </p>
              </div>

              <span className="absolute -left-4 -top-4 -z-10 size-24 border-l-2 border-t-2 border-[#deb26a]/50 sm:-left-7 sm:-top-7 sm:size-32" />
            </motion.div>

            {/* Story & Biography - Refined Typography */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={stagger}
            >
              <motion.div
                variants={reveal}
                className="mb-4 inline-flex items-center gap-2.5 rounded-md border border-[#deb26a]/30 bg-[#142017] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-[#deb26a] shadow-xs"
              >
                <span className="size-2 shrink-0 rounded-full bg-[#deb26a]" />
                <span>CONHEÇA A DRA. INGRID MARQUES</span>
              </motion.div>

              <motion.h2
                variants={reveal}
                className="font-serif text-3xl leading-[1.12] tracking-[-0.02em] text-white sm:text-4xl lg:text-[3.25rem]"
              >
                Mais do que um processo: o{" "}
                <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-white via-[#f5dfad] to-[#deb26a]">
                  sustento, a dignidade e o futuro de quem trabalhou a vida toda.
                </span>
              </motion.h2>

              <motion.p
                variants={reveal}
                className="mt-6 max-w-xl text-[15px] leading-7 text-[#9eb1a3]"
              >
                Liderada pela <strong className="font-bold text-white">Dra. Ingrid Marques</strong>, a <strong className="font-bold text-white">Ingrid Marques Advocacia Previdenciária</strong> consolidou-se em Nova Lima, na Região Metropolitana de Belo Horizonte e em todo o Brasil como uma das principais referências em defesa combativa dos direitos dos segurados perante o INSS.
              </motion.p>

              <motion.p
                variants={reveal}
                className="mt-4 max-w-xl text-[15px] leading-7 text-[#9eb1a3]"
              >
                Reconhecida pela capacidade de assumir e reverter causas consideradas &ldquo;impossíveis&rdquo; ou desacreditadas por outros profissionais — como cortes injustos de aposentadorias por invalidez, negativas de perícias médicas e benefícios travados há anos —, a Dra. Ingrid alia <strong className="font-bold text-white">acolhimento humanizado, transparência cristalina e combate incansável até a decisão vitoriosa</strong>.
              </motion.p>

              {/* Authentic Client Quote Card */}
              <motion.div
                variants={reveal}
                className="mt-6 rounded-xl border border-[#deb26a]/30 bg-[#142017] p-5 shadow-xs"
              >
                <blockquote className="font-serif text-sm italic leading-relaxed text-[#f4f4f5]">
                  &ldquo;Ingrid é competente ao extremo, super honesta. Conseguiu a aposentadoria da minha sogra em menos de 2 meses, integral e com direito a 13º salário, quando outro profissional havia sugerido o caminho errado. Indico de olhos fechados!&rdquo;
                </blockquote>
                <p className="mt-2 text-[11px] font-semibold uppercase tracking-wider text-[#deb26a]">
                  — Camila Gonçalves · Avaliação Verificada no Google (5,0 ★ · 39 Avaliações)
                </p>
              </motion.div>

              <motion.div
                variants={reveal}
                className="mt-6 grid grid-cols-1 gap-2.5 text-xs font-semibold text-white sm:grid-cols-2"
              >
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="shrink-0 text-[#deb26a]" />
                  <span>Nota máxima 5,0 ★ com 39 avaliações no Google</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="shrink-0 text-[#deb26a]" />
                  <span>Especialista em Aposentadorias, Invalidez, Auxílios e BPC</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="shrink-0 text-[#deb26a]" />
                  <span>Atendimento acolhedor, transparente e sem juridiquês</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="shrink-0 text-[#deb26a]" />
                  <span>Sede no Alta de Gaya (Nova Lima - MG) & Online para todo o Brasil</span>
                </div>
              </motion.div>

              <motion.div
                variants={reveal}
                className="mt-8 flex flex-wrap items-center gap-4"
              >
                <GlowingButton
                  href={getWhatsAppUrl(
                    "Olá, Dra. Ingrid! Gostaria de agendar uma consulta sobre o meu benefício com seu escritório."
                  )}
                  target="_blank"
                  size="md"
                  variant="gold"
                  className="rounded-lg shadow-md"
                >
                  <WhatsAppIcon size={16} /> Falar com a Dra. Ingrid
                </GlowingButton>
                <a
                  href={`tel:+${WHATSAPP_NUMBER}`}
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-white transition-colors hover:text-[#deb26a]"
                >
                  <Phone size={15} /> {PHONE_DISPLAY}
                </a>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Especialidades Previdenciárias - Deep Forest Canvas with Executive Cards */}
        <section
          id="atuacao"
          className="scroll-mt-24 border-b border-[#233427] bg-[#0a110c] py-20 sm:py-28 lg:py-32"
        >
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={reveal}
              className="flex flex-col justify-between gap-6 md:flex-row md:items-end"
            >
              <Heading
                eyebrow="SERVIÇOS PREVIDENCIÁRIOS & PILARES DE ATUAÇÃO"
                description="Especialização técnica profunda e combate rigoroso contra o INSS para resguardar sua renda, sua tranquilidade e seu direito legítimo."
              >
                Atuação jurídica especializada em{" "}
                <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-white via-[#f5dfad] to-[#deb26a]">
                  INSS, Aposentadorias, Auxílios e BPC.
                </span>
              </Heading>
              <p className="max-w-[270px] pb-1 text-xs leading-6 text-[#9eb1a3]">
                Clique em uma especialidade abaixo para conferir os detalhes e iniciar sua consulta diretamente pelo WhatsApp.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.12 }}
              variants={stagger}
              className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3"
            >
              {practiceAreas.map((area, index) => {
                const Icon = area.icon;
                return (
                  <motion.article
                    key={area.id}
                    variants={reveal}
                    className="group flex min-h-[350px] flex-col rounded-xl border border-[#233427] bg-[#142017] p-7 shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:border-[#deb26a]/60 hover:shadow-card-hover sm:p-8"
                  >
                    <div className="flex items-start justify-between">
                      <span className="grid size-12 place-items-center rounded-lg border border-[#233427] bg-[#0d1610] text-[#deb26a] shadow-xs transition-colors group-hover:border-[#deb26a] group-hover:bg-[#deb26a] group-hover:text-[#0a110c]">
                        <Icon size={22} strokeWidth={1.5} />
                      </span>
                      <span className="font-serif text-2xl font-semibold text-[#deb26a]/40 transition-colors group-hover:text-[#deb26a]">
                        0{index + 1}
                      </span>
                    </div>

                    <div className="mt-6">
                      <span className="inline-block rounded-md border border-[#233427] bg-[#0d1610] px-2.5 py-1 text-[9px] font-bold uppercase tracking-wider text-[#deb26a]">
                        {area.tag}
                      </span>
                      <h3 className="mt-3 font-serif text-[1.45rem] leading-tight text-white">
                        {area.title}
                      </h3>
                      <p className="mt-3 text-[13px] leading-6 text-[#9eb1a3]">
                        {area.summary}
                      </p>
                    </div>

                    <button
                      type="button"
                      onClick={() => setActiveArea(area)}
                      className="group/link mt-auto inline-flex w-fit items-center gap-2 pt-6 text-[10px] font-bold uppercase tracking-[0.16em] text-[#deb26a] hover:text-white"
                    >
                      Ver detalhes e demandas{" "}
                      <ArrowRight
                        size={14}
                        className="transition-transform group/link:translate-x-1"
                      />
                    </button>
                  </motion.article>
                );
              })}
            </motion.div>
          </div>
        </section>

        {/* Por Que Escolher a Ingrid Marques Advocacia - 4 Pilares de Excelência */}
        <section
          id="diferenciais"
          className="scroll-mt-24 border-y border-[#233427] bg-[#0d1610] py-20 text-white sm:py-28 lg:py-32"
        >
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <Heading
                dark
                eyebrow="REPUTAÇÃO NOTA MÁXIMA NO GOOGLE"
                description="Os pilares de Vitórias em Causas Complexas, Acolhimento Humano, Agilidade e Honestidade Extrema reconhecidos em 39 avaliações 5 estrelas no Google."
              >
                Por que confiar seu benefício à{" "}
                <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-white via-[#f5dfad] to-[#deb26a]">
                  Ingrid Marques Advocacia?
                </span>
              </Heading>
              <GlowingButton
                href={getWhatsAppUrl(
                  "Olá, Dra. Ingrid! Gostaria de consultar sobre a minha situação previdenciária com seu escritório."
                )}
                target="_blank"
                size="md"
                variant="gold"
                className="rounded-lg shadow-sm"
              >
                <WhatsAppIcon size={16} /> Falar no WhatsApp
              </GlowingButton>
            </div>

            {/* Grid 4 Pilares */}
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {/* Pilar 1: Vitórias em Casos Complexos */}
              <div className="flex flex-col rounded-xl border border-[#233427] bg-[#142017] p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-[#deb26a]/50">
                <div className="flex size-12 items-center justify-center rounded-lg border border-[#233427] bg-[#0a110c] text-[#deb26a]">
                  <Award size={22} />
                </div>
                <h3 className="mt-4 font-serif text-xl font-bold text-white">
                  Causas Complexas
                </h3>
                <p className="mt-2 text-xs leading-6 text-[#9eb1a3]">
                  Histórico comprovado de reverter cortes de aposentadorias por invalidez, negativas médicas e destravar processos esquecidos pelo INSS.
                </p>
                <span className="mt-4 text-[10px] font-bold uppercase tracking-wider text-[#deb26a]">
                  &ldquo;Resolveu o caso do meu pai que parecia impossível&rdquo;
                </span>
              </div>

              {/* Pilar 2: Acolhimento & Empatia */}
              <div className="flex flex-col rounded-xl border border-[#233427] bg-[#142017] p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-[#deb26a]/50">
                <div className="flex size-12 items-center justify-center rounded-lg border border-[#233427] bg-[#0a110c] text-[#deb26a]">
                  <HeartHandshake size={22} />
                </div>
                <h3 className="mt-4 font-serif text-xl font-bold text-white">
                  Acolhimento Humano
                </h3>
                <p className="mt-2 text-xs leading-6 text-[#9eb1a3]">
                  Escuta atenciosa, respeito incondicional e acolhimento de segurados que chegam desacreditados ou sem esperança de solução.
                </p>
                <span className="mt-4 text-[10px] font-bold uppercase tracking-wider text-[#deb26a]">
                  &ldquo;Estava sem esperança e ela acolheu meu caso com dedicação&rdquo;
                </span>
              </div>

              {/* Pilar 3: Agilidade & Eficiência */}
              <div className="flex flex-col rounded-xl border border-[#233427] bg-[#142017] p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-[#deb26a]/50">
                <div className="flex size-12 items-center justify-center rounded-lg border border-[#233427] bg-[#0a110c] text-[#deb26a]">
                  <Sparkles size={22} />
                </div>
                <h3 className="mt-4 font-serif text-xl font-bold text-white">
                  Agilidade com Êxito
                </h3>
                <p className="mt-2 text-xs leading-6 text-[#9eb1a3]">
                  Concessão de aposentadorias integrais em tempo recorde, esclarecendo cada ato processual de forma transparente e clara.
                </p>
                <span className="mt-4 text-[10px] font-bold uppercase tracking-wider text-[#deb26a]">
                  &ldquo;Aposentadoria integral em menos de 2 meses&rdquo;
                </span>
              </div>

              {/* Pilar 4: Honestidade & Ética */}
              <div className="flex flex-col rounded-xl border border-[#233427] bg-[#142017] p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-[#deb26a]/50">
                <div className="flex size-12 items-center justify-center rounded-lg border border-[#233427] bg-[#0a110c] text-[#deb26a]">
                  <Shield size={22} />
                </div>
                <h3 className="mt-4 font-serif text-xl font-bold text-white">
                  Honestidade Extrema
                </h3>
                <p className="mt-2 text-xs leading-6 text-[#9eb1a3]">
                  Orientação honesta para que você não perca direitos (como 13º salário) aceitando benefícios menores por caminhos errados.
                </p>
                <span className="mt-4 text-[10px] font-bold uppercase tracking-wider text-[#deb26a]">
                  &ldquo;Competente ao extremo e super honesta&rdquo;
                </span>
              </div>
            </div>

            <div className="mt-12 grid gap-8 lg:grid-cols-2">
              {/* Card 1: Acolhimento & Escuta Atenta */}
              <motion.article
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.65 }}
                className="group flex flex-col justify-between rounded-xl border border-[#233427] bg-[#142017] p-7 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-[#deb26a]/50 sm:p-9"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 rounded-md border border-[#233427] bg-[#0a110c] px-3.5 py-1 text-[10px] font-bold uppercase tracking-wider text-[#f5dfad]">
                      <HeartHandshake size={14} /> Atendimento Humanizado
                    </span>
                    <span className="text-xs font-semibold text-[#deb26a]">
                      Acolhimento Real
                    </span>
                  </div>
                  <h3 className="mt-4 font-serif text-2xl leading-tight text-white sm:text-[1.75rem]">
                    Paciência, Atenção & Clareza em Cada Detalhe
                  </h3>
                  <p className="mt-3 text-[14px] leading-relaxed text-[#9eb1a3]">
                    Sabemos a angústia de enfrentar filas no INSS, ter laudos recusados ou ficar meses sem salário após um acidente ou enfermidade. Na Ingrid Marques Advocacia, você é tratado com carinho, respeito e orientações claras sobre cada passo do seu benefício.
                  </p>
                  <ul className="mt-5 space-y-2 text-xs font-medium text-stone-200">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="shrink-0 text-[#deb26a]" />
                      <span>Contato direto pelo WhatsApp e atualizações periódicas</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="shrink-0 text-[#deb26a]" />
                      <span>Prioridade absoluta ao sustento e à dignidade da sua família</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="shrink-0 text-[#deb26a]" />
                      <span>Linguagem acessível, explicando seus direitos sem termos complicados</span>
                    </li>
                  </ul>
                </div>
                <div className="mt-7 border-t border-[#233427] pt-4">
                  <a
                    href={getWhatsAppUrl(
                      "Olá, Dra. Ingrid! Gostaria de conversar diretamente sobre meu benefício do INSS."
                    )}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex w-full items-center justify-between rounded-lg border border-[#233427] bg-[#0d1610] px-4 py-3.5 text-[11px] font-bold uppercase tracking-[0.12em] text-[#f5dfad] transition-all hover:border-[#deb26a] hover:bg-[#1a281f] hover:text-white"
                  >
                    <span className="inline-flex items-center gap-2">
                      <WhatsAppIcon size={15} /> Conversar com a Dra. Ingrid no WhatsApp
                    </span>
                    <ArrowUpRight size={15} />
                  </a>
                </div>
              </motion.article>

              {/* Card 2: Estratégia Jurídica & Combate Firme */}
              <motion.article
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.65, delay: 0.1 }}
                className="group flex flex-col justify-between rounded-xl border border-[#233427] bg-[#142017] p-7 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-[#deb26a]/50 sm:p-9"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 rounded-md border border-[#233427] bg-[#0a110c] px-3.5 py-1 text-[10px] font-bold uppercase tracking-wider text-[#f5dfad]">
                      <Scale size={14} /> Estratégia Previdenciária
                    </span>
                    <span className="text-xs font-semibold text-[#deb26a]">
                      Rigor Técnico
                    </span>
                  </div>
                  <h3 className="mt-4 font-serif text-2xl leading-tight text-white sm:text-[1.75rem]">
                    Benefícios Previdenciários Exigem Estratégia, Não Improviso
                  </h3>
                  <p className="mt-3 text-[14px] leading-relaxed text-[#9eb1a3]">
                    Um pedido mal formulado pode condenar você a anos sem receber ou a aceitar um benefício assistencial que não dá direito a 13º salário nem pensão por morte. A Dra. Ingrid Marques constrói teses processuais sólidas com provas periciais fundamentadas para assegurar a melhor concessão.
                  </p>
                  <ul className="mt-5 space-y-2 text-xs font-medium text-stone-200">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="shrink-0 text-[#deb26a]" />
                      <span>Auditoria técnica do CNIS, vínculos e documentos médicos</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="shrink-0 text-[#deb26a]" />
                      <span>Postura firme em impugnações de laudos e perícias na Justiça</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="shrink-0 text-[#deb26a]" />
                      <span>Capacidade comprovada de reverter indeferimentos e processos travados</span>
                    </li>
                  </ul>
                </div>
                <div className="mt-7 border-t border-[#233427] pt-4">
                  <a
                    href={getWhatsAppUrl(
                      "Olá, Dra. Ingrid! Preciso de ajuda jurídica para analisar minha situação no INSS."
                    )}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex w-full items-center justify-between rounded-lg border border-[#233427] bg-[#0d1610] px-4 py-3.5 text-[11px] font-bold uppercase tracking-[0.12em] text-[#f5dfad] transition-all hover:border-[#deb26a] hover:bg-[#1a281f] hover:text-white"
                  >
                    <span className="inline-flex items-center gap-2">
                      <WhatsAppIcon size={15} /> Analisar Meu Caso no WhatsApp
                    </span>
                    <ArrowUpRight size={15} />
                  </a>
                </div>
              </motion.article>
            </div>
          </div>
        </section>

        {/* Citação em Destaque & Compromisso Real - Gradient #222F25 */}
        <section className="relative overflow-hidden border-b border-[#233427] bg-gradient-to-r from-[#0a110c] via-[#222f25] to-[#0a110c] py-20 text-white sm:py-28 lg:py-32">
          <div className="pointer-events-none absolute -left-28 top-1/4 size-96 rounded-full bg-[#c69a4c]/10 blur-3xl" />
          <div className="pointer-events-none absolute -right-28 bottom-1/4 size-96 rounded-full bg-[#deb26a]/10 blur-3xl" />

          <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.88fr_1.12fr] lg:gap-20 lg:px-12">
            <div>
              <Heading
                eyebrow="NOSSO COMPROMISSO COM VOCÊ"
                description="A nota máxima de 5,0 ★ com 39 avaliações no Google reflete a dedicação diária e o respeito incondicional a cada cliente que confia seu sustento à Dra. Ingrid Marques."
              >
                Cuidamos do seu benefício com{" "}
                <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-white via-[#f5dfad] to-[#deb26a]">
                  ética, empatia e combatividade total.
                </span>
              </Heading>

              <div className="mt-8 flex flex-col gap-4 rounded-xl border border-[#233427] bg-[#142017] p-6 shadow-card sm:flex-row sm:items-start">
                <div className="relative size-16 shrink-0 overflow-hidden rounded-full border-2 border-[#deb26a]/40 shadow-sm">
                  <Image
                    src={FOTO_EDITORIAL_SRC}
                    alt="Dra. Ingrid Marques — Advocacia Previdenciária"
                    fill
                    sizes="64px"
                    className="object-cover object-top"
                  />
                </div>
                <div>
                  <blockquote className="font-serif text-base italic leading-7 text-white">
                    &ldquo;A Ingrid resolveu o caso do meu pai, que parecia impossível. Ele era aposentado por invalidez desde 2006, mas com a reforma cortaram o benefício. Dra. Ingrid acolheu o caso e garantiu a aposentadoria de volta. Foi uma bênção na nossa vida!&rdquo;
                  </blockquote>
                  <footer className="mt-3 font-sans text-[11px] font-semibold not-italic uppercase tracking-wider text-[#deb26a]">
                    — Karina Nogueira · Avaliação Verificada no Google Meu Negócio
                  </footer>
                </div>
              </div>
            </div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={stagger}
              className="divide-y divide-[#233427]"
            >
              {[
                [
                  "01",
                  "Acolhimento Humanizado & Empatia",
                  "Você é ouvido com atenção e acolhimento. Entendemos a realidade da sua saúde, da sua família e do seu trabalho para traçar o caminho jurídico mais seguro.",
                ],
                [
                  "02",
                  "Transparência & Comunicação Clara",
                  "Você nunca fica sem respostas. Mantemos você informado de cada andamento do seu processo no INSS ou na Justiça em linguagem simples e acolhedora.",
                ],
                [
                  "03",
                  "Combate Incansável por Resultados",
                  "Lutamos até a última instância, impugnando laudos médicos desfavoráveis e cobrando cada centavo de retroativos que o INSS lhe deve.",
                ],
              ].map(([number, title, description]) => (
                <motion.div
                  key={number}
                  variants={reveal}
                  className="grid gap-3 py-6 first:pt-0 sm:grid-cols-[70px_1fr] sm:gap-6 sm:py-7"
                >
                  <span className="font-serif text-2xl font-bold text-[#deb26a]">
                    {number}
                  </span>
                  <div>
                    <h3 className="font-serif text-2xl text-white">{title}</h3>
                    <p className="mt-2 max-w-lg text-[13px] leading-6 text-[#9eb1a3]">
                      {description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Avaliações no Google (Depoimentos Reais - 5,0 ★ · 39 avaliações) */}
        <section
          id="avaliacoes"
          className="scroll-mt-24 border-t border-[#233427] bg-[#0a110c] py-20 text-white sm:py-28 lg:py-32"
        >
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <Heading
                dark
                eyebrow="DEPOIMENTOS REAIS NO GOOGLE"
                description="Nota máxima de 5,0 ★ com 39 avaliações verificadas. Histórias reais de quem teve sua aposentadoria garantida e seus direitos resguardados."
              >
                O que dizem os clientes da{" "}
                <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-white via-[#f5dfad] to-[#deb26a]">
                  Dra. Ingrid Marques
                </span>
              </Heading>

              <a
                href={GOOGLE_SEARCH_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 rounded-xl border border-[#233427] bg-[#142017] px-5 py-3 text-xs font-semibold text-white transition-all hover:border-[#deb26a] hover:bg-[#1a281f]"
              >
                <GoogleIcon size={18} />
                <span>Ver todas as 39 avaliações no Google</span>
                <ArrowUpRight size={15} className="text-[#deb26a]" />
              </a>
            </div>

            {/* Grid of Real Reviews */}
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {clientReviews.map((review) => (
                <article
                  key={review.name}
                  className="flex flex-col justify-between rounded-xl border border-[#233427] bg-[#142017] p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-[#deb26a]/60"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1 text-[#deb26a]">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            size={14}
                            className="fill-[#deb26a] text-[#deb26a]"
                          />
                        ))}
                      </div>
                      <span className="rounded-md border border-[#233427] bg-[#0d1610] px-2.5 py-0.5 text-[9px] font-bold uppercase tracking-wider text-[#deb26a]">
                        {review.badge}
                      </span>
                    </div>

                    <p className="mt-4 text-[13px] leading-6 text-stone-200">
                      &ldquo;{review.content}&rdquo;
                    </p>

                    {review.reply && (
                      <div className="mt-4 rounded-lg border border-[#233427] bg-[#0d1610]/70 p-3 text-[11px] leading-5 text-[#9eb1a3]">
                        <span className="font-semibold text-[#deb26a]">
                          Resposta da Dra. Ingrid:{" "}
                        </span>
                        {review.reply}
                      </div>
                    )}
                  </div>

                  <div className="mt-6 border-t border-[#233427] pt-4">
                    <p className="font-serif text-sm font-semibold text-white">
                      {review.name}
                    </p>
                    <p className="text-[10px] text-[#9eb1a3]">{review.date}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Contato & Localização da Sede em Nova Lima - MG */}
        <section
          id="contato"
          className="scroll-mt-24 border-t border-[#233427] bg-[#0d1610] py-20 text-white sm:py-28 lg:py-32"
        >
          <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.92fr_1.08fr] lg:gap-20 lg:px-12">
            <div>
              <Heading
                dark
                eyebrow="CONTATO & ATENDIMENTO PREVIDENCIÁRIO"
                description="Inicie seu atendimento diretamente pelo WhatsApp. Prestamos assistência ágil e resolutiva para clientes de Nova Lima, Belo Horizonte, Região Metropolitana e consultoria previdenciária online para todo o Brasil."
              >
                Estamos prontos para{" "}
                <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-white via-[#f5dfad] to-[#deb26a]">
                  escutar sua história e lutar pelo seu benefício.
                </span>
              </Heading>

              <div className="mt-9 flex flex-col items-start gap-4">
                <GlowingButton
                  href={getWhatsAppUrl(
                    "Olá, Dra. Ingrid! Gostaria de agendar um atendimento previdenciário com seu escritório."
                  )}
                  target="_blank"
                  size="lg"
                  variant="gold"
                  className="rounded-lg shadow-md"
                >
                  <WhatsAppIcon size={17} /> Iniciar Conversa no WhatsApp
                </GlowingButton>
                <p className="text-[11px] leading-5 text-[#9eb1a3]">
                  WhatsApp e Telefone do escritório:{" "}
                  <strong className="text-white">{PHONE_DISPLAY}</strong>
                </p>
              </div>

              <div className="mt-10 space-y-4 text-xs text-[#9eb1a3]">
                <div className="flex items-start gap-3">
                  <Clock
                    size={16}
                    className="mt-0.5 shrink-0 text-[#deb26a]"
                  />
                  <div>
                    <p className="font-semibold text-white">
                      Horário de Funcionamento
                    </p>
                    <p className="mt-0.5 text-stone-200">
                      Segunda a Sexta-feira · a partir das 09:00 até as 18:00
                    </p>
                    <p className="text-[11px] text-stone-400">
                      Atendimento presencial com hora marcada e consultoria online em todo o Brasil
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 pt-1">
                  <Phone size={16} className="shrink-0 text-[#deb26a]" />
                  <a
                    href={`tel:+${WHATSAPP_NUMBER}`}
                    className="font-medium text-white transition-colors hover:text-[#deb26a]"
                  >
                    {PHONE_DISPLAY} (Ligações e WhatsApp)
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <InstagramIcon size={16} className="shrink-0 text-[#deb26a]" />
                  <a
                    href={INSTAGRAM_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="transition-colors hover:text-[#deb26a] text-stone-200"
                  >
                    {INSTAGRAM_HANDLE} (Instagram Oficial)
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <Mail size={16} className="shrink-0 text-[#deb26a]" />
                  <a
                    href={`mailto:${EMAIL_CONTACT}`}
                    className="transition-colors hover:text-[#deb26a] text-stone-200"
                  >
                    {EMAIL_CONTACT}
                  </a>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin
                    size={16}
                    className="mt-0.5 shrink-0 text-[#deb26a]"
                  />
                  <span>{ADDRESS_TEXT}</span>
                </div>
              </div>
            </div>

            {/* Office & Schedule Card */}
            <div className="relative overflow-hidden rounded-xl border border-[#233427] bg-[#142017] p-7 shadow-card sm:p-10">
              <div className="absolute right-0 top-0 h-1.5 w-32 bg-gradient-to-r from-[#deb26a] to-[#f5dfad]" />

              <div className="flex items-center gap-4">
                <div className="relative h-[88px] w-[280px] shrink-0 sm:h-[100px] sm:w-[330px]">
                  <Image
                    src={LOGO_SRC}
                    alt="Ingrid Marques Advocacia Previdenciária"
                    fill
                    sizes="(max-width: 640px) 280px, 330px"
                    className="object-contain object-left drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]"
                  />
                </div>
              </div>

              <address className="mt-7 max-w-md text-[14px] not-italic leading-7 text-[#9eb1a3]">
                <strong className="font-semibold text-white">
                  Ingrid Marques Advocacia Previdenciária
                </strong>
                <br />
                Dra. Ingrid Marques — Advogada Titular
                <br />
                {ADDRESS_TEXT}
              </address>

              {/* Weekly schedule table */}
              <div className="mt-6 rounded-lg border border-[#233427] bg-[#0d1610] p-4 text-xs">
                <p className="mb-2.5 text-[10px] font-bold uppercase tracking-[0.15em] text-[#deb26a]">
                  Atendimento & Disponibilidade
                </p>
                <div className="grid grid-cols-2 gap-y-1.5 text-stone-300">
                  <span>Horário de Funcionamento</span>
                  <span className="text-right font-semibold text-white">
                    Abre às 09:00 (Seg a Sex)
                  </span>
                  <span>Modalidade</span>
                  <span className="text-right text-[#f5dfad]">
                    Presencial & Online
                  </span>
                  <span>Sede Física</span>
                  <span className="text-right text-stone-200">Alta de Gaya, Nova Lima - MG</span>
                  <span>Atendimento Online</span>
                  <span className="text-right text-stone-200">Todo o Brasil</span>
                </div>
              </div>

              <div className="my-7 h-px bg-[#233427]" />

              <div className="flex flex-wrap items-center justify-between gap-4">
                <p className="text-xs text-stone-400">
                  Atendimento dedicado, ético e combativo
                </p>
                <a
                  href={getWhatsAppUrl(
                    "Olá, Dra. Ingrid! Gostaria de agendar um atendimento presencial ou online com a Ingrid Marques Advocacia."
                  )}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-[#233427] bg-[#0d1610] px-5 py-3 text-[10px] font-bold uppercase tracking-[0.14em] text-[#f5dfad] transition-colors hover:border-[#deb26a] hover:bg-[#1a281f] hover:text-white"
                >
                  <WhatsAppIcon size={14} /> Falar com a Dra. Ingrid <ArrowUpRight size={14} />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Pre-Footer CTA Strip - Rich Forest Gradient #222F25 */}
        <section className="border-t border-[#233427] bg-gradient-to-r from-[#0a110c] via-[#222f25] to-[#0a110c] px-5 py-14 text-white shadow-inner sm:px-8 sm:py-16 lg:px-12">
          <div className="mx-auto flex max-w-7xl flex-col justify-between gap-7 sm:flex-row sm:items-center">
            <div>
              <p className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[#deb26a]">
                <Sparkles size={13} /> DRA. INGRID MARQUES · INGRID MARQUES ADVOCACIA PREVIDENCIÁRIA
              </p>
              <h2 className="mt-3 max-w-2xl font-serif text-3xl leading-tight text-white sm:text-4xl">
                Não deixe seus direitos nas mãos do INSS. Garanta a consultoria certa.
              </h2>
            </div>
            <a
              href={getWhatsAppUrl(
                "Olá, Dra. Ingrid! Gostaria de consultar sobre meus direitos com a Ingrid Marques Advocacia."
              )}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex w-fit shrink-0 items-center gap-3 rounded-lg bg-gradient-to-r from-[#c69a4c] via-[#deb26a] to-[#c69a4c] px-7 py-4 text-[11px] font-extrabold uppercase tracking-[0.14em] text-[#0a110c] shadow-md transition-all hover:-translate-y-0.5 hover:brightness-110 hover:shadow-gold"
            >
              <WhatsAppIcon size={17} /> Falar no WhatsApp{" "}
              <ArrowUpRight size={15} />
            </a>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-[#233427] bg-[#0a110c] px-5 py-14 text-white sm:px-8 lg:px-12">
          <div className="mx-auto grid max-w-7xl gap-10 sm:grid-cols-2 lg:grid-cols-[1.2fr_0.8fr_1fr]">
            <div>
              <a
                href="#inicio"
                aria-label="Ingrid Marques Advocacia Previdenciária"
                className="inline-flex items-center gap-3.5 transition-transform hover:scale-[1.01]"
              >
                <div className="relative h-[78px] w-[275px] sm:h-[88px] sm:w-[310px]">
                  <Image
                    src={LOGO_SRC}
                    alt="Ingrid Marques Advocacia Previdenciária - Logo Oficial"
                    fill
                    sizes="(max-width: 640px) 275px, 310px"
                    className="object-contain object-left drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]"
                  />
                </div>
              </a>
              <p className="mt-4 max-w-xs text-xs leading-6 text-[#9eb1a3]">
                ⚖️ Advocacia Previdenciária combativa, acolhedora e de excelência. Nota máxima 5,0 ★ no Google com 39 avaliações em Nova Lima - MG e assessoria jurídica para todo o Brasil.
              </p>
              <p className="mt-3 text-[11px] font-semibold text-[#deb26a]">
                Ingrid Marques Advocacia Previdenciária · OAB/MG
              </p>
            </div>

            <div>
              <h2 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#deb26a]">
                Navegação
              </h2>
              <div className="mt-4 flex flex-col items-start gap-3 text-xs text-[#9eb1a3]">
                <a className="footer-link" href="#inicio">
                  Início
                </a>
                <a className="footer-link" href="#sobre">
                  A Advogada
                </a>
                <a className="footer-link" href="#atuacao">
                  Especialidades Previdenciárias
                </a>
                <a className="footer-link" href="#diferenciais">
                  Por Que Escolher
                </a>
                <a className="footer-link" href="#avaliacoes">
                  Avaliações no Google (5,0 ★)
                </a>
                <a className="footer-link" href="#contato">
                  Contato & Sede
                </a>
              </div>
            </div>

            <div>
              <h2 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#deb26a]">
                Contato & Sede
              </h2>
              <div className="mt-4 flex flex-col items-start gap-2.5 text-xs text-[#9eb1a3]">
                <a
                  href={getWhatsAppUrl(
                    "Olá, Dra. Ingrid! Gostaria de solicitar um atendimento com a Ingrid Marques Advocacia."
                  )}
                  target="_blank"
                  rel="noreferrer"
                  className="footer-link inline-flex items-center gap-2 font-medium text-[#f5dfad]"
                >
                  <WhatsAppIcon size={15} /> WhatsApp: {PHONE_DISPLAY}
                </a>
                <a
                  href={`tel:+${WHATSAPP_NUMBER}`}
                  className="footer-link inline-flex items-center gap-2"
                >
                  <Phone size={15} className="shrink-0" /> Telefone: {PHONE_DISPLAY}
                </a>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="footer-link inline-flex items-center gap-2"
                >
                  <InstagramIcon size={15} className="shrink-0" /> Instagram: {INSTAGRAM_HANDLE}
                </a>
                <a
                  href={`mailto:${EMAIL_CONTACT}`}
                  className="footer-link inline-flex items-center gap-2"
                >
                  <Mail size={15} className="shrink-0" /> {EMAIL_CONTACT}
                </a>
                <div className="footer-link inline-flex items-start gap-2">
                  <MapPin size={15} className="mt-0.5 shrink-0" />
                  <span>{ADDRESS_TEXT}</span>
                </div>
                <p className="inline-flex items-center gap-2 pt-1 text-[11px] text-[#deb26a]">
                  <Clock size={14} className="shrink-0" /> Seg a Sex · Abre às 09:00
                </p>
              </div>
            </div>
          </div>

          <div className="mx-auto mt-12 flex max-w-7xl flex-col gap-3 border-t border-[#233427] pt-6 text-[10px] text-stone-400 sm:flex-row sm:items-center sm:justify-between">
            <p>
              © {new Date().getFullYear()} DRA. INGRID MARQUES · INGRID MARQUES ADVOCACIA PREVIDENCIÁRIA. Todos os direitos reservados.
            </p>
            <p>
              Conteúdo informativo, em estrita conformidade com o Código de Ética e Disciplina da OAB.
            </p>
          </div>
        </footer>

        {/* Floating WhatsApp Quick Action Button */}
        <aside
          aria-label="Acesso rápido WhatsApp"
          className="fixed bottom-6 right-6 z-50"
        >
          <a
            href={getWhatsAppUrl(
              "Olá, Dra. Ingrid! Gostaria de consultar sobre meus direitos previdenciários."
            )}
            target="_blank"
            rel="noreferrer"
            aria-label="Falar agora pelo WhatsApp com a Dra. Ingrid Marques"
            className="group relative flex size-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl transition-all duration-300 hover:scale-110 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-[#25D366]/40"
          >
            <WhatsAppIcon size={28} />
            <span className="pointer-events-none absolute right-16 hidden whitespace-nowrap rounded-lg bg-[#142017] border border-[#233427] px-3.5 py-1.5 text-xs font-semibold text-white shadow-lg transition-opacity group-hover:block">
              Falar com a Dra. Ingrid
            </span>
          </a>
        </aside>

        {/* Modal de Detalhes da Especialidade Previdenciária */}
        <AnimatePresence>
          {activeArea && (
            <motion.div
              className="fixed inset-0 z-50 flex items-end justify-center bg-black/80 p-0 backdrop-blur-md sm:items-center sm:p-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveArea(null)}
            >
              <motion.section
                role="dialog"
                aria-modal="true"
                aria-labelledby="area-dialog-title"
                initial={{ opacity: 0, y: 24, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 16, scale: 0.99 }}
                transition={{ duration: 0.24 }}
                onClick={(event) => event.stopPropagation()}
                className="relative max-h-[90vh] w-full overflow-y-auto rounded-t-2xl border border-[#233427] bg-[#142017] p-7 shadow-2xl sm:max-w-xl sm:rounded-2xl sm:p-10 text-white"
              >
                <button
                  type="button"
                  aria-label="Fechar detalhes da especialidade"
                  onClick={() => setActiveArea(null)}
                  className="absolute right-5 top-5 grid size-10 place-items-center rounded-lg border border-[#233427] bg-[#0d1610] text-[#d4d4d8] transition-colors hover:border-[#deb26a] hover:bg-[#1a281f] hover:text-[#deb26a]"
                >
                  <X size={18} />
                </button>

                <p className="eyebrow">ESPECIALIDADE PREVIDENCIÁRIA</p>

                <h2
                  id="area-dialog-title"
                  className="mt-4 max-w-sm pr-10 font-serif text-3xl leading-tight text-white sm:text-4xl"
                >
                  {activeArea.title}
                </h2>

                <p className="mt-5 text-sm leading-7 text-[#9eb1a3]">
                  {activeArea.details}
                </p>

                <div className="mt-6 border-t border-[#233427] pt-5">
                  <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#deb26a]">
                    Principais demandas atendidas pelo escritório:
                  </p>
                  <ul className="mt-4 space-y-3">
                    {activeArea.topics.map((topic) => (
                      <li
                        key={topic}
                        className="flex items-center gap-3 text-sm text-[#f4f4f5]"
                      >
                        <span className="size-2 shrink-0 rounded-full bg-[#deb26a]" />
                        <span>{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                  <GlowingButton
                    href={getWhatsAppUrl(activeArea.whatsAppText)}
                    target="_blank"
                    size="md"
                    variant="gold"
                    className="rounded-lg shadow-md"
                  >
                    <WhatsAppIcon size={16} /> Consultar sobre esta demanda
                  </GlowingButton>
                  <button
                    type="button"
                    onClick={() => setActiveArea(null)}
                    className="px-5 py-3 text-xs font-semibold text-[#9eb1a3] transition-colors hover:text-white"
                  >
                    Fechar
                  </button>
                </div>
              </motion.section>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </MotionConfig>
  );
}
