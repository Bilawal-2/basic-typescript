import {useContext} from 'react'
import {ThemeContext} from './ThemeContext'

const Box = () => {
    const theme = useContext(ThemeContext)
  return (
    <div
    style={{backgroundColor:theme.primary.main, color:theme.primary.text}}>
      Theme context
    </div>
  )
}

export default Box
