// Create this file at src/types/nodemailer.d.ts (or any location within your src directory)

declare module "nodemailer" {
  export interface SendMailOptions {
    from?: string;
    to?: string | string[];
    cc?: string | string[];
    bcc?: string | string[];
    subject?: string;
    text?: string;
    html?: string;
    attachments?: Attachment[];
    [key: string]: any;
  }

  export interface Attachment {
    filename?: string;
    content?: any;
    path?: string;
    contentType?: string;
    cid?: string;
    encoding?: string;
    headers?: any;
    raw?: string;
  }

  export interface Transporter {
    sendMail(options: SendMailOptions): Promise<any>;
    verify(): Promise<boolean>;
    close(): void;
  }

  export interface TransportOptions {
    host?: string;
    port?: number;
    secure?: boolean;
    auth?: {
      user?: string;
      pass?: string;
      type?: string;
      clientId?: string;
      clientSecret?: string;
      refreshToken?: string;
      accessToken?: string;
      expires?: number;
    };
    logger?: boolean;
    debug?: boolean;
    [key: string]: any;
  }

  export function createTransport(options: TransportOptions): Transporter;
  export function createTransport(transport: any, defaults?: any): Transporter;
}
