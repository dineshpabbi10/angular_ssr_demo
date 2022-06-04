import { Component, OnInit } from "@angular/core";
import { AppService } from "./services/app.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
})
export class AppComponent implements OnInit{
  title = "angular-dashboard-page";
  public fact :any = null;
  public loading = true;
  constructor(private service:AppService){}

  ngOnInit(): void {
    this.service.getCatFacts()
    .subscribe((data:any)=>{
      this.fact = data.fact;
      this.loading = false
    })
  }


}
