import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {

  serverElements = [{type :'bluprint' , name:'test', content :'server'}];
  //oggetto javascript coppie chiave valore

onServerAdded(serverData :{ServerName : string, ServerContent: string}) {
    this.serverElements.push({
      type: "server",
      name: serverData.ServerName,
      content: serverData.ServerContent
     });
  }

  onBlueprintAdded(blueprintData :{ServerName : string, ServerContent: string}) {
    this.serverElements.push({
      type: "blueprint",
      name: blueprintData.ServerName,
      content: blueprintData.ServerContent
    });
   }


}
