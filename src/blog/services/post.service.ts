import { Injectable } from '@nestjs/common';
import { from, Observable } from 'rxjs';
import { InjectRepository } from '@nestjs/typeorm';
import { PostEntity } from '../entites/post.entity';
import { Repository } from 'typeorm';
import { CreatePostDto } from '../dto/create-post.dto';
import { PostDto } from '../dto/post.dto';
import { map } from 'rxjs/operators';
import * as _ from 'lodash';
import { EditPostDto } from '../dto/edit-post.dto';

@Injectable()
export class PostService {
  constructor(
    @InjectRepository(PostEntity)
    private readonly postRepository: Repository<PostEntity>,
  ) {
  }

  public findAll(): Observable<PostEntity[]> {
    return from(this.postRepository.find())
      .pipe(
        map(posts => _.orderBy(posts, ['id'], ['desc'])),
      );
  }

  public create(createPostDto: CreatePostDto): Promise<PostDto> {
    return this.postRepository.save(createPostDto);
  }

  public edit(editPostDto: EditPostDto): Promise<PostDto> {
    return this.postRepository.save(editPostDto);
  }

  public delete(postId: number): void {
    this.postRepository.delete(postId);
  }
}
