export enum ConnectionState {
  INIT,
  INVITED,
  REQUESTED,
  RESPONDED,
}

export interface Connection {
  did: Did;
  didDoc: DidDoc;
  verkey: Verkey;
  theirDid?: Did;
  theirKey?: Verkey;
  invitation?: {};
  state: ConnectionState;
  endpoint?: string;
  messages: Message[];
}

export interface DidDoc {
  '@context': string;
}

export interface Message {
  '@id': string;
  '@type': string;
  [key: string]: any;
}

export interface InboundMessage {
  message: Message;
  sender_verkey: Verkey; // TODO make it optional
  recipient_verkey: Verkey; // TODO make it optional
}

export interface OutboundMessage {
  endpoint: string;
  payload: Message;
  recipientKeys: Verkey[];
  routingKeys: Verkey[];
  senderVk: Verkey | null;
}
