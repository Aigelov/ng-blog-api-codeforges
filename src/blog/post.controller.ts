import { Body, Controller, Get, Post } from '@nestjs/common';
import { Observable } from 'rxjs';
import { PostService } from './services/post.service';
import { PostEntity } from './entites/post.entity';
import { PostDto } from './dto/post.dto';

@Controller('posts')
export class PostController {

  constructor(
    private postService: PostService,
  ) {}

  @Get()
  findAll(): Observable<PostEntity[]> {
    return this.postService.findAll();
  }

  @Post()
  create(@Body() createPostDto: PostDto) {
    return this.postService.create(createPostDto);
  }
}
