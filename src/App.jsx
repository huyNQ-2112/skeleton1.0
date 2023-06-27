import { Button } from 'antd';
import React from 'react';
import './App.scss';
import Test from 'components/Test';

const App = () => {
	return (
		<>
			<div className='bg-red-600'>
				test
			</div>
			<Button type="primary">Primary Button</Button>

			<img src='/images/meo.jpg' alt='' width={300} height={300} />

			<Test />
		</>
	);
}

export default App;
