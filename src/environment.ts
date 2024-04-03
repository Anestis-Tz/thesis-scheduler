export const environment = {
    apiUrl: 'http://localhost:3000',
    production: false,
    appVersion: "v0.0.1",
    features: {
        appointments: {
            enabled: true,
        },
        classRegistration: {
            enabled: true,
            isRegistrationOpen: true,
        }
    }
};