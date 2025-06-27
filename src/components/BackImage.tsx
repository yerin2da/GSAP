import {JSX} from "react";

type Props = {
    imageSrc: string;
    wrapClassName?: string;
    imgClassName?: string; // 이건 배경 방식에선 거의 안 씀
    title?: string;
    onClick?: () => void;
};

export default function BackImaqe({ imageSrc = '', wrapClassName = '', title, onClick}: Props): JSX.Element {
    return (
        <div
            onClick={onClick}
            className={`w-full h-full bg-center bg-cover rounded-md cursor-pointer ${wrapClassName}`}
            style={{
                backgroundImage: `url(${process.env.PUBLIC_URL}/img/${imageSrc})`,
            }}
            title={title || '이미지'}
            aria-label={title || '이미지'}
        />
    );
}
