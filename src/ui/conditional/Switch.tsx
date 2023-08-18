import React from "react";
import Case from "./Case";
import Default from "./Default";

export interface Props {
	children?: React.ReactNode;
}

export default function Switch({ children }: Props) {
	let matchChild: React.ReactNode = null;
	let defaultCase: React.ReactNode = null;

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	React.Children.forEach(children, (child: any) => {
		if (!matchChild && child.type == Case) {
			const { condition } = child.props;

			const conditionResult = Boolean(condition);

			if (conditionResult) {
				matchChild = child;
			}
		} else if (!defaultCase && child.type == Default) {
			defaultCase = child;
		}
	});

	return matchChild ?? defaultCase ?? null;
}



