import { Injectable } from '@angular/core';
import { Member } from './member.model';
import {AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';


@Injectable()
export class MemberService {
  members: FirebaseListObservable<any[]>;

  constructor(private angularFire: AngularFire) {
    this.members = angularFire.database.list('members')
  }
  getMembers() {
    return this.members
  }
  getMemberById(memberId: string){
    return this.angularFire.database.object('members/' + memberId);

  }
  addNewMember(newMember) {
    this.members.push(newMember)
  }
}
