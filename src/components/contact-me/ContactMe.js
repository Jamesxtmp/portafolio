import styled from 'styled-components'

const EnlacesS = styled.div`
    position: absolute;
    display: flex;
    right: 0;
    top: 0;
    height: 50px;
    margin-right: 8px;
    border: 1px solid red;
`
const EnlaceS = styled.div`
    display: flex;
    align-items: center;
    height: 100%;
    margin: 0 3px;
    img{
        height: 40px;
    }
`

const enlaces = [{
    titulo: 'GitHub', enlace: 'https://github.com/Jamesxtmp', local: 'redes/github60.svg'
},{
    titulo: 'Linkedin', enlace: 'https://linkedin.com/in/jaime-morales-cerón-43a237213', local: 'redes/linkedin60.svg'
},{
    titulo: 'Correo', enlace: 'mailto:gen22xtmp@gmail.com', local: 'redes/mail50.svg'
}]
const ContactMe = () => {
    return(
        <EnlacesS>
            {
                enlaces.map( enlace => 
                    <EnlaceS key={ enlace.titulo }>
                        <a href={ enlace.enlace } ><img src={ enlace.local } /></a>
                    </EnlaceS>
                )
            }
        </EnlacesS>
    )
}
export default ContactMe