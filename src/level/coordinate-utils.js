'use strict'

class CoordinateUtils {

    static fromBlockToChunk(v) {
        return v >> 4
    }

    static getChunkMin(v) {
        return v << 4
    }

    static getChunkMax(v) {
        return ((v + 1) << 4) - 1
    }

    /**
     * Returns and encoded integer by given integers.
     *  
     * @param {number} x 
     * @param {number} z 
     */
    static encodePos(x, z) {
        return `${x}:${z}`
        // return (x << 16) | z
    }

    /**
     * Returns an array containing decoded positions
     * from the encoded integer given.
     * 
     * @param {string} encodedPos 
     */
    static decodePos(encodedPos) {
        /* return [
            encodedPos >> 16,
            encodedPos & 0x0000FFFF
        ] */
        return encodedPos.split(':') 
    }
}
module.exports = CoordinateUtils