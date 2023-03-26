import ball from '../../assets/nbalogo-removebg-preview.png'
import { Container } from './style'

export function NavBar () {

  return (
    <Container>
      <div>
        <img src={ball} alt="nba-image" />
      </div>

      <h1>Sua fonte de notícias sobre o mundo da NBA</h1>
    </Container>
  )
}