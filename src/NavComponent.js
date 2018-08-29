import React from 'react';
import PageHeader from 'react-bootstrap/lib/PageHeader';
import Button from 'react-bootstrap/lib/Button';



const NavComponent = props =>
<PageHeader className="title">
      Recipe Box
    <Button className="addButton" bsStyle="primary" onClick={()=> props.open("showAdd", props.currentIndex)}>Add Recipe</Button>

</PageHeader>;
export default NavComponent;