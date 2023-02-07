import axios from 'axios';
import { Injectable } from "@angular/core";

@Injectable({
	providedIn: "root"
})
export class bankService {

    async getBanks(): Promise<any>{
        
        const options = {
            method: 'GET',
            url: 'https://sandbox.belvo.com/api/institutions/?page=1',
            headers: {
            accept: 'application/json',
            'content-type': 'application/json',
            authorization: 'Basic OWRjMzJkM2YtOTFlMy00MTQ1LWFhZTktMTRhNWFjMTEyN2Q4OnlCZnFoUzZVZE1BaElLemp5IyNHRTNZWk5tSEhNakMtMmQ5bUtjeTdtT1RieFh5d0FVU1ojZFBYdHRDNkQ5U1c='
            },
            data: {save_data: true}
        };
        
        const banks = await axios.request(options)
        console.log(banks.data)
        return banks.data;
    }

}