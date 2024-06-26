
const data = [
    {
    "name": "Magic Missle 1st level spell",
    "castTime": "1 action",
    "range": "120ft",
    "school": "evocation",
    "description":"You create three glowing darts of magical force. Each dart hits a creature of your choice that you can see within range. A dart deals 1d4 + 1 force damage to its target. The darts all strike simultaneously, and you can direct them to hit one creature or several.",
    "path": "https://www.dndbeyond.com/spells/magic-missile",
    
    
    },
    
    {
        "name": "Alarm 1st level spell",
        "castTime": "1 minute",
        "range": "30ft",
        "school": "abjuration",
        "description":"You set an alarm against unwanted intrusion. Choose a door, a window, or an area within range that is no larger than a 20-foot cube. Until the spell ends, an alarm alerts you whenever a Tiny or larger creature touches or enters the warded area. When you cast the spell, you can designate creatures that won't set off the alarm. You also choose whether the alarm is mental or audible.",
        "path": "https://www.dndbeyond.com/spells/alarm",
    },
    
    {
        "name": "Animal friendship 1st level spell",
        "castTime": "1 action",
        "range": "30ft",
        "school": "enchantment",
        "description":"This spell lets you convince a beast that you mean it no harm. Choose a beast that you can see within range. It must see and hear you. If the beast's Intelligence is 4 or higher, the spell fails. Otherwise, the beast must succeed on a Wisdom saving throw or be charmed by you for the spell's duration. If you or one of your companions harms the target, the spell ends.",
        "path": "https://www.dndbeyond.com/spells/animal-friendship",
    },
    
    {
        "name": "Banishment 4th level spell",
        "castTime": "1 action",
        "range": "60ft",
        "school": "abjuration",
        "description":"You attempt to send one creature that you can see within range to another plane of existence. The target must succeed on a Charisma saving throw or be banished.",
        "path": "https://www.dndbeyond.com/spells/banishment",
    },
    {
        "name": "Wish 9th level spell",
        "castTime": "1 action",
        "range": "120ft",
        "school": "conjuration",
        "description":"A storm cloud appears in the shape of a cylinder that is 10 feet tall with a 60-foot radius, centered on a point you can see within range directly above you.",
        "path": "https://www.dndbeyond.com/spells/call-lightning",
    
    },
    {
        "name": "Call Lighting 3th level spell",
        "castTime": "1 action",
        "range": "self",
        "school": "conjuration",
        "description":"Wish is the mightiest spell a mortal creature can cast. By simply speaking aloud, you can alter the very foundations of reality in accord with your desires.",
        "path": "https://www.dndbeyond.com/spells/call-lightning",
    },
    {
        "name": "Aid 2nd level spell",
        "castTime": "1 action",
        "range": "30 ft",
        "school": "Abjuration",
        "description":"Your spell bolsters your allies with toughness and resolve. Choose up to three creatures within range. Each target's hit point maximum and current hit points increase by 5 for the duration.",
        "path": "https://www.dndbeyond.com/spells/aid",
    },
    {
        "name": "Aid 2nd level spell",
        "castTime": "1 action",
        "range": "30 ft",
        "school": "Abjuration",
        "description":"Your spell bolsters your allies with toughness and resolve. Choose up to three creatures within range. Each target's hit point maximum and current hit points increase by 5 for the duration.",
        "path": "https://www.dndbeyond.com/spells/aid",
    },
    {
        "name": "Banishment 4th level spell",
        "castTime": "1 action",
        "range": "60 ft",
        "school": "Abjuration",
        "description":"You attempt to send one creature that you can see within range to another plane of existence.",
        "path": "https://www.dndbeyond.com/spells/banishment",
    },
    {
        "name": "Chain Lightning 6th level spell",
        "castTime": "1 action",
        "range": "60 ft",
        "school": "Evocation",
        "description":"You create a bolt of lightning that arcs toward a target of your choice that you can see within range. ",
        "path": "https://www.dndbeyond.com/spells/chain-lightning",
    },
    {
        "name": "Acid Arrow 2nd level spell",
        "castTime": "1 action",
        "range": "90 ft",
        "school": "Evocation",
        "description":"A shimmering green arrow streaks toward a target within range and bursts in a spray of acid. ",
        "path": "https://www.dndbeyond.com/spells/acid-arrow",
    },
    {
        "name": "Arcanists Magic Aura 2nd level spell",
        "castTime": "1 action",
        "range": "touch",
        "school": "Illusion",
        "description":"You place an illusion on a creature or an object you touch so that divination spells reveal false information about it. ",
        "path": "https://www.dndbeyond.com/spells/arcanists-magic-aura",
    },
    {
        "name": "Animate Objects 5th level spell",
        "castTime": "1 action",
        "range": "120 ft",
        "school": "Transmutation",
        "description":"Objects come to life at your command. Choose up to ten nonmagical objects within range that are not being worn or carried.",
        "path": "https://www.dndbeyond.com/spells/animate-objects",
    },
    {
        "name": "Bestow Curse 3rd level spell",
        "castTime": "1 action",
        "range": "touch",
        "school": "Necromancy",
        "description":"You touch a creature, and that creature must succeed on a Wisdom saving throw or become cursed for the duration of the spell.",
        "path": "https://www.dndbeyond.com/spells/bestow-curse",
    },
    {
        "name": "Arcane eye 4th level spell",
        "castTime": "1 action",
        "range": "30 ft",
        "school": "Divination",
        "description":"You create an invisible, magical eye within range that hovers in the air for the duration.",
        "path": "https://www.dndbeyond.com/spells/arcane-eye",
    },
    {
        "name": "Animate Dead 3rd level spell",
        "castTime": "1 minute",
        "range": "10 ft",
        "school": "Necromancy",
        "description":"This spell creates an undead servant.",
        "path": "https://www.dndbeyond.com/spells/animate-dead",
    },
    {
        "name": "Detect Magic 1st level spell",
        "castTime": "1 action",
        "range": "(Self) 30 ft",
        "school": "Divination",
        "description":"For the duration, you sense the presence of magic within 30 feet of you.",
        "path": "https://www.dndbeyond.com/spells/detect-magic",
    },
    {
        "name": "Detect Magic 1st level spell",
        "castTime": "1 action",
        "range": "(Self) 30 ft",
        "school": "Divination",
        "description":"For the duration, you sense the presence of magic within 30 feet of you.",
        "path": "https://www.dndbeyond.com/spells/detect-magic",
    },
    
    ]