import {
    Box,
    IconButton,
    useTheme,
    InputBase,
    Typography,
    ListSubheader,
    ListItemText,
    ListItem,
    List,
    Popover,
    Avatar,
    ListItemAvatar,
    ListItemButton,
    Menu,
    MenuItem,
    Divider,
    Button,
    Badge,
    Tooltip,
} from '@mui/material'
import React, { useContext, useState } from 'react'
import { ColorModeContext, tokens } from '../../theme'
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined'
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined'
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined'
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined'
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined'
import SearchIcon from '@mui/icons-material/Search'
import LogoutIcon from '@mui/icons-material/Logout'
import InfoIcon from '@mui/icons-material/Info'

function Topbar() {
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)
    const colorMode = useContext(ColorModeContext)

    const [anchorEl, setAnchorEl] = useState(null)
    const [anchoElMenu, setAnchorElMenu] = useState(null)

    //menu
    const handleProfileMenuOpen = (event) => {
        setAnchorElMenu(event.currentTarget)
    }
    const handleMenuClose = () => {
        setAnchorElMenu(null)
    }

    //nofication
    const handleOpenNotification = (event) => {
        setAnchorEl(event.currentTarget)
    }
    const handleCloseNofification = () => {
        setAnchorEl(null)
    }

    const menuId = 'primary-search-account-menu'
    const renderMenu = (
        <Menu
            anchorEl={anchoElMenu}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
            }}
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={menuId}
            keepMounted
            open={Boolean(anchoElMenu)}
            onClose={handleMenuClose}
        >
            <MenuItem onClick={handleMenuClose}>
                <IconButton>
                    <LogoutIcon />
                </IconButton>
                <Typography>Đăng xuất</Typography>
            </MenuItem>
            <MenuItem onClick={handleMenuClose}>
                <IconButton>
                    <InfoIcon />
                </IconButton>
                <Typography>Thông tin tài khoản</Typography>
            </MenuItem>
            <MenuItem onClick={handleMenuClose}>
                <IconButton>
                    <SettingsOutlinedIcon />
                </IconButton>
                <Typography>Cài đặt</Typography>
            </MenuItem>
        </Menu>
    )

    return (
        <Box display='flex' justifyContent='space-between' p={2}>
            {/* Search bar */}
            <Box
                display='flex'
                backgroundColor={colors.primary[400]}
                borderRadius='3px'
            >
                <InputBase sx={{ ml: 2, flex: 1 }} placeholder='Search' />
                <IconButton type='button' sx={{ p: 1 }}>
                    <SearchIcon />
                </IconButton>
            </Box>

            {/* ICONS */}
            <Box display='flex'>
                <IconButton onClick={colorMode.toggleColorMode}>
                    {theme.palette.mode === 'dark' ? (
                        <DarkModeOutlinedIcon />
                    ) : (
                        <LightModeOutlinedIcon />
                    )}
                </IconButton>
                <IconButton onClick={handleOpenNotification}>
                    <Badge badgeContent={17} color='error'>
                        <NotificationsOutlinedIcon />
                    </Badge>
                </IconButton>
                <Box sx={{ flexGrow: 0 }}>
                    <Tooltip title='Cài đặt'>
                        <IconButton
                            onClick={handleProfileMenuOpen}
                            aria-controls={menuId}
                            aria-haspopup='true'
                        >
                            <PersonOutlinedIcon />
                        </IconButton>
                    </Tooltip>
                </Box>
            </Box>
            <Popover
                open={Boolean(anchorEl)}
                onClose={handleCloseNofification}
                anchorEl={anchorEl}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
            >
                <Box>
                    <Typography
                        variant='h5'
                        bgcolor={colors.primary[400]}
                        color={colors.grey[100]}
                        paddingLeft='30px'
                        paddingTop='20px'
                    >
                        Thông báo
                    </Typography>
                    <List
                        sx={{
                            width: '100%',
                            maxWidth: 360,
                            // bgcolor: 'background.paper',
                            bgcolor: colors.primary[400],
                            maxHeight: 500,
                        }}
                    >
                        <ListItemButton>
                            <ListItem alignItems='flex-start'>
                                <ListItemAvatar>
                                    <Avatar
                                        alt='Remy Sharp'
                                        src='/static/images/avatar/1.jpg'
                                    />
                                </ListItemAvatar>
                                <ListItemText
                                    primary='Brunch this weekend?'
                                    secondary={
                                        <React.Fragment>
                                            <Typography
                                                sx={{ display: 'inline' }}
                                                component='span'
                                                variant='body2'
                                                color='text.primary'
                                            >
                                                Ali Connors
                                            </Typography>
                                            {
                                                " — I'll be in your neighborhood doing errands this…"
                                            }
                                        </React.Fragment>
                                    }
                                />
                            </ListItem>
                        </ListItemButton>
                        <ListItemButton>
                            <ListItem alignItems='flex-start'>
                                <ListItemAvatar>
                                    <Avatar
                                        alt='Travis Howard'
                                        src='/static/images/avatar/2.jpg'
                                    />
                                </ListItemAvatar>
                                <ListItemText
                                    primary='Summer BBQ'
                                    secondary={
                                        <React.Fragment>
                                            <Typography
                                                sx={{ display: 'inline' }}
                                                component='span'
                                                variant='body2'
                                                color='text.primary'
                                            >
                                                to Scott, Alex, Jennifer
                                            </Typography>
                                            {
                                                " — Wish I could come, but I'm out of town this…"
                                            }
                                        </React.Fragment>
                                    }
                                />
                            </ListItem>
                        </ListItemButton>
                        <ListItemButton>
                            <ListItem alignItems='flex-start'>
                                <ListItemAvatar>
                                    <Avatar
                                        alt='Cindy Baker'
                                        src='/static/images/avatar/3.jpg'
                                    />
                                </ListItemAvatar>
                                <ListItemText
                                    primary='Oui Oui'
                                    secondary={
                                        <React.Fragment>
                                            <Typography
                                                sx={{ display: 'inline' }}
                                                component='span'
                                                variant='body2'
                                                color='text.primary'
                                            >
                                                Sandra Adams
                                            </Typography>
                                            {
                                                ' — Do you have Paris recommendations? Have you ever…'
                                            }
                                        </React.Fragment>
                                    }
                                />
                            </ListItem>
                        </ListItemButton>
                    </List>
                </Box>
            </Popover>
            {renderMenu}
        </Box>
    )
}

export default Topbar
