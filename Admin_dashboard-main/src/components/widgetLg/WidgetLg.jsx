import './widgetLg.scss'
import PropTypes from 'prop-types'

const WidgetLg = () => {
  const Button = ({ type }) => {
    return <button className={'widgetLgButton ' + type}>{type}</button>
  }

  Button.propTypes = {
    type: PropTypes.string,
  }

  return (
    <div className='widgetLg'>
      <h3 className='widgetLgTitle'>Latest transactions</h3>
      <table className='widgetLgTable'>
        <thead>
          <tr className='widgetLgTr'>
            <th className='widgetLgTh'>Customer</th>
            <th className='widgetLgTh'>Date</th>
            <th className='widgetLgTh'>Amount</th>
            <th className='widgetLgTh'>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr className='widgetLgTr'>
            <td className='widgetLgUser'>
              <img
                src='https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                alt=''
                className='widgetLgImg'
              />
              <span className='widgetLgName'>Username</span>
            </td>
            <td className='widgetLgDate'>2 June 2021</td>
            <td className='widgetLgAmount'>$122.00</td>
            <td className='widgetLgStatus'>
              <Button type='Approved' />
            </td>
          </tr>
          <tr className='widgetLgTr'>
            <td className='widgetLgUser'>
              <img
                src='https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                alt=''
                className='widgetLgImg'
              />
              <span className='widgetLgName'>Username</span>
            </td>
            <td className='widgetLgDate'>2 June 2021</td>
            <td className='widgetLgAmount'>$122.00</td>
            <td className='widgetLgStatus'>
              <Button type='Declined' />
            </td>
          </tr>
          <tr className='widgetLgTr'>
            <td className='widgetLgUser'>
              <img
                src='https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                alt=''
                className='widgetLgImg'
              />
              <span className='widgetLgName'>Username</span>
            </td>
            <td className='widgetLgDate'>2 June 2021</td>
            <td className='widgetLgAmount'>$122.00</td>
            <td className='widgetLgStatus'>
              <Button type='Pending' />
            </td>
          </tr>
          <tr className='widgetLgTr'>
            <td className='widgetLgUser'>
              <img
                src='https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                alt=''
                className='widgetLgImg'
              />
              <span className='widgetLgName'>Username</span>
            </td>
            <td className='widgetLgDate'>2 June 2021</td>
            <td className='widgetLgAmount'>$122.00</td>
            <td className='widgetLgStatus'>
              <Button type='Approved' />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default WidgetLg
