import dva from '../dva/';

const connectDva = (modal, opts) => {
    const app = dva();

    app.model(modal);
    app.start(opts);
    return app;
};

export default connectDva;
