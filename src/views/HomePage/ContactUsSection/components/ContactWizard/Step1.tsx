import { Button, TextField, useWizard } from 'components';

//https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwjo2J-3w5vuAhXBwjgGHU3sBjsQtwIwBnoECAsQAg&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DsmkSexNRdHw&usg=AOvVaw0BCXsvAsXpKbCHd88jpWnM

const Step1 = (): JSX.Element => {
    const { register } = useWizard();

    return (
        <div>
            <h1 className="py-8 w-full text-center">Let&apos;s Connect</h1>
            <TextField
                name="email"
                fullWidth
                placeholder="Email*"
                required
                ref={register}
            />
            <div className="flex justify-center">
                <Button
                    color="secondary"
                    rounded
                    type="submit"
                    className="text-white text-lg font-axiforma font-semibold px-8 py-4 rounded-lg mt-8"
                >
                    PROCEED
                </Button>
            </div>
        </div>
    );
};

export default Step1;
