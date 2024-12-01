import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';
import { RouterModule } from '@angular/router';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzIconModule } from 'ng-zorro-antd/icon';
import {
  InstagramFill,
  GithubFill,
  LinkedinFill,
  RedditSquareFill
} from '@ant-design/icons-angular/icons';
import { NzIconService } from 'ng-zorro-antd/icon';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    NzCollapseModule,
    CommonModule,
    RouterModule,
    NzGridModule,
    NzIconModule,
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  links: any = [
    {
      "text": "Random Password Generator",
      "routerLink": "https://gamble4846.github.io/AngularTools/RandomPasswordGenerator",
      "fullLink": true
    },
  ]

  linksPart1: any = [];
  linksPart2: any = [];

  constructor(private _NzIconService: NzIconService) {
    _NzIconService.addIcon(InstagramFill);
    _NzIconService.addIcon(GithubFill);
    _NzIconService.addIcon(LinkedinFill);
    _NzIconService.addIcon(RedditSquareFill);
  }

  ngOnInit(): void {
    for (var i = 0; i < this.links.length; i++) {
      if ((i + 2) % 2 == 0) {
        this.linksPart1.push(this.links[i]);
      }
      else {
        this.linksPart2.push(this.links[i]);
      }
    }
  }

  SocialClicked(social: string) {
    let url = "";
    switch (social) {
      case 'instagram':
        url = "https://www.instagram.com/gamble4846/";
        break;
      case 'github':
        url = "https://github.com/gamble4846";
        break;
      case 'linkedin':
        url = "https://www.linkedin.com/in/rohanpatel4846/";
        break;
      case 'reddit':
        url = "https://www.reddit.com/user/gamble4846";
        break;
      default:
        break;
    }
    window.open(url, '_blank')!.focus();
  }
}
