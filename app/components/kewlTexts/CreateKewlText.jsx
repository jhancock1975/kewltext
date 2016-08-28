import React from 'react';
import KewlTextStore from './../../stores/KewlTextStore.jsx';
import {Grid, Row, Col} from 'react-bootstrap';
import Form from './Form.jsx';
import figlet from 'figlet';
import jQuery from 'jquery';

class CreateKewlText extends React.Component {
 constructor(props) {
   super(props);
   this.history = props.history;
   this.state = {};
   this.state.KewlText = {};
   this.state.error = '';
   this.handleInputLocation= this.handleInputLocation.bind(this);
   this.handleInputUpdated= this.handleInputUpdated.bind(this);
   this._formSubmit = this._formSubmit.bind(this);
 }

handleInputLocation(value) { 
 this.setState({ KewlText: value }); 
 }; 
 
handleInputUpdated(value) { 
 this.setState({ KewlText: value }); 
 }; 
 

_formSubmit(value) {
   KewlTextStore.addKewlText(value, this.history);
 }

useFiglet(){
  figlet.setjQuery(jQuery);
  figlet.defaults({fontPath: "/static/images/assets/fonts"});
   
  figlet.preloadFonts(["Standard", "Ghost"], ready);
   
  function ready(){
    console.log(figlet.textSync("ASCII"));
    console.log(figlet.textSync("Art", "Ghost"));
  }
 }
  
 render() {

   return (
     <Grid className="marginBottom">
        <Row>
          <Col md={12}>
            <h2>
              <b>Create KewlText {this.useFiglet()}</b>
            </h2>
            <hr></hr>
            <Form formSubmit={this._formSubmit} KewlText={this.state.KewlText}
              handleInputLocation = {this.handleInputLocation} handleInputUpdated = {this.handleInputUpdated}  />
          </Col>
        </Row>
      </Grid>
   )
 }
}

export default CreateKewlText;
