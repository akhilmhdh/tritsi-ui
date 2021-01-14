import { Button, TextField, useWizard } from 'components';
import React from 'react';

const Step2 = (): JSX.Element => {
    const { register } = useWizard();

    return (
        <div>
            <TextField
                name="subject"
                fullWidth
                placeholder="Subject*"
                required
                ref={register}
            />
            <TextField
                name="message"
                fullWidth
                placeholder="Your message..."
                required
                multiline
                rows={5}
                ref={register}
                className="mt-8"
            />
            <div className="flex justify-center">
                <Button
                    color="secondary"
                    rounded
                    type="submit"
                    className="text-white text-lg font-axiforma font-semibold px-8 py-4 rounded-lg mt-8"
                >
                    SUBMIT
                </Button>
            </div>
        </div>
    );
};

export default Step2;
