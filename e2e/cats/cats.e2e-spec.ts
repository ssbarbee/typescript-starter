import * as express from 'express';
import * as request from 'supertest';
import { Test } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import { CatsModule } from "../../src/cats/cats.module";
import { CatsService } from "../../src/cats/cats.service";

describe('Cats', () => {
  let server;
  let app: INestApplication;

  const catsService = { findAll: () => ['test'] };

  beforeAll(async () => {
    const module = await Test.createTestingModule({
      imports: [CatsModule],
    })
      .overrideComponent(CatsService)
      .useValue(catsService)
      .compile();

    server = express();
    app = module.createNestApplication(server);
    await app.init();
  });

  it(`/GET cats`, () => {
    return request(server)
      .get('/cats')
      .expect(200)
      .expect(catsService.findAll());
  });

  afterAll(async () => {
    await app.close();
  });
});
