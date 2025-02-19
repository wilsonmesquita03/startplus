import {
  Bell,
  Calendar,
  ChartPie,
  ClipboardCheck,
  CreditCard,
  Filter,
  Flame,
  Gift,
  GraduationCap,
  Headphones,
  IdCard,
  Pen,
  PlusCircle,
  Star,
  StickyNote,
  Tags,
  ThumbsUp,
  Trash,
  Trophy,
  University,
  UserCircle,
  UserPlus,
  Users,
} from "lucide-react";

export const admin = [
  {
    sectionTitle: "",
    items: [
      {
        title: "Painel de Controle",
        isCollapsible: false,
        url: "/dashboard",
        icon: Flame,
      },
      {
        title: "Painel de Marketing",
        isCollapsible: false,
        url: "/dashboard/marketing",
        icon: ChartPie,
      },
    ],
  },
  {
    sectionTitle: "Educação",
    items: [
      {
        title: "Cursos",
        isCollapsible: false,
        icon: GraduationCap,
        subItems: [
          { title: "Cursos", url: "/dashboard/courses" },
          { title: "Novo", url: "/dashboard/courses/create" },
        ],
      },
      {
        title: "Pacotes de Cursos",
        isCollapsible: false,
        subItems: [
          { title: "Lista", url: "/dashboard/bundles" },
          { title: "Novo", url: "/dashboard/bundles/create" },
        ],
      },
      {
        title: "Próximos lançamentos",
        isCollapsible: false,
        icon: Calendar,
        subItems: [
          { title: "Lista", url: "/dashboard/upcoming_courses" },
          { title: "Novo", url: "/dashboard/upcoming_courses/new" },
        ],
      },
      {
        title: "Provas",
        isCollapsible: false,
        url: "/dashboard/quizzes",
      },
      {
        title: "Certificados",
        isCollapsible: false,
        subItems: [
          { title: "Certificados das Provas", url: "/dashboard/certificates" },
          {
            title: "Certificados de Conclusão",
            url: "/dashboard/certificates/course-competition",
          },
          { title: "Modelos", url: "/dashboard/certificates/templates" },
          {
            title: "Novo Modelo",
            url: "/dashboard/certificates/templates/new",
          },
          { title: "Configurações", url: "/dashboard/certificates/settings" },
        ],
      },
      {
        title: "Tarefas",
        isCollapsible: false,
        url: "/dashboard/assignments",
        icon: Pen,
      },
      {
        title: "Fórum do Curso",
        isCollapsible: false,
        url: "/dashboard/webinars/course_forums",
      },
      {
        title: "Avisos do Curso",
        isCollapsible: false,
        icon: ClipboardCheck,
        subItems: [
          { title: "Lista", url: "/dashboard/course-noticeboards" },
          { title: "Novo", url: "/dashboard/course-noticeboards/send" },
        ],
      },
      {
        title: "Matrícula",
        isCollapsible: false,
        icon: UserPlus,
        subItems: [
          { title: "Histórico", url: "/dashboard/enrollments/history" },
          {
            title: "Adicionar aluno",
            url: "/dashboard/enrollments/add-student-to-class",
          },
        ],
      },
      {
        title: "Listas de Espera",
        isCollapsible: false,
        url: "/dashboard/waitlists",
      },
      {
        title: "Categorias",
        isCollapsible: false,
        subItems: [
          { title: "Lista", url: "/dashboard/categories" },
          { title: "Novo", url: "/dashboard/categories/create" },
          { title: "Tendências", url: "/dashboard/categories/trends" },
        ],
      },
      {
        title: "Filtros",
        isCollapsible: false,
        icon: Filter,
        subItems: [
          { title: "Lista", url: "/dashboard/filters" },
          { title: "Novo", url: "/dashboard/filters/create" },
        ],
      },
      {
        title: "Avaliações",
        isCollapsible: false,
        url: "/dashboard/reviews",
        icon: Star,
      },
    ],
  },
  {
    sectionTitle: "Reuniões",
    items: [
      {
        title: "Consultores",
        isCollapsible: false,
        url: "/dashboard/consultants",
        icon: IdCard,
      },
      {
        title: "Reuniões",
        isCollapsible: false,
        url: "/dashboard/appointments",
      },
    ],
  },
  {
    sectionTitle: "Usuários",
    items: [
      {
        title: "Usuários",
        isCollapsible: false,
        icon: Users,
        subItems: [
          { title: "Funcionário", url: "/dashboard/staffs" },
          { title: "Alunos", url: "/dashboard/students" },
          { title: "Instrutores", url: "/dashboard/instructors" },
          { title: "Organizações", url: "/dashboard/organizations" },
          { title: "Novo", url: "/dashboard/users/create" },
        ],
      },
      {
        title: "Gerenciamento de Acesso",
        isCollapsible: false,
        url: "/dashboard/users/not-access-to-content",
      },
      {
        title: "Funções do Usuário",
        isCollapsible: false,
        icon: UserCircle,
        subItems: [
          { title: "Lista", url: "/dashboard/roles" },
          { title: "Novo", url: "/dashboard/roles/create" },
        ],
      },
      {
        title: "Grupos",
        isCollapsible: false,
        subItems: [
          { title: "Lista", url: "/dashboard/users/groups" },
          { title: "Novo", url: "/dashboard/users/groups/create" },
        ],
      },
      {
        title: "Emblemas",
        isCollapsible: false,
        url: "/dashboard/users/badges",
        icon: Trophy,
      },
      {
        title: "Solicitações de Instrutores",
        isCollapsible: false,
        subItems: [
          {
            title: "Instrutores",
            url: "/dashboard/users/become-instructors/instructors",
          },
          {
            title: "Organizações",
            url: "/dashboard/users/become-instructors/organizations",
          },
        ],
      },
      {
        title: "Pedidos de Exclusão de Conta",
        isCollapsible: false,
        url: "/dashboard/users/delete-account-requests",
      },
      {
        title: "Gerenciamento de IP",
        isCollapsible: false,
        subItems: [
          {
            title: "Histórico de Login",
            url: "/dashboard/users/login-history",
          },
          { title: "Restrição de IP", url: "/dashboard/users/ip-restriction" },
        ],
      },
    ],
  },
  {
    sectionTitle: "Fórum",
    items: [
      {
        title: "Fóruns",
        isCollapsible: false,
        subItems: [
          { title: "Lista", url: "/dashboard/forums" },
          { title: "Novo", url: "/dashboard/forums/create" },
        ],
      },
      {
        title: "Tópicos em Destaque",
        isCollapsible: false,
        subItems: [
          { title: "Lista", url: "/dashboard/featured-topics" },
          { title: "Novo", url: "/dashboard/featured-topics/create" },
        ],
      },
      {
        title: "Tópicos Recomendados",
        isCollapsible: false,
        icon: ThumbsUp,
        subItems: [
          { title: "Lista", url: "/dashboard/recommended-topics" },
          { title: "Novo", url: "/dashboard/recommended-topics/create" },
        ],
      },
    ],
  },
  {
    sectionTitle: "CRM",
    items: [
      {
        title: "Suporte",
        isCollapsible: false,
        icon: Headphones,
        subItems: [
          { title: "Tickets", url: "/dashboard/supports" },
          {
            title: "Novo Ticket de Suporte",
            url: "/dashboard/supports/create",
          },
          { title: "Departamentos", url: "/dashboard/supports/departments" },
        ],
      },
      {
        title: "Suporte dos Cursos",
        isCollapsible: false,
        url: "/dashboard/supports?type=course_conversations",
      },
      {
        title: "Comentários",
        isCollapsible: false,
        subItems: [
          {
            title: "Comentários do Curso",
            url: "/dashboard/comments/webinars",
          },
          {
            title: "Comentários do Pacote",
            url: "/dashboard/comments/bundles",
          },
          { title: "Comentários do Blog", url: "/dashboard/comments/blog" },
          {
            title: "Comentários do produto",
            url: "/dashboard/comments/products",
          },
        ],
      },
      {
        title: "Relatórios",
        isCollapsible: false,
        subItems: [
          { title: "Cursos", url: "/dashboard/reports/webinars" },
          {
            title: "Comentários do Curso",
            url: "/dashboard/comments/webinars/reports",
          },
          {
            title: "Comentários do Blog",
            url: "/dashboard/comments/blog/reports",
          },
          { title: "Motivos de Relatório", url: "/dashboard/reports/reasons" },
          { title: "Tópicos do fórum", url: "/dashboard/reports/forum-topics" },
        ],
      },
      {
        title: "Mensagens de Contato",
        isCollapsible: false,
        url: "/dashboard/contacts",
      },
      {
        title: "Quadro de Avisos",
        isCollapsible: false,
        icon: StickyNote,
        subItems: [
          { title: "Lista", url: "/dashboard/noticeboards" },
          { title: "Novo", url: "/dashboard/noticeboards/send" },
        ],
      },
      {
        title: "Notificações",
        isCollapsible: false,
        icon: Bell,
        subItems: [
          { title: "Histórico", url: "/dashboard/notifications" },
          { title: "Postado", url: "/dashboard/notifications/posted" },
          { title: "Novo", url: "/dashboard/notifications/send" },
          { title: "Modelos", url: "/dashboard/notifications/templates" },
          {
            title: "Novo Modelo",
            url: "/dashboard/notifications/templates/create",
          },
        ],
      },
    ],
  },
  {
    sectionTitle: "Conteúdo",
    items: [
      {
        title: "Loja",
        isCollapsible: false,
        subItems: [
          { title: "Novo Produto", url: "/dashboard/store/products/create" },
          { title: "Produtos", url: "/dashboard/store/products" },
          {
            title: "Produtos Internos",
            url: "/dashboard/store/in-house-products",
          },
          { title: "Pedidos", url: "/dashboard/store/orders" },
          {
            title: "Pedidos Internos",
            url: "/dashboard/store/in-house-orders",
          },
          { title: "Vendedores", url: "/dashboard/store/sellers" },
          { title: "Categorias", url: "/dashboard/store/categories" },
          { title: "Filtros", url: "/dashboard/store/filters" },
          { title: "Especificações", url: "/dashboard/store/specifications" },
          { title: "Descontos", url: "/dashboard/store/discounts" },
          { title: "Avaliações", url: "/dashboard/store/reviews" },
          { title: "Configurações", url: "/dashboard/store/settings" },
        ],
      },
      {
        title: "Blog",
        isCollapsible: false,
        subItems: [
          { title: "Postagens", url: "/dashboard/blog" },
          { title: "Novo Post", url: "/dashboard/blog/create" },
          { title: "Categorias", url: "/dashboard/blog/categories" },
        ],
      },
      {
        title: "Páginas",
        isCollapsible: false,
        subItems: [
          { title: "Lista", url: "/dashboard/pages" },
          { title: "Nova Página", url: "/dashboard/pages/create" },
        ],
      },
      {
        title: "Páginas Adicionais",
        isCollapsible: false,
        icon: PlusCircle,
        subItems: [
          { title: "Página 404", url: "/dashboard/additional_page/404" },
          { title: "Sobre Nós", url: "/dashboard/additional_page/about" },
          {
            title: "Metodologia",
            url: "/dashboard/additional_page/methodology",
          },
          { title: "Contato", url: "/dashboard/additional_page/contact_us" },
          { title: "Rodapé", url: "/dashboard/additional_page/footer" },
          {
            title: "Menu Superior",
            url: "/dashboard/additional_page/navbar_links",
          },
        ],
      },
      {
        title: "Depoimentos",
        isCollapsible: false,
        subItems: [
          { title: "Lista", url: "/dashboard/testimonials" },
          { title: "Novo", url: "/dashboard/testimonials/create" },
        ],
      },
      {
        title: "Tags",
        isCollapsible: false,
        url: "/dashboard/tags",
        icon: Tags,
      },
      {
        title: "Localização",
        isCollapsible: false,
        subItems: [
          { title: "Países", url: "/dashboard/regions/countries" },
          { title: "Províncias", url: "/dashboard/regions/provinces" },
          { title: "Cidades", url: "/dashboard/regions/cities" },
          { title: "Distritos", url: "/dashboard/regions/districts" },
        ],
      },
      {
        title: "Construtor de Formulários",
        isCollapsible: false,
        subItems: [
          { title: "Novo", url: "/dashboard/forms/create" },
          { title: "Lista", url: "/dashboard/forms" },
          { title: "Envios", url: "/dashboard/forms/submissions" },
        ],
      },
      {
        title: "Conteúdo de IA",
        isCollapsible: false,
        subItems: [
          { title: "Conteúdos Gerados", url: "/dashboard/ai-contents/lists" },
          {
            title: "Novo Modelo",
            url: "/dashboard/ai-contents/templates/create",
          },
          {
            title: "Modelo de Serviço",
            url: "/dashboard/ai-contents/templates",
          },
          { title: "Configurações", url: "/dashboard/ai-contents/settings" },
        ],
      },
      {
        title: "Pedidos de Exclusão",
        isCollapsible: false,
        url: "/dashboard/content-delete-requests",
        icon: Trash,
      },
    ],
  },
  {
    sectionTitle: "Financeiro",
    items: [
      {
        title: "Saldos",
        isCollapsible: false,
        subItems: [
          { title: "Lista", url: "/dashboard/financial/documents" },
          { title: "Novo", url: "/dashboard/financial/documents/new" },
        ],
      },
      {
        title: "Lista de Vendas",
        isCollapsible: false,
        url: "/dashboard/financial/sales",
      },
      {
        title: "Pagamento",
        isCollapsible: false,
        icon: CreditCard,
        subItems: [
          {
            title: "Solicitações",
            url: "/dashboard/financial/payouts?payout=requests",
          },
          {
            title: "Histórico",
            url: "/dashboard/financial/payouts?payout=history",
          },
        ],
      },
      {
        title: "Pagamentos Offline",
        isCollapsible: false,
        icon: University,
        subItems: [
          {
            title: "Solicitações",
            url: "/dashboard/financial/offline_payments?page_type=requests",
          },
          {
            title: "Histórico",
            url: "/dashboard/financial/offline_payments?page_type=history",
          },
        ],
      },
      {
        title: "Assinar",
        isCollapsible: false,
        subItems: [
          { title: "Pacotes", url: "/dashboard/financial/subscribes" },
          { title: "Novo Pacote", url: "/dashboard/financial/subscribes/new" },
        ],
      },
      {
        title: "Pontos de Recompensa",
        isCollapsible: false,
        icon: Gift,
        subItems: [
          { title: "Histórico", url: "/dashboard/rewards" },
          { title: "Condições", url: "/dashboard/rewards/items" },
          { title: "Configurações", url: "/dashboard/rewards/settings" },
        ],
      },
      {
        title: "Pacotes SaaS",
        isCollapsible: false,
        subItems: [
          {
            title: "Pacotes",
            url: "/dashboard/financial/registration-packages",
          },
          {
            title: "Novo Pacote",
            url: "/dashboard/financial/registration-packages/new",
          },
          {
            title: "Relatórios",
            url: "/dashboard/financial/registration-packages/reports",
          },
          {
            title: "Configurações",
            url: "/dashboard/financial/registration-packages/settings",
          },
        ],
      },
      {
        title: "Parcelamentos",
        isCollapsible: false,
        subItems: [
          {
            title: "Novo Plano",
            url: "/dashboard/financial/installments/create",
          },
          { title: "Planos", url: "/dashboard/financial/installments" },
          {
            title: "Compras",
            url: "/dashboard/financial/installments/purchases",
          },
          {
            title: "Atrasado",
            url: "/dashboard/financial/installments/overdue",
          },
          {
            title: "Histórico de Atrasos",
            url: "/dashboard/financial/installments/overdue_history",
          },
          {
            title: "Pedidos de Verificação",
            url: "/dashboard/financial/installments/verification_requests",
          },
          {
            title: "Usuários Verificados",
            url: "/dashboard/financial/installments/verified_users",
          },
          {
            title: "Configurações",
            url: "/dashboard/financial/installments/settings",
          },
        ],
      },
    ],
  },
  {
    sectionTitle: "Marketing",
    items: [
      {
        title: "Cupons",
        isCollapsible: false,
        subItems: [
          { title: "Lista", url: "/dashboard/financial/discounts" },
          { title: "Novo", url: "/dashboard/financial/discounts/new" },
          {
            title: "Cupons do Instrutor",
            url: "/dashboard/financial/discounts?instructor_coupons=1",
          },
        ],
      },
      {
        title: "Desconto no Carrinho",
        isCollapsible: false,
        url: "/dashboard/cart_discount",
      },
      {
        title: "Descontos em Cursos",
        isCollapsible: false,
        subItems: [
          { title: "Lista", url: "/dashboard/financial/special_offers" },
          { title: "Novo", url: "/dashboard/financial/special_offers/new" },
        ],
      },
      {
        title: "Carrinho Abandonado",
        isCollapsible: false,
        subItems: [
          {
            title: "Nova Regra",
            url: "/dashboard/abandoned-cart/rules/create",
          },
          { title: "Regras", url: "/dashboard/abandoned-cart/rules" },
          {
            title: "Carrinhos de Usuários",
            url: "/dashboard/abandoned-cart/users-carts",
          },
          { title: "Configurações", url: "/dashboard/abandoned-cart/settings" },
        ],
      },
      {
        title: "Cursos em Destaque",
        isCollapsible: false,
        icon: Star,
        subItems: [
          { title: "Lista", url: "/dashboard/webinars/features" },
          { title: "Novo", url: "/dashboard/webinars/features/create" },
        ],
      },
      {
        title: "Cashback",
        isCollapsible: false,
        subItems: [
          { title: "Nova Regra", url: "/dashboard/cashback/rules/new" },
          { title: "Regras", url: "/dashboard/cashback/rules" },
          { title: "Transações", url: "/dashboard/cashback/transactions" },
          { title: "Histórico", url: "/dashboard/cashback/history" },
        ],
      },
      {
        title: "Presentes",
        isCollapsible: false,
        icon: Gift,
        subItems: [
          { title: "Histórico", url: "/dashboard/gifts" },
          { title: "Configurações", url: "/dashboard/gifts/settings" },
        ],
      },
      {
        title: "Planos de Promoção",
        isCollapsible: false,
        subItems: [
          { title: "Planos", url: "/dashboard/financial/promotions" },
          {
            title: "Promoção de Vendas",
            url: "/dashboard/financial/promotions/sales",
          },
          { title: "Novo Plano", url: "/dashboard/financial/promotions/new" },
        ],
      },
      {
        title: "Banners Pub.",
        isCollapsible: false,
        subItems: [
          { title: "Lista", url: "/dashboard/advertising/banners" },
          { title: "Novo", url: "/dashboard/advertising/banners/new" },
        ],
      },
      {
        title: "Newsletter",
        isCollapsible: false,
        subItems: [
          { title: "Lista", url: "/dashboard/newsletters" },
          { title: "Enviar", url: "/dashboard/newsletters/send" },
          { title: "Histórico", url: "/dashboard/newsletters/history" },
        ],
      },
      {
        title: "Afiliado",
        isCollapsible: false,
        subItems: [
          { title: "Histórico", url: "/dashboard/referrals/history" },
          { title: "Usuários Afiliados", url: "/dashboard/referrals/users" },
        ],
      },
      {
        title: "Bônus de Registro",
        isCollapsible: false,
        subItems: [
          {
            title: "Histórico de Bônus",
            url: "/dashboard/registration_bonus/history",
          },
          {
            title: "Configurações",
            url: "/dashboard/registration_bonus/settings",
          },
        ],
      },
      {
        title: "Modal de Publicidade",
        isCollapsible: false,
        url: "/dashboard/advertising_modal",
      },
      {
        title: "Barra Superior/Inferior",
        isCollapsible: false,
        url: "/dashboard/floating_bars",
      },
      {
        title: "Pop-ups de Vendas",
        isCollapsible: false,
        icon: ClipboardCheck,
        subItems: [
          { title: "Lista", url: "/dashboard/purchase_notifications" },
          { title: "Novo", url: "/dashboard/purchase_notifications/create" },
        ],
      },
      {
        title: "Badges Personalizados",
        isCollapsible: false,
        subItems: [
          { title: "Lista", url: "/dashboard/product-badges" },
          { title: "Novo", url: "/dashboard/product-badges/create" },
        ],
      },
    ],
  },
  {
    sectionTitle: "Configurações",
    items: [
      {
        title: "Tradutor",
        isCollapsible: false,
        url: "/dashboard/translator",
      },
      {
        title: "Configurações",
        isCollapsible: false,
        url: "/dashboard/settings",
      },
    ],
  },
];
export const instructor = [];
export const student = [];

