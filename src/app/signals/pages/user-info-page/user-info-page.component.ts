import { Component, OnInit, computed, inject, signal } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../services/user-request.interface';

@Component({
  selector: 'app-user-info-page',
  templateUrl: './user-info-page.component.html',
  styleUrls: ['./user-info-page.component.scss']
})
export class UserInfoPageComponent implements OnInit {

  private userService = inject(UserService);
  userId = signal(1);
  currentUser = signal<User | undefined>(undefined);

  fullName = computed<string>(() => {
    if (!this.currentUser()) return 'Usuario no encontrado';
    const user = this.currentUser();
    return `${user?.first_name} ${user?.last_name}`;
  });



  ngOnInit(): void {
    this.loadUser(this.userId());
  }

  loadUser(id: number) {
    if (id <= 0) return;
    this.userId.set(id);
    this.userService.getUserById(id)
      .subscribe({
        next: (user) => this.currentUser.set(user),
        error: () => this.currentUser.set(undefined)
      });
  }
}
