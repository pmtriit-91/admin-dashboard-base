import { Box } from '@mui/material'
import SidebarComponent from '../../scenes/global/SideBar'
import Topbar from '../../scenes/global/Topbar'

function AdminLayout({ children }) {
    return (
        <>
            <SidebarComponent />
            <main className='content' style={{ overflowY: 'auto' }}>
                <Topbar />
                {children}
            </main>
        </>
    )
}

export default AdminLayout
