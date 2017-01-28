import { Component, OnInit } from '@angular/core';
import { Member } from '../member.model';
import { Router } from '@angular/router';
import { MemberService } from '../member.service'
import { AdminService } from '../admin.service'
import { AngularFire, FirebaseListObservable } from 'angularfire2';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
  providers: [MemberService, AdminService]
})
export class HomePageComponent implements OnInit {
  members: FirebaseListObservable<any[]>
  filterBySkill: string = 'all'
  valueSetter: any;

  onChange(optionFromMenu) {
  this.filterBySkill = optionFromMenu
  }

  constructor(private router: Router, private memberService: MemberService, private adminService: AdminService) { }

  ngOnInit() {
    this.members = this.memberService.getMembers();
    this.valueSetter = this.adminService.tokenGet();
    console.log(this.valueSetter)
  }
  getMember(memberId){
    this.router.navigate(['members', memberId]);
  }
}
