import './App.css';

import Button from './Ui/Button';
import Logo from './Ui/Logo';

function App() {
	
	return(
		<>
		<Logo/>
		<div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-around'}}>
			<Button name="Кнопка 1" one={20} two={150} func={()=>{alert('123')}}/> !!!
			<Button name="Кнопка 2"/>
		</div>
		</>
	);
}


export default App;
