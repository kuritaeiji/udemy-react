import { useTheme, useThemeUpdate } from '../context/UseTheme'

const Header = () => {
  const theme = useTheme()
  const setTheme = useThemeUpdate()
  const THEMES = ['light', 'dark', 'red']

  return (
    <>
      <header className={`content-${theme}`}>
        {THEMES.map(_theme => (
          <label key={_theme}>
            <input
              type="radio"
              value={_theme}
              onChange={e => setTheme(e.target.value)}
              checked={_theme === theme}
            />
            {_theme}
          </label>
        ))}
      </header>
    </>
  )
}

export default Header
