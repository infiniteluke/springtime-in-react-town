import { github } from "@code-surfer/themes"

export default {
  ...github,
  liveCode: {
    preview: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    },
    editor: {
      fontSize: '2em',
      backgroundColor: '#121212'
    }
  }
}
