// src/types/nodemailer.d.ts

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
    headers?: Record<string, string | number | boolean>;
    cid?: string;
    date?: Date | string;
    encoding?: string;
    priority?: "high" | "normal" | "low";
    replyTo?: string;
    inReplyTo?: string;
    references?: string | string[];
    envelope?: {
      from?: string;
      to?: string[];
    };
    messageId?: string;
    dsn?: {
      id?: string;
      return?: "headers" | "full";
      notify?: "success" | "failure" | "delay" | "never";
      recipient?: string;
    };
    [key: string]: unknown; // For rarely used extra options
  }

  export interface Transporter {
    sendMail(options: SendMailOptions): Promise<{
      accepted: string[];
      rejected: string[];
      envelopeTime: number;
      messageTime: number;
      messageSize: number;
      response: string;
      envelope: { from: string; to: string[] };
      messageId: string;
    }>;
    verify(): Promise<boolean>;
    close(): void;
  }

  export interface TransportOptions {
    service: "gmail";
    auth: {
      user: string | undefined;
      pass: string | undefined;
    };
  }

  export function createTransport(options: TransportOptions): Transporter;
}
