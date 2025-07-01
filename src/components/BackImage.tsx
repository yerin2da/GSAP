import {JSX} from "react";

type Props = {
    imageSrc: string;
    wrapClassName?: string;
    title?: string;
    onClick?: () => void;
};

export default function BackImaqe({ imageSrc = '', wrapClassName = '', title, onClick}: Props): JSX.Element {
    return (
        <div
            onClick={onClick}
            className={`w-full h-full bg-center bg-cover rounded-sm ${wrapClassName}`}
            style={{
                backgroundImage: `url(${process.env.PUBLIC_URL}/img/${imageSrc})`,
            }}
            title={title || '이미지'}
            aria-label={title || '이미지'}
        />
    );
}
