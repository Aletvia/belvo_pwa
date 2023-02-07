import axios from 'axios';
import { Injectable } from "@angular/core";

@Injectable({
	providedIn: "root"
})
export class credService {

    async getCredentials(): Promise<any>{
        const options = {
            method: 'POST',
            url: 'https://sandbox.belvo.com/api/token/',
            headers: {
            accept: 'application/json',
            'content-type': 'application/json',
            authorization: 'Basic OWRjMzJkM2YtOTFlMy00MTQ1LWFhZTktMTRhNWFjMTEyN2Q4OnlCZnFoUzZVZE1BaElLemp5IyNHRTNZWk5tSEhNakMtMmQ5bUtjeTdtT1RieFh5d0FVU1ojZFBYdHRDNkQ5U1c='
            },
            data: {
                id:'9dc32d3f-91e3-4145-aae9-14a5ac1127d8' , 
                password:'yBfqhS6UdMAhIKzjy##GE3YZNmHHMjC-2d9mKcy7mOTbxXywAUSZ#dPXttC6D9SW',
                scopes: 'read_institutions,write_links,read_links'
            }
        };
        const cred = await axios.request(options)
        return cred.data;
    }

}