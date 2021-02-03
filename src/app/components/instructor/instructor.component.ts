import { Component, OnInit } from '@angular/core';

interface Instructor   
{   
  name: string;
  subject: string;
  experience: number;
  personality: string;
  other: string; 
  principalColor: string;
  secondColor: string;     
} 

@Component({
  selector: 'app-instructor',
  templateUrl: './instructor.component.html',
  styleUrls: ['./instructor.component.css']
})

export class InstructorComponent implements OnInit {
  color: string;
  secondColor: string;
  expandView = false;
  elementItem: number

  instructors: Instructor[] =[  
    {name:'Mariam Schumm', subject: 'Mathematics', experience: 5, personality: 'Energetic', other: 'Energetic', principalColor: '', secondColor: ''},  
    {name:'Lupe Reynolds', subject: 'History, Geography', experience: 3, personality: 'Friendly', other: 'Energetic', principalColor: '', secondColor: ''},  
    {name:'Bianka Upton', subject: 'Law', experience: 4, personality: 'Political', other: 'Energetic', principalColor: '', secondColor: ''},  
    {name:'Natite Gleichner', subject: 'History, Geographt', experience: 5, personality: 'Friendly', other: 'Energetic', principalColor: '', secondColor: ''},
    {name:'Rando Randomino', subject: 'Mathematics', experience: 7, personality: 'Energetic', other: 'Energetic', principalColor: '', secondColor: ''},  
    {name:'Randa Rendin', subject: 'Law, International studies', experience: 1, personality: 'Political', other: 'Energetic', principalColor: '', secondColor: ''},  
    {name:'Random The Third', subject: 'Mathematics', experience: 3, personality: 'Friendly', other: 'Energetic', principalColor: '', secondColor: ''} 
  ]

  constructor() { }

  ngOnInit(): void {
    this.instructors.forEach(instructor => {
      instructor.principalColor = this.changeColor();
      console.log(instructor.name, 'instructor name');
      instructor.secondColor = this.selectSecondColor(this.elementItem);;
    });
  }

  changeView() {
    console.log('changeView');
    this.expandView = !this.expandView;
  }

  changeColor(){
      var items = ["#D4DBEC", "#ECE6D4", "#F7D3E3", "#E6D4EC", "#D1E5E9"];
      this.elementItem = Math.floor(Math.random() * items.length);
      console.log(this.elementItem, 'number of item')
      var colour = items[this.elementItem];
      console.log(colour)
      this.color = colour;
      return this.color;
  }
  
  selectSecondColor(elementItem: number) {
    switch (elementItem) {
      case 0:
        return '#556FB5'
      case 1:
        return '#B59B55'
      case 2:
        return '#E4508F'
      case 3:
        return '#CDAADA'
      case 4:
        return '#4A98A8'
    }
  }
}
