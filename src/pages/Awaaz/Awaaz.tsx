import './Awaaz.scss'
import { Button, Checkbox, Input, Typography } from 'antd';
import logo from '../../assets/awaaz_logo.svg';

const Awaaz = () => {
	const { Title, Paragraph, Text } = Typography;
	return <div className="awaaz_container">
		<div className='awaaz_logo'>
		<div>
		<Text className='awaaz_heading'>Raise your AWAAZ,</Text>
		<p className='awaaz_subheading'>Write what do you feel, how do you feel and post it on Teachers Social Anonymously, for peer help</p>
          </div>
		  <div>
		  <img className='logo' src={logo} alt='Watermark' />
		  </div>
          
		</div>

		{
		<div className='awwaz_raise'>
			<div className='awwaz_compartment'>
			<Text>Confession Title</Text>
            <Input/>
			<Text>Confession Description</Text>
            <Input className="aawaz_input"/>
			<div className='awaaz_text'>
				<Checkbox />
				
				<Text >Post Confession Anonymously in Teacher Social for Peer Help</Text>
			</div>
			<div className='btn'>
				<Button className='awz_btn'>Submit</Button>
				</div>
			
			</div>
		</div>}

	</div>;
};

export default Awaaz;
