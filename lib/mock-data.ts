export type LabStatus = 'documented' | 'in-progress' | 'planned'
export type Category = 'Compute' | 'Linux Fundamentals' | 'Networking' | 'Security' | 'Databases' | 'Storage' | 'Monitoring'
export type AWSService = 'EC2' | 'S3' | 'RDS' | 'VPC' | 'IAM' | 'CloudWatch' | 'Lambda' | 'ECS'

export const siteProfile = {
  eyebrow: 'AWS re/Start Labs',
  name: 'Felipe Henriquez',
  role: 'Cloud Operations',
  intro:
    'Archivo técnico de laboratorios prácticos de AWS realizados durante el programa re/Start. Cada laboratorio se documenta como un reporte operacional con validación, evidencia visual y análisis de servicios en la nube.',
  metadata: ['AWS re/Start', 'Cloud Operations', 'Documentación Técnica', 'Laboratorios con Evidencia'],
}

export interface Lab {
  id: string
  number: number
  slug: string
  title: string
  summary: string
  category: Category
  services: AWSService[]
  status: LabStatus
  date?: string
  evidenceReady?: boolean
  hasOperationalNotes?: boolean
}

export const CATEGORIES: Category[] = [
  'Compute',
  'Linux Fundamentals',
  'Networking',
  'Security',
  'Databases',
  'Storage',
  'Monitoring',
]

export const mockLabs: Lab[] = [
  {
    id: 'lab-1',
    number: 1,
    slug: 'creacion-instancia-ec2',
    title: 'Creación de una instancia Amazon EC2',
    summary: 'Lanzamiento y configuración básica de una instancia EC2 en AWS. Incluye conexión SSH y gestión de grupos de seguridad.',
    category: 'Compute',
    services: ['EC2', 'VPC', 'IAM'],
    status: 'documented',
    date: '2024-01-15',
    evidenceReady: true,
    hasOperationalNotes: true,
  },
  {
    id: 'lab-2',
    number: 2,
    slug: 'vpc-subredes-publicas-privadas',
    title: 'Configuración de VPC con subredes públicas y privadas',
    summary: 'Arquitectura de red segura con subredes aisladas, NAT Gateway y tablas de enrutamiento personalizadas.',
    category: 'Networking',
    services: ['VPC', 'EC2'],
    status: 'documented',
    date: '2024-01-20',
    evidenceReady: true,
    hasOperationalNotes: true,
  },
  {
    id: 'lab-3',
    number: 3,
    slug: 's3-versionado-ciclo-de-vida',
    title: 'Implementación de S3 con versionado y ciclo de vida',
    summary: 'Almacenamiento de objetos con versionado habilitado, políticas de ciclo de vida y control de acceso granular.',
    category: 'Storage',
    services: ['S3', 'IAM'],
    status: 'documented',
    date: '2024-01-25',
    evidenceReady: true,
  },
  {
    id: 'lab-4',
    number: 4,
    slug: 'iam-usuarios-y-permisos',
    title: 'Administración de usuarios y permisos con IAM',
    summary: 'Creación de usuarios, grupos, políticas personalizadas y gestión de credenciales de acceso seguro.',
    category: 'Security',
    services: ['IAM'],
    status: 'documented',
    date: '2024-02-01',
    evidenceReady: true,
    hasOperationalNotes: true,
  },
  {
    id: 'lab-5',
    number: 5,
    slug: 'linux-en-ec2',
    title: 'Instalación y configuración de Linux en EC2',
    summary: 'Setup de servidor Linux con herramientas de administración, gestión de paquetes y seguridad básica.',
    category: 'Linux Fundamentals',
    services: ['EC2'],
    status: 'documented',
    date: '2024-02-05',
    evidenceReady: true,
  },
  {
    id: 'lab-6',
    number: 6,
    slug: 'cloudwatch-monitoreo-y-alarmas',
    title: 'Monitoreo con CloudWatch y alarmas',
    summary: 'Creación de dashboards, métricas personalizadas y alarmas automáticas para instancias EC2.',
    category: 'Monitoring',
    services: ['CloudWatch', 'EC2'],
    status: 'documented',
    date: '2024-02-10',
    evidenceReady: true,
    hasOperationalNotes: true,
  },
  {
    id: 'lab-7',
    number: 7,
    slug: 'rds-mysql',
    title: 'Base de datos MySQL con RDS',
    summary: 'Provisión de instancia RDS MySQL con backups automáticos, snapshot y parámetros de rendimiento.',
    category: 'Databases',
    services: ['RDS', 'VPC'],
    status: 'documented',
    date: '2024-02-15',
    evidenceReady: true,
  },
  {
    id: 'lab-8',
    number: 8,
    slug: 'security-groups-control-acceso',
    title: 'Grupos de seguridad y control de acceso',
    summary: 'Configuración avanzada de Security Groups con reglas de ingreso/egreso y análisis de tráfico.',
    category: 'Security',
    services: ['VPC', 'EC2'],
    status: 'in-progress',
    hasOperationalNotes: true,
  },
  {
    id: 'lab-9',
    number: 9,
    slug: 'deployment-ecs',
    title: 'Deployment de aplicación con ECS',
    summary: 'Containerización y orquestación de aplicación en Elastic Container Service.',
    category: 'Compute',
    services: ['ECS', 'EC2', 'IAM'],
    status: 'planned',
  },
  {
    id: 'lab-10',
    number: 10,
    slug: 'automatizacion-lambda',
    title: 'Automatización de tareas con Lambda',
    summary: 'Funciones serverless para procesos automatizados disparados por eventos en la infraestructura.',
    category: 'Compute',
    services: ['Lambda', 'IAM'],
    status: 'planned',
  },
  {
    id: 'lab-11',
    number: 11,
    slug: 'rds-replicacion-entre-regiones',
    title: 'Replicación de datos en RDS entre regiones',
    summary: 'Configuración de replicas de lectura y failover automático para alta disponibilidad.',
    category: 'Databases',
    services: ['RDS', 'VPC'],
    status: 'planned',
  },
  {
    id: 'lab-12',
    number: 12,
    slug: 's3-bucket-policies',
    title: 'Permisos con bucket policies en S3',
    summary: 'Control granular de acceso a buckets S3 mediante políticas y ACLs avanzadas.',
    category: 'Storage',
    services: ['S3', 'IAM'],
    status: 'in-progress',
    hasOperationalNotes: true,
  },
]

export const getLabsByCategory = (category: Category): Lab[] => {
  return mockLabs.filter((lab) => lab.category === category)
}

export const getLabBySlug = (slug: string): Lab | undefined => {
  return mockLabs.find((lab) => lab.slug === slug)
}

export const getUniqueServices = (): AWSService[] => {
  const services = new Set<AWSService>()
  mockLabs.forEach((lab) => {
    lab.services.forEach((service) => services.add(service))
  })
  return Array.from(services).sort()
}

export const getStats = () => {
  const documentedCount = mockLabs.filter((lab) => lab.status === 'documented').length
  const totalServices = getUniqueServices().length
  const categoriesCount = CATEGORIES.length
  const screenshotsCount = documentedCount * 3

  return {
    documented: documentedCount,
    services: totalServices,
    categories: categoriesCount,
    screenshots: screenshotsCount,
  }
}
