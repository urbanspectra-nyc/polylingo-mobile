// import Obstacles from './Obstacles'
// CAN'T MIX IMPORT AND MODULES
let platform = new Obstacles(490, 440, 200, 200);
let terrace = new Obstacles(0, 200, 50, 200, "color");


let platforms = {
    platform: platform,
    terrace: terrace
}

module.exports = platforms