 import { livros } from './dadosUltimosLancamentos'
 import { Titulo } from '../Titulo'
 import CardRemenda from '../CardRecomenda'
 import imagemLivro from '../../imagens/livro2.png' 
 import styled from 'styled-components'


 const UltimosLancamentosContainer = styled.section`
    background-color: #EBECEE;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
 `

 const NovosLivrosContainer = styled.section`
    margin-top: 30px;
    display: flex;
    width: 100%;
    justify-content: center;
    cursor: pointer;
 `

function UltimosLançamentos(){
  
      return(
      <UltimosLancamentosContainer>
           <Titulo cor="#EB9B00"
            tamanhoFonte="36px" 
           > 
            Ultimos Lançamentos
           </Titulo>
           <NovosLivrosContainer>
               {livros.map( livro => (
               <img src={livro.src} alt="livros"/>
              
      ))}
         </NovosLivrosContainer>  
         <CardRemenda
            titulo="Talvel você se interesse por este livro"
            subtitulo="Desbravando o Java"
            descrição="Aprendendo o Java por debaixo dos panos"
            img={imagemLivro}

         />  
         <CardRemenda
            titulo="Talvel você se interesse por este livro"
            subtitulo="Angular"
            descrição="Aprendendo o fremework "
            img={imagemLivro}

         />  
         </UltimosLancamentosContainer>
      )


}

export default UltimosLançamentos