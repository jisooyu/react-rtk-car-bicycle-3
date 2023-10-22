import { useDispatch } from 'react-redux';
import { reset } from './store/actions';
import CarList from './components/CarList';
import BicycleList from './components/BicycleList';
import './styles.css';

function App() {
	const dispatch = useDispatch();
	const handleResetClick = () => {
		dispatch(reset());
	};

	return (
		<div className='container is-fluid'>
			<button
				onClick={() => handleResetClick()}
				className='button is-danger'
			>
				Reset Both Playlists
			</button>
			<CarList />
			<BicycleList />
		</div>
	);
}

export default App;
