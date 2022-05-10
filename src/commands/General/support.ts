import { MessageType, Mimetype } from "@adiwajshing/baileys";
import MessageHandler from "../../Handlers/MessageHandler";
import BaseCommand from "../../lib/BaseCommand";
import WAClient from "../../lib/WAClient";
import { ISimplifiedMessage } from "../../typings";

export default class Command extends BaseCommand {
  constructor(client: WAClient, handler: MessageHandler) {
    super(client, handler, {
      command: "support",
      aliases: ["support"],
      description: "Gets the support group links",
      category: "general",
      usage: `${client.config.prefix}Support`,
      baseXp: 10,
    });
  }

  run = async (M: ISimplifiedMessage): Promise<void> => {
    await this.client.sendMessage(
      M.sender.jid, 
        _*WELCOME TO BEYOND*_: COMING SOON!!\n\n
        _*BEYOND 
CASINO:  https://chat.whatsapp.com/JMCzGuYeYzC4m1L21Wzy1p 
 QUIZ*_:https://chat.whatsapp.com/IM7jSI3esbb6Mllf5trPLz`,

      MessageType.text
    );

    return void M.reply("Sent you the Group Link in personal message");
  };
}
