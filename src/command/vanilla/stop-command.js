/*
07/09/2020
*/

const Command = require('../command')
const Player  = require('../../player')
const ConsoleSender = require('../console-sender')

'use strict'

class StopCommand extends Command {

    constructor() {
        super({name: 'stop', description: 'Closes the server.'})
    }

    /**
     * @param {ConsoleSender|Player} sender
     * @param {Array} args
     */
    execute(sender, args) {
        // TODO: implement operators and just check if player is operator
        if (sender instanceof Player) {
            return sender.sendMessage('§cThis command only executable by console.')
        } 
        
        for (let player of sender.getServer().players.values()) {
            player.kick('Server is closing...')
        }

        // TODO: promise.then(process.exit(1))
    }
}
module.exports = StopCommand