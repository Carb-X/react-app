import countStore from './countStore';

function MyButton() {
  const [count] = countStore.useState('value');

  function handleClick() {
    countStore.setState({ value: count + 1 });
  }

  return <button onClick={handleClick}>Clicked {count} times</button>;
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
