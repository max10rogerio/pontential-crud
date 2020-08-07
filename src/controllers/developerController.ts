import { Request, Response, NextFunction } from "express";
import { getRepository } from "typeorm";
import { QueryBuilder } from "typeorm-express-query-builder";

import { ErrorHandler } from "../helpers/error";
import { Developer } from "../entity/Developer";

export const developerController = {
  findAll: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const hasFilter = Object.keys(req.query).length > 0;
      const builder = new QueryBuilder(req.query);
      const developers = await getRepository(Developer).find(builder.build());

      if (hasFilter && developers.length === 0) {
        const filterStr = Object.entries(req.query)
          .map((q) => q.join(": "))
          .join(",");

        throw new ErrorHandler(
          404,
          `Developers not found with filter: ${filterStr}`
        );
      }

      return res.json(developers);
    } catch (error) {
      next(error);
    }
  },
  findById: async (
    req: Request<{ id: string }>,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const developer = await getRepository(Developer).findOne(req.params.id);

      if (!developer) {
        throw new ErrorHandler(404, "Developer not found.");
      }

      return res.json(developer);
    } catch (error) {
      return next(error);
    }
  },
  post: async (
    req: Request<any, any, Omit<Developer, "id" | "idade">>,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const repository = getRepository(Developer);
      const developer = await repository.save(repository.create(req.body));

      return res.status(201).json(developer);
    } catch (error) {
      next(error);
    }
  },
  update: async (
    req: Request<{ id: string }, any, Omit<Developer, "id" | "idade">>,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const id = parseInt(req.params.id);
      const repository = getRepository(Developer);
      const result = await repository.update(
        { id },
        repository.create(req.body)
      );

      if (result.affected === 0) {
        throw new ErrorHandler(400, "Developer not found on update.");
      }

      const developer = await repository.findOne({ id });

      return res.json(developer);
    } catch (error) {
      next(error);
    }
  },
  delete: async (
    req: Request<{ id: string }>,
    res: Response,
    next: NextFunction
  ) => {
    try {
      await getRepository(Developer).delete({
        id: parseInt(req.params.id),
      });

      return res.status(204).send();
    } catch (error) {
      next(error);
    }
  },
};
