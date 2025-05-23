import truncateText from '../../utils/truncateText'
import { toPersianNumbersWithComma } from '../../utils/toPersianNumbers'
import toLocalDateShort from '../../utils/toLocalDateShort'
import Table from '../../ui/Table'
import { TbPencilMinus } from 'react-icons/tb'
import { HiOutlineTrash } from 'react-icons/hi'

function ProjectRow({project,index}) {
  return (
  <Table.Row >
                      <td>{index + 1}</td>
              <td>{truncateText(project.title, 30)}</td>
              <td>{project.category.title}</td>
              <td>{toPersianNumbersWithComma(project.budget)}</td>
              <td>{toLocalDateShort(project.deadline)}</td>
              <td>
                <div className="flex flex-wrap items-center gap-2 max-w-[200px]">
                  {project.tags.map((tag) => (
                    <span className="badge badge--secondary" key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </td>
              <td>{project.freelancer?.name || "-"}</td>
              <td>
                {project.status === "OPEN" ? (
                  <span className="badge badge--success">باز</span>
                ) : (
                  <span className="badge badge--danger">بسته</span>
                )}
              </td>
                <td>
            <div className='flex items-center gap-x-4' >
                <button>
                  <TbPencilMinus className='w-5 h-5 text-primary-900'/>
                </button>
                <button>
                  <HiOutlineTrash className='w-5 h-5 text-error'/>
                </button>
            </div>
              </td>
            </Table.Row>
  )
}

export default ProjectRow