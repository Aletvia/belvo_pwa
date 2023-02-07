import axios from 'axios';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-widget-connect',
  templateUrl: './widget-connect.component.html',
  styleUrls: ['./widget-connect.component.css']
})
export class WidgetConnectComponent implements OnInit {

    constructor (private router: Router) {}
    title = 'widget-angular';
    access = ''
    // implemented method
    ngOnInit(): void {
      this.loadScript('https://cdn.belvo.io/belvo-widget-1-stable.js');
    }

    async createWidget() {
      // Function to call your server-side to generate the access_token and retrieve the your access token
      async function getAccessToken() {
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
      return cred.data
      }
      const successCallbackFunction = (link: any, institution: any) => {
          // Do something with the link and institution,
          // such as associate it with your registered user in your database.
          window.location.href = `/transactions/${link}`
      }
      const onExitCallbackFunction = (data: any) => {
          // Do something with the exit data.
      }
      const onEventCallbackFunction = (data: any) => {
          // Do something with the exit data.
      }
  
      const config = {
  
          // Add your startup configuration here.
  
          callback: (link: any, institution: any) => successCallbackFunction(link, institution),
          onExit: (data: any) => onExitCallbackFunction(data),
          onEvent: (data: any) => onEventCallbackFunction(data)
      }
      const {access} = await getAccessToken()
      // @ts-ignore
      window.belvoSDK.createWidget(access, config).build();
  }

    loadScript(src: string) {
      let node = document.createElement('script');
      node.src = src;
      node.type = 'text/javascript';
      node.async = true;

      // Assign the callback which will create the Widget
      node.onload = this.createWidget;
      document.getElementsByTagName('head')[0].appendChild(node);
  }
}
