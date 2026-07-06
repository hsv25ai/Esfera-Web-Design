import { type ReactNode, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  Bot,
  Building2,
  ChartNoAxesCombined,
  Check,
  Database,
  FileCheck2,
  FileSpreadsheet,
  GitBranch,
  HardHat,
  Layers3,
  LineChart,
  LockKeyhole,
  Mail,
  ReceiptText,
  Ruler,
  ShieldCheck,
  Users2,
  Warehouse,
} from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import esferaLogoWhite from "../esfera-logo-web.png";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const navItems = [
  { label: "Producto", href: "#producto" },
  { label: "Módulos", href: "#modulos" },
  { label: "Flujo", href: "#flujo" },
  { label: "IA", href: "#ia" },
  { label: "Modelo", href: "#modelo" },
  { label: "Aprende Esfera AI", href: "https://docs.esfera.ai/", external: true },
];

const FREE_SIGNUP_URL = "https://sistema.esfera.ai/Usuario/RegistrarPago?IdPlan=5";
const LOGIN_URL = "https://sistema.esfera.ai/Usuario/Login";
const IMPLEMENTATION_URL = "https://wa.me/14845691555?text=Hola%2C%20quiero%20solicitar%20una%20implementaci%C3%B3n%20de%20Esfera%20AI%20para%20mi%20empresa.";

const socialLinks = [
  { label: "Instagram", href: "https://www.instagram.com/esfera.ai/", icon: "instagram" },
  { label: "TikTok", href: "https://www.tiktok.com/@henrysv25", icon: "tiktok" },
  { label: "LinkedIn", href: "https://linkedin.com/company/esferasolutions", icon: "linkedin" },
  { label: "YouTube", href: "https://www.youtube.com/@esfera-ai", icon: "youtube" },
  { label: "X", href: "https://x.com/esfera_ai", icon: "x" },
];

const heroModules = ["Cómputo", "Presupuesto", "APU", "Compras", "Almacén", "Cronograma", "Obra", "Reportes"];

const heroBudgetRows = [
  ["Hormigón H21", "$18.400", "$12.900", "En curso"],
  ["Acero corrugado", "$9.800", "$7.200", "Compra"],
  ["Mano de obra", "$14.300", "$11.600", "Obra"],
];

const legalSections = [
  {
    title: "Política de Privacidad",
    intro: "En Esfera nos tomamos tu privacidad muy en serio. Queremos que sepas cómo recogemos, usamos y protegemos tu información, y cuáles son tus derechos sobre ella.",
    items: [
      {
        title: "1. ¿Qué datos recogemos?",
        paragraphs: [
          "Pedimos datos para crear tu cuenta: nombre, email, teléfono, y otra información que voluntariamente compartas (direcciones, archivos, etc.).",
          "Cuando usas Esfera, recibimos información sobre tu actividad, tu dispositivo, la app o la web y, si aceptas, tu ubicación.",
          "Podemos recopilar datos a través de tecnologías como cookies o servicios de nuestros partners para mejorar tu experiencia.",
        ],
      },
      {
        title: "2. ¿Para qué usamos tus datos?",
        paragraphs: [
          "Para que puedas usar Esfera y acceder a tus proyectos de construcción.",
          "Para personalizar tu experiencia y mejorar nuestros servicios.",
          "Para enviarte avisos sobre la plataforma, ayudarte si necesitas soporte, o enviarte información útil (puedes pedir dejar de recibir correos promocionales).",
          "Para proteger la seguridad de todos los usuarios.",
        ],
      },
      {
        title: "3. ¿Con quién compartimos tus datos?",
        paragraphs: [
          "Compartimos información con proveedores de servicios de confianza, o si la ley lo exige (como una orden judicial).",
          "Podemos compartir información anónima (que no permite identificarte) para fines estadísticos.",
        ],
      },
      {
        title: "4. ¿Qué derechos tienes?",
        paragraphs: ["Puedes acceder a tus datos personales, modificarlos si están incorrectos y pedir que los eliminemos cuando ya no los necesitemos."],
      },
      {
        title: "5. ¿Cómo protegemos tu información?",
        paragraphs: [
          "Usamos medidas técnicas y organizativas (cifrado, control de acceso) para que tus datos estén seguros.",
          "Solo personas autorizadas dentro de Esfera pueden acceder a tus datos.",
          "Si hay algún incidente de seguridad, te lo comunicaremos.",
        ],
      },
      {
        title: "6. ¿Dónde se guardan tus datos?",
        paragraphs: ["Los datos pueden almacenarse en servidores fuera de tu país, pero siempre bajo estrictas medidas de seguridad."],
      },
      {
        title: "7. Cambios en esta política",
        paragraphs: ["Te avisaremos aquí y en la app sobre cambios importantes en esta política. Si no estás de acuerdo, puedes dejar de usar Esfera."],
      },
    ],
  },
  {
    title: "Términos y Condiciones",
    items: [
      {
        title: "1. Aceptación de los Términos",
        paragraphs: ["Al crear una cuenta y utilizar los servicios de Esfera Solutions LLC (“Esfera”) a través de www.esfera.ai y sus aplicaciones móviles, aceptas estos Términos y Condiciones (“Términos”). Si no estás de acuerdo, no utilices los Servicios."],
      },
      {
        title: "2. Definiciones",
        paragraphs: [
          "Servicios: Incluyen la web, la aplicación y cualquier producto o función asociada ofrecida por Esfera.",
          "Cuenta: El registro personal creado para acceder a los Servicios.",
          "Información Personal: Datos que pueden identificarte, como nombre, email, teléfono y otros datos compartidos voluntariamente.",
        ],
      },
      {
        title: "3. Creación y gestión de la cuenta",
        paragraphs: ["Para usar Esfera, debes facilitar datos verídicos como nombre, email y teléfono. Eres responsable de tu información de acceso y de toda actividad en tu cuenta. Informa a Esfera de inmediato en caso de uso no autorizado."],
      },
      { title: "4. Edad mínima", paragraphs: ["Debes ser mayor de 18 años o la edad legal en tu país."] },
      {
        title: "5. Uso de los Servicios",
        paragraphs: ["El usuario debe usar Esfera de manera legal y responsable, no compartir cuentas ni credenciales con terceros, no dañar, sobrecargar, hackear ni vulnerar el sistema, y respetar la propiedad de la información y los derechos ajenos."],
      },
      {
        title: "6. Recolección y uso de datos personales",
        paragraphs: ["La creación de una cuenta requiere tus datos básicos y cualquier otro dato voluntario (como archivos, direcciones, etc.). Al usar Esfera, recogemos información sobre tu actividad, dispositivo, ubicación (previo consentimiento) y datos técnicos mediante cookies y partners tecnológicos para mejorar tu experiencia. Consulta la Política de Privacidad para detalles específicos sobre el tratamiento de datos."],
      },
      {
        title: "7. Finalidades del tratamiento de datos",
        paragraphs: ["Tus datos se usan para brindar acceso a tus proyectos, personalizar y mejorar nuestros servicios, comunicarte asuntos de la plataforma, soporte e información relevante, y proteger la seguridad de la plataforma y de los usuarios."],
      },
      {
        title: "8. Compartición de datos y confidencialidad",
        paragraphs: ["Compartimos información solo con proveedores de servicios de confianza o por obligación legal (por ejemplo, orden judicial). Esfera puede compartir datos anónimos y agregados para fines estadísticos o de mejora de servicios. Solo el personal autorizado accede a tus datos y solo para los fines permitidos."],
      },
      {
        title: "9. Derechos del usuario",
        paragraphs: ["Puedes acceder a tus datos personales, rectificarlos si están incorrectos y solicitar su supresión cuando no sean necesarios para la finalidad para la que fueron recogidos."],
      },
      {
        title: "10. Seguridad y almacenamiento",
        paragraphs: ["Empleamos medidas técnicas y organizacionales para proteger tus datos (cifrado, controles de acceso, etc.). Si ocurre un incidente de seguridad que afecte tus datos, serás notificado."],
      },
      {
        title: "11. Transferencia internacional de datos",
        paragraphs: ["Tus datos pueden ser almacenados en servidores fuera de tu país, manteniéndose estrictas medidas de seguridad y cumpliendo con normativas de protección internacional de datos."],
      },
      {
        title: "12. Cookies y tecnologías similares",
        paragraphs: ["Utilizamos cookies y tecnologías afines para mejorar tu experiencia. Puedes gestionarlas desde la configuración de tu navegador."],
      },
      {
        title: "13. Modificaciones a los Servicios y Términos",
        paragraphs: ["Esfera puede adaptar, suspender o modificar sus servicios, prestaciones y costes, informando con antelación cuando sea posible. Los cambios en estos Términos se comunicarán en la web y/o en la app. Tu uso continuado equivaldrá a tu aceptación. Si no estás de acuerdo, puedes dejar de usar los servicios."],
      },
      {
        title: "14. Inactividad y suscripciones recurrentes",
        paragraphs: ["Si mantienes activa una suscripción y no cancelas el servicio, los cargos periódicos continuarán incluso si no usas el software. Es responsabilidad exclusiva del usuario cancelar la suscripción si deja de necesitarla."],
      },
      {
        title: "15. Propiedad intelectual",
        paragraphs: ["Todos los derechos de software, contenidos, diseño y marca pertenecen a Esfera Solutions LLC o terceros licenciantes. El usuario dispone solo de una licencia limitada y revocable de uso personal."],
      },
      {
        title: "16. Suspensión o cancelación de cuentas",
        paragraphs: ["Esfera puede suspender o cancelar cuentas por uso indebido, incumplimiento de normas o medidas preventivas de seguridad. La cancelación no implica reembolso por periodos no consumidos."],
      },
      {
        title: "17. Limitación de responsabilidad",
        paragraphs: ["Esfera no garantiza disponibilidad ininterrumpida ni ausencia de errores y no será responsable por pérdidas indirectas, uso indebido del servicio o interrupciones, salvo los casos exigidos por ley aplicable."],
      },
      {
        title: "18. Ley y jurisdicción aplicable",
        paragraphs: ["Estos Términos se rigen por las leyes del Estado de Florida, Estados Unidos de América. Cualquier disputa relacionada con estos Términos será resuelta exclusivamente ante los tribunales estatales o federales competentes ubicados en el Estado de Florida, y tanto Esfera como el usuario aceptan someterse expresamente a dicha jurisdicción."],
      },
      {
        title: "19. Contacto",
        paragraphs: ["Cualquier duda, consulta o ejercicio de derechos podrá dirigirse a info@esfera.ai."],
      },
    ],
  },
];

