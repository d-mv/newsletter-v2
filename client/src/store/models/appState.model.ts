import { PostState } from './post.model';
import { AuthState } from './auth.model';
export interface AppState {
  post: PostState;
  auth: AuthState;
}
