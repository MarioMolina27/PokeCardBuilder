import { PokemonCard } from '../components/card/PokemonCard.jsx';
import './Home.css';
import { Link } from "react-router-dom";
import {useNavbar} from '../hooks/useNavbar.js'

export const Home = () => {
    const {setActiveLink} = useNavbar()

    let pokemon = {
      pokemonName: "Piplup",
      pokemonHp: 70,
      stage: "BASIC",
      type: "Water",
      preevolution :{
        preName: "",
        imageUrl: null,
      },
      pokemonNum: 393,
      pokemonImg: "img/piplup.jpg",
      pokemonInfo: {
          category: "Penguin Pokemon",
          height: 10.4,
          weight: 11.5
      },
      pokemonMoves: [
          {
            name: "Peck",
            type: ["Normal"],
            damage: 10,
            effect: ""
          },
          {
            name: "Wave Splash",
            type: ["Normal","Water"],
            damage: 20,
            effect: ""
          }
        ],
        pokemonWeakness: {
            type: "Electric",
            multiplier: 2
        },
        pokemonResistance: {
            type: "",
            multiplier: null
        },
        pokemonRetreat: 2,
        pokemonFooter: {
          illustrator: "Shibuzoh.",
          symbol: "img/symbol.png",
          number: "32/156",
          symbol2: "img/point.png",
          copyright: "2018 Pokemon",
          additionalInfo: "Because it is very proud, it hates accepting food from people. Its thick down guards it from cold."
        }  
  }

    const handleLinkClick = (link) => {
        setActiveLink(link)
    };

    return (
      <div className='container d-flex align-items-center flex-grow-1'>
        <div className='row d-flex align-items-center'>
          <div className='col-md-6 overflow-hidden'>
            <h2 className='title-home mb-4 display-2 drop-in'>PokeCardBuilder</h2>
            <p className='text-home mb-4 drop-in-2'>Create personalized Pokemon cards effortlessly with our intuitive Pokemon Card Builder. Customize Pokemon types, movements, and images to craft unique cards. Utilizing Bootstrap for responsiveness and React for interactivity, the application ensures a seamless editing experience. Export your creations as high-quality JPGs to share or print. Dive into the world of limitless possibilities and showcase your Pokemon creativity today!</p>
  
            <Link to="/editor" onClick={() => handleLinkClick("/editor")} className='btn btn-primary rounded-pill btn-text drop-in-2'>EDITOR</Link>
          </div>
          <div className='pokemon-card-container col-md-6 d-flex justify-content-center'>
            <PokemonCard pokemon={pokemon} />
          </div>
        </div>
      </div>
    );
}

export default Home;