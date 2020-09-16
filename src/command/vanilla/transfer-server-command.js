const Command = require('../command')
const Player = require('../../player')
const TransferPacket = require('../../network/packet/transfer')

'use strict'

class TransferServerCommand extends Command {
  constructor() {
    super({name: 'transfer', description: 'Transfer server.'})
  }

  execute(sender, args) {
    if(!args[0]) {
      return sender.sendMessage('§cYou have to select a server address.')
    }

    let pk = new TransferPacket()
    pk.address = args[0]
    if (!args[1]) {
      pk.port = 19132
    }
    if (args[1]) {
      pk.port = args[1]
    }
    sender.sendDataPacket(pk)
  }
}

module.exports = TransferServerCommand
