export const MGT2 = {};

MGT2.STATUS = {
  OKAY: 0,
  HURT: 1,
  UNCONSCIOUS: 2,
  DISABLED: 3,
  DEAD: 4,
  DESTROYED: 5
};

MGT2.HARDWARE_GENERAL = "general";
MGT2.HARDWARE_ARMOUR = "armour";
MGT2.HARDWARE_JUMP = "jump";

MGT2.VEHICLES = {
  "CHASSIS": {
      "lightGround": {
          "tl": 4, "skill": "drive.wheel", "agility": 0, "minSpaces": 1, "maxSpaces": 20,
          "cost": 750, "hull": 2, "shipping": 0.5,
          "subtypes": {
              "openFrame": {
                  "tl": 0, "agility": 1, "minSpaces": 1, "maxSpaces": 3, "cost": 750,
                  "speed": 1, "traits": "openVehicle"
              },
              "monowheel": {
                  "tl": 9, "agility": 2, "minSpaces": 1, "maxSpaces": 3, "cost": 2500,
                  "speed": 1, "traits": "openVehicle"
              },
              "railRider": {
                  "agility": -2, "cost": 400, "speed": -1
              },
              "roughTerrain": {
                  "cost": 100, "traits": "offRoader"
              },
              "tracks": {
                  "tl": 5, "skill": "drive.track", "cost": 750, "speed": -1, "traits": "tracked"
              }
          }
      },
      "heavyGround": {
        "tl": 4, "skill": "drive.wheel", "agility": -2, "minSpaces": 20, "cost": 3000,
        "hull": 3, "shipping": 0.5,
        "subtypes": {
            "afv": { "tl": 5, "cost": 3000, "speed": -1, "traits": "afv offRoader" },
            "railRider": { "agility": -2, "cost": 1000, "speed": 1 },
            "roughTerrain": { "cost": 500, "traits": "offRoader" },
            "tracks": { "tl": 5, "skill": "drive.track", "cost": 2000, "speed": -1, "traits": "tracked" },
            "tunneller": { "tl": 7, "skill": "drive.mole", "cost": 25000, "speed": -1 }
        }
      }
  },
  "SPEED": {
      "stopped": { band: 0, max: 0 },
      "idle": { band: 1, max: 1 },
      "verySlow": { band: 2, max: 50 },
      "slow": { band: 3, max: 100 },
      "medium": { band: 4, max: 200 },
      "high": { band: 5, max: 300 },
      "fast": { band: 6, max: 500 },
      "veryFast": { band: 7, max: 800 },
      "subsonic": { band: 8, max: 1200 },
      "supersonic": { band: 9, max: 6000 },
      "hypersonic": { band: 10 }
  }
};

MGT2.SHIP_CONFIGURATION = {
  "standard":    { "armour": 1.0, "cost": 1.0, "hull": 1.0, "volume": 1.0, "streamlined": "partial" },
  "streamlined": { "armour": 1.2, "cost": 1.2, "hull": 1.0, "volume": 1.0, "streamlined": "yes" },
  "dispersed":   { "armour": 2.0, "cost": 0.5, "hull": 0.9, "volume": 1.0, "streamlined": "no" },
  "sphere": { "armour": 0.9, "cost": 1.1, "hull": 1.0, "volume": 1.0, "streamlined": "partial" },
  "close": { "armour": 1.5, "cost": 0.8, "hull": 1.0, "volume": 1.0, "streamlined": "partial" },
  "planetoid": { "armour": 1.0, "cost": 0.08, "hull": 1.25, "volume": 0.8, "streamlined": "no" },
  "buffered": { "armour": 1.0, "cost": 0.08, "hull": 1.5, "volume": 0.65, "streamlined": "no" },
  "standard reinforced":    { "armour": 1.0, "cost": 1.5, "hull": 1.1, "volume": 1.0, "streamlined": "partial" },
  "streamlined reinforced": { "armour": 1.0, "cost": 1.8, "hull": 1.1, "volume": 1.0, "streamlined": "yes" },
  "sphere reinforced": { "armour": 0.9, "cost": 1.65, "hull": 1.1, "volume": 1.0, "streamlined": "partial" },
  "close reinforced": { "armour": 1.5, "cost": 1.2, "hull": 1.1, "volume": 1.0, "streamlined": "partial" }
};

