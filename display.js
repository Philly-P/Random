

//switched this into something easier to understand after looking at example code as the other way still wouldn't work
function getSpell() {
  let selector = document.getElementById('select');
  selector.disabled = false;
  let selected = document.getElementById('select').value;
  let spellDes = document.getElementById('description');
  let time = document.getElementById('castTime');
  let spellname = document.getElementById('name');
  let far = document.getElementById('range');
  let spellschool = data.filter(spell => spell.school === selected);
  let rand = Math.floor(Math.random() * spellschool.length);
  spellDes.innerText = spellschool[rand].description;
    if (spellschool[rand].name === null) {
      spellname.innerText = "Magic Missle 1st level spell";
    } else {
      spellname.innerText = spellschool[rand].name;
      time.innerText = spellschool[rand].castTime;
      far.innerText = spellschool[rand].range;
    };
      
    }

    