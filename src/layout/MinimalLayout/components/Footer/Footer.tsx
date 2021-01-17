import { Container } from 'components';
import {
    InstagramCircle,
    LinkedinCircle,
    YoutubeCircle,
} from 'components/icons';
import { AiFillTwitterCircle } from 'react-icons/ai';

const FooterIcons = [
    {
        href: 'https://www.instagram.com/teamtritsi/',
        icon: <InstagramCircle className="mr-5" />,
    },
    {
        href: 'https://twitter.com/TTritsi',
        icon: <AiFillTwitterCircle size={32} className="mr-5" />,
    },
    {
        href: 'https://www.linkedin.com/company/tritsi',
        icon: <LinkedinCircle className="mr-5" />,
    },
    {
        href: '#',
        icon: <YoutubeCircle />,
        hidden: true,
    },
];

const Footer = (): JSX.Element => {
    return (
        <Container>
            <hr />
            <div className="flex flex-col md:flex-row justify-between items-center py-11">
                <div className="py-4">
                    <span className="font-axiforma font-medium">
                        © 2021 Tritsi. All rights reserved.
                    </span>
                </div>
                <div className="flex justify-end">
                    {FooterIcons.map(({ hidden, href, icon }, key) => {
                        if (hidden) return null;
                        return (
                            <a
                                href={href}
                                target="_blank"
                                rel="noreferrer"
                                key={`footer-icon-${key}`}
                            >
                                {icon}
                            </a>
                        );
                    })}
                </div>
            </div>
        </Container>
    );
};

export default Footer;
