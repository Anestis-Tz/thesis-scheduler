export const environment = {
    apiUrl: 'http://localhost:3000',
    production: false,
    appVersion: "v0.0.1",
    features: {
        appointments: {
            enabled: false,
        },
        classRegistration: {
            enabled: true,
            isRegistrationOpen: true,
        },
        sidebar: {
            iconsEnabled: false,
            hasSidebar: false,
            hasSidebarSimple: false
        },
        footer: {
            hasFooter: false
        },
    }
};