import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  currentPage = 0;

  images = [
    {
      title : 'Beach Surfing',
      url: 'https://images.unsplash.com/photo-1502680390469-be75c86b636f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
    },

    {
      title : 'Beach Surfboard',
      url: 'https://images.unsplash.com/photo-1488402024618-0658e4c2b1f0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
    },

    {
      title : 'Sea',
      url: 'https://images.unsplash.com/photo-1471922694854-ff1b63b20054?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
    },

    {
      title : 'Bikini',
      url: 'https://images.unsplash.com/photo-1567892320421-1c657571ea4a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
    },
    {
      title : 'Beach Surfing',
      url: 'https://images.unsplash.com/photo-1502680390469-be75c86b636f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
    },

    {
      title : 'Beach Surfboard',
      url: 'https://images.unsplash.com/photo-1488402024618-0658e4c2b1f0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
    },

    {
      title : 'Sea',
      url: 'https://images.unsplash.com/photo-1471922694854-ff1b63b20054?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
    },

    {
      title : 'Bikini',
      url: 'https://images.unsplash.com/photo-1567892320421-1c657571ea4a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
    },
    
    {
      title : 'Beach Surfing',
      url: 'https://images.unsplash.com/photo-1502680390469-be75c86b636f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
    },

    {
      title : 'Beach Surfboard',
      url: 'https://images.unsplash.com/photo-1488402024618-0658e4c2b1f0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
    },

    {
      title : 'Sea',
      url: 'https://images.unsplash.com/photo-1471922694854-ff1b63b20054?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
    },

    {
      title : 'Bikini',
      url: 'https://images.unsplash.com/photo-1567892320421-1c657571ea4a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
    },
    
    {
      title : 'Beach Surfing',
      url: 'https://images.unsplash.com/photo-1502680390469-be75c86b636f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
    },

    {
      title : 'Beach Surfboard',
      url: 'https://images.unsplash.com/photo-1488402024618-0658e4c2b1f0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
    },

    {
      title : 'Sea',
      url: 'https://images.unsplash.com/photo-1471922694854-ff1b63b20054?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
    },

    {
      title : 'Bikini',
      url: 'https://images.unsplash.com/photo-1567892320421-1c657571ea4a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
    },
    {
      title : 'Beach Surfing',
      url: 'https://images.unsplash.com/photo-1502680390469-be75c86b636f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
    },

    {
      title : 'Beach Surfboard',
      url: 'https://images.unsplash.com/photo-1488402024618-0658e4c2b1f0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
    },

    {
      title : 'Sea',
      url: 'https://images.unsplash.com/photo-1471922694854-ff1b63b20054?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
    },

    {
      title : 'Bikini',
      url: 'https://images.unsplash.com/photo-1567892320421-1c657571ea4a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
    },
    
    {
      title : 'Beach Surfing',
      url: 'https://images.unsplash.com/photo-1502680390469-be75c86b636f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
    },

    {
      title : 'Beach Surfboard',
      url: 'https://images.unsplash.com/photo-1488402024618-0658e4c2b1f0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
    },

    {
      title : 'Sea',
      url: 'https://images.unsplash.com/photo-1471922694854-ff1b63b20054?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
    },

    {
      title : 'Bikini',
      url: 'https://images.unsplash.com/photo-1567892320421-1c657571ea4a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
    }
    
    
  ];



  checkWindowIndex(index: number){

    return Math.abs(this.currentPage - index) < 5;
  }




}
