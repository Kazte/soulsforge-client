import { Switch, SwitchProps } from "@nextui-org/react";
import { SunIcon, MoonIcon } from "../../icons";
import { useDispatch, useSelector } from "react-redux";
import { AppStore } from "../../redux/store";
import { toggleDarkMode } from "../../redux/states/page";

export default function DarkModeSwitch(props: SwitchProps) {

	const pageState = useSelector((state: AppStore) => state.page);
	const dispatch = useDispatch();

	const handleDarkMode = () => {
		dispatch(toggleDarkMode());
	}

	return (
		<Switch
			{...props}
			defaultSelected={!pageState.darkMode}
			size="sm"
			color="success"
			startContent={<SunIcon />}
			endContent={<MoonIcon />}
			onChange={handleDarkMode}
		/>
	);
}