const modules = [
  {
    title: "Cómputo y Presupuesto",
    tag: "PRESUPUESTO",
    description: "Arma presupuestos por etapas, categorías e ítems. Revisa cantidades, materiales, mano de obra, avance y almacén desde una tabla de control.",
    icon: FileSpreadsheet,
    className: "md:col-span-2",
  },
  {
    title: "Análisis de Precio Unitario",
    tag: "APU",
    description: "Crea precios unitarios con materiales, mano de obra, equipos y herramientas. Usa más de 400 ítems listos y 2.000 materiales base editables.",
    icon: Ruler,
  },
  {
    title: "Compras",
    tag: "COMPRAS",
    description: "Convierte necesidades de obra en pedidos, compara cotizaciones, aprueba compras y emite órdenes vinculadas al presupuesto aprobado.",
    icon: ReceiptText,
  },
  {
    title: "Gestión de Almacén",
    tag: "ALMACÉN",
    description: "Controla entradas, salidas, stock y movimientos de materiales para reducir pérdidas y saber qué hay disponible en cada obra.",
    icon: Warehouse,
    className: "md:col-span-2",
  },
  {
    title: "Administración de Proyecto",
    tag: "PROYECTO",
    description: "Cruza presupuesto, avance, materiales, mano de obra y herramientas por ítem y etapa para que gerencia vea el estado real del proyecto.",
    icon: GitBranch,
  },
  {
    title: "Módulo de Obras",
    tag: "OBRA",
    description: "Registra avances, planillas, retenciones, consumos y observaciones para conectar la oficina técnica con lo que ocurre en campo.",
    icon: HardHat,
  },
];

const platformCapabilities = [
  {
    title: "Usuarios, permisos y proyectos",
    tag: "ACCESOS",
    description: "Asigna permisos por rol y por proyecto para que cada arquitecto, ingeniero, encargado o gerente vea solo lo que necesita.",
    icon: LockKeyhole,
  },
  {
    title: "Personas y directorio operativo",
    tag: "DIRECTORIO",
    description: "Centraliza comitentes, contratistas y proveedores para compras, planillas, contactos y autorizaciones sin duplicar información.",
    icon: Users2,
  },
  {
    title: "Reportes gerenciales",
    tag: "REPORTES",
    description: "Entrega reportes de presupuesto, ejecución, saldo, rendiciones y progreso para reuniones de obra y decisiones de dirección.",
    icon: ChartNoAxesCombined,
  },
  {
    title: "Control y alertas",
    tag: "ALERTAS",
    description: "Detecta demoras en pedidos, cotizaciones, órdenes de compra, pagos o materiales en tránsito y avisa a los responsables.",
    icon: FileCheck2,
  },
];

const workflowSteps = [
  {
    title: "1. Configurar empresa y proyecto",
    description: "Crea tu empresa, registra la obra y define quién participa: arquitectos, ingenieros, administrativos, encargados y gerencia.",
  },
  {
    title: "2. Modelar presupuesto y APUs",
    description: "Carga etapas, categorías, ítems, materiales, mano de obra, equipos y precios unitarios para dejar aprobado el costo base.",
  },
  {
    title: "3. Ejecutar compras y almacén",
    description: "Solicita materiales, compara proveedores, autoriza compras y registra entradas, salidas y stock de almacén.",
  },
  {
    title: "4. Controlar obra y finanzas",
    description: "Mide avances, planillas, retenciones, pagos, saldos por ejecutar y desviaciones contra el presupuesto aprobado.",
  },
  {
    title: "5. Consultar IA y reportes",
    description: "Pregunta por chat el estado de la obra, inventario, compras pendientes, APUs, proveedores, planillas y reportes.",
  },
];

