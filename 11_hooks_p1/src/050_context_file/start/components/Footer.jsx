import { useThemeUpdate } from '../context/UseTheme'

export const Footer = () => {
  const setTheme = useThemeUpdate()
  console.log('footer')

  return <div>footer</div>
}

export default Footer
