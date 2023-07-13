import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer
} from '@chakra-ui/react'
import { roboto, fivo_sans_heavy, fivo_sans_medium } from '@/theme/fonts'

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
    <TableContainer className={fivo_sans_heavy.className} maxW='1350px'>
      <Table size={['sm', 'md', 'lg']}>
        <Thead>
          <Tr>
            {tHead?.map(h => (
              <Th
                fontSize={['12px', '14px', '18px', '24px']}
                fontWeight={700}
                textTransform='capitalize'
              >
                {h}
              </Th>
            ))}
          </Tr>
        </Thead>
        <Tbody className={roboto.className} fontWeight={400}>
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
