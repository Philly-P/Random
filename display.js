
function getSpell() {
    let selector = document.getElementById('select');
    selector.disabled = false;
    let selected = document.getElementById('select').value;
    let spellName = document.getElementById('name');
    let Action = document.getElementById('castTime');
    let feet = document.getElementById('range');
    let des = document.getElementById('description');
    let sch = quotesArr.filter(spell => spell.school === selected);
    let rand = Math.floor(Math.random() * school.length);
    quoteText.innerText = sch[rand].text;
      if (sch[rand].spellName === null) {
        spellName.innerText = "Anonymous";
      } else {
        spellName.innerText = sch[rand].spellName;
      };
      if (sch[rand].Action === null) {
        Action.innerText = "Anonymous";
      } else {
        Action.innerText = sch[rand].Action;
      };
      if (sch[rand].feet === null) {
        feet.innerText = "Anonymous";
      } else {
        feet.innerText = sch[rand].feet;
      };
      if (sch[rand].des === null) {
        des.innerText = "Anonymous";
      } else {
        des.innerText = sch[rand].des;
      };
    }

    