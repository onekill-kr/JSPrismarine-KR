/*
07/09/2020
*/

const Command = require('../command')
const Player  = require('../../player')
const ConsoleSender = require('../console-sender')
const Logger = require('../../utils/logger')

'use strict'

class ChatCommand extends Command {

    constructor() {
        // TODO: add permissions to command
        super({name: 'chat', description: 'Same as normal chat.'})
    }

    /**
     * @param {ConsoleSender|Player} sender
     * @param {Array} args
     */
    execute(sender, args) {
        if (!args[0]) {
            return sender.sendMessage('§cInvalid message.')
        }

        let message = args.join(' ')

        let messageToSend = `<${sender.name}> ${message}`
        Logger.silly(messageToSend)
        for (let player of sender.getServer().players.values()) {
            player.sendMessage(messageToSend)
        }
    }
    
}

module.exports = ChatCommand