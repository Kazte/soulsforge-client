import { Button, extendVariants } from "@nextui-org/react";

export const KButton = extendVariants(Button, {
	defaultVariants: {
		disableRipple: 'true',
	},
})