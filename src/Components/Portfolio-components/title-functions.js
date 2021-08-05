import reactImage from './titleIcons/React.png'
import cssImage from './titleIcons/CSS.png'
import javascriptImage from './titleIcons/Javascript.png'
import htmlImage from './titleIcons/HTML.png'

const iconsPath = {
  react: {reactImage},
  css: {cssImage},
  javascript: {javascriptImage},
  html: {htmlImage},
}


function getImage (string) {
  const key = Object.keys(iconsPath).find((key)=>key===string)
  let obj = iconsPath[key]
  let value = Object.values(obj)[0]
  return value
}

export default getImage