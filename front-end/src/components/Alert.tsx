type Props = {
	message: string;
	className: string;
};

const Alert = ({ message, className }: Props) => {
	return (
		<div className={"alert " + className} role="alert">
			{message}
		</div>
	);
};

export default Alert;
