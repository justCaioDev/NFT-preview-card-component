import NFT_Card from "./components/NFT-Card"
import styled from "styled-components"

const Main__Container = styled.div `
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 150px 28px;
`

function App() {
  return (
    <>
    <Main__Container>
      <NFT_Card />
    </Main__Container>
    </>
  )
}

export default App
