import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Configuration {
    apiUrl: string;
}

@Injectable()
export class AppConfig {
    public apiUrl: string = null;

    constructor(private http: HttpClient) { }

    public load() {
        return this.http.get('./config.json').toPromise()
            .then((config: Configuration) => {
                console.log(config['apiUrl'])
                this.apiUrl = config.apiUrl;
            });
    }
}
