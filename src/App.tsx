import countStore from './countStore';

function MyButton() {
  const { value, name } = countStore.useState('value', 'name');

  function handleClick() {
    countStore.setState({ value: value + 1 });
  }

  return (
    <button onClick={handleClick}>
      {name}: Clicked {value} times
    </button>
  );
}

function App() {
  return (
    <div>
      <MyButton />
      <MyButton />
    </div>
  );
}

export default App;
