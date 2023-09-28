import { useNavigate } from "react-router-dom";

let instance = useNavigate();

const navigate = (param) => {
	instance(param);
}