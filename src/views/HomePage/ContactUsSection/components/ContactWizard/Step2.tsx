import { Button, TextField, useWizard } from 'components';
import React from 'react';

const Step2 = (): JSX.Element => {
    const {
        register,
        errors,
        formState: { isSubmitting },
    } = useWizard();

    return (
        <div>
            <TextField
                name="subject"
                fullWidth
                placeholder="Subject*"
                required
                ref={register}
                error={Boolean(errors?.subject?.message)}
                helperText={errors?.subject?.message || ' '}
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
                error={Boolean(errors?.message?.message)}
                helperText={errors?.message?.message || ' '}
            />
            <div className="flex justify-center">
                <Button
                    color="secondary"
                    rounded
                    type="submit"
                    loading={isSubmitting}
                    disabled={isSubmitting}
                    className="text-white text-lg font-axiforma font-semibold px-8 py-4 rounded-lg mt-8"
                >
                    SUBMIT
                </Button>
            </div>
        </div>
    );
};

export default Step2;
