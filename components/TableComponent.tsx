import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Box
} from '@chakra-ui/react'
import { fivo_sans_heavy } from '@/theme/fonts'

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
          <Tr>
            {tHead?.map(h => (
              <Th
                // fontFamily={fivo_sans_heavy.className}
                fontSize={['12px', '14px', '18px', '24px']}
                fontWeight={700}
                textTransform='capitalize'
              >
                {h}
              </Th>
            ))}
          </Tr>
        </Thead>
        <Tbody fontWeight={400}>
          <Tr bg='#FFFFFF'>
            {feature1?.map((d, index) => {
              if (index === 0) {
                return <Td borderRadius='10px 0px 0px 10px'>{d}</Td>
              } else if (index === tHead.length - 1) {
                return <Td borderRadius='0px 10px 10px 0px'>{d}</Td>
              } else {
                return <Td>{d}</Td>
              }
            })}
          </Tr>

          <Tr>{feature1?.map(d => <Td>{d}</Td>)}</Tr>
          <Tr bg='#FFFFFF'>
            {' '}
            {feature1?.map((d, index) => {
              if (index === 0) {
                return <Td borderRadius='10px 0px 0px 10px'>{d}</Td>
              } else if (index === tHead.length - 1) {
                return <Td borderRadius='0px 10px 10px 0px'>{d}</Td>
              } else {
                return <Td>{d}</Td>
              }
            })}
          </Tr>
          <Tr>{feature1?.map(d => <Td>{d}</Td>)}</Tr>
          <Tr bg='#FFFFFF'>
            {' '}
            {feature1?.map((d, index) => {
              if (index === 0) {
                return <Td borderRadius='10px 0px 0px 10px'>{d}</Td>
              } else if (index === tHead.length - 1) {
                return <Td borderRadius='0px 10px 10px 0px'>{d}</Td>
              } else {
                return <Td>{d}</Td>
              }
            })}
          </Tr>
          <Tr>{feature1?.map(d => <Td>{d}</Td>)}</Tr>
        </Tbody>
      </Table>
    </TableContainer>
  )
}

export default TableComponent
