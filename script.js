
  function showPage(pageId) {
    document.querySelectorAll('main section').forEach(sec => sec.classList.remove('active'));
    document.getElementById(pageId).classList.add('active');
  }

  function showJournal(type) {
    document.querySelectorAll('.journal-entry').forEach(div => div.style.display = 'none');
    document.querySelectorAll('.journal-tabs button').forEach(btn => btn.classList.remove('active'));
    document.getElementById('journal-' + type).style.display = 'block';
    event.target.classList.add('active');
  }

  function showMoodResponse() {
    const mood = document.getElementById('angerSelect').value;
    const output = document.getElementById('angerOutput');
    const options = document.getElementById('angerOptions');
    let message = '', extra = '';

    switch (anger) {
      case 'Disrespect or insult in class':
        message = "Take deep breaths, You're in control.";
        extra = "<ul><li>Stay calm, don't react immediately. Speak to the person calmly after class. Tell a teacher or authority if it crosses the line.</li></ul>";
        break;
      case 'Due to broken trust by partner':
        message = "Don't feel diheartened, there are many who are waiting for you";
        extra = "<ul><li>Cool down before making decisions. Express your hurt calmly. Ask for genuinity calmly</li></ul>";
        break;
      case 'Due to not being able to achieve goals':
        message = "Sending you comfort. Don't lose hope.";
        extra = "<ul><li>Identify your weakness and strength. Break big goals into smaller steps. Goals may need time or a new path. Celebrate small wins to stay motivated. Consistency beats the frustration.</li></ul>";
        break;
      case 'Due to always cheated by classmate/partner':
        message = "Forget about those who don't really care your feelings";
        extra = "<ul><li>Don't allow repeated chances without change. Express how their actions hurt you. Limit trust with those who misuse it. Walk away from toxic people.</li></ul>";
        break;
      case 'Due to not being able to create/join a group of friends.':
        message = "You're not alone in this ";
        extra = "<ul><li>Build friendship one-by-one firstly. Friendship grow with trust and patience so be open and kind. Don't force it, let connections develop naturally. Listening and showing interest helps.</li></ul>";
        break;

      default:
        message = "";
        extra = "";
    }

    output.innerHTML = `<strong>${message}</strong>`;
    options.innerHTML = extra;
  }
