function shout(string) {
  const capitalizedString = string.toUpperCase();
  return capitalizedString;
}

function whisper(string) {
  return string.toLowerCase();
}

function logShout(string) {
  console.log(shout(string));
  return;
}

function logWhisper(string) {
  console.log(whisper(string));
  return;
}

function sayHiToHeadphonedRoommate(string) {
  if (string === string.toLowerCase()) {
    return "I can't hear you!";
  }
  if (string === string.toUpperCase()) {
    return "YES INDEED!";
  }
  if (string === "Let's have dinner together!") {
    return "I would love to!";
  }
}