MGT2.SPACE_RANGES = {
    "adjacent": { "distance": 1, "dm": 0 },
    "close": { "distance": 10, "dm": 0 },
    "short": { "distance": 1250, "dm": 1 },
    "medium": { "distance": 10000, "dm": 0 },
    "long": { "distance": 25000, "dm": -2 },
    "verylong": { "distance": 50000, "dm": -4 },
    "distant": { "distance": 300000, "dm": -6 },
    "verydistant": { "distance": 5000000, "dm": -12 },
    "far": { "distance": 1000000000, "dm": -18 }
}

MGT2.SPACE_MOUNTS = {
    "turret": { "multiplier": 1, "hardpoints": 1 },
    "barbette": { "multiplier": 3, "hardpoints": 1 },
    "bay.small": { "multiplier": 10, "hardpoints": 1 },
    "bay.medium": { "multiplier": 20, "hardpoints": 1 },
    "bay.large": { "multiplier": 100, "hardpoints": 5 },
    "spinal": { "multiplier": 1000, "hardpoints": 0.01 }
}

MGT2.getStatus = function(actor) {
  const data = actor.data.data;
  console.log(data);

};

MGT2.TRADE = {
    "codes": {
        "Ag": {},
        "As": {},
        "Ba": {},
        "De": {},
        "Fl": {},
        "Ga": {},
        "Hi": {},
        "HT": {},
        "Ic": {},
        "In": {},
        "Lo": {},
        "LT": {},
        "Na": {},
        "Ni": {},
        "Po": {},
        "Ri": {},
        "Va": {},
        "Wa": {}
    },
    "zones": {
        "Amber": {},
        "Red": {}
    }
}

MGT2.CHARACTERISTICS = {
  "STR": { "value": 7, "current": 7, "show": true,  "default": false  },
  "DEX": { "value": 7, "current": 7, "show": true,  "default": false  },
  "END": { "value": 7, "current": 7, "show": true,  "default": false  },
  "INT": { "value": 7, "current": 7, "show": true,  "default": false  },
  "EDU": { "value": 7, "current": 7, "show": true,  "default": false  },
  "SOC": { "value": 7, "current": 7, "show": true,  "default": false  },
  "CHA": { "value": 7, "current": 7, "show": false, "default": false  },
  "TER": { "value": 0, "current": 0, "show": false, "default": false  },
  "PSI": { "value": 0, "current": 0, "show": false, "default": false  },
  "WLT": { "value": 7, "current": 7, "show": false, "default": false  },
  "LCK": { "value": 7, "current": 7, "show": false, "default": false  },
  "MRL": { "value": 7, "current": 7, "show": false, "default": false  },
  "STY": { "value": 7, "current": 7, "show": false, "default": false  },
  "RES": { "value": 7, "current": 7, "show": false, "default": false  },
  "FOL": { "value": 0, "current": 0, "show": false, "default": false  },
  "REP": { "value": 0, "current": 0, "show": false, "default": false  }
};

