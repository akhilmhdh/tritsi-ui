import { Container } from 'components';
import { LinkedinCircle, YoutubeCircle } from 'components/icons';
import { FaFacebook, FaYoutube } from 'react-icons/fa';
import { AiFillTwitterCircle } from 'react-icons/ai';

const Footer = () => {
    return (
        <Container>
            <hr />
            <div className="flex justify-between items-center py-11">
                <div className="py-4">
                    <span className="font-axiforma font-medium">
                        © 2021 Tritsi. All rights reserved.
                    </span>
                </div>
                <div className="flex justify-end">
                    <FaFacebook size={32} className="mr-5" />
                    <AiFillTwitterCircle size={32} className="mr-5" />
                    <LinkedinCircle className="mr-5" />
                    <YoutubeCircle />
                </div>
            </div>
        </Container>
    );
};

export default Footer;
