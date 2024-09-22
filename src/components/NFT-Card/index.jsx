import styled from "styled-components"
import CardImage from '/src/assets/image-equilibrium.jpg'
import AuthorImage from '/src/assets/image-avatar.png'

const NFT__Card = styled.div `
    
`

export default function NFT_Card() {
    return (
        <>
            <NFT__Card>
                <img src={CardImage} alt="A image of NFT" />
                <h1 className="title">Equilibrium #3429</h1>  
                <p className="content">Our Equilibrium collection promotes balance and calm.</p>
                <div className="value-container">
                    <p className="actual-value">0.041 ETH</p>
                    <p className="date">3 days left</p>
                </div>
                <div className="author-container">
                    <img src={AuthorImage} alt="A author photo" />
                    <p>Creation of Jules Wyvern</p>
                </div>
            </NFT__Card>
        </>
    )
}