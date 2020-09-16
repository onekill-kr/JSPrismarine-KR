const DataPacket = require('./packet')
const Identifiers = require('../identifiers')
const PacketBinaryStream = require('../packet-binary-stream')

'use strict'

class TransferPacket extends DataPacket {
  static NetID = Identifiers.TransferPacket

  address
  port = 19132

  decodePayload() {
    this.address = this.read(this.readUnsignedVarInt()).toString()
    this.port = this.readLShort()
  }

  encodePayload() {
    this.writeUnsignedVarInt(Buffer.byteLength(this.address))
    this.append(Buffer.from(this.address, 'utf8'))
    this.writeLShort(this.port)
  }
}
module.exports = TransferPacket