const faqs = [
  {
    question: "¿Esfera AI es gratis para usar?",
    answer: "Sí. Podés crear una cuenta y usar la plataforma de forma autoasistida, con tutoriales, documentación y recursos para avanzar por tu cuenta.",
  },
  {
    question: "¿Qué no incluye el uso gratuito?",
    answer: "El acceso gratuito no incluye soporte humano, capacitación personalizada, migración de datos, carga de APUs, configuración guiada, integraciones ni acompañamiento operativo.",
  },
  {
    question: "¿Cuándo conviene contratar implementación?",
    answer: "Cuando una constructora quiere adoptar Esfera AI en serio: ordenar procesos, configurar obras, cargar información inicial, capacitar al equipo y dejar el sistema funcionando dentro de la operación real.",
  },
  {
    question: "¿Desde cuánto empieza la implementación?",
    answer: "La implementación profesional comienza desde USD 2.500 y se cotiza según alcance, cantidad de obras, carga inicial, capacitación, soporte, integraciones y necesidades de la empresa.",
  },
  {
    question: "¿Qué incluye Esfera AI?",
    answer: "Incluye un chat para consultar la información de la obra en lenguaje natural: avance, presupuesto, compras, almacén, APUs, proveedores, contratistas y reportes.",
  },
  {
    question: "¿La implementación reemplaza al software gratuito?",
    answer: "No. El software gratuito abre la puerta. La implementación es un servicio pago para empresas que necesitan diagnóstico, configuración, capacitación, soporte y adopción operativa.",
  },
];

const useCases = [
  {
    title: "Constructoras",
    description: "Controla presupuesto, compras, almacén y avances por obra para detectar desvíos antes de que afecten el margen.",
    icon: Building2,
  },
  {
    title: "Arquitectos y gerentes de proyecto",
    description: "Ordena presupuesto, etapas, decisiones, proveedores y avance para coordinar obra sin depender de planillas dispersas.",
    icon: Users2,
  },
  {
    title: "Ingenieros",
    description: "Trabaja con APUs, cantidades, materiales, contratistas y avance físico conectados al presupuesto aprobado.",
    icon: LineChart,
  },
];

const usagePaths = [
  {
    name: "Uso autoasistido",
    tag: "AUTOASISTIDO",
    price: "USD 0",
    period: "para empezar",
    description: "Para usuarios, contratistas o empresas que quieren explorar la plataforma, ordenar una obra y avanzar por su cuenta.",
    includes: ["Acceso gratuito a la plataforma", "Uso autoasistido", "Tutoriales y documentación", "Guías para comenzar", "Ideal para explorar o avanzar solo"],
    excludes: ["Soporte humano", "Capacitación personalizada", "Migración de datos", "Configuración guiada", "Customizaciones o integraciones"],
    cta: "Crear cuenta gratis",
    href: FREE_SIGNUP_URL,
  },
  {
    name: "Implementación profesional",
    tag: "SERVICIO B2B",
    price: "Desde USD 2.500",
    period: "según alcance",
    description: "Para constructoras que necesitan diagnóstico, configuración, carga inicial, capacitación y acompañamiento para adoptar Esfera AI bien.",
    includes: ["Diagnóstico operativo", "Setup y configuración inicial", "Carga o migración de datos", "Capacitación al equipo", "Acompañamiento y soporte", "Integraciones bajo cotización"],
    excludes: [],
    cta: "Solicitar implementación",
    href: IMPLEMENTATION_URL,
    featured: true,
  },
];

const productScreenshots = [
  {
    title: "Presupuesto consolidado",
    tag: "01 / PRESUPUESTO",
    description: "Tabla de presupuesto con desglose de costos por ítem, materiales, mano de obra, equipos y totales por etapa.",
    src: "https://docs.esfera.ai/presupuesto/tabla-presupuesto.png",
    alt: "Tabla de presupuesto con desglose de costos en Esfera AI",
  },
  {
    title: "Cómputo por etapas",
    tag: "02 / CÓMPUTO",
    description: "Formulario para asignar ítems del APU a etapas del proyecto y definir cantidades ejecutables.",
    src: "https://docs.esfera.ai/presupuesto/formulario-computo.png",
    alt: "Formulario de cómputo por etapas en Esfera AI",
  },
  {
    title: "Catálogo APU",
    tag: "03 / APU",
    description: "Tres formas de crear ítems: importar desde Esfera AI, importar desde Excel o crear desde cero.",
    src: "https://docs.esfera.ai/apu/items-opciones.png",
    alt: "Opciones para crear ítems de análisis de precio unitario en Esfera AI",
  },
  {
    title: "Pedidos de compra",
    tag: "04 / COMPRAS",
    description: "Listado de pedidos con estado, materiales solicitados, fecha de creación y acciones disponibles.",
    src: "https://docs.esfera.ai/compras/listado-pedidos.jpg",
    alt: "Listado de pedidos de compra en Esfera AI",
  },
  {
    title: "Stock de almacén",
    tag: "05 / ALMACÉN",
    description: "Inventario disponible en tiempo real, actualizado por entradas y salidas de almacén.",
    src: "https://docs.esfera.ai/almacen/stock-almacen.png",
    alt: "Visualización del stock de almacén en Esfera AI",
  },
  {
    title: "Avances de obra",
    tag: "06 / OBRA",
    description: "Registro de progreso por ítem, contratista, cantidad ejecutada, etapa y observaciones.",
    src: "https://docs.esfera.ai/obra/formulario-avance.png",
    alt: "Formulario de registro de avances de obra en Esfera AI",
  },
];

function AgenticTag({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex w-fit items-center rounded-full border border-[#529B8D]/15 bg-[#529B8D]/10 px-3 py-1 font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-[#3f8276]",
        className,
      )}
    >
      {children}
    </span>
  );
}

function SectionHeader({ tag, title, description }: { tag: string; title: string; description: string }) {
  return (
    <motion.div
      className="mx-auto max-w-3xl text-center"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
      variants={stagger}
    >
      <motion.div variants={fadeUp}>
        <AgenticTag>{tag}</AgenticTag>
      </motion.div>
      <motion.h2 variants={fadeUp} className="mt-5 text-3xl font-semibold tracking-[-0.04em] text-[#0f172a] sm:text-5xl">
        {title}
      </motion.h2>
      <motion.p variants={fadeUp} className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
        {description}
      </motion.p>
    </motion.div>
  );
}

function Button({ children, variant = "primary", className, href = "#modelo" }: { children: ReactNode; variant?: "primary" | "secondary"; className?: string; href?: string }) {
  return (
    <a
      href={href}
      className={cn(
        "group inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition duration-300 active:scale-[0.98]",
        variant === "primary"
          ? "bg-[#529B8D] text-white shadow-sm shadow-[#529B8D]/20 hover:bg-[#477f75]"
          : "border border-slate-200 bg-white text-slate-900 hover:border-[#529B8D]/40 hover:text-[#3f8276]",
        className,
      )}
    >
      {children}
      <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
    </a>
  );
}

function TrialCta({ className, compact = false }: { className?: string; compact?: boolean }) {
  return (
    <motion.div
      className={cn(
        "mt-10 flex flex-col items-start gap-3 rounded-[1.5rem] border border-[#529B8D]/20 bg-white/80 p-4 shadow-sm backdrop-blur sm:flex-row sm:items-center sm:justify-between [&_.trial-copy]:text-slate-600 [&_.trial-copy-strong]:text-slate-950",
        compact && "mt-8",
        className,
      )}
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
    >
      <p className="trial-copy text-sm leading-6 [text-wrap:balance]">
        <span className="trial-copy-strong font-semibold">Esfera AI es gratis para usar.</span> Si necesitás implementación, capacitación o soporte personalizado, nuestro equipo lo cotiza según alcance.
      </p>
      <a
        href={FREE_SIGNUP_URL}
        className="inline-flex w-full shrink-0 items-center justify-center rounded-full bg-[#529B8D] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#477f75] active:scale-[0.98] sm:w-auto"
      >
        Empezar gratis
      </a>
    </motion.div>
  );
}

