import { forwardRef, InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	title: string;
	errorDiv?: string;
	errorMsg?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
	({ title, errorDiv, errorMsg, ...rest }, ref) => {
		return (
			<div className="mb-3">
				<label htmlFor={rest.name} className="form-label">
					{title}
				</label>
				<input
					{...rest}
					className={`form-control ${rest.className}`}
					id={rest.name}
					ref={ref}
				/>
				<div className={errorDiv}>{errorMsg}</div>
			</div>
		);
	},
);

export default Input;
