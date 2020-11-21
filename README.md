# UI with ReactJS
## JSX expressions need to have one parent element
#### This code envokes compiler error:
```
return <h1>Hello World</h1><button>OK</button>
```
#### This code works as there is div parent element:
```
return (
  <div>
    <h1>Hello World</h1><button>OK</button>
  </div>
 );
```

## Condition Statements
#### true && 'Hi' --> 'Hi'
#### arrow funciton incrementLevel = () => {..} only has this keyword with access to class state
```
import React, { Component } from 'react';

export default class Greetings extends Component {

     state = {
             name: 'Artur',
             items: ['item1','item2','item3'],
             level: 0
     };
     
     renderItems() {
              if (this.state.items.lengt === 0) return <p>There are no items</p>;
              return <ul>{this.state.items.map(item => <li key={item}>{item}</li>)}</ul>;
     };
     
     formatName() {
             const { name } = this.state;
             return name === 'Artur' ? 'Sir' : name;
     };
     
     handleOk() {
          console.log('Request submitted');
     }
     
     incrementLevel = () => {
          this.setState({ level: this.state.level + 1 })
     };
     
     render() {
         return (
             <div>
                  <h1>Hi {this.state.name}</h1>
                  <h1>Hi {this.formatName()}</h1>
                  <p>Level: {this.state.level}</p>
                  {this.state.items.length === 0 && "Please create a new item"}
                  {this.renderItems()}
                  <button onClick={this.handleOk}>OK</button>
                  <button onClick={this.incrementLevel}>Level UP!</button>
             </div>
         )
     };
     

}
```
