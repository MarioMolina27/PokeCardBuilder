import './Editor.css';
import html2canvas from 'html2canvas';
import { useRef, useEffect, useState } from 'react';
import { PokemonCard } from '../components/card/PokemonCard.jsx';
import { MenuEditor } from '../components/navs/MenuEditor.jsx';
import { HeaderForm } from '../components/forms/HeaderForm.jsx';
import { usePokemon } from '../hooks/usePokemon.js';
import { useNavbar } from '../hooks/useNavbar.js';
import { ImageForm } from '../components/forms/ImageForm.jsx';
import { FooterForm } from '../components/forms/FooterForm.jsx';
import { WeakForm } from '../components/forms/WeakForm.jsx';
import { MovesForm } from '../components/forms/MovesForm.jsx';



const Editor = () => {
    
    const {setActiveLink} = useNavbar()
    const [formOption, setFormOption] = useState('no-one')
    const [move, setMove] = useState('') //state for moving animation
  

    useEffect(() => {
        setActiveLink('/editor');
    }, []);

    const handleFormOptionChange = (newFormOption) => {
      if(newFormOption !== 'no-one' && formOption === 'no-one'){
        setMove('left')
        setTimeout(() => {
          setMove('')
          setFormOption(newFormOption)
        }, 500)
      }
      else if(newFormOption === 'no-one' && formOption !== 'no-one'){
        setMove('right')
        setTimeout(() => {
          setMove('')
          setFormOption(newFormOption)
        }, 500)
      }
      else {
        setFormOption(newFormOption)
      }
    };
    
    const pokemonCardRef = useRef(null)
    const {pokemon} = usePokemon()

    const handleDownloadImage = async () => {
        const element = pokemonCardRef.current
        const canvas = await html2canvas(element)
    
        const data = canvas.toDataURL('image/jpg')
        const link = document.createElement('a')
  
        if (typeof link.download === 'string') {
          link.href = data
          link.download = 'image.jpg'
    
          document.body.appendChild(link)
          link.click()
          document.body.removeChild(link)
        } else {
          window.open(data)
        }
    };

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