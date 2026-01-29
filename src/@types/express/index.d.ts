interface TokenPayload {
  id: number;
  email: string;
}

declare namespace Express {
  interface Request {
    user?: TokenPayload;
  }
}

