import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer
} from '@chakra-ui/react'

import { feature1 } from '@/theme/constants'

const TableComponent = () => {
  const tHead = [
    '',
    'Arbitrum',
    'Avalanche',
    'Optimism',
    'Polygon',
    'Etherlink'
  ]

  return (
    <TableContainer maxW='1350px'>
      <Table>
        <Thead>
          <Tr>{tHead?.map(h => <Th fontSize='24px'>{h}</Th>)}</Tr>
        </Thead>
        <Tbody>
          <Tr bg='#FFFFFF'>{feature1?.map(d => <Td>{d}</Td>)}</Tr>
          <Tr>{feature1?.map(d => <Td>{d}</Td>)}</Tr>
          <Tr bg='#FFFFFF'>{feature1?.map(d => <Td>{d}</Td>)}</Tr>
          <Tr>{feature1?.map(d => <Td>{d}</Td>)}</Tr>
          <Tr bg='#FFFFFF'>{feature1?.map(d => <Td>{d}</Td>)}</Tr>
          <Tr>{feature1?.map(d => <Td>{d}</Td>)}</Tr>
          <Tr bg='#FFFFFF'>{feature1?.map(d => <Td>{d}</Td>)}</Tr>
        </Tbody>
      </Table>
    </TableContainer>
  )
}

export default TableComponent
