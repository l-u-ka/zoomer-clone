import { useThemeProvider } from "@src/providers/ThemeProvider/useThemeProvider"


export default function ToggleModeButton() {
  const {lightMode, toggleLightMode} = useThemeProvider();

  return (
    <div className="firago-normal fixed right-8 top-4 border border-solid border-orange-primary px-1 py-2 rounded-xl bg-orange-primary text-white text-sm cursor-pointer dark:bg-[#212121] dark:text-orange-primary" onClick={toggleLightMode}>{lightMode ? "Light" : "Dark"}</div>
  )
}
