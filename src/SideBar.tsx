import { Container } from 'react-bootstrap';
import './SideBar.scss';
import { GoHome } from 'react-icons/go';
import { GoSearch } from 'react-icons/go';
import { VscLibrary } from 'react-icons/vsc';
import { RiBookmarkLine } from 'react-icons/ri';
const SideBar = () => {
  

  return (
<Container className='sidebar'>
  <div className="d-flex flex-column align-items-center justify-content-center gap-4 first ">
 <GoHome color='white' size='1.5rem'/>
<GoSearch  color='white' size='1.5rem'/>
  </div>

  <div className="d-flex flex-column align-items-center gap-4 second">
    <VscLibrary color='white' size='1.5rem'/>
    <RiBookmarkLine color='white' size='1.5rem'/>
  </div>
</Container>
  )
}

export default SideBar