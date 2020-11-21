# UI-with-ReactJS
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
