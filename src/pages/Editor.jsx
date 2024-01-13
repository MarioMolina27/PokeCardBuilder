import './Editor.css';
import './Forms.css'
import { useRef, useEffect } from 'react';
import { PokemonCard } from '../components/card/PokemonCard.jsx';
import { MenuEditor } from '../components/navs/MenuEditor.jsx';
import { HeaderForm } from '../components/forms/HeaderForm.jsx';
import { usePokemon } from '../hooks/usePokemon.js';
import { useNavbar } from '../hooks/useNavbar.js';
import { ImageForm } from '../components/forms/ImageForm.jsx';
import { FooterForm } from '../components/forms/FooterForm.jsx';
import { WeakForm } from '../components/forms/WeakForm.jsx';
import { MovesForm } from '../components/forms/MovesForm.jsx';
import { useDownloadImage } from '../hooks/useDownloadImage.js';
import { useFormsNavigation } from '../hooks/useFormsNavigation.js';



const Editor = () => {
    
    const {setActiveLink} = useNavbar()//state for moving animation
    const pokemonCardRef = useRef(null)
    const {pokemon} = usePokemon()
    const handleDownloadImage = useDownloadImage(pokemonCardRef);
    const { formOption, move, handleFormOptionChange } = useFormsNavigation();
  
    useEffect(() => {
        setActiveLink('/editor');
    }, []);

    
    const renderForms = () => {
        switch (formOption) {
          case 'header':
            return <HeaderForm setFormOption={handleFormOptionChange} move={move} />
          case 'image':
            return <ImageForm setFormOption={handleFormOptionChange} move={move} />
          case 'footer':
            return <FooterForm setFormOption={handleFormOptionChange} move = {move} />
          case 'weak':
            return <WeakForm setFormOption={handleFormOptionChange} move = {move} />
          case 'moves':
            return <MovesForm setFormOption={handleFormOptionChange} move = {move} />
          default:
            return null
        }
      };

    return (
        <div className='container d-flex align-items-center justify-content-center flex-grow-1'>
            <div className={`row w-100 h-100 d-flex align-items-center justify-content-center ${move === 'left' ? ' move-element move-left' : move === 'right' ? ' move-element move-right' : ''}`}>
                <div className='col-lg-3 d-flex flex-column align-items-center justify-content-center'>
                    <div ref={pokemonCardRef}>
                        <PokemonCard pokemon={pokemon} />
                    </div>
                    <button className='btn btn-primary rounded-pill btn-text-editor w-100' onClick={handleDownloadImage}>SAVE</button>
                </div>
                <MenuEditor setFormOption={handleFormOptionChange} />
                {renderForms()}
            </div>
        </div>
    );
}

export default Editor;