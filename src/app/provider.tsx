"use client";


import { store } from "@/store/store";
import { Provider } from "react-redux";
import { NextUIProvider } from "@nextui-org/react";

export function Providers({ children }: { children: React.ReactNode }) {
	return <Provider store={store}>
		<NextUIProvider>
			{children}
		</NextUIProvider>

	</Provider>;
}
