import { Response, Request, NextFunction } from "express";
import { isCelebrate } from "celebrate";

export class ErrorHandler extends Error {
  statusCode: number;
  message: string;

  constructor(statusCode: number, message: string) {
    super();
    this.statusCode = statusCode;
    this.message = message;
  }
}

export const handleError = (err: any, res: Response) => {
  if (err instanceof ErrorHandler) {
    return res.status(err.statusCode ?? 500).json({
      message: err.message,
    });
  }

  if (isCelebrate(err)) {
    return res.status(400).json({
      message: err.message.replace(/[\\"]/g, ""),
    });
  }

  return res.status(400).json({
    message: err.toString(),
  });
};

export const handleErrorMiddleware = (
  err: ErrorHandler,
  req: Request,
  res: Response,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  next: NextFunction
) => handleError(err, res);
