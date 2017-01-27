import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Member } from '../member.model';
import { MemberService } from '../member.service'
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Location } from '@angular/common'
import { ActivatedRoute, Params } from '@angular/router';



@Component({
  selector: 'app-member-detail',
  templateUrl: './member-detail.component.html',
  styleUrls: ['./member-detail.component.css'],
  providers: [MemberService]
})
export class MemberDetailComponent implements OnInit {
  memberId: any = null;
  displayMember: any;

  constructor(private route: ActivatedRoute, private memberService: MemberService, private location: Location,
  private router: Router) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.memberId = urlParameters['id']
    });
    this.displayMember = this.memberService.getMemberById(this.memberId)
  }
  goToEditMemberPage() {
    console.log("hello")
   this.router.navigate(['member-edit', this.memberId]);
 }
}
