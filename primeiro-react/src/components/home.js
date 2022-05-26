import illustrationImg from '../assets/images/illustration.svg'
import logoImg from '../assets/images/logo.svg'
import googleImg from '../assets/images/google-icon.svg'

export function Home(){
   


    return(
      <div className='main'>
      <aside>
        <img src={illustrationImg}></img>
        <h1>Toda pergunta tem</h1>
        <h1>uma resposta</h1>
        <p>Aprenda e compartilhe conhecimento</p>
        <p>com outras pessoas</p>
     
    </aside>
      <section>
        <img src={logoImg}></img>
        <button><img src={googleImg}></img> Crie sua sala com o Google</button>
        <div className='or'>ou entre em uma sala</div>
        <form>
            <input type="text" placeholder='Digite o código da sala'></input>
            <button className='button-join' type='submit'>Entrar na sala</button>
        </form>

      </section>




 
      
      
      
      
      
      
      
      
      
      
      
      </div>
        
    )
}