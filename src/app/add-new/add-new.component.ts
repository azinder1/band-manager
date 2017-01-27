import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MemberService } from '../member.service';
import { Member } from '../member.model'


@Component({
  selector: 'app-add-new',
  templateUrl: './add-new.component.html',
  styleUrls: ['./add-new.component.css'],
  providers: [MemberService]
})
export class AddNewComponent implements OnInit {

  constructor(private memberService: MemberService, private router:Router) { }

  ngOnInit() {
  }
  addMember(name, aka, skill, description){
    let newMember: Member = new Member (name, aka, skill, description)
    this.memberService.addNewMember(newMember)
  }

}
