import 'bootstrap/dist/css/bootstrap.min.css'

// import { ChakraProvider } from "@chakra-ui/react"
import '../public/fonts/globals.css'
function MyApp({ Component, pageProps }) {
  return (
    // <ChakraProvider>
    <Component {...pageProps} />
    // </ChakraProvider>
  )
}

export default MyApp
