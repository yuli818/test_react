const Button = (props) => {
	return(
		<div style={{border: '1px solid #000000', width: '100px', height: '100px', textAlign: 'center'}} onClick={()=>props.func()}>
			<span>{props.name}</span>
			<br/>
			<span>{props.one+props.two}</span>
		</div>
	);
}

export default Button;