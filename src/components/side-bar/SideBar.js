import styled from 'styled-components'

const SideBarS = styled.div`
    position: fixed;
    width: 50px;
    display:  flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    height: 50vh;
    bottom: 0;
    border: 1px solid red;
`
const FlagS = styled.div`
    display: flex;
    align-items: center;
    height: 10%;
    img{
        width: 35px;
    }
`
const RombosS = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 80%;
`
const NoteS = styled.div`
    display: flex;
    align-items: center;
    height: 10%;
    img{
        height: 30px;
    }
`
const RomboS = styled.div`
    width: 15px; 
    height: 15px;
    border: 3px solid #000000;
    background: #000000;
    transform: rotate(45deg);
    border-radius: 2px;
`

//? https://www.flaticon.es/icono-gratis/estados-unidos_330459
const flags = [{
    title: 'Spain', local: 'flags/spain512.png'
},{
    title: 'EU', local: 'flags/eu512.png'
}]

const SideBar = ({ catogories }) => {
    return(
        <SideBarS>
            <NoteS>
                <img src='note60.svg' ></img>
            </NoteS>
            <RombosS>
                {
                    catogories.map( categorie =>
                        <RomboS key={ categorie.title } ></RomboS>    
                    )
                }
            </RombosS>
            <FlagS>
                <img src={ flags[0].local } ></img>
            </FlagS>
        </SideBarS>
    )
}
export default SideBar