import { Component, OnInit } from '@angular/core';

import { MemberEntity } from '../models/member.model';
import { MembersApiService } from '../members-api.service';

@Component({
  selector: 'app-members-table',
  templateUrl: './members-table.component.html',
  styles: []
})
export class MembersTableComponent implements OnInit {
  members: MemberEntity[];
  organization: string;

  constructor(private membersApi: MembersApiService) { }

  ngOnInit() {
    this.organization = 'Lemoncode';
  }

  loadMembers() {
    this.membersApi.getAllMembers(this.organization)
      .subscribe(
        (ms) => this.members = ms,
        (error) => console.log(error)
      );
  }

}
