import { FC } from 'react';

const cardLinearGradience = [
    'linear-gradient(180deg, #3D1C51 29.18%, rgba(103, 45, 139, 0.91) 100%)',

    'linear-gradient(180deg, #DF532A 34.91%, rgba(218, 91, 54, 0.74) 100%)',

    'linear-gradient(180deg, #062540 12.07%, rgba(26, 66, 100, 0.83) 100%)',
];

type FactCardProps = {
    cardNumber: number;
    title: string;
    subtitle?: string;
    link?: string;
};

const FactCard: FC<FactCardProps> = ({ cardNumber, title, subtitle, link }) => {
    return (
        <div
            className="shadow-card rounded-xl p-8 pt-12 text-white card"
            style={{
                background:
                    cardLinearGradience[
                        (cardNumber - 1) % cardLinearGradience.length
                    ],
            }}
        >
            <a
                className="w-full h-full"
                href={link}
                target="_blank"
                rel="noreferrer"
            >
                <div className="flex flex-col relative w-full h-full">
                    <div
                        className="pl-16 text-right font-axiforma text-base sm:text-lg tracking-wider"
                        style={{ color: '#E2CCCC' }}
                    >
                        {subtitle}
                    </div>
                    <div className=" border-r border-white flex-grow relative right-6 my-2 max-h-16" />
                    <div className="font-sanchez text-xl sm:text-2xl uppercase text-right tracking-wider whitespace-pre-wrap relative">
                        {title}
                    </div>
                    <div className="w-1/2 text-8xl md:text-9xl font-axiforma empty-text absolute bottom-8 md:bottom-0 left-0 leading-3">
                        {cardNumber}
                    </div>
                </div>
            </a>
            <style jsx>
                {`
                    .shadow-card {
                        box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16),
                            0 3px 6px rgba(0, 0, 0, 0.23);
                        transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
                    }
                    .shadow-card:hover {
                        box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25),
                            0 10px 10px rgba(0, 0, 0, 0.22);
                    }
                    .empty-text {
                        -webkit-text-fill-color: transparent;
                        -webkit-text-stroke-color: rgba(255, 255, 255, 0.6);
                        -webkit-text-stroke-width: 0.5px;
                        text-shadow: -8px 7px 4px rgba(0, 0, 0, 0.15);
                    }
                    .card {
                        height: 400px;
                        width: 450px;
                    }
                    @media screen and (max-width: 720px) {
                        .card {
                            height: 300px;
                            width: 350px;
                        }
                    }
                `}
            </style>
        </div>
    );
};

export default FactCard;
