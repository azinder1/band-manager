import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Member } from '../member.model';
import { MemberService } from '../member.service'
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Location } from '@angular/common'
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-edit-member',
  templateUrl: './edit-member.component.html',
  styleUrls: ['./edit-member.component.css'],
  providers: [MemberService]
})
export class EditMemberComponent implements OnInit {
  memberId: any = null;
  displayMember: any;

  constructor(private route: ActivatedRoute, private memberService: MemberService, private location: Location,
  private router: Router)  { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.memberId = urlParameters['id']
    });
    this.displayMember = this.memberService.getMemberById(this.memberId)
  }
  updatingMember(updatedName: string, updatedAka: string, updatedSkill: string, updatedDescription: string){
  var memberObject = null;
  var updatedName = updatedName
  var updatedAka =updatedAka
  var updatedSkill = updatedSkill
  var updatedDescription = updatedDescription
  this.displayMember.subscribe(result=>{
    memberObject = result;
      this.memberService.updatedMember(memberObject, updatedName, updatedAka, updatedSkill, updatedDescription)
  })
 }
 deleteMember(){
   var memberObject = null;
   var updatedDescription = updatedDescription
   this.displayMember.subscribe(result=>{
     memberObject = result;
      this.memberService.deleteThisMember(memberObject)
    })
  }
}
