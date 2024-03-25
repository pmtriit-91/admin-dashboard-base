import { routerLinks } from './constant'

import Dashboard from '../scenes/dashboard'
import Users from '../scenes/users'
import Employee from '../scenes/employee'
import Workflow from '../scenes/workflow'
import Form from '../scenes/form'
import Calendar from '../scenes/calendar'
import Faq from '../scenes/faq'
import Bar from '../scenes/bar'
import Pie from '../scenes/pie'
import Line from '../scenes/line'
import Geography from '../scenes/geography'
import BlankPage from '../scenes/blank'
import AdminLayout from '../layout/AdminLayout'
import LoginLayout from '../layout/loginLayout/LoginLayout'
import Login from '../scenes/login'
import Discount from '../scenes/discount'
import CompanyManagement from '../scenes/companyManagement'
import Service from '../scenes/service'
import NewOrder from '../scenes/newOrder'
import PriceList from '../scenes/priceList'
import VerifyEmployee from '../scenes/employee/verifyEmployee'
import Competence from '../scenes/employee/competence'
import Blance from '../scenes/employee/blance'

// // import MobileDashboard from "./Mobile/MobileDashboard";
// // import MobileSettings from "./Mobile/MobileSettings";

// // export const routes = [
// //     { name: 'dashboard', path: routerLinks['Dashboard'], element: Dashboard },
// //     { name: 'users', path: routerLinks['Users'], element: Users },
// //     { name: 'employee', path: routerLinks['Employee'], element: Employee },
// //     { name: 'workflow', path: routerLinks['Workflow'], element: Workflow },
// //     { name: 'form', path: routerLinks['Form'], element: Form },
// //     { name: 'calendar', path: routerLinks['Calendar'], element: Calendar },
// //     { name: 'faq', path: routerLinks['Faq'], element: Faq },
// //     { name: 'bar', path: routerLinks['Bar'], element: Bar },
// //     { name: 'pie', path: routerLinks['Pie'], element: Pie },
// //     { name: 'line', path: routerLinks['Line'], element: Line },
// //     { name: 'geography', path: routerLinks['Geography'], element: Geography },
// //     { name: 'blank', path: '*', element: BlankPage },
// // ]

// // export const routesMobile = [
// //   {
// //     name: "overview",
// //     path: m_routerLinks["M_Dashboard"],
// //     element: MobileDashboard,
// //   },
// //   {
// //     name: "settings",
// //     path: m_routerLinks["M_Settings"],
// //     element: MobileSettings,
// //   },
// //   { name: "blank", path: "*", element: Blank },
// // ];

// export { publicRoutes, privateRoutes }

const tokenStorage = localStorage.getItem('token')

let publicRoutes = [
    {
        path: routerLinks.Dashboard,
        component: Dashboard,
        layout: AdminLayout,
    },
    {
        path: routerLinks.CompanyManagement,
        component: CompanyManagement,
        layout: AdminLayout,
    },
    {
        path: routerLinks.Service,
        component: Service,
        layout: AdminLayout,
    },
    {
        path: routerLinks.PriceList,
        component: PriceList,
        layout: AdminLayout,
    },
    {
        path: routerLinks.Users,
        component: Users,
        layout: AdminLayout,
    },
    {
        path: routerLinks.VerifyEmployee,
        component: VerifyEmployee,
        layout: AdminLayout,
    },
    {
        path: routerLinks.Competence,
        component: Competence,
        layout: AdminLayout,
    },
    {
        path: routerLinks.Employee,
        component: Employee,
        layout: AdminLayout,
    },
    {
        path: routerLinks.Workflow,
        component: Workflow,
        layout: AdminLayout,
    },
    {
        path: routerLinks.Blance,
        component: Blance,
        layout: AdminLayout,
    },
    {
        path: routerLinks.Discount,
        component: Discount,
        layout: AdminLayout,
    },
    {
        path: routerLinks.Form,
        component: Form,
        layout: AdminLayout,
    },
    {
        path: routerLinks.Calendar,
        component: Calendar,
        layout: AdminLayout,
    },
    {
        path: routerLinks.Faq,
        component: Faq,
        layout: AdminLayout,
    },
    {
        path: routerLinks.Bar,
        component: Bar,
        layout: AdminLayout,
    },
    {
        path: routerLinks.Pie,
        component: Pie,
        layout: AdminLayout,
    },
    {
        path: routerLinks.Line,
        component: Line,
        layout: AdminLayout,
    },
    {
        path: routerLinks.Geography,
        component: Geography,
        layout: AdminLayout,
    },
    {
        path: routerLinks.NewOrder,
        component: NewOrder,
        layout: AdminLayout,
    },
    {
        path: '*',
        component: BlankPage,
        layout: AdminLayout,
    },
]

// Filter public routes based on token/role
if (tokenStorage === 'admin') {
    publicRoutes = publicRoutes.filter(
        (route) =>
            ![
                routerLinks.Workflow,
                routerLinks.Users,
                routerLinks.Employee,
                routerLinks.Discount,
                routerLinks.NewOrder,
                routerLinks.Competence,
                routerLinks.Blance,
                routerLinks.VerifyEmployee,
            ].includes(route.path),
    )
}

//Private routes
const privateRoutes = [
    {
        path: routerLinks.Login,
        component: Login,
        layout: LoginLayout,
    },
]

export { publicRoutes, privateRoutes }
