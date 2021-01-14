import { Button, TextField } from 'components';
import React from 'react';

const Step1 = (): JSX.Element => {
    return (
        <div>
            <h1 className="py-8">Let&apos;s Connect</h1>
            <TextField name="email" fullWidth placeholder="Email*" required />
            <div className="flex justify-center">
                <Button
                    color="secondary"
                    rounded
                    className="text-white text-lg font-axiforma font-semibold px-8 py-4 rounded-lg mt-8"
                >
                    PROCEED
                </Button>
            </div>
        </div>
    );
};

export default Step1;
