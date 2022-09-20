import Store from './store';

type CountState = {
  value: number;
  name: string;
};

const countStore = new Store<CountState>({
  value: 0,
  name: 'Counter',
});

export default countStore;
