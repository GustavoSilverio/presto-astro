import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import type { Drawer } from "../types/utils"

export const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs))

export const closeDrawerByButtonId = (buttonId: string, drawer: Drawer) => {
	const button = document.getElementById(buttonId) as HTMLButtonElement

	button.addEventListener("click", () => {
		drawer.close()
	})
}
