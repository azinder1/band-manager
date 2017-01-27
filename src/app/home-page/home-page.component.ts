import { Component, OnInit } from '@angular/core';
import { Member } from '../member.model';
import { Router } from '@angular/router';
import { MemberService } from '../member.service'
import { AngularFire, FirebaseListObservable } from 'angularfire2';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
  providers: [MemberService]
})
export class HomePageComponent implements OnInit {
  members: FirebaseListObservable<any[]>

  constructor(private router: Router, private memberService: MemberService) { }

  ngOnInit() {
    this.members = this.memberService.getMembers();
  }
  getMember(memberId){
    this.router.navigate(['members', memberId]);
  }
}
