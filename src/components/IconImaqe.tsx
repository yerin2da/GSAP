import {JSX} from "react";

interface Props {
    imageSrc: string;
    wrapClassName?: string;
    imgClassName?: string;
    title: string;
    onClick?: () => void;
}
export default function IconImaqe({imageSrc='', wrapClassName='', imgClassName='', title, onClick}:Props): JSX.Element {
    return (
        <div className={`${wrapClassName} overflow-hidden`}>
            <img src={`${process.env.PUBLIC_URL}/img/${imageSrc}`}
                 alt={title + "이미지" || "이미지"}
                 title={title + "이미지" || "이미지"}
                 onClick={onClick}
                 className={`hover:scale-110 transition-transform duration-500 object-fill
                            ${imgClassName || ''} 
                        `}
            />
        </div>

    );
};