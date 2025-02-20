import { Rings } from "react-loader-spinner";
const Loader = () => {
	return (
		<Rings
			height="30"
			width="30"
			color="white"
			ariaLabel="tail-spin-loading"
			radius="10"
			wrapperStyle={{}}
			wrapperClass=""
			visible={true}
		/>
	);
}; 
export default Loader;
