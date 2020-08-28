import { Injectable } from '@nestjs/common';
import { from, Observable } from 'rxjs';
import { InjectRepository } from '@nestjs/typeorm';
import { PostEntity } from '../entites/post.entity';
import { Repository } from 'typeorm';
import { PostDto } from '../dto/post.dto';

@Injectable()
export class PostService {
  constructor(
    @InjectRepository(PostEntity)
    private readonly postRepository: Repository<PostEntity>,
  ) {
  }

  public findAll(): Observable<PostEntity[]> {
    return from(this.postRepository.find());
  }

  public create(createPostDto: PostDto) {
    return this.postRepository.save(createPostDto);
  }
}
