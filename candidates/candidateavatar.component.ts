import { Component, Input } from '@angular/core';

@Component({
  selector: 'smy-candidate-avatar',
  template: '<h1>{{name}}</h1><h2>{{profession}}</h2>'
})
export class CandidateAvatar {
	name = 'Swamy';
  	profession = 'Interior Designer';
}