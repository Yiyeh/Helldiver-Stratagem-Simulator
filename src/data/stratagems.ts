export interface Stratagem {
  name: string;
  sequence: string[];
  icon: string;
  cooldown: string;
  uses: string;
  activation: string;
  conditions?: string; // Solo para Mission Stratagems
}

export const stratagems: Stratagem[] = [
    // Supply: Backpacks
  { 
    name: "LIFT-850 Jump Pack", 
    sequence: ["↓", "↑", "↑", "↓", "↑"], 
    icon: "jump-pack-icon", 
    cooldown: "480 seconds (8m)", 
    uses: "Unlimited", 
    activation: "9.75 seconds" 
  },
  { 
    name: "B-1 Supply Pack", 
    sequence: ["↓", "←", "↓", "↑", "↑", "↓"], 
    icon: "supply-pack-icon", 
    cooldown: "480 seconds (8m)", 
    uses: "Unlimited", 
    activation: "9.75 seconds" 
  },
  { 
    name: "SH-20 Ballistic Shield Backpack", 
    sequence: ["↓", "←", "↓", "↓", "↑", "←"], 
    icon: "ballistic-shield-backpack-icon", 
    cooldown: "300 seconds (5m)", 
    uses: "Unlimited", 
    activation: "9.75 seconds" 
  },
  { 
    name: "SH-51 Directional Shield Backpack", 
    sequence: ["↓", "↑", "←", "→", "↑", "↑"], 
    icon: "directional-shield-icon", 
    cooldown: "300 seconds (5m)", 
    uses: "Unlimited", 
    activation: "9.75 seconds" 
  },
  { 
    name: "SH-32 Shield Generator Pack", 
    sequence: ["↓", "↑", "←", "→", "←", "→"], 
    icon: "shield-generator-pack-icon", 
    cooldown: "480 seconds (8m)", 
    uses: "Unlimited", 
    activation: "9.75 seconds" 
  },
  { 
    name: "AX/AR-23 'Guard Dog'", 
    sequence: ["↓", "↑", "←", "↑", "→", "↓"], 
    icon: "guard-dog-icon", 
    cooldown: "480 seconds (8m)", 
    uses: "Unlimited", 
    activation: "9.75 seconds" 
  },
  { 
    name: "AX/LAS-5 'Guard Dog' Rover", 
    sequence: ["↓", "↑", "←", "↑", "→", "→"], 
    icon: "guard-dog-rover-icon", 
    cooldown: "480 seconds (8m)", 
    uses: "Unlimited", 
    activation: "9.75 seconds" 
  },
  { 
    name: "AX/TX-13 'Guard Dog' Dog Breath", 
    sequence: ["↓", "↑", "←", "↑", "→", "↑"], 
    icon: "guard-dog-dog-breath-icon", 
    cooldown: "480 seconds (8m)", 
    uses: "Unlimited", 
    activation: "9.75 seconds" 
  },
  // Weapons
  { 
    name: "MG-43 Machine Gun", 
    sequence: ["↓", "←", "↓", "↑", "→"], 
    icon: "machine-gun-icon", 
    cooldown: "480 seconds (8m)", 
    uses: "Unlimited", 
    activation: "4.75 seconds" 
  },
  { 
    name: "APW-1 Anti-Materiel Rifle", 
    sequence: ["↓", "←", "→", "↑", "↓"], 
    icon: "anti-materiel-rifle-icon", 
    cooldown: "480 seconds (8m)", 
    uses: "Unlimited", 
    activation: "4.75 seconds" 
  },
  { 
    name: "M-105 Stalwart", 
    sequence: ["↓", "←", "↓", "↑", "↑", "←"], 
    icon: "stalwart-icon", 
    cooldown: "480 seconds (8m)", 
    uses: "Unlimited", 
    activation: "4.75 seconds" 
  },
  { 
    name: "EAT-17 Expendable Anti-tank", 
    sequence: ["↓", "↓", "←", "↑", "→"], 
    icon: "expendable-anti-tank-icon", 
    cooldown: "70 seconds (1m 10s)", 
    uses: "Unlimited", 
    activation: "4.75 seconds" 
  },
  { 
    name: "MLS-4X Commando", 
    sequence: ["↓", "←", "↑", "↓", "→"], 
    icon: "commando-icon", 
    cooldown: "120 seconds (2m)", 
    uses: "Unlimited", 
    activation: "4.75 seconds" 
  },
  { 
    name: "GR-8 Recoilless Rifle", 
    sequence: ["↓", "←", "→", "→", "←"], 
    icon: "recoilless-rifle-icon", 
    cooldown: "480 seconds (8m)", 
    uses: "Unlimited", 
    activation: "4.75 seconds" 
  },
  { 
    name: "FLAM-40 Flamethrower", 
    sequence: ["↓", "←", "↑", "↓", "↑"], 
    icon: "flamethrower-icon", 
    cooldown: "480 seconds (8m)", 
    uses: "Unlimited", 
    activation: "4.75 seconds" 
  },
  { 
    name: "AC-8 Autocannon", 
    sequence: ["↓", "←", "↓", "↑", "↑", "→"], 
    icon: "autocannon-icon", 
    cooldown: "480 seconds (8m)", 
    uses: "Unlimited", 
    activation: "4.75 seconds" 
  },
  { 
    name: "MG-206 Heavy Machine Gun", 
    sequence: ["↓", "←", "↑", "↓", "↓"], 
    icon: "heavy-machine-gun-icon", 
    cooldown: "480 seconds (8m)", 
    uses: "Unlimited", 
    activation: "4.75 seconds" 
  },
  { 
    name: "RS-422 Railgun", 
    sequence: ["↓", "→", "↓", "↑", "←", "→"], 
    icon: "railgun-icon", 
    cooldown: "480 seconds (8m)", 
    uses: "Unlimited", 
    activation: "4.75 seconds" 
  },
  { 
    name: "FAF-14 Spear Launcher", 
    sequence: ["↓", "↓", "↑", "↓", "↓"], 
    icon: "spear-icon", 
    cooldown: "480 seconds (8m)", 
    uses: "Unlimited", 
    activation: "4.75 seconds" 
  },
  { 
    name: "GL-21 Grenade Launcher", 
    sequence: ["↓", "←", "↑", "←", "↓"], 
    icon: "grenade-launcher-icon", 
    cooldown: "480 seconds (8m)", 
    uses: "Unlimited", 
    activation: "4.75 seconds" 
  },
  { 
    name: "LAS-98 Laser Cannon", 
    sequence: ["↓", "←", "↓", "↑", "←"], 
    icon: "laser-cannon-icon", 
    cooldown: "480 seconds (8m)", 
    uses: "Unlimited", 
    activation: "4.75 Seconds" 
  },
  { 
    name: "ARC-3 Arc Thrower", 
    sequence: ["↓", "→", "↓", "↑", "←", "←"], 
    icon: "arc-thrower-icon", 
    cooldown: "480 seconds (8m)", 
    uses: "Unlimited", 
    activation: "4.75 Seconds" 
  },
  { 
    name: "LAS-99 Quasar Cannon", 
    sequence: ["↓", "↓", "↑", "←", "→"], 
    icon: "quasar-cannon-icon", 
    cooldown: "480 seconds (8m)", 
    uses: "Unlimited", 
    activation: "4.75 Seconds" 
  },
  { 
    name: "RL-77 Airburst Rocket Launcher", 
    sequence: ["↓", "↑", "↑", "←", "→"], 
    icon: "airburst-rocket-launcher-icon", 
    cooldown: "480 seconds (8m)", 
    uses: "Unlimited", 
    activation: "4.75 Seconds" 
  },
  { 
    name: "TX-14 Sterilizer", 
    sequence: ["↓", "←", "↑", "↓", "←"], 
    icon: "sterilizer-icon", 
    cooldown: "480 seconds (8m)", 
    uses: "Unlimited", 
    activation: "4.75 Seconds" 
  },
  { 
    name: "StA-X3 W.A.S.P. Launcher", 
    sequence: ["↓", "↓", "↑", "↓", "→"], 
    icon: "sta-x3-wasp-launcher-icon", 
    cooldown: "432 seconds (7m)", 
    uses: "Unlimited", 
    activation: "7.75 seconds" 
  },
  // Exosuits and Vehicles
  { 
    name: "EXO-45 Patriot Exosuit", 
    sequence: ["←", "↓", "→", "↑", "←", "↓", "↓"], 
    icon: "patriot-exosuit-icon", 
    cooldown: "600 seconds (10m)", 
    uses: "2", 
    activation: "10.5 Seconds" 
  },
  { 
    name: "EXO-49 Emancipator Exosuit", 
    sequence: ["←", "↓", "→", "↑", "←", "↓", "↑"], 
    icon: "emancipator-exosuit-icon", 
    cooldown: "600 seconds (10m)", 
    uses: "2", 
    activation: "10.5 Seconds" 
  },
  { 
    name: "M-102 Fast Recon Vehicle", 
    sequence: ["←", "↓", "→", "↓", "→", "↓", "↑"], 
    icon: "fast-recon-vehicle-icon", 
    cooldown: "480 seconds (8m)", 
    uses: "Unlimited", 
    activation: "10.50 seconds" 
  },
  // Mission Stratagems
  { 
    name: "Reinforce", 
    sequence: ["↑", "↓", "→", "←", "↑"], 
    icon: "reinforce-icon", 
    cooldown: "120s (2m) (when depleted)", 
    uses: "5 per Person", 
    activation: "5 seconds",
    conditions: "At least one squadmate is eliminated\nSufficient charges remain\nNo squadmates have entered Pelican-1" 
  },
  { 
    name: "SOS Beacon", 
    sequence: ["↑", "↓", "→", "↑"], 
    icon: "sos-beacon-icon", 
    cooldown: "N/A", 
    uses: "1", 
    activation: "5 seconds" 
  },
  { 
    name: "Resupply", 
    sequence: ["↓", "↓", "↑", "→"], 
    icon: "resupply-icon", 
    cooldown: "160 seconds (2m 40s)", 
    uses: "Unlimited", 
    activation: "12 seconds" 
  },
  { 
    name: "NUX-223 Hellbomb", 
    sequence: ["↓", "↑", "←", "↓", "↑", "→", "↓", "↑"], 
    icon: "hellbomb-icon", 
    cooldown: "?", 
    uses: "Unlimited", 
    activation: "?",
    conditions: "Available only at certain massive objectives to be destroyed" 
  },
  { 
    name: "SSSD Delivery", 
    sequence: ["↓", "↓", "↓", "↑", "↑"], 
    icon: "sssd-delivery-icon", 
    cooldown: "N/A", 
    uses: "1 per objective", 
    activation: "N/A",
    conditions: "Required to Establish Communication Uplink" 
  },
  { 
    name: "Seismic Probe", 
    sequence: ["↑", "↑", "←", "→", "↓", "↓"], 
    icon: "seismic-probe-icon", 
    cooldown: "N/A", 
    uses: "1 per objective", 
    activation: "9 seconds",
    conditions: "Required to Conduct Geological Survey" 
  },
  { 
    name: "Upload Data", 
    sequence: ["←", "→", "↑", "↑", "↑"], 
    icon: "upload-data-icon", 
    cooldown: "N/A", 
    uses: "Unlimited", 
    activation: "N/A",
    conditions: "Required to Upload Escape Pod Data" 
  },
  { 
    name: "Eagle Rearm", 
    sequence: ["↑", "↑", "←", "↑", "→"], 
    icon: "eagle-rearm-icon", 
    cooldown: "2 minutes (rearms all your Eagle stratagems)", 
    uses: "Unlimited", 
    activation: "N/A",
    conditions: "Available after at least one Eagle strike performed\nForced when no Eagle strikes remain\nMay be forced by Automaton Anti-Air Emplacements" 
  },
  { 
    name: "SEAF Artillery", 
    sequence: ["→", "↑", "↑", "↓"], 
    icon: "seaf-artillery-icon", 
    cooldown: "N/A", 
    uses: "5", 
    activation: "N/A",
    conditions: "Must load SEAF Artillery gun and complete objective" 
  },
  { 
    name: "Super Earth Flag", 
    sequence: ["↓", "↑", "↓", "↑"], 
    icon: "super-earth-flag-icon", 
    cooldown: "N/A", 
    uses: "N/A", 
    activation: "N/A",
    conditions: "Required to Spread Democracy" 
  },
  { 
    name: "Hive Breaker Drill", 
    sequence: ["←", "↑", "↓", "→", "↓", "↓"], 
    icon: "hive-breaker-drill-icon", 
    cooldown: "?", 
    uses: "1 per objective", 
    activation: "?",
    conditions: "Required to Nuke Terminid Nurseries" 
  },
   // Emplacements and Sentries
   { 
    name: "E/MG-101 HMG Emplacement", 
    sequence: ["↓", "↑", "←", "→", "→", "←"], 
    icon: "hmg-emplacement-icon", 
    cooldown: "180 seconds (3m)", 
    uses: "Unlimited", 
    activation: "4.75 seconds" 
  },
  { 
    name: "E/AT-12 Anti-Tank Emplacement", 
    sequence: ["←", "←", "↑", "↑", "→", "←"], 
    icon: "anti-tank-emplacement-icon", 
    cooldown: "180 seconds (3m)", 
    uses: "Unlimited", 
    activation: "4.75 seconds" 
  },
  { 
    name: "FX-12 Shield Generator Relay", 
    sequence: ["↓", "↓", "←", "→", "←", "→"], 
    icon: "shield-generator-relay-icon", 
    cooldown: "90 seconds (1m 30s)", 
    uses: "Unlimited", 
    activation: "4.75 seconds" 
  },
  { 
    name: "A/ARC-3 Tesla Tower", 
    sequence: ["↓", "↑", "→", "↑", "←", "→"], 
    icon: "tesla-tower-icon", 
    cooldown: "150 seconds (2m 30s)", 
    uses: "Unlimited", 
    activation: "4.75 seconds" 
  },
  { 
    name: "MD-6 Anti-Personnel Minefield", 
    sequence: ["↓", "←", "↑", "→"], 
    icon: "anti-personnel-minefield-icon", 
    cooldown: "180 seconds (3m)", 
    uses: "Unlimited", 
    activation: "4.75 seconds" 
  },
  { 
    name: "MD-I4 Incendiary Mines", 
    sequence: ["↓", "←", "←", "↓"], 
    icon: "incendiary-mines-icon", 
    cooldown: "180 seconds (3m)", 
    uses: "Unlimited", 
    activation: "4.75 seconds" 
  },
  { 
    name: "MD-17 Anti-Tank Mines", 
    sequence: ["↓", "←", "↑", "↑"], 
    icon: "anti-tank-mines-icon", 
    cooldown: "180 seconds (3m)", 
    uses: "Unlimited", 
    activation: "4.75 seconds" 
  },
  { 
    name: "A/MG-43 Machine Gun Sentry", 
    sequence: ["↓", "↑", "→", "→", "↑"], 
    icon: "machine-gun-sentry-icon", 
    cooldown: "120 seconds (2m)", 
    uses: "Unlimited", 
    activation: "4.75 seconds" 
  },
  { 
    name: "A/G-16 Gatling Sentry", 
    sequence: ["↓", "↑", "→", "←"], 
    icon: "gatling-sentry-icon", 
    cooldown: "180 seconds (3m)", 
    uses: "Unlimited", 
    activation: "4.75 seconds" 
  },
  { 
    name: "A/M-12 Mortar Sentry", 
    sequence: ["↓", "↑", "→", "→", "↓"], 
    icon: "mortar-sentry-icon", 
    cooldown: "180 seconds (3m)", 
    uses: "Unlimited", 
    activation: "4.75 seconds" 
  },
  { 
    name: "A/AC-8 Autocannon Sentry", 
    sequence: ["↓", "↑", "→", "↑", "←", "↑"], 
    icon: "autocannon-sentry-icon", 
    cooldown: "180 seconds (3m)", 
    uses: "Unlimited", 
    activation: "4.75 seconds" 
  },
  { 
    name: "A/MLS-4X Rocket Sentry", 
    sequence: ["↓", "↑", "→", "→", "←"], 
    icon: "rocket-sentry-icon", 
    cooldown: "180 seconds (3m)", 
    uses: "Unlimited", 
    activation: "4.75 seconds" 
  },
  { 
    name: "A/M-23 EMS Mortar Sentry", 
    sequence: ["↓", "↑", "→", "↓", "→"], 
    icon: "ems-mortar-sentry-icon", 
    cooldown: "180 seconds (3m)", 
    uses: "Unlimited", 
    activation: "4.75 seconds" 
  },
  { 
    name: "E/FLAM-40 Flame Sentry", 
    sequence: ["↓", "↑", "→", "↓", "↑", "↑"], 
    icon: "flame-sentry-icon", 
    cooldown: "150 seconds (2.5m)", 
    uses: "Unlimited", 
    activation: "4.75 seconds" 
  },
  // Orbital Strikes
  { 
    name: "Orbital Gatling Barrage", 
    sequence: ["→", "↓", "←", "↑", "↑"], 
    icon: "orbital-gatling-barrage-icon", 
    cooldown: "70 seconds (1m 10s)", 
    uses: "Unlimited", 
    activation: "2.05 second" 
  },
  { 
    name: "Orbital Airburst Strike", 
    sequence: ["→", "→", "→"], 
    icon: "orbital-airburst-strike-icon", 
    cooldown: "100 seconds (1m 40s)", 
    uses: "Unlimited", 
    activation: "3.45 seconds" 
  },
  { 
    name: "Orbital 120MM HE Barrage", 
    sequence: ["→", "→", "↓", "←", "→", "↓"], 
    icon: "orbital-120mm-he-barrage-icon", 
    cooldown: "180 seconds (3m)", 
    uses: "Unlimited", 
    activation: "6.45 seconds" 
  },
  { 
    name: "Orbital 380MM HE Barrage", 
    sequence: ["→", "↓", "↑", "↑", "←", "↓", "↓"], 
    icon: "orbital-380mm-he-barrage-icon", 
    cooldown: "240 seconds (4m)", 
    uses: "Unlimited", 
    activation: "7.45 seconds" 
  },
  { 
    name: "Orbital Walking Barrage", 
    sequence: ["→", "↓", "→", "↓", "→", "↓"], 
    icon: "orbital-walking-barrage-icon", 
    cooldown: "240 seconds (4m)", 
    uses: "Unlimited", 
    activation: "4.45 seconds" 
  },
  { 
    name: "Orbital Laser", 
    sequence: ["→", "↓", "↑", "→", "↓"], 
    icon: "orbital-laser-icon", 
    cooldown: "300 seconds (5m)", 
    uses: "3", 
    activation: "1 second" 
  },
  { 
    name: "Orbital Railcannon Strike", 
    sequence: ["→", "↑", "↓", "↓", "→"], 
    icon: "orbital-railcannon-strike-icon", 
    cooldown: "210 seconds (3m 30s)", 
    uses: "Unlimited", 
    activation: "0 seconds" 
  },
  { 
    name: "Orbital Precision Strike", 
    sequence: ["→", "→", "↑"], 
    icon: "orbital-precision-strike-icon", 
    cooldown: "100 seconds (1m 40s)", 
    uses: "Unlimited", 
    activation: "3 seconds" 
  },
  { 
    name: "Orbital Gas Strike", 
    sequence: ["→", "→", "↓", "→"], 
    icon: "orbital-gas-strike-icon", 
    cooldown: "75 seconds (1m 15s)", 
    uses: "Unlimited", 
    activation: "3.45 seconds" 
  },
  { 
    name: "Orbital EMS Strike", 
    sequence: ["→", "→", "←", "↓"], 
    icon: "orbital-ems-strike-icon", 
    cooldown: "75 seconds (1m 15s)", 
    uses: "Unlimited", 
    activation: "3.45 seconds" 
  },
  { 
    name: "Orbital Smoke Strike", 
    sequence: ["→", "→", "↓", "↑"], 
    icon: "orbital-smoke-strike-icon", 
    cooldown: "100 seconds (1m 40s)", 
    uses: "Unlimited", 
    activation: "3.45 seconds" 
  },
  { 
    name: "Orbital Napalm Barrage", 
    sequence: ["→", "→", "↓", "←", "→", "↑"], 
    icon: "orbital-napalm-barrage-icon", 
    cooldown: "240 seconds (4m)", 
    uses: "Unlimited", 
    activation: "6.45 seconds" 
  },
  // Eagle Strikes
  { 
    name: "Eagle Strafing Run", 
    sequence: ["↑", "→", "→"], 
    icon: "eagle-strafing-run-icon", 
    cooldown: "8 seconds", 
    uses: "4", 
    activation: "2.4 second" 
  },
  { 
    name: "Eagle Airstrike", 
    sequence: ["↑", "→", "↓", "→"], 
    icon: "eagle-airstrike-icon", 
    cooldown: "8 seconds", 
    uses: "2", 
    activation: "4.1 seconds" 
  },
  { 
    name: "Eagle Cluster Bomb", 
    sequence: ["↑", "→", "↓", "↓", "→"], 
    icon: "eagle-cluster-bomb-icon", 
    cooldown: "8 seconds", 
    uses: "4", 
    activation: "4.35 seconds" 
  },
  { 
    name: "Eagle Napalm Airstrike", 
    sequence: ["↑", "→", "↓", "↑"], 
    icon: "eagle-napalm-airstrike-icon", 
    cooldown: "8 seconds", 
    uses: "2", 
    activation: "4.1 seconds" 
  },
  { 
    name: "Eagle Smoke Strike", 
    sequence: ["↑", "→", "↑", "↓"], 
    icon: "eagle-smoke-strike-icon", 
    cooldown: "8 seconds", 
    uses: "2", 
    activation: "4.4 seconds" 
  },
  { 
    name: "Eagle 110MM Rocket Pods", 
    sequence: ["↑", "→", "↑", "←"], 
    icon: "eagle-110mm-rocket-pods-icon", 
    cooldown: "8 seconds", 
    uses: "2", 
    activation: "3.4 seconds" 
  },
  { 
    name: "Eagle 500kg Bomb", 
    sequence: ["↑", "→", "↓", "↓", "↓"], 
    icon: "eagle-500kg-bomb-icon", 
    cooldown: "8 seconds", 
    uses: "1", 
    activation: "3.45 seconds" 
  }
];