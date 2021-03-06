'use strict'

const PlayerAction = {
    StartBreak: 0,
    AbortBreak: 1,
    StopBreak: 2,
    GetUpdatedBlock: 3,
    DropItem: 4,
    StartSleeping: 5,
    StopSleeping: 6,
    Respawn: 7,
    Jump: 8,
    StartSprint: 9,
    StopSprint: 10,
    StartSneak: 11,
    StopSneak: 12, 
    DimensionChangeRequest: 13,
    DimensionChangeACK: 14,
    StartGlide: 15,
    StopGlide: 16,
    BuildDenied: 17,
    ContinueBreak: 18,
    ChangeSkin: 19,
    SetEnchantmentSeed: 20,
    StartSwimming: 21,
    StopSwimming: 22,
    StartSpinAttack: 23,
    StopSpinAttack: 24,
    InteractBlock: 25
}
module.exports = PlayerAction