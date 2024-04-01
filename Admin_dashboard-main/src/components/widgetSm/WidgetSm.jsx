import { Visibility } from '@mui/icons-material'
import './widgetSm.scss'

const WidgetSm = () => {
  return (
    <div className='widgetSm'>
      <span className='widgetSmTitle'>New Join Members</span>
      <ul className='widgetSmList'>
        <li className='widgetSmListItem'>
          <img
            className='widgetSmImg'
            src='https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'></img>
          <div className='widgetSmUser'>
            <span className='widgetSmUsername'>Anna Keller</span>
            <span className='widgetSmUserTitle'>Software Engineer</span>
          </div>
          <button className='widgetSmButton'>
            <Visibility className='widgetSmIcon' />
            Display
          </button>
        </li>
        <li className='widgetSmListItem'>
          <img
            className='widgetSmImg'
            src='https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'></img>
          <div className='widgetSmUser'>
            <span className='widgetSmUsername'>Anna Keller</span>
            <span className='widgetSmUserTitle'>Software Engineer</span>
          </div>
          <button className='widgetSmButton'>
            <Visibility className='widgetSmIcon' />
            Display
          </button>
        </li>
        <li className='widgetSmListItem'>
          <img
            className='widgetSmImg'
            src='https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'></img>
          <div className='widgetSmUser'>
            <span className='widgetSmUsername'>Anna Keller</span>
            <span className='widgetSmUserTitle'>Software Engineer</span>
          </div>
          <button className='widgetSmButton'>
            <Visibility className='widgetSmIcon' />
            Display
          </button>
        </li>
        <li className='widgetSmListItem'>
          <img
            className='widgetSmImg'
            src='https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'></img>
          <div className='widgetSmUser'>
            <span className='widgetSmUsername'>Anna Keller</span>
            <span className='widgetSmUserTitle'>Software Engineer</span>
          </div>
          <button className='widgetSmButton'>
            <Visibility className='widgetSmIcon' />
            Display
          </button>
        </li>
        <li className='widgetSmListItem'>
          <img
            className='widgetSmImg'
            src='https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'></img>
          <div className='widgetSmUser'>
            <span className='widgetSmUsername'>Anna Keller</span>
            <span className='widgetSmUserTitle'>Software Engineer</span>
          </div>
          <button className='widgetSmButton'>
            <Visibility className='widgetSmIcon' />
            Display
          </button>
        </li>
      </ul>
    </div>
  )
}

export default WidgetSm
