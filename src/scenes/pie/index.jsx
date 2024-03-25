import { Box } from '@mui/material'
import Header from '../../components/Header'
import PieChart from '../../components/PieChart'

function Pie({ data = {} }) {
    console.log({ data })
    return (
        <Box m='20px'>
            <Header title='Biểu Đồ' subtitle={data?.name} />
            <Box height='75vh'>
                <PieChart data={data} />
            </Box>
        </Box>
    )
}

export default Pie
