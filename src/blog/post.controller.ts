import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Observable } from 'rxjs';
import { PostService } from './services/post.service';
import { PostEntity } from './entites/post.entity';
import { CreatePostDto } from './dto/create-post.dto';
import { PostDto } from './dto/post.dto';
import { EditPostDto } from './dto/edit-post.dto';

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
  create(@Body() createPostDto: CreatePostDto): Promise<PostDto> {
    return this.postService.create(createPostDto);
  }

  @Put()
  edit(@Body() editPostDto: EditPostDto): Promise<PostDto> {
    return this.postService.edit(editPostDto);
  }

  @Delete(':id')
  delete(@Param('id') id) {
    this.postService.delete(id);
  }
}
