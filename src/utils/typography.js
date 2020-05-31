import Typography from "typography"

const typography = new Typography({
  baseFontSize: "16px",
  baseLineHeight: 1.75,
  headerFontFamily: [
    "-apple-system",
    "Helvetica Neue",
    "PingFang SC",
    "Source Sans Pro",
    "Microsoft YaHei",
    "Noto Sans SC",
  ],
  headerColor: "black", // not working?
  headerWeight: 500,
  bodyFontFamily: [
    "-apple-system",
    "Helvetica Neue",
    "PingFang SC",
    "Source Sans Pro",
    "Microsoft YaHei",
    "Noto Sans SC",
  ],
  bodyColor: `rgba(0, 0, 0, 0.7)`,
  bodyWeight: 400,
})

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
// 1 rhythm: 16px * 1.75 = 28px
export const rhythm = typography.rhythm
export const scale = typography.scale
