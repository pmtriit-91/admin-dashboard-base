import { useState, useEffect } from 'react'
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar'
import { Box, IconButton, Tooltip, Typography, useTheme } from '@mui/material'
import { Link, useLocation } from 'react-router-dom'
import { tokens } from '../../theme'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined'
import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined'
import ContactsOutlinedIcon from '@mui/icons-material/ContactsOutlined'
import ReceiptOutlinedIcon from '@mui/icons-material/ReceiptOutlined'
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined'
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined'
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined'
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined'
import PieChartOutlineOutlinedIcon from '@mui/icons-material/PieChartOutlineOutlined'
import TimelineOutlinedIcon from '@mui/icons-material/TimelineOutlined'
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined'
import MapOutlinedIcon from '@mui/icons-material/MapOutlined'
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined'
import AccessAlarmOutlinedIcon from '@mui/icons-material/AccessAlarmOutlined'
import DiscountIcon from '@mui/icons-material/Discount'
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter'
import HailIcon from '@mui/icons-material/Hail'
import LocationCityIcon from '@mui/icons-material/LocationCity'
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong'
import PriceChangeIcon from '@mui/icons-material/PriceChange'
import './style.scss'

function SidebarComponent() {
    const [isCollapsed, setIsCollapsed] = useState(false)
    const [selected, setSelected] = useState('Trang chủ')
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)
    const tokenStorage = localStorage.getItem('token')
    const location = useLocation()

    //active menu
    useEffect(() => {
        const path = location.pathname
        let selectedTitle = 'Trang chủ'
        switch (path) {
            case '/company-management':
                selectedTitle = 'Quản lý công ty'
                break
            case '/service':
                selectedTitle = 'Quản lý dịch vụ'
                break
            case '/price-list':
                selectedTitle = 'Quản lý bảng giá'
                break
            case '/new-order':
                selectedTitle = 'Đơn hàng mới'
                break
            case '/workflow-management':
                selectedTitle = 'Quản Lý Đơn hàng'
                break
            case '/submenu':
                selectedTitle = 'submenu lv3'
                break
            case '/employee':
                selectedTitle = 'Quản lý nhân viên'
                break
            case '/discount':
                selectedTitle = 'Quản lý ưu đãi'
                break
            case '/form':
                selectedTitle = 'Profile Form'
                break
            case '/calendar':
                selectedTitle = 'Calendar'
                break
            case '/faq':
                selectedTitle = 'FAQ Page'
                break
            case '/bar':
                selectedTitle = 'Bar Chart'
                break
            case '/pie':
                selectedTitle = 'Pie Chart'
                break
            case '/line':
                selectedTitle = 'Line Chart'
                break
            case '/geography':
                selectedTitle = 'Geography Chart'
                break
            default:
                selectedTitle = 'Trang chủ'
        }
        setSelected(selectedTitle)
    }, [location])

    const Item = ({ title, to, icon, selected, setSelected }) => {
        return (
            <Link to={to} style={{ textDecoration: 'none', color: 'inherit' }}>
                {isCollapsed ? (
                    <Tooltip
                        title={title}
                        arrow
                        slotProps={{
                            popper: {
                                modifiers: [
                                    {
                                        name: 'offset',
                                        options: {
                                            offset: [0, -14],
                                        },
                                    },
                                ],
                            },
                        }}
                    >
                        <MenuItem
                            active={selected === title}
                            style={{ color: colors.grey[100] }}
                            onClick={() => setSelected(title)}
                            icon={icon}
                        >
                            <Typography>{title}</Typography>
                        </MenuItem>
                    </Tooltip>
                ) : (
                    <MenuItem
                        active={selected === title}
                        style={{ color: colors.grey[100] }}
                        onClick={() => setSelected(title)}
                        icon={icon}
                    >
                        <Typography>{title}</Typography>
                    </MenuItem>
                )}
            </Link>
        )
    }

    return (
        <Box
            sx={{
                '& .ps-sidebar-root': {
                    height: '100%',
                },
                '& .ps-sidebar-container': {
                    backgroundColor: colors.primary[400],
                },
                '& .ps-menu-button:hover': {
                    color: '#868dfb !important',
                    cursor: 'pointer',
                },
                '& .ps-menu-button.ps-active': {
                    color: '#6870fa !important',
                },
                '& .ps-submenu-content': {
                    bgcolor: colors.primary[400],
                },
            }}
            className='wrapper-sidebar'
        >
            <Sidebar collapsed={isCollapsed}>
                <Menu>
                    <MenuItem
                        onClick={() => setIsCollapsed(!isCollapsed)}
                        icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
                        style={{
                            margin: '10px 0 20px 0',
                            color: colors.grey[100],
                        }}
                    >
                        {!isCollapsed && (
                            <Box
                                display='flex'
                                justifyContent='space-between'
                                alignItems='center'
                                ml='15px'
                            >
                                <Typography
                                    variant='h3'
                                    color={colors.grey[100]}
                                    fontWeight='900'
                                >
                                    BTASKEE
                                </Typography>
                                <IconButton
                                    onClick={() => setIsCollapsed(!isCollapsed)}
                                >
                                    <MenuOutlinedIcon />
                                </IconButton>
                            </Box>
                        )}
                    </MenuItem>

                    {!isCollapsed && (
                        <Box mb='25px'>
                            <Box
                                display='flex'
                                justifyContent='center'
                                alignItems='center'
                            >
                                <img
                                    alt='profile-user'
                                    src={`${process.env.PUBLIC_URL}/assets/user.jpeg`}
                                    style={{
                                        cursor: 'pointer',
                                        borderRadius: '50%',
                                        objectFit: 'cover',
                                        width: 100,
                                        height: 100,
                                    }}
                                />
                            </Box>
                            <Box textAlign='center'>
                                <Typography
                                    variant='h2'
                                    color={colors.grey[100]}
                                    fontWeight='bold'
                                    sx={{ m: '10px 0 0 0' }}
                                >
                                    Tri91
                                </Typography>
                                <Typography
                                    variant='h5'
                                    color={colors.greenAccent[500]}
                                >
                                    VP Fancy Admin
                                </Typography>
                            </Box>
                        </Box>
                    )}

                    {/* <Box paddingLeft={isCollapsed ? undefined : '10%'}> */}
                    <Box>
                        <Item
                            title='Trang chủ'
                            to='/'
                            icon={<HomeOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        {tokenStorage === 'admin' ? (
                            <>
                                <Typography
                                    variant='h6'
                                    color={colors.grey[300]}
                                    sx={{ m: '15px 0 5px 20px' }}
                                >
                                    Quản trị
                                </Typography>

                                <Item
                                    title='Quản lý công ty'
                                    to='/company-management'
                                    icon={<LocationCityIcon />}
                                    selected={selected}
                                    setSelected={setSelected}
                                />
                                <Item
                                    title='Quản lý dịch vụ'
                                    to='/service'
                                    icon={<ReceiptLongIcon />}
                                    selected={selected}
                                    setSelected={setSelected}
                                />
                                <Item
                                    title='Quản lý bảng giá'
                                    to='/price-list'
                                    icon={<PriceChangeIcon />}
                                    selected={selected}
                                    setSelected={setSelected}
                                />
                            </>
                        ) : (
                            <>
                                <Typography
                                    variant='h6'
                                    color={colors.grey[300]}
                                    sx={{ m: '15px 0 5px 20px' }}
                                >
                                    Doanh nghiệp
                                </Typography>

                                <SubMenu
                                    label='Quản lý đơn hàng'
                                    icon={<BusinessCenterIcon />}
                                >
                                    <Item
                                        title='Đơn hàng mới'
                                        to='/new-order'
                                        icon={<WorkOutlineOutlinedIcon />}
                                        selected={selected}
                                        setSelected={setSelected}
                                    />
                                    <Item
                                        title='Quản Lý Đơn hàng'
                                        to='/workflow-management'
                                        icon={<WorkOutlineOutlinedIcon />}
                                        selected={selected}
                                        setSelected={setSelected}
                                    />

                                    <SubMenu
                                        label='menu lv2'
                                        icon={<AccessAlarmOutlinedIcon />}
                                    >
                                        <Item
                                            title='submenu lv3'
                                            to='/submenu'
                                            icon={<ContactsOutlinedIcon />}
                                            selected={selected}
                                            setSelected={setSelected}
                                        />
                                    </SubMenu>
                                </SubMenu>
                                <Item
                                    title='Quản lý nhân viên'
                                    to='/employee'
                                    icon={<ContactsOutlinedIcon />}
                                    selected={selected}
                                    setSelected={setSelected}
                                />
                                <Item
                                    title='Quản lý ưu đãi'
                                    to='/discount'
                                    icon={<DiscountIcon />}
                                    selected={selected}
                                    setSelected={setSelected}
                                />
                            </>
                        )}

                        <Typography
                            variant='h6'
                            color={colors.grey[300]}
                            sx={{ m: '15px 0 5px 20px' }}
                        >
                            Thống kê
                        </Typography>
                        <Item
                            title='Profile Form'
                            to='/form'
                            icon={<PersonOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Item
                            title='Calendar'
                            to='/calendar'
                            icon={<CalendarTodayOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Item
                            title='FAQ Page'
                            to='/faq'
                            icon={<HelpOutlineOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />

                        <Typography
                            variant='h6'
                            color={colors.grey[300]}
                            sx={{ m: '15px 0 5px 20px' }}
                        >
                            Charts
                        </Typography>
                        <Item
                            title='Bar Chart'
                            to='/bar'
                            icon={<BarChartOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Item
                            title='Pie Chart'
                            to='/pie'
                            icon={<PieChartOutlineOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Item
                            title='Line Chart'
                            to='/line'
                            icon={<TimelineOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Item
                            title='Geography Chart'
                            to='/geography'
                            icon={<MapOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                    </Box>
                </Menu>
            </Sidebar>
        </Box>
    )
}

export default SidebarComponent

// import { Link } from 'react-router-dom'

// // case 2:
// import React, { useState } from 'react'
// import { Button, Drawer, List, ListItem, ListItemText } from '@mui/material'

// const SidebarComponent = () => {
//     const [open, setOpen] = useState(true)

//     const toggleDrawer = (isOpen) => () => {
//         setOpen(isOpen)
//     }

//     const menuItems = [
//         { label: 'Home', link: '/' },
//         { label: 'About', link: '/about' },
//         { label: 'Services', link: '/services' },
//         // Add more menu items as needed
//     ]

//     const renderMenuItems = () => {
//         return menuItems.map((item) => (
//             <ListItem button key={item.label} component={Link} to={item.link}>
//                 <ListItemText primary={item.label} />
//             </ListItem>
//         ))
//     }

//     return (
//         <div>
//             <Button onClick={toggleDrawer(true)}>Open sidebar</Button>
//             <Drawer open={open} onClose={toggleDrawer(false)}>
//                 <List>{renderMenuItems()}</List>
//             </Drawer>
//         </div>
//     )
// }

// export default SidebarComponent