MGT2.SKILLS = {
    "admin": { "default": "EDU", "background": true, "requires": "INT" },
    "advocate": { "default": "EDU", "requires": "INT" },
    "animals": { "default": "INT", "background": true, "requires": "INT",
      "specialities": {
        "handling": { "default": "DEX" },
        "vetinary": { "default": "EDU" },
        "training": { "default": "INT" }
      }
    },
    "art": { "default": "INT", "background": true, "requires": "INT",
      "specialities": {
        "performer": { },
        "holography": { },
        "instrument": { },
        "visualMedia": { },
        "write": { }
      }
    },
    "astrogation": { "default": "EDU", "requires": "INT" },
    "athletics": { "default": "DEX", "background": true, "creature": true, "requires": "DEX",
      "specialities": {
        "dexterity": { "default": "DEX", "combat": true },
        "endurance": { "default": "END" },
        "strength": { "default": "STR", "combat": true }
      }
    },
    "broker": { "default": "INT", "requires": "INT" },
    "carouse": { "default": "SOC", "background": true, "requires": "INT" },
    "deception": { "default": "INT", "requires": "INT", "creature": true },
    "diplomat": { "default": "SOC", "requires": "INT" },
    "drive": { "default": "DEX", "background": true, "requires": "DEX",
      "specialities": {
        "hovercraft": { },
        "mole": { },
        "track": { },
        "walker": { },
        "wheel": { }
      }
    },
    "electronics": { "default": "EDU", "background": true, "requires": "INT",
      "specialities": {
        "comms": {  },
        "computers": {  },
        "remoteOps": {  },
        "sensors": {  }
      }
    },
    "engineer": { "default": "EDU", "requires": "INT",
      "specialities": {
        "mDrive": {  },
        "jDrive": {  },
        "lifeSupport": {  },
        "power": { }
      }
    },
    "explosives": {
      "default": "EDU",
      "requires": "INT",
      "combat": true
    },
    "flyer": { "default": "DEX", "background": true, "requires": "DEX", "specialities": {
        "airship": { }, "grav": { }, "ornithopter": { }, "rotor": { }, "wing": { } }
    },
    "gambler": { "default": "INT", "requires": "INT"  },
    "gunner": { "default": "DEX", "requires": "INT", "specialities": {
        "turret": { "combat": true },
        "ortillery": { "combat": true },
        "screen": { "combat": true },
        "capital": { "default": "INT", "combat": true }
      }
    },
    "guncombat": { "default": "DEX", "requires": "DEX", "creature": true,
      "specialities": {
        "archaic": {
          "combat": true
        },
        "energy": {
          "combat": true
        },
        "slug": {
          "combat": true
        }
      }
    },
    "heavyweapons": {
      "default": "DEX",
      "requires": "INT",
      "specialities": {
        "artillery": {
          "combat": true
        },
        "portable": {
          "combat": true
        },
        "vehicle": {
          "combat": true
        }
      }
    },
    "independence": {
      "default": "INT",
      "requires": "TER"
    },
    "investigate": {
      "default": "INT",
      "requires": "INT"
    },
    "jackofalltrades": {
      "default": "INT",
      "requires": "INT"
    },
    "language": {
      "default": "EDU",
      "background": true,
      "requires": "INT",
      "specialities": {
        "galanglic": {
        },
        "vilani": {
        },
        "zdetl": {
        },
        "oynprith": {
        },
        "trokh": {
        },
        "gvegh": {
        }
      }
    },
    "leadership": {
      "default": "SOC",
      "requires": "INT"
    },
    "mechanic": {
      "default": "EDU",
      "background": true,
      "requires": "INT"
    },
    "medic": {
      "default": "EDU",
      "background": true,
      "requires": "INT"
    },
    "melee": {
      "default": "DEX",
      "requires": "DEX",
      "creature": true,
      "specialities": {
        "unarmed": {
          "combat": true
        },
        "blade": {
          "combat": true
        },
        "bludgeon": {
          "combat": true
        },
        "natural": {
          "combat": true
        }
      }
    },
    "navigation": {
      "default": "INT",
      "requires": "INT"
    },
    "persuade": {
      "default": "SOC",
      "requires": "INT",
      "creature": true
    },
    "pilot": {
      "default": "DEX",
      "requires": "INT",
      "specialities": {
        "smallCraft": {
        },
        "spacecraft": {
        },
        "capitalShips": {
        }
      }
    },
    "profession": {
      "default": "INT",
      "background": true,
      "requires": "INT",
      "individual": true,
      "specialities": {
        "belter": {
        },
        "biologicals": {
        },
        "civilEngineering": {
        },
        "construction": {
        },
        "hydroponics": {
        },
        "polymers": {
        },
        "robotics": {
        }
      }
    },
    "recon": {
      "default": "INT",
      "requires": "INT",
      "creature": true
    },
    "science": {
      "default": "EDU",
      "background": true,
      "requires": "INT",
      "specialities": {
        "archaeology": {
        },
        "astronomy": {
        },
        "biology": {
        },
        "chemistry": {
        },
        "cosmology": {
        },
        "cybernetics": {
        },
        "economics": {
        },
        "genetics": {
        },
        "history": {
        },
        "linquistics": {
        },
        "philosophy": {
        },
        "physics": {
        },
        "planetology": {
        },
        "psionicology": {
        },
        "psycology": {
        },
        "robotics": {
        },
        "sophontology": {
        },
        "xenology": {
        }
      }
    },
    "seafarer": {      "default": "INT",      "background": true,      "requires": "INT",      "specialities": {
      "oceanShips": { },
        "personal": { },
        "sail": { },
        "submarine": { }
      }
    },
    "stealth": { "default": "DEX", "requires": "INT", "creature": true },
    "steward": { "default": "SOC", "requires": "INT" },
    "streetwise": { "default": "INT", "background": true, "requires": "INT" },
    "survival": { "default": "EDU", "background": true, "requires": "INT", "creature": true },
    "tactics": { "default": "EDU",  "requires": "INT", "specialities": { "military": { }, "naval": { } } },
    "vaccsuit": { "default": "DEX", "background": true, "requires": "INT" },
    "telepathy": { "default": "PSI", "requires": "PSI", "trait": "psionic", "icon": "systems/mgt2e/icons/skills/psi.svg"    },
    "clairvoyance": { "default": "PSI", "requires": "PSI", "trait": "psionic", "icon": "systems/mgt2e/icons/skills/psi.svg"    },
    "telekinesis": { "default": "PSI", "requires": "PSI", "trait": "psionic", "icon": "systems/mgt2e/icons/skills/psi.svg"    },
    "awareness": { "default": "PSI", "requires": "PSI", "trait": "psionic", "icon": "systems/mgt2e/icons/skills/psi.svg"    },
    "teleportation": { "default": "PSI", "requires": "PSI", "trait": "psionic", "icon": "systems/mgt2e/icons/skills/psi.svg"    },
    "untrained": { "default": "INT", "requires": "XXX" }
};

