import * as express from 'express';

class App {
  public app: express.Express;

  constructor() {
    this.app = express();
    this.config();
  }

  private config(): void {
    this.app.use(express.json());

    const accessControl: express.RequestHandler = (_req, res, next) => {
      res.header('Access-control-Allow-Origin', '*');
      res.header(
        'Access-Control-Allow-Methods',
        'GET, POST, DELETE, OPTIONS, PUT, PATCH',
      );
      res.header('Access-control-Allow-Headers', '*');
      next();
    };

    this.app.use(accessControl);
  }

  public start(PORT: string | number): void {
    this.app.listen(PORT);
    console.log('Ouvindo na porta %s', PORT);
  }
}

export { App };

export const { app } = new App();

// NOTE - Tive como base a configuração padrão do código de projetos anteriores da Trybe.