import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Configuration {
    baseUrl: string;
}

@Injectable()
export class AppConfig {
    public baseUrl: string = null;

    constructor(private http: HttpClient) { }

    public load() {
        return this.http.get('/assets/config.json').toPromise()
            .then((config: Configuration) => {
                console.log(config['baseUrl'])
                this.baseUrl = config.baseUrl;
            });
    }
}