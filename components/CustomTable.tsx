import { TableData } from '../services/mock'

type Props = {
  data: TableData[] | null
}

const CustomTable = ({ data }: Props) => {
  const rowClassName = 'striped--light-gray'
  const cellClassName = 'pa4'
  const headerClassName = 'pa2'

  return (
    <table className="w-100 ba b--black-10 br2" style={{ borderSpacing: 0 }}>
      <thead>
        <tr>
          <th className={headerClassName}>Title</th>
          <th className={headerClassName}>Description</th>
        </tr>
      </thead>
      <tbody>
        {!data && (
          <tr className={rowClassName}>
            <td colSpan={2} className={cellClassName} align="center">
              Loading...
            </td>
          </tr>
        )}
        {Array.isArray(data) && !data.length && (
          <tr className={rowClassName}>
            <td colSpan={2} className={cellClassName} align="center">
              No data found
            </td>
          </tr>
        )}
        {Array.isArray(data) &&
          data.map((item) => {
            return (
              <tr key={item.id} className={rowClassName}>
                <td className={cellClassName + ' br b--black-10'} width="30%">
                  {item.title}
                </td>
                <td
                  className={cellClassName}
                  width="70%"
                  dangerouslySetInnerHTML={{ __html: item.description }}
                />
              </tr>
            )
          })}
      </tbody>
    </table>
  )
}

export default CustomTable
