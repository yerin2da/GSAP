interface TailButtonProps{
    caption: React.ReactNode;//문자든 아이콘이든 뭐든 React 안에서 쓸 수 있는 거 다 받을 수 있음
    handleClick?: () => void;
    disabled?: boolean;
    className?: string;
    bcolor?:string;
}

export default function TailButton({caption, bcolor, handleClick,
                                       disabled=false, className=""}: TailButtonProps) {//클래스네임이 없을경우 undefined가 될 수 있어서
                                                                                    // 빈 문자열 ""을 넣어 오류 방지
    //타입은 optional이지만, JS에서는 undefined도 truthy/falsy 계산 등에 영향을 주기 때문에 타입설정 후에도 한 번 더 써 줌.

    return (
        <button className={`px-3 py-2 font-bold text-xl rounded-sm hover:bg-gray-200 transition
            ${className}
            ${bcolor} 
            ${disabled ? 'opacity-10 cursor-default' : 'cursor-pointer'}
        `}
                onClick={handleClick}
                disabled={disabled}
        >
            {caption}
        </button>
    );
};
