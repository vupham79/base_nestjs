import {
  CanActivate,
  ExecutionContext,
  ForbiddenException,
  Injectable
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { UsersService } from 'src/modules/users/users.service';

@Injectable()
export class DoesUserExist implements CanActivate {
  constructor(private readonly UserService: UsersService) {}
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();
    return this.validateRequest(request);
  }

  async validateRequest(request) {
    const userExist = await this.UserService.findOneByUsername(
      request.body.email,
    );
    if (userExist) {
      throw new ForbiddenException('This email already exist');
    }
    return true;
  }
}
