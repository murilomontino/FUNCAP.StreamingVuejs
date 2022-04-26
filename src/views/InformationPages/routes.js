const About = () => import("./About/About.vue")
const Contact = () => import("./Contact/Contact.vue")
const Faq = () => import("./Faq/Faq.vue")
const PrivacyPolicy = () => import("./PrivacyPolicy/PrivacyPolicy.vue")

const InformationPages = (prop) => [
  {
    path: "/about",
    name: prop + ".about",
    meta: {
      auth: true,
      name: "Sobre Nós"
    },
    component: About
  },
  {
    path: "/contact",
    name: prop + ".contact",
    meta: {
      auth: true,
      name: "Contatos"
    },
    component: Contact
  },
  {
    path: "/faq",
    name: prop + ".faq",
    meta: {
      auth: true,
      name: "FAQ"
    },
    component: Faq
  },
  {
    path: "/privacy-policy",
    name: prop + ".privacypolicy",
    meta: {
      autFrontendPages: "Politica de Privacidade"
    },
    component: PrivacyPolicy
  }
]

export default InformationPages
