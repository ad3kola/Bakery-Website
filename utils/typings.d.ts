import { StaticImageData } from "next/image";
import { ForwardRefExoticComponent, RefAttributes, SVGProps } from "react";

export type TopMenuContentProps = {
	image: StaticImageData;
	title: string;
	desc: string;
	ingredients: string[],
	orders: number;	
}
interface List {
	name: string;
	desc: string;
}
export type FeaturesProps = {
	image: StaticImageData;
	name: string;
} 
export type BakeryProps = {
	Icon: ForwardRefExoticComponent<Omit<SVGProps<SVGSVGElement>>>;
	title: string;
	desc: string;
}
export type FooterProps = {
	head: string;
	list: string[];
}