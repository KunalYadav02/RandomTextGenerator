import styled from "styled-components"
import Home from "./Pages/Home/Home"

const App = () => {
  return (
    <StyledApp>
      <Home />
    </StyledApp>
  )
}

const StyledApp = styled.section`
  width: 100%;
  height: 100%;
`

export default App