function Navbar() {
  return (
    <header className="sticky top-0 z-30 border-b border-slate-200/70 bg-[#F4F6F5]/85 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8" aria-label="Navegación principal">
        <a href="#" className="inline-flex items-center" aria-label="esfera.ai inicio">
          <img src={esferaLogoWhite} alt="esfera.ai" className="h-[3.3rem] w-auto sm:h-[4.2rem]" />
        </a>
        <div className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              target={item.external ? "_blank" : undefined}
              rel={item.external ? "noopener noreferrer" : undefined}
              className={cn(
                "text-sm font-medium transition",
                item.external
                  ? "rounded-full bg-[#529B8D]/10 px-3 py-1.5 font-semibold text-[#3f8276] hover:bg-[#529B8D]/15 hover:text-[#2f6b61]"
                  : "text-slate-600 hover:text-slate-950",
              )}
            >
              {item.label}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <a
            href={LOGIN_URL}
            className="inline-flex items-center rounded-full border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-800 transition hover:border-[#529B8D]/40 hover:text-[#3f8276] active:scale-[0.98] sm:px-4 sm:text-sm"
          >
            Iniciar sesión
          </a>
          <a
            href={FREE_SIGNUP_URL}
            className="inline-flex items-center rounded-full bg-[#529B8D] px-3 py-2 text-xs font-semibold text-white transition hover:bg-[#477f75] active:scale-[0.98] sm:px-4 sm:text-sm"
          >
            Empezar gratis
          </a>
        </div>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden px-4 py-16 sm:px-6 sm:py-24 lg:px-8" itemProp="offers" itemScope itemType="https://schema.org/Offer">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_65%_28%,rgba(82,155,141,0.16),transparent_32%),radial-gradient(circle_at_10%_10%,rgba(15,23,42,0.06),transparent_28%)]" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,rgba(15,23,42,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.04)_1px,transparent_1px)] bg-[size:56px_56px] [mask-image:radial-gradient(circle_at_center,black,transparent_72%)]" />
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
        <motion.div initial="hidden" animate="visible" variants={stagger}>
          <motion.div variants={fadeUp}>
            <AgenticTag>Software gratuito para construcción</AgenticTag>
          </motion.div>
          <motion.h1 variants={fadeUp} className="mt-6 max-w-4xl text-5xl font-semibold leading-[0.95] tracking-[-0.065em] text-slate-950 sm:text-6xl lg:text-7xl">
            Gestioná tu obra con Esfera AI. Software de gestión de obras.
          </motion.h1>
          <motion.p variants={fadeUp} className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 sm:text-xl">
            Esfera AI reúne cómputo, presupuesto, análisis de precio unitario, compras, almacén, cronograma, obra y reportes en una sola plataforma. Empezá gratis de forma autoasistida o solicitá implementación profesional para tu empresa.
          </motion.p>
          <motion.div variants={fadeUp} className="mt-7 flex max-w-3xl flex-wrap gap-2">
            {heroModules.map((module) => (
              <span key={module} className="rounded-full border border-slate-200 bg-white/75 px-3 py-1.5 text-xs font-semibold text-slate-700 shadow-sm backdrop-blur">
                {module}
              </span>
            ))}
          </motion.div>
          <motion.div variants={fadeUp} className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button href={FREE_SIGNUP_URL}>Empezar gratis</Button>
            <Button href={IMPLEMENTATION_URL} variant="secondary">Solicitar implementación</Button>
          </motion.div>
          <motion.p variants={fadeUp} className="mt-4 max-w-xl text-sm leading-6 text-slate-500">
            Gratis para usar. Sin tarjeta. <span className="font-semibold text-slate-800">Implementación profesional desde USD 2.500</span>, según alcance.
          </motion.p>
          <motion.div variants={fadeUp} className="mt-10 grid max-w-xl grid-cols-3 divide-x divide-slate-200 rounded-3xl border border-slate-200 bg-white/70 p-2 backdrop-blur">
            {[
              ["USD 0", "para empezar"],
              ["8 módulos", "de obra"],
              ["IA", "con tus datos"],
            ].map(([value, label]) => (
              <div key={label} className="px-4 py-3">
                <p className="text-lg font-semibold tracking-tight text-slate-950">{value}</p>
                <p className="mt-1 text-xs font-medium uppercase tracking-[0.12em] text-slate-500">{label}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.15 }}
          className="relative mx-auto flex w-full max-w-md items-center justify-center lg:max-w-none"
          aria-hidden="true"
        >
          <div className="absolute -inset-10 rounded-[3rem] bg-transparent" />
          <motion.img
            src={esferaLogoWhite}
            alt="Esfera AI"
            className="relative h-56 w-auto sm:h-72 lg:h-80"
            initial={{ rotate: 0 }}
            animate={{ rotate: 360 }}
            transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
            style={{ filter: "drop-shadow(0 12px 28px rgba(82,155,141,0.35))" }}
          />
        </motion.div>
      </div>
      <meta itemProp="priceCurrency" content="USD" />
      <meta itemProp="availability" content="https://schema.org/InStock" />
    </section>
  );
}

function DefinitionSection() {
  return (
    <section id="producto" className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.article
          className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-10 lg:p-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
          variants={stagger}
          itemScope
          itemType="https://schema.org/SoftwareApplication"
        >
          <motion.div variants={fadeUp}>
            <AgenticTag>QUÉ ES ESFERA AI</AgenticTag>
          </motion.div>
          <div className="mt-7 grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <motion.div variants={fadeUp}>
              <h2 className="text-3xl font-semibold tracking-[-0.04em] text-slate-950 sm:text-5xl" itemProp="name">
                El mismo software.<br />
                Dos formas de adoptarlo.
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-600" itemProp="applicationCategory">
                ERP de construcción con IA. Software de gestión de obras.
              </p>
              <div className="mt-8 overflow-hidden rounded-[1.75rem] border border-slate-200 bg-slate-950 shadow-[0_24px_80px_-48px_rgba(15,23,42,0.6)]">
                <iframe
                  className="aspect-video w-full"
                  src="https://www.youtube.com/embed/9GXhBwILYHY?start=5"
                  title="Qué es esfera.ai"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>
            </motion.div>
            <motion.div variants={fadeUp} className="grid gap-4 md:grid-cols-2" itemProp="description">
              {[
                {
                  title: "Empezar gratis",
                  description: "Para conocer Esfera AI, crear proyectos y avanzar de forma autoasistida.",
                  features: [
                    "Crear proyectos",
                    "Aprender con tutoriales",
                    "Explorar todas las funciones",
                    "Sin tarjeta",
                    "Ideal para profesionales independientes y equipos pequeños",
                  ],
                },
                {
                  title: "Implementación profesional",
                  description: "Para constructoras que necesitan dejar Esfera AI configurada y adoptada por su equipo.",
                  features: [
                    "Diagnóstico de procesos",
                    "Configuración personalizada",
                    "Migración de información",
                    "Capacitación por áreas",
                    "Acompañamiento hasta la adopción",
                    "Desde USD 2.500",
                  ],
                  featured: true,
                },
              ].map((path) => (
                <article key={path.title} className={cn("rounded-[1.75rem] border p-6 shadow-sm", path.featured ? "border-[#529B8D]/35 bg-[#529B8D]/10" : "border-slate-200 bg-slate-50")}> 
                  <h3 className="text-2xl font-semibold tracking-tight text-slate-950">{path.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{path.description}</p>
                  <div className="mt-6 space-y-3">
                    {path.features.map((feature) => (
                      <div key={feature} className="flex gap-3 text-sm font-medium leading-6 text-slate-700">
                        <Check className="mt-1 h-4 w-4 shrink-0 text-[#529B8D]" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </article>
              ))}
            </motion.div>
          </div>
          <meta itemProp="operatingSystem" content="Web" />
          <meta itemProp="softwareVersion" content="Cloud SaaS" />
        </motion.article>
        <TrialCta />
      </div>
    </section>
  );
}

function ModulesSection() {
  return (
    <section id="modulos" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeader tag="MÓDULOS DE OBRA" title="Todo el control de obra en un solo sistema." description="Desde el presupuesto y los APUs hasta compras, almacén, avance físico y administración del proyecto." />
        <motion.div className="mt-12 grid gap-4 md:grid-cols-3" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={stagger}>
          {modules.map((module) => {
            const Icon = module.icon;
            return (
              <motion.article key={module.title} variants={fadeUp} className={cn("group rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#529B8D]/30 hover:shadow-[0_18px_50px_-35px_rgba(15,23,42,0.4)]", module.className)}>
                <div className="flex items-center justify-between gap-4">
                  <AgenticTag>{module.tag}</AgenticTag>
                  <div className="rounded-2xl border border-slate-100 bg-slate-50 p-3 transition group-hover:bg-[#529B8D]/10">
                    <Icon className="h-5 w-5 text-[#529B8D]" />
                  </div>
                </div>
                <h3 className="mt-8 text-xl font-semibold tracking-tight text-slate-950">{module.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{module.description}</p>
              </motion.article>
            );
          })}
        </motion.div>
        <TrialCta />
      </div>
    </section>
  );
}

function ProductScreenshotsSection() {
  const [activeScreenshot, setActiveScreenshot] = useState<(typeof productScreenshots)[number] | null>(null);

  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-end">
          <div>
            <AgenticTag>PANTALLAS REALES</AgenticTag>
            <h2 className="mt-5 text-3xl font-semibold tracking-[-0.04em] text-slate-950 sm:text-5xl">
              Así trabaja tu equipo dentro de Esfera AI.
            </h2>
          </div>
          <p className="max-w-2xl text-base leading-7 text-slate-600 sm:text-lg lg:justify-self-end">
            Capturas reales del flujo que usan arquitectos, ingenieros, administradores y gerentes: presupuesto, cómputo, APU, compras, almacén y avances.
          </p>
        </div>

        <motion.div className="mt-12 rounded-[2.25rem] border border-slate-200 bg-white p-3 shadow-sm sm:p-4" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.18 }} variants={stagger}>
          {productScreenshots.map((screenshot) => (
            <motion.article
              key={screenshot.title}
              variants={fadeUp}
              className="group grid gap-5 border-b border-slate-100 p-4 last:border-b-0 sm:p-5 lg:grid-cols-[0.92fr_1.08fr] lg:items-center"
            >
              <button
                type="button"
                onClick={() => setActiveScreenshot(screenshot)}
                className="relative overflow-hidden rounded-[1.35rem] border border-slate-200 bg-slate-100 text-left transition focus:outline-none focus:ring-4 focus:ring-[#529B8D]/20"
                aria-label={`Ampliar captura: ${screenshot.title}`}
              >
                <img
                  src={screenshot.src}
                  alt={screenshot.alt}
                  loading="lazy"
                  className="aspect-[16/9] w-full object-cover object-top transition duration-700 group-hover:scale-[1.02]"
                />
                <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-white/80 to-transparent" />
                <span className="absolute bottom-3 right-3 rounded-full bg-slate-950/80 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur">
                  Ampliar
                </span>
              </button>
              <div className="px-1 pb-2 lg:px-4 lg:pb-0">
                <AgenticTag>{screenshot.tag}</AgenticTag>
                <h3 className="mt-4 text-2xl font-semibold tracking-tight text-slate-950">{screenshot.title}</h3>
                <p className="mt-3 max-w-xl text-sm leading-6 text-slate-600">{screenshot.description}</p>
              </div>
            </motion.article>
          ))}
        </motion.div>
        <TrialCta />
      </div>
      <AnimatePresence>
        {activeScreenshot && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 p-4 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveScreenshot(null)}
          >
            <motion.div
              className="w-full max-w-6xl overflow-hidden rounded-[1.5rem] border border-white/10 bg-white shadow-2xl"
              initial={{ opacity: 0, y: 18, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 18, scale: 0.96 }}
              transition={{ type: "spring", stiffness: 180, damping: 24 }}
              onClick={(event) => event.stopPropagation()}
            >
              <div className="flex items-center justify-between gap-4 border-b border-slate-200 px-4 py-3 sm:px-5">
                <div>
                  <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-[#3f8276]">{activeScreenshot.tag}</p>
                  <h3 className="mt-1 text-base font-semibold tracking-tight text-slate-950 sm:text-lg">{activeScreenshot.title}</h3>
                </div>
                <button
                  type="button"
                  onClick={() => setActiveScreenshot(null)}
                  className="rounded-full border border-slate-200 px-3 py-1.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
                >
                  Cerrar
                </button>
              </div>
              <div className="max-h-[78dvh] overflow-auto bg-slate-100 p-2 sm:p-4">
                <img src={activeScreenshot.src} alt={activeScreenshot.alt} className="mx-auto w-full rounded-xl border border-slate-200 bg-white object-contain" />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

function PlatformSection() {
  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
          <div>
            <AgenticTag>CONTROL OPERATIVO</AgenticTag>
            <h2 className="mt-5 text-3xl font-semibold tracking-[-0.04em] text-slate-950 sm:text-5xl">
              Permisos, reportes, alertas y directorio para equipos de obra.
            </h2>
          </div>
          <p className="text-base leading-7 text-slate-600 sm:text-lg">
            Esfera AI no se queda en el presupuesto. También ayuda a ordenar usuarios, contratistas, proveedores, reportes gerenciales y alertas de demora.
          </p>
        </div>
        <motion.div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.25 }} variants={stagger}>
          {platformCapabilities.map((capability) => {
            const Icon = capability.icon;
            return (
              <motion.article key={capability.title} variants={fadeUp} className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm">
                <Icon className="h-5 w-5 text-[#529B8D]" />
                <AgenticTag className="mt-6">{capability.tag}</AgenticTag>
                <h3 className="mt-5 text-lg font-semibold tracking-tight text-slate-950">{capability.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{capability.description}</p>
              </motion.article>
            );
          })}
        </motion.div>
        <TrialCta />
      </div>
    </section>
  );
}

function WorkflowSection() {
  return (
    <section id="flujo" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl rounded-[2.5rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-10 lg:p-12">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <AgenticTag>FLUJO DE TRABAJO</AgenticTag>
            <h2 className="mt-5 text-3xl font-semibold tracking-[-0.04em] text-slate-950 sm:text-5xl">
              Del presupuesto aprobado al control diario de la obra.
            </h2>
            <p className="mt-5 text-base leading-7 text-slate-600">
              El flujo de Esfera AI acompaña a tu equipo desde la configuración del proyecto hasta compras, almacén, avances, reportes e IA por chat.
            </p>
            <a href="https://docs.esfera.ai/flujo-trabajo" target="_blank" rel="noopener noreferrer" className="mt-7 inline-flex items-center text-sm font-semibold text-[#3f8276]">
              Ver manual de uso
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </div>
          <motion.div className="grid gap-3" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.25 }} variants={stagger}>
            {workflowSteps.map((step) => (
              <motion.article key={step.title} variants={fadeUp} className="rounded-2xl border border-slate-200 bg-slate-50/70 p-5">
                <h3 className="text-base font-semibold tracking-tight text-slate-950">{step.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{step.description}</p>
              </motion.article>
            ))}
          </motion.div>
        </div>
        <TrialCta className="bg-white" />
      </div>
    </section>
  );
}

function AiSection() {
  return (
    <section id="ia" className="px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-[#12231f] text-white shadow-[0_22px_64px_-46px_rgba(15,23,42,0.7)]">
        <div className="grid gap-6 p-5 sm:p-7 lg:grid-cols-[0.86fr_1.14fr] lg:p-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.35 }} variants={stagger}>
            <motion.div variants={fadeUp}>
              <AgenticTag className="border-white/10 bg-white/10 text-[#9dd5ca]">ESFERA AI CHAT</AgenticTag>
            </motion.div>
            <motion.h2 variants={fadeUp} className="mt-4 text-2xl font-semibold tracking-[-0.05em] text-white sm:text-4xl">
              Pregunta por tu obra y obtén respuestas en segundos.
            </motion.h2>
            <motion.p variants={fadeUp} className="mt-4 max-w-xl text-sm leading-6 text-white/70 sm:text-base">
              Esfera AI es un chat conectado a la información del proyecto. Pregunta por presupuesto, compras, almacén, avance o proveedores y recibe respuestas claras para tomar decisiones en obra.
            </motion.p>
            <div className="mt-5 flex flex-col gap-2 sm:flex-row">
              <a href={FREE_SIGNUP_URL} className="inline-flex items-center justify-center rounded-full bg-white px-4 py-2.5 text-sm font-semibold text-[#12231f] transition hover:bg-white/90 active:scale-[0.98]">
                Empezar gratis
              </a>
              <a href={IMPLEMENTATION_URL} className="inline-flex items-center justify-center rounded-full border border-white/15 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-white/10 active:scale-[0.98]">
                Implementación desde USD 2.500
              </a>
            </div>
          </motion.div>
          <motion.div className="rounded-[1.35rem] border border-white/10 bg-[#081310] p-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] sm:p-4" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.35 }} transition={{ duration: 0.6 }}>
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <div className="flex items-center gap-3">
                <Bot className="h-5 w-5 text-[#9dd5ca]" />
                <span className="font-mono text-xs uppercase tracking-[0.18em] text-white/50">chat de obra</span>
              </div>
              <span className="rounded-full bg-[#529B8D]/15 px-3 py-1 font-mono text-xs text-[#9dd5ca]">responde con tus datos</span>
            </div>
            <div className="mt-4 grid gap-3">
              <div className="ml-auto max-w-[88%] rounded-2xl rounded-tr-md bg-[#529B8D] p-3 text-xs leading-5 text-white shadow-sm sm:text-sm">
                ¿Cuánto cemento falta por llegar para la Torre Norte?
              </div>
              <div className="max-w-[92%] rounded-2xl rounded-tl-md bg-white/[0.08] p-3 text-xs leading-5 text-white/80 sm:text-sm">
                Faltan 72 bolsas de cemento IP-40 por recibir. La orden OC-2026-1184 pidió 320 bolsas y almacén registró 248 entradas. Te recomiendo revisar con compras si el proveedor confirmó la entrega restante.
              </div>
              <div className="ml-auto max-w-[88%] rounded-2xl rounded-tr-md bg-[#529B8D] p-3 text-xs leading-5 text-white shadow-sm sm:text-sm">
                ¿Estamos gastando más de lo presupuestado?
              </div>
              <div className="max-w-[92%] rounded-2xl rounded-tl-md bg-white p-3 text-xs leading-5 text-slate-800 sm:text-sm">
                En obra gruesa el consumo está 7.3% por encima del APU aprobado. El mayor desvío está en cemento y mano de obra. Puedo prepararte un resumen por etapa.
              </div>
            </div>
            <div className="mt-4 grid gap-2 sm:grid-cols-3">
              {[
                [Database, "Consulta datos"],
                [ShieldCheck, "Resume riesgos"],
                [Layers3, "Sugiere acciones"],
              ].map(([Icon, label]) => {
                const TypedIcon = Icon as typeof Database;
                return (
                  <div key={label as string} className="rounded-xl border border-white/10 bg-white/[0.03] p-3">
                    <TypedIcon className="h-4 w-4 text-[#9dd5ca]" />
                    <p className="mt-2 text-xs font-medium text-white/80 sm:text-sm">{label as string}</p>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function UseCasesSection() {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeader tag="PARA EMPRESAS CON OBRA ACTIVA" title="Diseñado para constructoras que necesitan orden operativo real." description="Esfera AI puede usarse gratis, pero la implementación profesional está pensada para equipos que manejan presupuestos, compras, almacén, APUs, reportes y varias responsabilidades al mismo tiempo." />
        <motion.div className="mt-12 grid gap-4 lg:grid-cols-[1.2fr_0.9fr_0.9fr]" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.25 }} variants={stagger}>
          {useCases.map((useCase, index) => {
            const Icon = useCase.icon;
            return (
              <motion.article key={useCase.title} variants={fadeUp} className={cn("rounded-[1.75rem] border border-slate-200 bg-white p-7 shadow-sm", index === 0 && "lg:min-h-80")}>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#529B8D]/10">
                  <Icon className="h-6 w-6 text-[#529B8D]" />
                </div>
                <h3 className="mt-8 text-2xl font-semibold tracking-tight text-slate-950">{useCase.title}</h3>
                <p className="mt-4 text-sm leading-6 text-slate-600">{useCase.description}</p>
              </motion.article>
            );
          })}
        </motion.div>
        <TrialCta />
      </div>
    </section>
  );
}

function BusinessModelSection() {
  return (
    <section id="modelo" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeader tag="MODELO COMERCIAL" title="Dos formas de usar Esfera AI." description="Puedes empezar gratis desde hoy. Si tu empresa necesita adoptar Esfera AI como parte de su forma de trabajar, ofrecemos un servicio de implementación que configura la plataforma, acompaña al equipo y asegura una puesta en marcha exitosa." />
        <motion.div className="mt-10 rounded-[1.75rem] border border-[#529B8D]/20 bg-[#529B8D]/10 p-6 sm:flex sm:items-center sm:justify-between sm:gap-8" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.35 }}>
          <div>
            <AgenticTag>MENSAJE CLAVE</AgenticTag>
            <h3 className="mt-4 text-2xl font-semibold tracking-tight text-slate-950">El software es la herramienta. La implementación asegura que funcione en tu operación.</h3>
            <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-600">Usar Esfera AI es fácil. Integrarlo a la forma de trabajar de tu empresa requiere un proceso. Para eso existe la implementación.</p>
          </div>
          <a href={IMPLEMENTATION_URL} className="mt-6 inline-flex shrink-0 items-center justify-center rounded-full bg-[#529B8D] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#477f75] active:scale-[0.98] sm:mt-0">
            Solicitar implementación
          </a>
        </motion.div>
        <motion.div className="mt-12 grid gap-5 lg:grid-cols-[0.9fr_1.1fr]" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={stagger}>
          {usagePaths.map((path) => (
            <motion.article key={path.name} variants={fadeUp} className={cn("relative rounded-[2rem] border bg-white p-6 shadow-sm sm:p-8", path.featured ? "border-[#529B8D] ring-4 ring-[#529B8D]/10" : "border-slate-200")}>
              {path.featured && <span className="absolute right-5 top-5 rounded-full bg-[#529B8D] px-3 py-1 text-xs font-semibold text-white">Foco B2B</span>}
              <AgenticTag>{path.tag}</AgenticTag>
              <h3 className="mt-5 text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">{path.name}</h3>
              <p className="mt-4 text-sm leading-6 text-slate-600 sm:text-base">{path.description}</p>
              <div className="mt-8">
                <p className="text-4xl font-semibold tracking-[-0.05em] text-slate-950 sm:text-5xl">{path.price}</p>
                <p className="mt-2 text-sm font-medium text-slate-500">{path.period}</p>
              </div>
              <a href={path.href} className={cn("mt-7 inline-flex w-full items-center justify-center rounded-full px-4 py-3 text-sm font-semibold transition active:scale-[0.98]", path.featured ? "bg-[#529B8D] text-white hover:bg-[#477f75]" : "border border-slate-200 bg-white text-slate-900 hover:border-[#529B8D]/40 hover:text-[#3f8276]")}>{path.cta}</a>
              <div className="mt-8 grid gap-6 border-t border-slate-100 pt-7 lg:grid-cols-2">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">Incluye</p>
                  <div className="mt-4 space-y-3">
                    {path.includes.map((feature) => (
                      <div key={feature} className="flex items-start gap-3 text-sm leading-6 text-slate-700">
                        <Check className="mt-1 h-4 w-4 shrink-0 text-[#529B8D]" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
                {path.excludes.length > 0 && (
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">No incluye</p>
                    <div className="mt-4 space-y-3">
                      {path.excludes.map((feature) => (
                        <div key={feature} className="flex items-start gap-3 text-sm leading-6 text-slate-500">
                          <span className="mt-3 h-px w-4 shrink-0 bg-slate-300" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function FaqSection() {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeader tag="PREGUNTAS FRECUENTES" title="Gratis para usar no significa implementación gratuita." description="Respuestas directas para separar el acceso autoasistido del servicio profesional de implementación." />
        <motion.div className="mt-12 grid gap-4 md:grid-cols-2" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.25 }} variants={stagger}>
          {faqs.map((faq) => (
            <motion.article key={faq.question} variants={fadeUp} className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm" itemScope itemType="https://schema.org/Question">
              <h3 className="text-lg font-semibold tracking-tight text-slate-950" itemProp="name">{faq.question}</h3>
              <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                <p className="mt-3 text-sm leading-6 text-slate-600" itemProp="text">{faq.answer}</p>
              </div>
            </motion.article>
          ))}
        </motion.div>
        <TrialCta />
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8">
      <motion.div className="mx-auto max-w-7xl rounded-[2.5rem] border border-slate-200 bg-white p-8 text-center shadow-sm sm:p-12" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.35 }}>
        <AgenticTag>ESFERA AI B2B</AgenticTag>
        <h2 className="mx-auto mt-6 max-w-3xl text-3xl font-semibold tracking-[-0.05em] text-slate-950 sm:text-5xl">Empezá gratis. Implementá bien cuando tu constructora necesite operar con orden.</h2>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600">Usá la plataforma por tu cuenta o solicitá una implementación profesional desde USD 2.500 para dejar Esfera AI configurada, cargada y adoptada por tu equipo.</p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Button href={FREE_SIGNUP_URL}>Empezar gratis</Button>
          <Button href={IMPLEMENTATION_URL} variant="secondary">Implementación desde USD 2.500</Button>
        </div>
      </motion.div>
    </section>
  );
}

function LegalPage() {
  return (
    <main className="min-h-[100dvh] bg-[#F4F6F5] text-slate-900">
      <Navbar />
      <section className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <a href="#/" className="inline-flex items-center text-sm font-semibold text-[#3f8276] transition hover:text-[#2f6b61]">
            <ArrowRight className="mr-2 h-4 w-4 rotate-180" />
            Volver a esfera.ai
          </a>
          <div className="mt-8 rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-10">
            <AgenticTag>LEGAL</AgenticTag>
            <h1 className="mt-5 text-4xl font-semibold tracking-[-0.05em] text-slate-950 sm:text-6xl">
              Política de privacidad, términos y condiciones.
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
              Información legal de Esfera Solutions LLC para usuarios de www.esfera.ai, la plataforma web y sus aplicaciones móviles.
            </p>
          </div>

          <div className="mt-8 space-y-8">
            {legalSections.map((section) => (
              <article key={section.title} id={section.title === "Política de Privacidad" ? "privacidad" : "terminos"} className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-10">
                <h2 className="text-3xl font-semibold tracking-[-0.04em] text-slate-950 sm:text-4xl">{section.title}</h2>
                {section.intro && <p className="mt-5 text-base leading-7 text-slate-600">{section.intro}</p>}
                <div className="mt-8 space-y-7">
                  {section.items.map((item) => (
                    <section key={item.title}>
                      <h3 className="text-lg font-semibold tracking-tight text-slate-950">{item.title}</h3>
                      <div className="mt-3 space-y-3">
                        {item.paragraphs.map((paragraph) => (
                          <p key={paragraph} className="text-sm leading-7 text-slate-600 sm:text-base">
                            {paragraph}
                          </p>
                        ))}
                      </div>
                    </section>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <Footer />
      <WhatsAppBubble />
    </main>
  );
}

function SocialIcon({ icon }: { icon: string }) {
  const iconClassName = "h-4 w-4";

  return (
    <span className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 transition group-hover:border-[#529B8D]/30 group-hover:bg-[#529B8D]/10 group-hover:text-[#3f8276]" aria-hidden="true">
      {icon === "instagram" && (
        <svg viewBox="0 0 24 24" className={iconClassName} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect width="18" height="18" x="3" y="3" rx="5" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
        </svg>
      )}
      {icon === "tiktok" && (
        <svg viewBox="0 0 24 24" className={iconClassName} fill="currentColor">
          <path d="M16.6 3c.32 2.45 1.69 3.9 4.08 4.06v3.04a7.4 7.4 0 0 1-4.02-1.19v6.14c0 3.11-2.1 5.95-5.75 5.95-3.23 0-5.59-2.04-5.59-5.05 0-3.49 3.25-5.8 6.62-5.08v3.15c-1.52-.48-3.37.25-3.37 1.84 0 1.16.93 1.91 2.15 1.91 1.56 0 2.49-.91 2.49-2.68V3h3.39Z" />
        </svg>
      )}
      {icon === "linkedin" && (
        <svg viewBox="0 0 24 24" className={iconClassName} fill="currentColor">
          <path d="M6.94 8.98H3.72V20h3.22V8.98ZM5.33 4a1.87 1.87 0 1 0 0 3.74 1.87 1.87 0 0 0 0-3.74ZM20.28 13.88c0-3.02-1.61-4.43-3.77-4.43a3.25 3.25 0 0 0-2.93 1.61h-.04V8.98h-3.08V20h3.21v-5.45c0-1.44.27-2.83 2.05-2.83 1.75 0 1.78 1.64 1.78 2.92V20h3.22l-.44-6.12Z" />
        </svg>
      )}
      {icon === "youtube" && (
        <svg viewBox="0 0 24 24" className={iconClassName} fill="currentColor">
          <path d="M21.58 7.2a2.77 2.77 0 0 0-1.95-1.96C17.91 4.78 12 4.78 12 4.78s-5.91 0-7.63.46A2.77 2.77 0 0 0 2.42 7.2 28.9 28.9 0 0 0 1.96 12c0 1.6.15 3.2.46 4.8.26.95 1 1.7 1.95 1.96 1.72.46 7.63.46 7.63.46s5.91 0 7.63-.46a2.77 2.77 0 0 0 1.95-1.96c.31-1.6.46-3.2.46-4.8 0-1.6-.15-3.2-.46-4.8ZM9.98 15.28V8.72L15.13 12l-5.15 3.28Z" />
        </svg>
      )}
      {icon === "x" && (
        <svg viewBox="0 0 24 24" className={iconClassName} fill="currentColor">
          <path d="M13.86 10.47 21.15 2h-1.73l-6.33 7.35L8.03 2H2.2l7.64 11.11L2.2 22h1.73l6.68-7.76L15.95 22h5.83l-7.92-11.53Zm-2.37 2.75-.77-1.1L4.56 3.3H7.2l4.98 7.12.77 1.1 6.47 9.26h-2.64l-5.29-7.56Z" />
        </svg>
      )}
    </span>
  );
}

function WhatsAppBubble() {
  return (
    <a
      href="https://wa.me/14845691555"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_18px_45px_-18px_rgba(37,211,102,0.75)] transition hover:-translate-y-1 hover:bg-[#20bd5a] focus:outline-none focus:ring-4 focus:ring-[#25D366]/25 sm:bottom-6 sm:right-6 sm:h-16 sm:w-16"
    >
      <svg viewBox="0 0 32 32" className="h-7 w-7 sm:h-8 sm:w-8" role="img" aria-hidden="true">
        <path
          fill="currentColor"
          d="M16.01 3.2c-7.03 0-12.75 5.64-12.75 12.58 0 2.39.69 4.72 1.98 6.72L3.2 28.8l6.5-2.01a12.9 12.9 0 0 0 6.31 1.63c7.03 0 12.75-5.64 12.75-12.58S23.04 3.2 16.01 3.2Zm0 22.98c-1.92 0-3.78-.52-5.4-1.52l-.39-.24-3.86 1.19 1.23-3.72-.26-.39a10.13 10.13 0 0 1-1.78-5.72c0-5.7 4.69-10.34 10.46-10.34s10.46 4.64 10.46 10.34-4.69 10.4-10.46 10.4Zm5.73-7.75c-.31-.16-1.85-.9-2.14-1-.29-.11-.5-.16-.71.16-.21.31-.82 1-.99 1.21-.18.21-.36.24-.67.08-.31-.16-1.32-.48-2.51-1.53-.93-.82-1.56-1.83-1.74-2.14-.18-.31-.02-.48.14-.64.14-.14.31-.36.47-.54.16-.18.21-.31.31-.52.1-.21.05-.39-.03-.54-.08-.16-.71-1.69-.97-2.31-.26-.6-.52-.52-.71-.53h-.6c-.21 0-.54.08-.82.39-.29.31-1.08 1.05-1.08 2.56 0 1.5 1.11 2.96 1.27 3.17.16.21 2.19 3.3 5.31 4.63.74.32 1.32.51 1.77.65.74.23 1.42.2 1.96.12.6-.09 1.85-.75 2.11-1.47.26-.72.26-1.34.18-1.47-.08-.13-.29-.21-.6-.37Z"
        />
      </svg>
    </a>
  );
}

function Footer() {
  return (
    <footer className="border-t border-slate-200 px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <a href="#" className="inline-flex items-center" aria-label="esfera.ai inicio">
            <img src={esferaLogoWhite} alt="esfera.ai" className="h-[4.2rem] w-auto" />
          </a>
          <p className="mt-4 max-w-md text-sm leading-6 text-slate-500">Plataforma gratuita para gestión de obra, con implementación profesional para constructoras que necesitan adopción operativa.</p>
          <div className="mt-5 space-y-2 text-sm leading-6 text-slate-600">
            <p>ESFERA SOLUTIONS LLC.</p>
            <p>33131, Miami, Florida.</p>
            <a href="mailto:info@esfera.ai" className="inline-flex items-center gap-2 font-medium text-[#3f8276] transition hover:text-[#2f6b61]">
              <Mail className="h-4 w-4" />
              info@esfera.ai
            </a>
          </div>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:justify-self-end">
          <div>
            <p className="text-sm font-semibold text-slate-950">Enlaces</p>
            <div className="mt-4 grid gap-3 text-sm font-medium text-slate-600">
              <a href="https://docs.esfera.ai" className="hover:text-slate-950">Documentación</a>
              <a href="https://docs.esfera.ai" className="hover:text-slate-950">Integraciones API</a>
              <a href={FREE_SIGNUP_URL} className="hover:text-slate-950">Empezar gratis</a>
              <a href={IMPLEMENTATION_URL} className="hover:text-slate-950">Solicitar implementación</a>
              <a href={LOGIN_URL} className="hover:text-slate-950">Iniciar sesión</a>
              <a href="#/legal" className="hover:text-slate-950">Política de privacidad</a>
              <a href="#/legal#terminos" className="hover:text-slate-950">Términos y condiciones</a>
            </div>
          </div>
          <div>
            <p className="text-sm font-semibold text-slate-950">Redes sociales</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {socialLinks.map((social) => (
                <a key={social.href} href={social.href} target="_blank" rel="noopener noreferrer" className="group" aria-label={social.label}>
                  <SocialIcon icon={social.icon} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-10 flex max-w-7xl flex-col gap-3 border-t border-slate-200 pt-6 text-xs font-medium text-slate-500 sm:flex-row sm:items-center sm:justify-between">
        <p>© 2025 ESFERA SOLUTIONS LLC.</p>
        <p>Gratis para usar · Implementación desde USD 2.500</p>
      </div>
    </footer>
  );
}

export default function App() {
  const [route, setRoute] = useState(() => window.location.hash || "#/");

  useEffect(() => {
    const handleHashChange = () => setRoute(window.location.hash || "#/");
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  if (route.startsWith("#/legal")) {
    return <LegalPage />;
  }

  return (
    <main className="min-h-[100dvh] bg-[#F4F6F5] text-slate-900" itemScope itemType="https://schema.org/SoftwareApplication">
      <meta itemProp="name" content="esfera.ai" />
      <meta itemProp="applicationCategory" content="Free Construction ERP with AI; Construction Management Software; B2B Implementation Service" />
      <meta itemProp="operatingSystem" content="Web" />
      <Navbar />
      <Hero />
      <DefinitionSection />
      <ModulesSection />
      <ProductScreenshotsSection />
      <PlatformSection />
      <WorkflowSection />
      <AiSection />
      <UseCasesSection />
      <BusinessModelSection />
      <FaqSection />
      <FinalCta />
      <Footer />
      <WhatsAppBubble />
    </main>
  );
}
