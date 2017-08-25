export interface AppComponent {
    name: string;
    routeLink: string;
}

export interface AppComponentGroup {
    name: string;
    components: AppComponent[];
}
