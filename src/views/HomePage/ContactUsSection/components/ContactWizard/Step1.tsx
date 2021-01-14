import { Button, TextField, useWizard } from 'components';
import React from 'react';

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
