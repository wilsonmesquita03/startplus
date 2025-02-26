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
  LucideIcon,
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

interface SubMenuItem {
  title: string;
  url: string;
  permission?: string;
}

interface MenuItem {
  title: string;
  isCollapsible: boolean;
  url?: string;
  icon?: LucideIcon;
  subItems?: SubMenuItem[];
  permission?: string;
}

interface MenuSection {
  sectionTitle: string;
  items: MenuItem[];
  permission?: string;
}

export const routes: MenuSection[] = [
  {
    sectionTitle: "",
    items: [
      {
        title: "Painel de Controle",
        isCollapsible: false,
        url: "/dashboard/admin",
        icon: Flame,
        permission: "access_admin_dashboard",
      },
      {
        title: "Painel de Marketing",
        isCollapsible: false,
        url: "/dashboard/marketing",
        icon: ChartPie,
        permission: "access_marketing_dashboard",
      },
    ],
  },
  {
    sectionTitle: "Ferramentas de aprendizagem",
    items: [
      {
        title: "Painel",
        isCollapsible: false,
        icon: Pen,
        url: "/dashboard/panel",
      },
      {
        title: "Meus cursos",
        isCollapsible: false,
        icon: GraduationCap,
        url: "/dashboard/my-courses",
      },
      {
        title: "Reuniões",
        isCollapsible: false,
        icon: Users,
        url: "/dashboard/meetings",
      },
      {
        title: "Provas",
        isCollapsible: false,
        icon: ClipboardCheck,
        url: "/dashboard/exams",
      },
      {
        title: "Certificados",
        isCollapsible: false,
        icon: Star,
        url: "/dashboard/certificates",
      },
      {
        title: "Lista de Interesses",
        isCollapsible: false,
        icon: ThumbsUp,
        url: "/dashboard/interests",
      }
    ]
  },
  {
    sectionTitle: "Educação",
    items: [
      {
        title: "Cursos",
        isCollapsible: false,
        icon: GraduationCap,
        subItems: [
          { title: "Cursos", url: "/dashboard/courses", permission: "access_courses_dashboard" },
          { title: "Novo", url: "/dashboard/courses/create", permission: "create_courses" },
        ],
      },
      {
        title: "Pacotes de Cursos",
        isCollapsible: false,
        subItems: [
          { title: "Lista", url: "/dashboard/bundles", permission: "access_bundles_dashboard" },
          { title: "Novo", url: "/dashboard/bundles/create", permission: "create_bundles" },
        ],
      },
      {
        title: "Próximos lançamentos",
        isCollapsible: false,
        icon: Calendar,
        subItems: [
          { title: "Lista", url: "/dashboard/upcoming_courses", permission: "view_upcoming_courses" },
          { title: "Novo", url: "/dashboard/upcoming_courses/new", permission: "create_upcoming_courses" },
        ],
      },
      {
        title: "Provas",
        isCollapsible: false,
        url: "/dashboard/quizzes",
        permission: "access_quizzes",
      },
      {
        title: "Certificados",
        isCollapsible: false,
        subItems: [
          { title: "Certificados das Provas", url: "/dashboard/certificates", permission: "access_certificates" },
          {
            title: "Certificados de Conclusão",
            url: "/dashboard/certificates/course-competition",
            permission: "access_certificates",
          },
          { title: "Modelos", url: "/dashboard/certificates/templates", permission: "access_certificates" },
          {
            title: "Novo Modelo",
            url: "/dashboard/certificates/templates/new",
            permission: "access_certificates",
          },
          { title: "Configurações", url: "/dashboard/certificates/settings", permission: "access_certificates" },
        ],
      },
      {
        title: "Tarefas",
        isCollapsible: false,
        url: "/dashboard/assignments",
        icon: Pen,
        permission: "access_assignments",
      },
      {
        title: "Fórum do Curso",
        isCollapsible: false,
        url: "/dashboard/webinars/course_forums",
        permission: "access_webinars",
      },
      {
        title: "Avisos do Curso",
        isCollapsible: false,
        icon: ClipboardCheck,
        subItems: [
          { title: "Lista", url: "/dashboard/course-noticeboards", permission: "access_course_noticeboards" },
          { title: "Novo", url: "/dashboard/course-noticeboards/send", permission: "access_course_noticeboards" },
        ],
      },
      {
        title: "Matrícula",
        isCollapsible: false,
        icon: UserPlus,
        subItems: [
          { title: "Histórico", url: "/dashboard/enrollments/history", permission: "manage_enrollments" },
          {
            title: "Adicionar aluno",
            url: "/dashboard/enrollments/add-student-to-class",
            permission: "manage_enrollments",
          },
        ],
      },
      {
        title: "Listas de Espera",
        isCollapsible: false,
        url: "/dashboard/waitlists",
        permission: "access_waitlists",
      },
      {
        title: "Categorias",
        isCollapsible: false,
        subItems: [
          { title: "Lista", url: "/dashboard/categories", permission: "manage_categories" },
          { title: "Novo", url: "/dashboard/categories/create", permission: "create_category" },
          { title: "Tendências", url: "/dashboard/categories/trends", permission: "manage_categories" },
        ],
      },
      {
        title: "Filtros",
        isCollapsible: false,
        icon: Filter,
        subItems: [
          { title: "Lista", url: "/dashboard/filters", permission: "manage_filters" },
          { title: "Novo", url: "/dashboard/filters/create", permission: "manage_filters" },
        ],
      },
      {
        title: "Avaliações",
        isCollapsible: false,
        url: "/dashboard/reviews",
        icon: Star,
        permission: "view_reviews",
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
        permission: "manage_consultants",
      },
      {
        title: "Reuniões",
        isCollapsible: false,
        url: "/dashboard/appointments",
        permission: "schedule_appointments",
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
          { title: "Funcionário", url: "/dashboard/staffs", permission: "manage_staff" },
          { title: "Alunos", url: "/dashboard/students", permission: "manage_students" },
          { title: "Instrutores", url: "/dashboard/instructors", permission: "manage_instructors" },
          { title: "Organizações", url: "/dashboard/organizations", permission: "manage_organizations" },
          { title: "Novo", url: "/dashboard/users/create", permission: "manage_users" },
        ],
      },
      {
        title: "Gerenciamento de Acesso",
        isCollapsible: false,
        url: "/dashboard/users/not-access-to-content",
        permission: "manage_users",
      },
      {
        title: "Funções do Usuário",
        isCollapsible: false,
        icon: UserCircle,
        subItems: [
          { title: "Lista", url: "/dashboard/roles", permission: "manage_roles" },
          { title: "Novo", url: "/dashboard/roles/create", permission: "create_role" },
        ],
      },
      {
        title: "Grupos",
        isCollapsible: false,
        subItems: [
          { title: "Lista", url: "/dashboard/users/groups", permission: "manage_groups" },
          { title: "Novo", url: "/dashboard/users/groups/create", permission: "manage_groups" },
        ],
      },
      {
        title: "Emblemas",
        isCollapsible: false,
        url: "/dashboard/users/badges",
        icon: Trophy,
        permission: "manage_users",
      },
      {
        title: "Solicitações de Instrutores",
        isCollapsible: false,
        subItems: [
          {
            title: "Instrutores",
            url: "/dashboard/users/become-instructors/instructors",
            permission: "manage_instructors",
          },
          {
            title: "Organizações",
            url: "/dashboard/users/become-instructors/organizations",
            permission: "manage_organizations",
          },
        ],
      },
      {
        title: "Pedidos de Exclusão de Conta",
        isCollapsible: false,
        url: "/dashboard/users/delete-account-requests",
        permission: "manage_users",
      },
      {
        title: "Gerenciamento de IP",
        isCollapsible: false,
        subItems: [
          {
            title: "Histórico de Login",
            url: "/dashboard/users/login-history",
            permission: "manage_users",
          },
          { title: "Restrição de IP", url: "/dashboard/users/ip-restriction", permission: "manage_users" },
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
          { title: "Lista", url: "/dashboard/forums", permission: "manage_forums" },
          { title: "Novo", url: "/dashboard/forums/create", permission: "manage_forums" },
        ],
      },
      {
        title: "Tópicos em Destaque",
        isCollapsible: false,
        subItems: [
          { title: "Lista", url: "/dashboard/featured-topics", permission: "manage_featured_topics" },
          { title: "Novo", url: "/dashboard/featured-topics/create", permission: "manage_featured_topics" },
        ],
      },
      {
        title: "Tópicos Recomendados",
        isCollapsible: false,
        icon: ThumbsUp,
        subItems: [
          { title: "Lista", url: "/dashboard/recommended-topics", permission: "manage_recommended_topics" },
          { title: "Novo", url: "/dashboard/recommended-topics/create", permission: "manage_recommended_topics" },
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
          { title: "Tickets", url: "/dashboard/supports", permission: "manage_supports" },
          {
            title: "Novo Ticket de Suporte",
            url: "/dashboard/supports/create",
            permission: "manage_supports",
          },
          { title: "Departamentos", url: "/dashboard/supports/departments", permission: "manage_supports" },
        ],
      },
      {
        title: "Suporte dos Cursos",
        isCollapsible: false,
        url: "/dashboard/supports?type=course_conversations",
        permission: "manage_supports",
      },
      {
        title: "Comentários",
        isCollapsible: false,
        subItems: [
          {
            title: "Comentários do Curso",
            url: "/dashboard/comments/webinars",
            permission: "manage_webinars",
          },
          {
            title: "Comentários do Pacote",
            url: "/dashboard/comments/bundles",
            permission: "manage_bundles",
          },
          { title: "Comentários do Blog", url: "/dashboard/comments/blog", permission: "manage_blog" },
          {
            title: "Comentários do produto",
            url: "/dashboard/comments/products",
            permission: "manage_store",
          },
        ],
      },
      {
        title: "Relatórios",
        isCollapsible: false,
        subItems: [
          { title: "Cursos", url: "/dashboard/reports/webinars", permission: "manage_webinars" },
          {
            title: "Comentários do Curso",
            url: "/dashboard/comments/webinars/reports",
            permission: "manage_webinars",
          },
          {
            title: "Comentários do Blog",
            url: "/dashboard/comments/blog/reports",
            permission: "manage_blog",
          },
          { title: "Motivos de Relatório", url: "/dashboard/reports/reasons", permission: "manage_reports" },
          { title: "Tópicos do fórum", url: "/dashboard/reports/forum-topics", permission: "manage_forums" },
        ],
      },
      {
        title: "Mensagens de Contato",
        isCollapsible: false,
        url: "/dashboard/contacts",
        permission: "manage_supports",
      },
      {
        title: "Quadro de Avisos",
        isCollapsible: false,
        icon: StickyNote,
        subItems: [
          { title: "Lista", url: "/dashboard/noticeboards", permission: "manage_noticeboards" },
          { title: "Novo", url: "/dashboard/noticeboards/send", permission: "manage_noticeboards" },
        ],
      },
      {
        title: "Notificações",
        isCollapsible: false,
        icon: Bell,
        subItems: [
          { title: "Histórico", url: "/dashboard/notifications", permission: "manage_notifications" },
          { title: "Postado", url: "/dashboard/notifications/posted", permission: "manage_notifications" },
          { title: "Novo", url: "/dashboard/notifications/send", permission: "manage_notifications" },
          { title: "Modelos", url: "/dashboard/notifications/templates", permission: "manage_notifications" },
          {
            title: "Novo Modelo",
            url: "/dashboard/notifications/templates/create",
            permission: "manage_notifications",
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
          { title: "Novo Produto", url: "/dashboard/store/products/create", permission: "manage_store" },
          { title: "Produtos", url: "/dashboard/store/products", permission: "manage_store" },
          {
            title: "Produtos Internos",
            url: "/dashboard/store/in-house-products",
            permission: "manage_store",
          },
          { title: "Pedidos", url: "/dashboard/store/orders", permission: "manage_store" },
          {
            title: "Pedidos Internos",
            url: "/dashboard/store/in-house-orders",
            permission: "manage_store",
          },
          { title: "Vendedores", url: "/dashboard/store/sellers", permission: "manage_store" },
          { title: "Categorias", url: "/dashboard/store/categories", permission: "manage_store" },
          { title: "Filtros", url: "/dashboard/store/filters", permission: "manage_store" },
          { title: "Especificações", url: "/dashboard/store/specifications", permission: "manage_store" },
          { title: "Descontos", url: "/dashboard/store/discounts", permission: "manage_store" },
          { title: "Avaliações", url: "/dashboard/store/reviews", permission: "manage_store" },
          { title: "Configurações", url: "/dashboard/store/settings", permission: "manage_store" },
        ],
      },
      {
        title: "Blog",
        isCollapsible: false,
        subItems: [
          { title: "Postagens", url: "/dashboard/blog", permission: "manage_blog" },
          { title: "Novo Post", url: "/dashboard/blog/create", permission: "manage_blog" },
          { title: "Categorias", url: "/dashboard/blog/categories", permission: "manage_blog" },
        ],
      },
      {
        title: "Páginas",
        isCollapsible: false,
        subItems: [
          { title: "Lista", url: "/dashboard/pages", permission: "manage_pages" },
          { title: "Nova Página", url: "/dashboard/pages/create", permission: "manage_pages" },
        ],
      },
      {
        title: "Páginas Adicionais",
        isCollapsible: false,
        icon: PlusCircle,
        subItems: [
          { title: "Página 404", url: "/dashboard/additional_page/404", permission: "manage_pages" },
          { title: "Sobre Nós", url: "/dashboard/additional_page/about", permission: "manage_pages" },
          {
            title: "Metodologia",
            url: "/dashboard/additional_page/methodology",
            permission: "manage_pages",
          },
          { title: "Contato", url: "/dashboard/additional_page/contact_us", permission: "manage_pages" },
          { title: "Rodapé", url: "/dashboard/additional_page/footer", permission: "manage_pages" },
          {
            title: "Menu Superior",
            url: "/dashboard/additional_page/navbar_links",
            permission: "manage_pages",
          },
        ],
      },
      {
        title: "Depoimentos",
        isCollapsible: false,
        subItems: [
          { title: "Lista", url: "/dashboard/testimonials", permission: "manage_testimonials" },
          { title: "Novo", url: "/dashboard/testimonials/create", permission: "manage_testimonials" },
        ],
      },
      {
        title: "Tags",
        isCollapsible: false,
        url: "/dashboard/tags",
        icon: Tags,
        permission: "manage_tags",
      },
      {
        title: "Localização",
        isCollapsible: false,
        subItems: [
          { title: "Países", url: "/dashboard/regions/countries", permission: "manage_regions" },
          { title: "Províncias", url: "/dashboard/regions/provinces", permission: "manage_regions" },
          { title: "Cidades", url: "/dashboard/regions/cities", permission: "manage_regions" },
          { title: "Distritos", url: "/dashboard/regions/districts", permission: "manage_regions" },
        ],
      },
      {
        title: "Construtor de Formulários",
        isCollapsible: false,
        subItems: [
          { title: "Novo", url: "/dashboard/forms/create", permission: "manage_forms" },
          { title: "Lista", url: "/dashboard/forms", permission: "manage_forms" },
          { title: "Envios", url: "/dashboard/forms/submissions", permission: "manage_forms" },
        ],
      },
      {
        title: "Conteúdo de IA",
        isCollapsible: false,
        subItems: [
          { title: "Conteúdos Gerados", url: "/dashboard/ai-contents/lists", permission: "manage_ai_contents" },
          {
            title: "Novo Modelo",
            url: "/dashboard/ai-contents/templates/create",
            permission: "manage_ai_contents",
          },
          {
            title: "Modelo de Serviço",
            url: "/dashboard/ai-contents/templates",
            permission: "manage_ai_contents",
          },
          { title: "Configurações", url: "/dashboard/ai-contents/settings", permission: "manage_ai_contents" },
        ],
      },
      {
        title: "Pedidos de Exclusão",
        isCollapsible: false,
        url: "/dashboard/content-delete-requests",
        icon: Trash,
        permission: "manage_content_delete_requests",
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
          { title: "Lista", url: "/dashboard/financial/documents", permission: "access_financial_data" },
          { title: "Novo", url: "/dashboard/financial/documents/new", permission: "access_financial_data" },
        ],
      },
      {
        title: "Lista de Vendas",
        isCollapsible: false,
        url: "/dashboard/financial/sales",
        permission: "access_financial_data",
      },
      {
        title: "Pagamento",
        isCollapsible: false,
        icon: CreditCard,
        subItems: [
          {
            title: "Solicitações",
            url: "/dashboard/financial/payouts?payout=requests",
            permission: "access_financial_data",
          },
          {
            title: "Histórico",
            url: "/dashboard/financial/payouts?payout=history",
            permission: "access_financial_data",
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
            permission: "access_financial_data",
          },
          {
            title: "Histórico",
            url: "/dashboard/financial/offline_payments?page_type=history",
            permission: "access_financial_data",
          },
        ],
      },
      {
        title: "Assinar",
        isCollapsible: false,
        subItems: [
          { title: "Pacotes", url: "/dashboard/financial/subscribes", permission: "access_financial_data" },
          { title: "Novo Pacote", url: "/dashboard/financial/subscribes/new", permission: "access_financial_data" },
        ],
      },
      {
        title: "Pontos de Recompensa",
        isCollapsible: false,
        icon: Gift,
        subItems: [
          { title: "Histórico", url: "/dashboard/rewards", permission: "manage_rewards" },
          { title: "Condições", url: "/dashboard/rewards/items", permission: "manage_rewards" },
          { title: "Configurações", url: "/dashboard/rewards/settings", permission: "manage_rewards" },
        ],
      },
      {
        title: "Pacotes SaaS",
        isCollapsible: false,
        subItems: [
          {
            title: "Pacotes",
            url: "/dashboard/financial/registration-packages",
            permission: "access_financial_data",
          },
          {
            title: "Novo Pacote",
            url: "/dashboard/financial/registration-packages/new",
            permission: "access_financial_data",
          },
          {
            title: "Relatórios",
            url: "/dashboard/financial/registration-packages/reports",
            permission: "access_financial_data",
          },
          {
            title: "Configurações",
            url: "/dashboard/financial/registration-packages/settings",
            permission: "access_financial_data",
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
            permission: "access_financial_data",
          },
          { title: "Planos", url: "/dashboard/financial/installments", permission: "access_financial_data" },
          {
            title: "Compras",
            url: "/dashboard/financial/installments/purchases",
            permission: "access_financial_data",
          },
          {
            title: "Atrasado",
            url: "/dashboard/financial/installments/overdue",
            permission: "access_financial_data",
          },
          {
            title: "Histórico de Atrasos",
            url: "/dashboard/financial/installments/overdue_history",
            permission: "access_financial_data",
          },
          {
            title: "Pedidos de Verificação",
            url: "/dashboard/financial/installments/verification_requests",
            permission: "access_financial_data",
          },
          {
            title: "Usuários Verificados",
            url: "/dashboard/financial/installments/verified_users",
            permission: "access_financial_data",
          },
          {
            title: "Configurações",
            url: "/dashboard/financial/installments/settings",
            permission: "access_financial_data",
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
          { title: "Lista", url: "/dashboard/financial/discounts", permission: "access_financial_data" },
          { title: "Novo", url: "/dashboard/financial/discounts/new", permission: "access_financial_data" },
          {
            title: "Cupons do Instrutor",
            url: "/dashboard/financial/discounts?instructor_coupons=1",
            permission: "access_financial_data",
          },
        ],
      },
      {
        title: "Desconto no Carrinho",
        isCollapsible: false,
        url: "/dashboard/cart_discount",
        permission: "access_financial_data",
      },
      {
        title: "Descontos em Cursos",
        isCollapsible: false,
        subItems: [
          { title: "Lista", url: "/dashboard/financial/special_offers", permission: "access_financial_data" },
          { title: "Novo", url: "/dashboard/financial/special_offers/new", permission: "access_financial_data" },
        ],
      },
      {
        title: "Carrinho Abandonado",
        isCollapsible: false,
        subItems: [
          {
            title: "Nova Regra",
            url: "/dashboard/abandoned-cart/rules/create",
            permission: "manage_abandoned_cart",
          },
          { title: "Regras", url: "/dashboard/abandoned-cart/rules", permission: "manage_abandoned_cart" },
          {
            title: "Carrinhos de Usuários",
            url: "/dashboard/abandoned-cart/users-carts",
            permission: "manage_abandoned_cart",
          },
          { title: "Configurações", url: "/dashboard/abandoned-cart/settings", permission: "manage_abandoned_cart" },
        ],
      },
      {
        title: "Cursos em Destaque",
        isCollapsible: false,
        icon: Star,
        subItems: [
          { title: "Lista", url: "/dashboard/webinars/features", permission: "manage_webinar_features" },
          { title: "Novo", url: "/dashboard/webinars/features/create", permission: "manage_webinar_features" },
        ],
      },
      {
        title: "Cashback",
        isCollapsible: false,
        subItems: [
          { title: "Nova Regra", url: "/dashboard/cashback/rules/new", permission: "manage_cashback" },
          { title: "Regras", url: "/dashboard/cashback/rules", permission: "manage_cashback" },
          { title: "Transações", url: "/dashboard/cashback/transactions", permission: "manage_cashback" },
          { title: "Histórico", url: "/dashboard/cashback/history", permission: "manage_cashback" },
        ],
      },
      {
        title: "Presentes",
        isCollapsible: false,
        icon: Gift,
        subItems: [
          { title: "Histórico", url: "/dashboard/gifts", permission: "manage_gifts" },
          { title: "Configurações", url: "/dashboard/gifts/settings", permission: "manage_gifts" },
        ],
      },
      {
        title: "Planos de Promoção",
        isCollapsible: false,
        subItems: [
          { title: "Planos", url: "/dashboard/financial/promotions", permission: "access_financial_data" },
          {
            title: "Promoção de Vendas",
            url: "/dashboard/financial/promotions/sales",
            permission: "access_financial_data",
          },
          { title: "Novo Plano", url: "/dashboard/financial/promotions/new", permission: "access_financial_data" },
        ],
      },
      {
        title: "Banners Pub.",
        isCollapsible: false,
        subItems: [
          { title: "Lista", url: "/dashboard/advertising/banners", permission: "manage_advertising" },
          { title: "Novo", url: "/dashboard/advertising/banners/new", permission: "manage_advertising" },
        ],
      },
      {
        title: "Newsletter",
        isCollapsible: false,
        subItems: [
          { title: "Lista", url: "/dashboard/newsletters", permission: "manage_newsletters" },
          { title: "Enviar", url: "/dashboard/newsletters/send", permission: "manage_newsletters" },
          { title: "Histórico", url: "/dashboard/newsletters/history", permission: "manage_newsletters" },
        ],
      },
      {
        title: "Afiliado",
        isCollapsible: false,
        subItems: [
          { title: "Histórico", url: "/dashboard/referrals/history", permission: "manage_referrals" },
          { title: "Usuários Afiliados", url: "/dashboard/referrals/users", permission: "manage_referrals" },
        ],
      },
      {
        title: "Bônus de Registro",
        isCollapsible: false,
        subItems: [
          {
            title: "Histórico de Bônus",
            url: "/dashboard/registration_bonus/history",
            permission: "manage_registration_bonus",
          },
          {
            title: "Configurações",
            url: "/dashboard/registration_bonus/settings",
            permission: "manage_registration_bonus",
          },
        ],
      },
      {
        title: "Modal de Publicidade",
        isCollapsible: false,
        url: "/dashboard/advertising_modal",
        permission: "manage_advertising_modal",
      },
      {
        title: "Barra Superior/Inferior",
        isCollapsible: false,
        url: "/dashboard/floating_bars",
        permission: "manage_floating_bars",
      },
      {
        title: "Pop-ups de Vendas",
        isCollapsible: false,
        icon: ClipboardCheck,
        subItems: [
          { title: "Lista", url: "/dashboard/purchase_notifications", permission: "manage_purchase_notifications" },
          { title: "Novo", url: "/dashboard/purchase_notifications/create", permission: "manage_purchase_notifications" },
        ],
      },
      {
        title: "Badges Personalizados",
        isCollapsible: false,
        subItems: [
          { title: "Lista", url: "/dashboard/product-badges", permission: "manage_product_badges" },
          { title: "Novo", url: "/dashboard/product-badges/create", permission: "manage_product_badges" },
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
        permission: "manage_translator",
      },
      {
        title: "Configurações do Sistema",
        isCollapsible: false,
        url: "/dashboard/settings",
        permission: "system_settings",
      },
    ],
  },
];

export default routes;