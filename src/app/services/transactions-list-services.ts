import axios from 'axios';
import { Injectable } from "@angular/core";

@Injectable({
	providedIn: "root"
})
export class trasnsactionsService {

    async getTrasnsactions(uuid:string): Promise<any>{
        
        const options = {
            method: 'GET',
            url: 'https://sandbox.belvo.com/api/transactions/?page=1&link='+uuid,
            headers: {
            accept: 'application/json',
            'content-type': 'application/json',
            authorization: 'Basic OWRjMzJkM2YtOTFlMy00MTQ1LWFhZTktMTRhNWFjMTEyN2Q4OnlCZnFoUzZVZE1BaElLemp5IyNHRTNZWk5tSEhNakMtMmQ5bUtjeTdtT1RieFh5d0FVU1ojZFBYdHRDNkQ5U1c='
            },
        };
        
        const trasnsactions = await axios.request(options)
        console.log(trasnsactions.data)
        return trasnsactions.data;
    }

}