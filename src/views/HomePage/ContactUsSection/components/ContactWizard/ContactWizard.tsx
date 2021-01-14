const ContactWizard = (): JSX.Element => {
    return (
        <div className="w-full h-full flex items-center justify-center custom-max-height max-w-4xl relative">
            <div className="absolute  bg-white opacity-50 w-full h-full z-10" />
            <div className="z-20">
                <h1>Lets Connect</h1>
            </div>
            <style jsx>{`
                .custom-max-height {
                    max-height: 520px;
                }
            `}</style>
        </div>
    );
};

export default ContactWizard;