MGT2.EFFECT_TYPES = {
  "CHA_AUG": "chaAug",
  "CHA_DM": "chaDM",
  "CHA_BOON": "chaBoon",
  "CHA_BANE": "chaBane",
  "SKILL_AUG": "skillAug",
  "SKILL_DM": "skillDM",
  "SKILL_EXPERT": "skillExpert",
  "DM": "miscDM"
};

MGT2.EFFECTS = {
  "chaAug": { "targets": "char", "value": true, "property": "augment", mode: CONST.ACTIVE_EFFECT_MODES.ADD },
  "chaDM": { "targets": "char", "value": true, "property": "augdm", mode: CONST.ACTIVE_EFFECT_MODES.ADD },
  "chaBoon": { "targets": "char", "value": false, mode: CONST.ACTIVE_EFFECT_MODES.OVERRIDE },
  "chaBane":  { "targets": "char", "value": false, mode: CONST.ACTIVE_EFFECT_MODES.OVERRIDE },
  "skillAug":  { "targets": "skills", "value": true, "property": "augment", mode: CONST.ACTIVE_EFFECT_MODES.ADD },
  "skillDM": { "targets": "skills", "value": true, "property": "augdm", mode: CONST.ACTIVE_EFFECT_MODES.ADD },
  "skillExpert": { "targets": "skills", "value": true, "property": "expert", mode: CONST.ACTIVE_EFFECT_MODES.UPGRADE },
  "miscDM": { "targets": "misc", "value": true, "property": "effect", mode: CONST.ACTIVE_EFFECT_MODES.ADD }
};

MGT2.COMPUTERS = {
  "techLevel": {
    "7": { computer: 5, core: 0 },
    "8": { computer: 5, core: 0 },
    "9": { computer: 10, core: 40 },
    "10": { computer: 10, core: 50 },
    "11": { computer: 15, core: 60 },
    "12": { computer: 20, core: 70 },
    "13": { computer: 25, core: 80 },
    "14": { computer: 30, core: 90 },
    "15": { computer: 35, core: 100 }
  }
};

