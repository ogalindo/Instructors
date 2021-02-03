import { Component, OnInit } from '@angular/core';

interface Item   
{   
  name: string;      
} 

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})




export class HeaderComponent implements OnInit {

  items: Item[] =[  
    {name:'Instructors'},  
    {name:'Subjects'},
    {name:'Calendar'},
    {name:'Students'}
  ]
  elementClicked: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  onClickOption(e){
    this.elementClicked = e.target.innerHTML.toString().trim();
    console.log(this.elementClicked, 'element');
  }

  isSelected(item: string) {
    if (item.trim() === this.elementClicked.trim()) {
      console.log('selected true');
      return true;
    } else {
      console.log('selected false');
      return false;
    }
  }
  
  
}
