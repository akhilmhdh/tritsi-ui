import { Container } from 'components';
import {
    InstagramCircle,
    LinkedinCircle,
    YoutubeCircle,
} from 'components/icons';
import { AiFillTwitterCircle } from 'react-icons/ai';

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
                    <a
                        href="https://www.instagram.com/teamtritsi/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <InstagramCircle className="mr-5" />
                    </a>
                    <a
                        href="https://twitter.com/TTritsi"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <AiFillTwitterCircle size={32} className="mr-5" />
                    </a>
                    {false && (
                        <a>
                            <LinkedinCircle className="mr-5" />
                        </a>
                    )}
                    {false && (
                        <a>
                            <YoutubeCircle />
                        </a>
                    )}
                </div>
            </div>
        </Container>
    );
};

export default Footer;
