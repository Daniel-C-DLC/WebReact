import React from 'react';
import '../hojas-de-estilo/Nav.css'
//import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitch } from '@fortawesome/free-brands-svg-icons'


function Nav(props) {
    return (
        <div>
            <div>
                <Container>
                    <div className='menu'>
                        <FontAwesomeIcon icon={faTwitch} />
                    </div>
                </Container>
                <div className='menu-despegable'>
                    <ul className='menu-list'>
                        <li><a href="#">Item1</a></li>
                        <li><a href="#">Item2</a></li>
                        <li><a href="#">Item3</a></li>
                        <li><a href="#">Item4</a></li>
                    </ul>
                </div>
            </div>
            <div className='nav'>

                <ul>
                    <li>
                        <a href='#'>Item1</a>
                    </li>
                    <li>
                        <a href='#'>Item2</a>
                    </li>
                    <li>
                        <a href='#'>Item3</a>
                    </li>
                    <li>
                        <a href='#'>Item4</a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Nav;