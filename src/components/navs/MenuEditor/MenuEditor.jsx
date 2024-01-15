import './MenuEditor.css'
import PropTypes from 'prop-types';

export function MenuEditor({ setFormOption })
{
  const handleFormOptionChange = (newOption) => {
    setFormOption(newOption)
  }
  
    return (
        <div className='col-lg-1 d-flex flex-column align-items-center options'>
          <ul className='menu-editor mb-0'>
            <li className='d-flex flex-column align-items-center' style={{cursor: 'pointer'}} onClick={() => handleFormOptionChange('header')} >
              <img src="img/header-img.png" alt="" height={40} />
              <p className='text-menu'>Header</p>
            </li>
            <li className="line"></li>
            <li className='d-flex flex-column align-items-center ' style={{cursor: 'pointer'}} onClick={() => handleFormOptionChange('image')}>
              <img src="img/menu-img.png" alt="" height={40} />
              <p className='text-menu'>Image</p>
            </li>
            <li className="line"></li>
            <li className='d-flex flex-column align-items-center ' style={{cursor: 'pointer'}} onClick={() => handleFormOptionChange('moves')}>
              <img src="img/pokeball.png" alt="" height={40} />
              <p className='text-menu'>Moves</p>
            </li>
            <li className="line"></li>
            <li className='d-flex flex-column align-items-center ' style={{cursor: 'pointer'}} onClick={() => handleFormOptionChange('weak')}>
              <img src="img/weak-img.png" alt="" height={40} />
              <p className='text-menu'>Weak</p>
            </li>
            <li className="line"></li>
            <li className='d-flex flex-column align-items-center ' style={{cursor: 'pointer'}} onClick={() => handleFormOptionChange('footer')} >
              <img src="img/footer-img.png" alt="" height={40} />
              <p className='text-menu'>Footer</p>
            </li>
          </ul>
        </div>
      )
}

MenuEditor.propTypes = {
  setFormOption: PropTypes.func.isRequired
};