MGT2.WEAPONS = {
    "energyTypes": [ "laser", "plasma", "fire", "energy" ],
    "traits": {
        "artillery": { },
        "ap": { "value": 1, "min": 1, "max": 99, "conflict": [ "loPen" ] },
        "auto": { "value": 2, "min": 2, "max": 99, "conflict": [ "oneUse" ] },
        "blast": { "value": 1, "min": 1, "max": 10000 },
        "bulky": { "conflict": [ "veryBulky" ] },
        "dangerous": { "conflict": [ "veryDangerous" ] },
        "deadly": { },
        "destructive": { },
        "fire": { },
        "laserSight": { },
        "loPen": { "value": 2, "min": 2, "max": 99, "conflict": [ "ap" ] },
        "oneUse": { "conflict": [ "auto" ] },
        "protection": { "value": 1, "min": 1, "max": 20 },
        "radiation": { },
        "scope": { },
        "shield": { "value": 0, "min": 0, "max": 6 },
        "silent": { },
        "smart": { },
        "smasher": { },
        "stun": { },
        "veryBulky": { "conflict": [ "bulky" ] },
        "veryDangerous": { "conflict": [ "dangerous" ] },
        "zeroG": { }
    }
}

MGT2.CREATURES = {
  "behaviours": {
    "herbivore": { "skills": [], "group": "diet" },
    "omnivore": { "skills": [], "group": "diet" },
    "carnivore": { "skills": [], "group": "diet" },
    "scavenger": { "skills": [], "group": "diet" },
    "metal": { "skills": [], "group": "diet" },
    "carrionEater": { "skills": ["recon"] },
    "chaser": { "skills": [ "athletics.dexterity", "athletics.endurance" ] },
    "eater": { "skills": [ ] },
    "filter": { "skills": [ ] },
    "gatherer": { "skills": [ "stealth" ] },
    "grazer": { "skills": [ ] },
    "hunter": { "skills": [ "survival" ] },
    "hijacker": { "skills": [ ] },
    "intimidator": { "skills": [ "persuade" ] },
    "killer": { "skills": [ "melee.natural" ] },
    "intermittent": { "skills": [ ] },
    "mindless": { "skills": [ ] },
    "pouncer": { "skills": [ "stealth", "recon", "athletic.dexterity", "athletics.strength" ] },
    "reducer": { "skills": [ ] },
    "siren": { "skills": [ "deception" ] },
    "sophont": { "skills": [ ] },
    "trapper": { "skills": [ ] }
  },
  "traits": {
    "alarm": { },
    "amphibious": {},
    "camouflaged": { "skills": [ { skill: "stealth", bonus: 2 }] },
    "diseased": {},
    "echolocation": {},
    "fastMetabolism": { "set": "initiative.base", "min": 1, "max": 6, "conflict": "slowMetabolism" },
    "flyer": { "default": 3, "choices": [ "idle", "verySlow", "slow", "medium", "high", "fast", "veryFast", "subsonic", "supersonic", "hypersonic" ]},
    "heightenedSenses": { "skills": [ { "skill": "recon", "bonus": 1 }, { "skill": "survival", "bonus": 1 }] },
    "iuVision": {},
    "psionic": { "value": 7, "characteristic": "PSI" },
    "slowMetabolism": { "set": "initiative.base", "min": -6, "max": -1, "conflict": "fastMetabolism" }
  },
  "sizes": {
    "-4": { "label": "small", "damage": "1", "minHits": 1, "maxHits": 2, "width": 0.5 },
    "-3": { "label": "small", "damage": "1D3", "minHits": 3, "maxHits": 5, "width": 0.5 },
    "-2": { "label": "small", "damage": "1D3", "minHits": 6, "maxHits": 7, "width": 0.5 },
    "-1": { "label": "small", "damage": "1D6", "minHits": 8, "maxHits": 13, "width": 1 },
    "0": { "label": "medium", "damage": "1D6", "minHits": 14, "maxHits": 28, "width": 1 },
    "1": { "label": "large", "damage": "2D6", "minHits": 29, "maxHits": 35, "width": 2 },
    "2": { "label": "large", "damage": "3D6", "minHits": 36, "maxHits": 49, "width": 2 },
    "3": { "label": "large", "damage": "4D6", "minHits": 50, "maxHits": 70, "width": 2 },
    "4": { "label": "large", "damage": "5D6", "minHits": 71, "maxHits": 90, "width": 3 },
    "5": { "label": "large", "damage": "6D6", "minHits": 91, "maxHits": 125, "width": 3 },
    "6": { "label": "large", "damage": "7D6", "minHits": 125, "maxHits": 250, "width": 4 }
  }
};
