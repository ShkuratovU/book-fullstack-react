class ProductList extends React.Component {
  render() {
    return (
      // React.createElement('div', {className: 'ui items'},
      // React.createElement('p', null, 'Hello, friend! I am a basic React component.') )
      <div className='ui unstackable items'>
        Hello, friend! I am a basic React component.
      </div>
    );
  }
}

ReactDOM.render(
  <ProductList />,
  document.getElementById('content'),
  ()=>{console.log("rendered")}
);
