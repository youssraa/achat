import React from 'react'
import {Card  , Row ,Col} from 'react-bootstrap'
import '../styles/Carte.css';
import user from '../styles/images/user.jpg'
import demande from '../styles/images/demande.jpg'
import Achat from '../styles/images/Achat.jpg'
export default function Carte() {
    return (
        <div className="carte">
        <Row>
        <Col>
           <Card style={{ width: '18rem' }} className="menu-carte-bleu">
           <div class="overlay-bleu">
    <div class="text">Gérer les comptes</div>
  </div>
  <Card.Img variant="top" src={user} />

</Card> 
</Col>
        <Col>
           <Card style={{ width: '18rem' }} className="menu-carte-orange">
           <div class="overlay-orange">
    <div class="text">Valider les commandes</div>
  </div>
  <Card.Img variant="top" src={Achat} />
</Card> 
</Col>
        <Col>
           <Card style={{ width: '18rem' }} className="menu-carte-vert">
           <div class="overlay-vert">
    <div class="text">Gérer les notification</div>
  </div>
  <Card.Img variant="top" src={demande} />

</Card> 
</Col>
</Row>
<Row>
        <Col>
           <Card style={{ width: '18rem' }} className="menu-carte-purple">
           <div class="overlay-purple">
    <div class="text">Gérer les Factures</div>
  </div>
  <Card.Img variant="top" src={user} />

</Card> 
</Col>
</Row>
        </div>
    )
}
