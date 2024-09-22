import styled from "styled-components"
import CardImage from '/src/assets/image-equilibrium.jpg'
import AuthorImage from '/src/assets/image-avatar.png'
import EthereumIcon from '/src/assets/icon-ethereum.svg'
import ClockIcon from '/src/assets/icon-clock.svg'
import ViewIcon from '/src/assets/icon-view.svg'

const NFT__Card = styled.div `
    width: 100%;
    max-width: 450px;
    border-radius: 14px;
    padding: 24px;
    background-color: hsl(216, 50%, 16%);
    box-shadow: 0 32px 0 18px #070e1863;

    .img-box {
        position: relative;
        border-radius: 8px;
        margin-bottom: 24px;
        overflow: hidden;
    }

    .img-box:hover {
        cursor: pointer;
    }

    .img-box:hover .hover-state {
        opacity: 1;
    }

    .hover-state {
        position: absolute;
        left: 0;
        top: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
        opacity: 0;
        transition: all .3s;
        background-color: #00fff775;
    }

    .card-img {
        display: block;
        width: 100%;
    }

    .title {
        font-weight: 600;
        margin-bottom: 24px;
        color: white;
        transition: all .2s;
    }

    .title:hover {
        cursor: pointer;
        color: hsl(178, 100%, 50%);
    }

    .content {
        margin-bottom: 24px;
        color: hsl(215, 51%, 70%);
    }

    .value-container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-bottom: 24px;
        border-bottom: 1px solid hsl(215, 32%, 27%);
    }

    .actual-value {
        display: flex;
        align-items: center;
        gap: 8px;
        font-weight: 600;
        text-transform: uppercase;
        color: hsl(178, 100%, 50%);
    }

    .date {
        display: flex;
        align-items: center;
        gap: 8px;
        color: hsl(215, 51%, 70%);
    }

    .author-container {
        display: flex;
        align-items: center;
        gap: 18px;
        margin-top: 24px;
    }

    .author-img {
        width: 52px;
        height: 52px;
        border: 2px solid white;
        border-radius: 50%;
    }

    .author {
        color: hsl(215, 51%, 70%);
    }

    .author-name {
        color: white;
    }

    .author-name:hover {
        cursor: pointer;
        color: hsl(178, 100%, 50%);
    }

`

export default function NFT_Card() {
    return (
        <>
            <NFT__Card>
                <div className="img-box">
                    <div className="hover-state">
                        <img src={ViewIcon} alt="A view icon" />
                    </div>
                    <img className="card-img" src={CardImage} alt="A image of NFT" />
                </div>
                <h1 className="title">Equilibrium #3429</h1>  
                <p className="content">Our Equilibrium collection promotes balance and calm.</p>
                <div className="value-container">
                    <p className="actual-value">
                        <img src={EthereumIcon} alt="Ethereum icon" />
                        0.041 ETH
                    </p>
                    <p className="date">
                        <img src={ClockIcon} alt="" />
                        3 days left
                    </p>
                </div>
                <div className="author-container">
                    <img className="author-img" src={AuthorImage} alt="A author photo" />
                    <p className="author">Creation of <span className="author-name">Jules Wyvern</span></p>
                </div>
            </NFT__Card>
        </>
    )
}