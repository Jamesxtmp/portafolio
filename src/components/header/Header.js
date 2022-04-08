import styled from 'styled-components'

const HeaderS = styled.div`
    display: flex;
    margin: 30px auto;
    border: 1px solid red;
    width: 85%;
    height: 35vh;
`
const PhotoS = styled.div`
    display: flex;
    width: 25%;
    height: 100%;
    img{
        width: 85%;
        margin: auto;
        border-radius: 50%;
    }
`
const InfoZoneS = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    width: 75%;
    height: 100%;
`
const FullNameS = styled.div`
    padding-left: 10px;
    align-items: center;
    font-size: 4.5em;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    font-weight: 800;
    width: 100%;
    max-height: 50%;
    overflow: hidden;
    background-color: rgba(0, 0, 0, 0);
    `
const SpecialtyS = styled.div`
font-family: Cambria, Georgia, Times, 'Times New Roman', serif;
    width: 100%;
    max-height: 50%;
    overflow: hidden;
    font-size: 4em;
    font-style: italic;
    background-color: rgba(0, 0, 0, 0);
`

const Header = () => {
    return(
        <HeaderS>
            <PhotoS>
                <img src='perfil.jpg' />
            </PhotoS>
            <InfoZoneS>
                <FullNameS>Jaime Morales Cerón</FullNameS>
                <SpecialtyS>Front-End Developer</SpecialtyS>            
            </InfoZoneS>           
        </HeaderS>
    )
}
export default Header